module.exports = {


	/**
		main content array, which contains an array for each stripes
	*/
	slides: [

		/**
			stripe (array with pages)
		*/
		[
			// relativ path to pageFolder
			"page1-markdown",
			"page2-markdown",
			"page5-tags",
		],
		[
			"page3-jade",
			"page3-jade"
		],
		[
			"page4-table",
			"page4-table"
		]

	],


	/**
		Meta informations
	*/
	meta: {
		title: "Test",
		description: "Test Presentation",
		author: "Example"
	},



	/**
		Key used to identify the presenter
	*/
	key: "test",



}
