import React from 'react'
const wsConnectionString = 'ws://127.0.0.1:8082'
onst host = {
	websocket: Object(),
	idConfig: [],
	codes: [],
	op6: [],
	connectionAttempts: 0,
	desiredConnectionAttemps: 1000,
	application: 0, // default application

	init: function(callback) {

		this.testWebSocket(callback)
	},
