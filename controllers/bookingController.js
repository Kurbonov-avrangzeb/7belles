const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tour = require("../models/tourModel");
const Booking = require("../models/bookingModel");
const catchAsync = require("../utils/catchAsync");
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get currently booked tour
  try {
    const tour = await Tour.findById(req.params.tourId);
    // 2) Create chegckout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${req.params.tourId}&user=${req.user._id}&price=${tour.price}`,
      cancel_url: `${req.protocol}://${req.get('host')}/tours/${tour.id}`,
      customer_email: req.user.email,
      client_reference_id: req.params.tourId,
      line_items: [
        {
          price_data:{
           
            // TODO:FIX IMAGE
            product_data:{
              name: `${tour.name} Tour`,
              images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
            },
            currency: 'usd',
            unit_amount: Math.round(tour.price * 100), 
          },
          description: tour.summary,
          quantity: 1
        }
        
      ]
    })
  
    // 3) Create session as response
    res.status(200).json({
      status: 'success',
      session
    })
  } catch (error) {
    console.log(error)
  }

})

exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  const { tour, user, price } = req.query;
  if (!tour && !user && !price) return next();
  await Booking.create({ tour, user, price });

  res.redirect(req.originalUrl.split('?')[0]);
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);