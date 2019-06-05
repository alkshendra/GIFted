import React, { Component } from 'react';
import axios from 'axios';
import localforage from 'localforage/dist/localforage';

// Import config
import config from 'config';

// Import components
import SearchInput from 'components/SearchInput';
import SearchResults from 'components/SearchResults';

// Import styles
import styles from './style.module.scss';

// Import utils
import { getSearchUrl, getTimeDiffInSeconds } from 'utils';

export default class Home extends Component {
	state = {
		searchTerm: '',
		posts: {},
		resultsLoading: false
	}

	componentDidMount() {
		this.performSearchIfRequired();
		window.addEventListener('scroll', this.loadPostsIfPageBottomIsReached);
	}

	componentWillReceiveProps() {
		this.performSearchIfRequired();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.loadPostsIfPageBottomIsReached);
	}

	getSearchTermFromLocation = () => {
		if (this.props.history.location.pathname.includes('/search/')) {
			const pathArr = this.props.history.location.pathname.split('/search/');
			return pathArr[1];
		}
	}

	performSearchIfRequired = () => {
		const searchTermInPath = this.getSearchTermFromLocation();
		const { searchTerm } = this.state;
		
		const shouldPerformSearch =
			searchTermInPath &&
			searchTermInPath !== searchTerm;
		
		if (shouldPerformSearch) {
			this.setState({ searchTerm: searchTermInPath }, this.performSearch);
		}
	}
	
	performSearch = (currPageCount = 0) => {
		const nextPageNum = currPageCount + 1;
		const { searchTerm } = this.state;

		localforage.getItem(`GIFted_${searchTerm}`).then(searchData => {
			const dataInCache = searchData && searchData[nextPageNum];
			const shouldInvalidateCache =
				dataInCache &&
				currPageCount === 0 &&
				getTimeDiffInSeconds(searchData.initialTimestamp, Date.now()) > config.cacheVaildityDuration;
			const shouldRequestFreshPosts = !dataInCache || shouldInvalidateCache;
			
			if (shouldRequestFreshPosts) {
				return this.requestFreshPosts(currPageCount, nextPageNum, shouldInvalidateCache);
			}

			const posts = { ...this.state.posts, [nextPageNum]: searchData[nextPageNum] };
			this.setState({ posts });
		}).catch(err => {
			console.log('localforage ran into the following error:', err);
		});
	};

	requestFreshPosts = (currPageCount, nextPageNum, invalidateCache = false) => {
		const { searchTerm } = this.state;
		const searchURL = getSearchUrl(searchTerm, currPageCount);

		this.setState({ resultsLoading: true });
		axios.get(searchURL).then(response => {
			const posts = {
				...(invalidateCache ? {} : this.state.posts),
				[nextPageNum]: response.data.data
			};

			if (currPageCount === 0) {
				posts.initialTimestamp = Date.now();
			}

			localforage.setItem(`GIFted_${searchTerm}`, posts).then(() => {
				this.setState({
					posts,
					resultsLoading: false
				});
			});
			this.setRecentSearchTerm(searchTerm, posts);
		});
	}

	setRecentSearchTerm = (searchTerm, posts) => {
		const searchImg = posts[1].length > 0 && posts[1][0].images.fixed_height.url;
		if (searchImg) {
			localforage.getItem('GIFted_recentSearches').then(recentSearchesData => {
				if (!recentSearchesData) {
					recentSearchesData = [];
				}

				const isSearchTermAlreadyRecent =
					recentSearchesData.length !== 0 &&
					recentSearchesData.some(datum => datum.searchTerm === searchTerm);

				if (!isSearchTermAlreadyRecent) {
					recentSearchesData.unshift({ searchTerm, searchImg });
				}
				
				if (recentSearchesData.length > 6) { // config.maxRecentSearches) {
					recentSearchesData.pop();
				}

				localforage.setItem('GIFted_recentSearches', recentSearchesData);
			});
		}
	}

	loadPostsIfPageBottomIsReached = () => {
		const { posts } = this.state;
		const currentPageCount = Object.keys(posts).length;
		const windowHeight = window.innerHeight + document.documentElement.scrollTop;
		const documentBottom = document.documentElement.offsetHeight;
		const postsBeingLoaded = document.querySelectorAll('data-loading').length > 0;

		if (
			(windowHeight > documentBottom - 200) &&
			!this.state.resultsLoading &&
			!postsBeingLoaded
		) {
			this.performSearch(currentPageCount);
		}
	}

	clearSearch = () => this.props.history.push('/');

	render() {
		const { searchTerm, posts, resultsLoading } = this.state;
		return (
			<div>
				<div className={`${styles.searchContainer} ${searchTerm ? styles.minified : ''}`}>
					<SearchInput showMinifiedSearch={!!searchTerm} />
				</div>
				{searchTerm &&
					<SearchResults
						searchTerm={searchTerm}
						clearSearch={this.clearSearch}
						posts={posts}
						resultsLoading={resultsLoading}
					/>
				}
			</div>
		)
	}
}