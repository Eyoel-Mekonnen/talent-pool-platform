const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	profile: {
		full_name: {
			type: String,
			required: true
		},
		bio: {
			type: String
		},
		experience: [{
			type: String
		}],
		projects: [{
			type: String
		}],
		education: [{
			type: String
		}],
		specialization: [{
			type: String
		}],
		skills: [{
			type: String
		}],
		linkedIn: {
			type: String
		},
		github: {
			type: String
		},
		resume_link: {
			type: String
		}
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
}
);


const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;