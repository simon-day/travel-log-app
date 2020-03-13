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
      required: true,
      min: -89.99999,
      max: 89.99999
    },
    longitude: {
      type: Number,
      required: true,
      min: -179.99999,
      max: 179.99999
    },
    visitDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
