var config = {


	/**
		path to the presentation folder
	*/
	//presentationPath: "presentation1/",
	presentationPath: "presentation_NodeJS/",


	/**
		Revaljs init object (object will be passed through the client)
			Full list of configuration options available at:
			https://github.com/hakimel/reveal.js#configuration
	*/
	revealjs: {
		controls: true,
		progress: true,
		history: true,
		center: true,
		//parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
		//parallaxBackgroundSize: "2100px 900px",
		transition: 'slide', // none/fade/slide/convex/concave/zoom
		// Optional reveal.js plugins
		dependencies: [
			//{ src: 'js/classList.js', condition: function() { return !document.body.classList; } },
			//{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			//{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			//{ src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
			//{ src: 'plugin/zoom-js/zoom.js', async: true },
			//{ src: 'plugin/search/search.js', async: true }
		]
	},


	/**
		Networking settings
		Settings for the HTTP module.
	*/
	network		:	{
		/**
			port
		*/
		port		:	3000,

		/**
			address
			IPv4/ IPv6 address to bin on. (BSP: "::1")
		*/
		address		: 	"127.0.0.1"
	}


}


var presentationConfig = require("./"+config.presentationPath+"/config.js")
config.slides = presentationConfig.slides
config.meta = presentationConfig.meta

module.exports = config
