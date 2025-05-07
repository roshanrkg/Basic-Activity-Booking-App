const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = require('./config/db');
connectDB();

const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
app.use(express.json());
app.use(cors());

                                                                //routers
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

                                                                  // Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Activity Booking API',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login'
      },
      activities: {
        getAll: 'GET /api/activities',
        getOne: 'GET /api/activities/:id',
        // create: 'POST /api/activities'
      },
      bookings: {
        book: 'POST /api/bookings',
        getMyBookings: 'GET /api/bookings/me'
      }
    }
  });
});


app.use((req, res) => {  // error 
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`port-  ${PORT}`);
});