"use strict";

const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo"); 
const Fakerator = require("fakerator")();

/**
 * users service
 */
module.exports = {

	name: "users",
	mixins: [DbService],
	adapter: new MongoDBAdapter("mongodb://users-db"),
	collection: "users",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service metadata
	 */
	metadata: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		/**
		* Seed database with 100 users
		*/
		seed(ctx) {
			Fakerator.seed(12345);
			return new Promise(resolve => {
				let promises = [];
				for(let i = 0; i < 100; i++) {
					// create a user 
					let createUser = ctx.call("users.create", {
						username: Fakerator.internet.userName(),
						name: Fakerator.names.name(),
						zip: Fakerator.random.number(1000,9999)
					});
					promises.push(createUser);
				}
				Promise.all(promises).then(() => {
					resolve({
						message: "100 users seeded"
					});
				});
			});
		},

		/**
		 * Perform a textual search with 'find' method
		 */
		search(ctx) {
			return ctx.call("users.find", {
				search: "anne",
				searchFields: ["name"]
			});
		},

		/**
		 * Perform a textual search with 'list' method
		 */
		searchAndSort(ctx) {
			return ctx.call("users.list", {
				search: "anne",
				searchFields: ["name"],
				sort: "-zip"
			});
		}

	},

	/**
	 * Events
	 */
	events: {
	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};
