import React from 'react';

class UserProfile extends React.Component {
	
	constructor(props) {
		super(props);
	}	

	render() {

		const {user} = this.props;

		return (		
			<div className="panel panel-default">
				<div className="panel-body">
					<div className="text-center">
						<img className="img-circle" src={user.avatar_url} alt="avatar" width="140" height="140" />
					</div>
					<div className="text-center">
						<h2>{user.login}</h2>
						<p>{user.name}</p>
						<p>Followers: {user.followers} | Following: {user.following}</p>
          	<p><a className="btn btn-default" href={user.html_url} role="button">View details</a></p>
        	</div>
        </div>
      </div>
		);
	}

};

UserProfile.propTypes = {
  user: React.PropTypes.object
};

export default UserProfile;