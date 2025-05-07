const express = require('express');
const { check } = require('express-validator');
const { getActivities, getActivity } = require('../controllers/activityController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', getActivities);

router.get('/:id', getActivity);

module.exports = router;