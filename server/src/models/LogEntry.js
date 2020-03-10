var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var logEntrySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    rating: {
      type: Number,
      min: [0, 'Enter number between 1 and 10'],
      max: [10, 'Enter number between 1 and 10'],
      default: 0
    },
    image: String,
    comments: String,
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

// * Start Date - DateTime
// * End Date - DateTime

// * Created At - DateTime
// * Updated At - DateTime
