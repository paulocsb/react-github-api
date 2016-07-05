var Axios = require('axios');

var GitHubUserService = {
	getProfileByUsername: function(username) {
		return Axios.get('https://api.github.com/users/' + username);
	},
	getReposByUsername: function(username) {
		return Axios.get('https://api.github.com/users/' + username + '/repos');
	}
};

module.exports = GitHubUserService;