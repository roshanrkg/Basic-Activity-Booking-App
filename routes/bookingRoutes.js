const express = require('express');
const { check } = require('express-validator');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.use(protect);
router.post(
  '/',
  [
    check('activityId', 'Activity ID is required').not().isEmpty(),
    check('activityId', 'Activity ID must be a valid MongoDB ObjectId').isMongoId()
  ],
  bookActivity
);
router.get('/me', getMyBookings);

module.exports = router;