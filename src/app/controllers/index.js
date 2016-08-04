'use strict';
// this controller is meant to set up routes from all other controllers
// it also sets up basic express routes

import express from 'express';

// load models

// create router
const router = express.Router();
// load other controllers
router.use('/', require('./whoami.js'));

module.exports = router;
