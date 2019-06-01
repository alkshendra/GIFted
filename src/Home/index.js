import React, { Component } from 'react';

import SearchInput from 'components/SearchInput';
import SearchResults from 'components/SearchResults';

export default class Home extends Component {
	state = {
		currentSearchTerm: '',
		posts: ''
	};

	componentDidMount() {
		this.performSearchIfRequired();
	}

	componentDidUpdate(prevProps) {
		this.performSearchIfRequired();
	}

	resolveSearchTerm = () => {
		const pathArr = this.props.history.location.pathname.split('/search/');
		return pathArr[1];
	}
	
	performSearchIfRequired = () => {
		const searchTerm = this.resolveSearchTerm();
		const { currentSearchTerm } = this.state;
		if (searchTerm !== '' && searchTerm !== currentSearchTerm) {
			this.setState(
				{ currentSearchTerm: searchTerm },
				() => { this.performSearch() }
			);
		}
	}
	
	performSearch = () => {
		const apiKey = 'CNx4bXKANBY5BInHTm8VjWpiDN10pTIg';
		const { currentSearchTerm } = this.state;

		const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${currentSearchTerm}&limit=25&offset=0&rating=G&lang=en`;

		fetch(url)
		.then(response => response.json())
		.then(json => this.setState({ posts: json.data }));
	};

	render() {
		const { currentSearchTerm, posts } = this.state;
		return (
			<div>
				<SearchInput
					currentSearchTerm={currentSearchTerm}
				/>
				<SearchResults
					posts={posts}
				/>
			</div>
		)
	}
}