import Axios from 'axios';

const GitHubUserService = {

	getProfileByUsername: function(username) {
		return Axios.get(`https://api.github.com/users/${username}`);
	},

	getReposByUsername: function(username) {
		return Axios.get(`https://api.github.com/users/${username}/repos`);
	}

};

export default GitHubUserService;