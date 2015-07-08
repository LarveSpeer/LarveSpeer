var config = {


	/**
		Presentation settings
	*/
	//presentationPath: "presentation1/",
	presentation : {
		/**
			path to the presentation folder
		*/
		path: "demo_presentation/",


	},


	/**
		Revaljs init object (object will be passed through the client)
			Full list of configuration options available at:
			https://github.com/hakimel/reveal.js#configuration
	*/
	// revealjsMod: {
	// 	controls: true,
	// 	progress: true,
	// 	history: true,
	// 	center: true,
	//
	// 	revealClass: ".revealPresentation",
	//
	// 	//parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
	// 	//parallaxBackgroundSize: "2100px 900px",
	//
	// 	transition: 'slide', // none/fade/slide/convex/concave/zoom
	//
	// 	// Optional reveal.js plugins
	// 	dependencies: []
	// },

	revealjsMod: { // revealjs
		controls: false,
		progress: true,
		history: true,
		center: true,
		userInteraction: false,

		revealClass: ".revealPresentation",

		//parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
		//parallaxBackgroundSize: "2100px 900px",

		transition: 'slide', // none/fade/slide/convex/concave/zoom

		// Optional reveal.js plugins
		dependencies: []
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
		address		: 	"0.0.0.0"
	},

}


var presentationConfig = require("./"+config.presentation.path+"/config.js")
for (var key in presentationConfig){
	config.presentation[key] = presentationConfig[key]
}

module.exports = config
