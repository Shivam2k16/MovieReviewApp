const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Info
let Info = new Schema({
  poster_path: {
    type: String
  },
  title: {
    type: String
  },
  release_date: {
    type: String
  },
  vote_average: {
    type: Number
  },
  vote_count: {
    type: Number
  }
},{
    collection: 'info'
});

module.exports = mongoose.model('Info', Info);