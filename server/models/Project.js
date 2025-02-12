const mongoose = require ('mongoose');

const ProjectSchema = new mongoose.Schema ({
  title: {type: String, required: true},
  description: { type: String, required: true },
  image: { type: String, required: true },
  techStack: {type: [String], required: true},
  liveLink: {type: String},
  repoLink: {type: String},
});

module.exports = mongoose.model ('Project', ProjectSchema);
