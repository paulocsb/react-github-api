import React from 'react';

class UserRepos extends React.Component {
	
  constructor(props) {
    super(props);

    this.state = {
      reposCount: 0
    }
  }

  componentWillReceiveProps(props) {
    this.setState({reposCount: props.repos.length});
  }

	render() {

    const {repos} = this.props;

		let reposList = repos.map(function(repo, key) {
			return (
        <div key={key} className="thumbnail">
          <div className="caption">
            <h3>{repo.name}&nbsp;
              <span className="badge"><i className="glyphicon glyphicon-star"></i> {repo.stargazers_count}</span>
            </h3>
            <p>{repo.description}</p>
            <p>
              <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>&nbsp;
              <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({repo.open_issues}) </a>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2>{this.state.reposCount} Repositories</h2>
        {reposList}
      </div>
    );
	}

};

UserRepos.propTypes = {
  repos: React.PropTypes.array
};

export default UserRepos;