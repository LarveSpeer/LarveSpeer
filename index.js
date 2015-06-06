var http = require("http")
var express = require("express")
var config = require('./config.js')
var path = require("path")

var app = express()

app.set('view engine', 'jade');

app.use(express.static('assets'));


app.get("/", function(req, res){
	var stripes = []
	config.slides.forEach(function(stripe){
		var plugins = []
		stripes.push(plugins)
		stripe.forEach(function(title){
			var slidePath = path.resolve(__dirname, config.presentationPath, title)
			var slideConfig = require(path.resolve(slidePath, "config.js"))
			var slide = require(slideConfig.npmName)(slidePath)

			//var item = config.slides.items[id]
			// var text = fs.readFileSync(__dirname + "/" + item.file, 'utf8');

			plugins.push(slide.html())
		})
	})

	res.locals.stripes = stripes
	res.render("layout", res.locals)
})



var server = http.createServer(app)
server.listen(config.network.port, config.network.address)
server.on('listening', function() {
	console.log('Express server started on at %s:%s', server.address().address, server.address().port)
})
