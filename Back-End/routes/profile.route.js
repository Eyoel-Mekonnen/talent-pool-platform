const express = require("express");
const router = express.Router();
const { getProfiles, getProfile, createProfile, updateProfile, deleteProfile } = require('../controllers/profile.controller.js');

// get all profiles
router.get('/', getProfiles);

// get a specific profile
router.get("/:id", getProfile);

router.post("/", createProfile);

// update a profile
router.put("/:id", updateProfile);

// delete a profile
router.delete("/:id", deleteProfile);


module.exports = router;