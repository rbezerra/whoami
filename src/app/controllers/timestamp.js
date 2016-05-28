'use strict';

import express from "express";
import moment from "moment";

const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index', {title: "Timestamp Microservice"});
});

router.get('/:date', (req, res, next) => {

	
	var date = moment(new Date(isNaN(req.params.date) ? req.params.date : new Number(req.params.date)*1000));
	

	res.status(200).send({
		unix: date.isValid() ? date.format("X") : null,
		natural: date.isValid() ? date.format("MMMM DD, YYYY") : null
	});
});

module.exports = router;