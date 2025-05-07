const Activity = require('../models/Activity');
const { validationResult } = require('express-validator');


exports.getActivities = async (req, res) => {          // get all activities
  try {
    const activities = await Activity.find().sort({ dateTime: 1 });
    
    res.status(200).json({
      success: true,
      count: activities.length,
      data: activities
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};


exports.getActivity = async (req, res) => {   //get specific activity with id of activity
  try {
    const activity = await Activity.findById(req.params.id);
    
    if (!activity) {
      return res.status(404).json({
        success: false,
        message: 'Activity not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: activity
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

