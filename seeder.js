const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Activity = require('./models/Activity');
//This seeder is generated using AI

dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Sample activity data
const activities = [
  {
    title: 'Cricket ',                      
    description: 'Come join us on Sundays',
    location: 'Central Park, New Delhi',
    dateTime: new Date('2023-06-15T14:00:00.000Z')
  },
  {
    title: 'Football',                      
    description: 'Register your team now!',
    location: 'Sports Club, Gurgaon',
    dateTime: new Date('2023-06-20T10:00:00.000Z')
  },
  {
    title: 'Movie ',
    description: 'Outdoor movie screening of Avengers: Endgame. Bring your own snacks and blankets!',
    location: 'Community Center, Noida',
    dateTime: new Date('2023-06-18T18:30:00.000Z')
  },
  {
    title: 'Yoga ',
    description: 'Yoga sessions by yogesh',
    location: 'Lodi Gardens, New Delhi',
    dateTime: new Date('2023-06-17T07:00:00.000Z')
  },
  {
    title: 'Zumba',
    description: 'Zumba classes by bumba',
    location: 'Tech Hub, Bangalore',
    dateTime: new Date('2023-06-25T16:00:00.000Z')
  }
];

// Import data into DB
const importData = async () => {
  try {
    await Activity.deleteMany(); // Clear existing data
    await Activity.insertMany(activities);
    
    console.log('Data imported successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Delete all data from DB
const deleteData = async () => {
  try {
    await Activity.deleteMany();
    
    console.log('Data destroyed successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Process command line arguments
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else {
  console.log('Please use correct flag: -i (import) or -d (delete)');
  process.exit();
}