import React from 'react';
import SearchUser from './SearchUser.jsx';
import User from './User.jsx';

class GitHub extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			user: null,
			repos: []
		};

		this.updateUser = this.updateUser.bind(this);
		this.updateRepos = this.updateRepos.bind(this);
	}

	updateUser(user) {
		this.setState({user: user});
	}

	updateRepos(repos) {
		this.setState({repos: repos});
	}

	render() {
		return (
			<div className="container">
				<h1>Sample ReactJS App using Github API</h1>
				<SearchUser updateUser={this.updateUser} updateRepos={this.updateRepos} />
				<hr />
				<User user={this.state.user} repos={this.state.repos} />
			</div>
		);
	}

};

export default GitHub;