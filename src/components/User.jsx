var React = require('react');
var UserProfile = require('./UserProfile.jsx');
var UserRepos = require('./UserRepos.jsx');

var User = React.createClass({
	render: function() {
		var userInfo = this.props.user ?
    (
			<div className="row">
				<div className="col-md-4">
					<UserProfile user={this.props.user} />
				</div>
				<div className="col-md-8">
					<UserRepos repos={this.props.repos} />
				</div>
			</div>
		) : null;

		return userInfo;
	}
});

User.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array,
};

module.exports = User;