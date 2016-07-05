var React = require('react');
var UserRepos = require('./UserRepos');

var UserProfile = React.createClass({
	render: function() {
		var userProfile = this.props.user ?
    (
			<div className="row">
				<div className="col-md-4">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="text-center">
								<img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
							</div>
							<div className="text-center">
								<h2>{this.props.user.login}</h2>
								<p>{this.props.user.name}</p>
								<p>Followers: {this.props.user.followers} | Following: {this.props.user.following}</p>
		          	<p><a className="btn btn-default" href={this.props.user.html_url} role="button">View details</a></p>
	          	</div>
	          </div>
          </div>
				</div>
				<div className="col-md-8">
					<UserRepos repos={this.props.repos} />
				</div>
			</div>
		) : null;

		return userProfile;
	}
});

UserProfile.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array,
};

module.exports = UserProfile;