var React = require('react');

var UserProfile = React.createClass({
	render: function() {
		return (		
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
		);
	}
});

UserProfile.propTypes = {
  user: React.PropTypes.object
};

module.exports = UserProfile;