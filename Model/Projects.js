const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
  id: Number,
  heading: String,
  head1: String,
  head2: String,
  type: String,
  content: String,
  src: String,
  contentLeft: [String],
  contentRight: [String],
});

const projectSchema = new mongoose.Schema({
  id: Number,
  mainPage: {
    projectName: String,
    projectDescription: String,
    src: String,
  },
  elements: [elementSchema],
});

const Projects = mongoose.model('Project', projectSchema);
module.exports = Projects;