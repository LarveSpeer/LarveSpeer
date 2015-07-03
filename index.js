var http = require("http")
var express = require("express")
var config = require('./config.js')
var path = require("path")
var uuid = require("uuid")
var async = require('async')
var less = require("less")

var app = express()
app.locals.config = config

app.set('view engine', 'jade');


app.get("/css/slides.css", function(req, res){
	less.render( app.locals.less, {
		compress: true
	}, function( e, r ){
		res.type("text/css")
		res.send(r.css)
	})
})

app.use(express.static('assets'));

app.get("/", function(req, res){
	res.render("index", res.locals)
})

app.get("/moderator", function(req, res){
	res.render("moderator", res.locals)
})




async.parallel(
	{
		slides: function(callback) {
			app.locals.stripes = []
			app.locals.less = ""
			config.presentation.slides.forEach(function(stripe){
				var plugins = []
				app.locals.stripes.push(plugins)
				stripe.forEach(function(title){
					var slidePath = path.resolve(__dirname, config.presentation.path, title)
					var slideConfig = require(path.resolve(slidePath, "config.js"))
					var slide = require(slideConfig.npmName)(slidePath)

					slide.locals.uuid = "p" + uuid.v4().replace(/[^a-zA-Z0-9]/g, '')
					app.locals.less += " #" + slide.locals.uuid + " { " + slide.less() + " } "
					app.use("/slide/" + slide.locals.uuid, slide)

					plugins.push({
						html: slide.html(),
						htmlModerator: slide.htmlModerator(),
						uuid: slide.locals.uuid
					})
				})
			})
			callback(null, null)
		},
	},
	function(err, results) {
		if (err != null) {
			console.log("err: " + err)
		}


		var server = http.createServer(app)
		var io = require('socket.io')(server);

		io.on('connection', function(socket){
			socket.on('didMove', function(data){
				if (data.presentationKey == config.presentation.key){
					socket.broadcast.emit('didMove', data.indices)
				}
			})
		})




		server.listen(config.network.port, config.network.address)
		server.on('listening', function() {
			console.log('Express server started on at %s:%s', server.address().address, server.address().port)
		})
	}
)
