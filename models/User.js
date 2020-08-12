'use strict';

const { Schema, model } = require('mongoose');
const schema = new Schema({
	name: { type: String },
	lastname: { type: String },
});

module.exports = model('User', schema);
