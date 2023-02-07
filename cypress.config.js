const { defineConfig } = require("cypress");

module.exports = defineConfig({
	reporter: "cypress-mochawesome-reporter",
	e2e: {
		setupNodeEvents(on, config) {
			require("cypress-mochawesome-reporter/plugin")(on);
		},
	},

	env: {
		baseUrl: "https://staging.playplay.com/app/login?lang=fr",
		username: "nightwatch.playplay@gmail.com",
		password: "hctawthgin",
		// "apiKey": "1234abc"
	},
});
