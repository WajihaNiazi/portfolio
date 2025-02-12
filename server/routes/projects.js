const express = require ('express');
const router = express.Router ();
const Project = require ('../models/Project');

// Get all projects
router.get ('/', async (req, res) => {
  try {
    const projects = await Project.find ();
    res.json (projects);
  } catch (err) {
    res.status (500).send ('Server Error');
  }
});

// Add a project
router.post ('/', async (req, res) => {
  const {title, description, techStack, liveLink, repoLink} = req.body;
  try {
    const newProject = new Project ({
      title,
      description,
      techStack,
      liveLink,
      repoLink,
    });
    const project = await newProject.save ();
    res.json (project);
  } catch (err) {
    res.status (500).send ('Server Error');
  }
});

module.exports = router;
