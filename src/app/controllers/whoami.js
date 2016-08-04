'use strict';

import express from "express";
import uaParser from "user-agent-parser";

const router = express.Router();

router.get('/', (req, res, next) => {
	res.render('index', {title: "WhoAmI Microservice"});
});

router.get('/api/whoami', (req, res, next) => {
	let response = {
		"ipadress": req.ip,
		"language": req.get("accept-language").split(',')[0],
		"software": uaParser(req.get("user-agent")).os
	};

	res.status(200).send(response);
});

module.exports = router;