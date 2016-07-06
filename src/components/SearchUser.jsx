import React from 'react';
import GitHubUserService from './../services/GitHubUserService.jsx';

class SearchUser extends React.Component {
	
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		GitHubUserService.getProfileByUsername(this.refs.username.value).then((response) => {
			this.props.updateUser(response.data);
		});

		GitHubUserService.getReposByUsername(this.refs.username.value).then((response) => {
			this.props.updateRepos(response.data);
		});
	}

	render() {
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

};

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired,
};

export default SearchUser;