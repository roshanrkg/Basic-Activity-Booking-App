const Booking = require('../models/Booking');
const Activity = require('../models/Activity');
const { validationResult } = require('express-validator');


exports.bookActivity = async (req, res) => {    //Book an activity
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { activityId } = req.body;

    
    const activity = await Activity.findById(activityId);  // checking if activity exists
    if (!activity) {
      return res.status(404).json({
        success: false,
        message: 'Activity not found'
      });
    }

    
    const existingBooking = await Booking.findOne({   // Check if user already has a booking for this
      user: req.user.id,
      activity: activityId
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: 'You have already booked this activity'
      });
    }

   
    const booking = await Booking.create({     // Create booking
      activity: activityId,
      user: req.user.id
    });

    res.status(201).json({
      success: true,
      message: 'Activity booked successfully',
      data: booking
    });
  } catch (error) {
    console.error(error);
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Activity not found'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};


exports.getMyBookings = async (req, res) => {     //to get user's bookings
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate({
        path: 'activity',
        select: 'title description location dateTime'
      })
      .sort({ bookingDate: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};