module.exports = {


	/**
		path to the presentation folder
	*/
	presentationPath: "presentation1/",


	/**
		main content array, which contains an array for each stripes
	*/
	slides: [

		/**
			stripe (array with pages)
		*/
		[
			// relativ path to pageFolder
			"page1",
			"page2",
		],
		[
			"page3",
			"page3",
			"page3"
		]

	],


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
