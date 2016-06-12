"use strict";

// Fallback defaults are essentially for OrientDB docker container defaults
const configuration = {
	host: process.env.ORIENTDB_HOST || "192.168.99.100",
	port: process.env.ORIENTDB_PORT || 2424,
	httpPort: process.env.ORIENTDB_HTTP_PORT || 2480,
	username: process.env.ORIENTDB_USERNAME || "root",
	password: process.env.ORITENTDB_PASSWORD || "root"
};

const orientJs = require("orientjs");
const orientDb = orientJs(configuration);

// Assumes you have a database with this name created.
const db = orientDb.use("orient-test");

db.class.list()
	.then(results => {
		console.log("Existing Classes:", results);
		return results;
	})
	.done();
