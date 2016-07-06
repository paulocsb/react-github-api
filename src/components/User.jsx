import React from 'react';
import UserProfile from './UserProfile.jsx';
import UserRepos from './UserRepos.jsx';

class User extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		const {user, repos} = this.props;

		let userInfo = user ?
    (
			<div className="row">
				<div className="col-md-4">
					<UserProfile user={user} />
				</div>
				<div className="col-md-8">
					<UserRepos repos={repos} />
				</div>
			</div>
		) : null;

		return userInfo;
	}

};

User.propTypes = {
  user: React.PropTypes.object,
  repos: React.PropTypes.array,
};

export default User;