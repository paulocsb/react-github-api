var React = require('react');
var SearchUser = require('./SearchUser');
var UserProfile = require('./UserProfile');

var GitHub = React.createClass({
	getInitialState: function() {
		return {
			user: null,
			repos: []
		};
	},
	updateUser: function(user) {
		this.setState({user: user});
	},
	updateRepos: function(repos) {
		this.setState({repos: repos});
	},
	render: function() {
		return (
			<div className="container">
				<h1>Sample ReactJS App using Github API</h1>
				<SearchUser updateUser={this.updateUser} updateRepos={this.updateRepos} />
				<hr />
				<UserProfile user={this.state.user} repos={this.state.repos} />
			</div>
		);
	}
});

module.exports = GitHub;