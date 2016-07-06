var React = require('react');
var GitHubUserService = require('./../services/GitHubUserService.jsx');

var SearchUser = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

		GitHubUserService.getProfileByUsername(this.refs.username.value).then(function(response) {
			this.props.updateUser(response.data);
		}.bind(this));

		GitHubUserService.getReposByUsername(this.refs.username.value).then(function(response) {
			this.props.updateRepos(response.data);
		}.bind(this));
	},
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<i className="glyphicon glyphicon-search"></i> Find GitHub Profile
				</div>
				<div className="panel-body">
					<form onSubmit={this.handleSubmit}>
						<div className="input-group">
							<input type="text" placeholder="ex: username" ref="username" className="form-control" />
							<span className="input-group-btn">
								<button className="btn btn-default" type="submit">Search</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		);
	}
});


SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};

module.exports = SearchUser;