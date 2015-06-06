var http = require("http")
var express = require("express")
var config = require('./config.js')
var path = require("path")
var uuid = require("uuid")
var async = require('async')
var less = require("less")

var app = express()

app.set('view engine', 'jade');

app.use(express.static('assets'));


app.get("/stylesheets/slides.css", function(req, res){
	less.render( app.locals.less, function( e, r ){
		res.type("text/css")
		res.send(r.css)
	})
})


app.get("/", function(req, res){
	res.locals.stripes = app.locals.stripes
	res.render("layout", res.locals)
})




async.parallel(
	{
		users: function(callback) {
			app.locals.stripes = []
			app.locals.less = ""
			config.slides.forEach(function(stripe){
				var plugins = []
				app.locals.stripes.push(plugins)
				stripe.forEach(function(title){
					var slidePath = path.resolve(__dirname, config.presentationPath, title)
					var slideConfig = require(path.resolve(slidePath, "config.js"))
					var slide = require(slideConfig.npmName)(slidePath)

					slide.locals.uuid = "p" + uuid.v4().replace(/[^a-zA-Z0-9]/g, '')
					app.locals.less += " #" + slide.locals.uuid + " { " + slide.less() + " } "
					app.use("/slide/" + slide.locals.uuid, slide)

					plugins.push({
						html: slide.html(),
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

		//app.locals.user = results.users.items[0]

		var server = http.createServer(app)
		server.listen(config.network.port, config.network.address)
		server.on('listening', function() {
			console.log('Express server started on at %s:%s', server.address().address, server.address().port)
		})
	}
)
