import React, { Component } from 'react';
import localforage from 'localforage/dist/localforage';
// Import components
import RecentSearchItem from './RecentSearchItem';

// Import styles
import styles from './style.module.scss';

export default class RecentSearches extends Component {
	state = {
		recentSearchesData: [],
	};

	componentDidMount() {
		this.loadRecentSearches();
	}

	loadRecentSearches = () => {
		localforage.getItem('GIFted_recentSearches').then(recentSearchesData => {
			if (recentSearchesData) {
				this.setState({ recentSearchesData });
			}
		}).catch(err => { console.log(err); });
	}

	render() {
		const { recentSearchesData } = this.state;

		return (
			<div className={styles.recentSearches}>
				{
					recentSearchesData.length > 0 &&
					<p className={styles.recentSearchLabel}>Recent Searches</p>
				}
				<div className={styles.recentSearchesWrap}>
					{recentSearchesData.map(item =>
							<RecentSearchItem
								key={item.searchTerm}
								img={item.searchImg}
								term={item.searchTerm}
							/>
					)}
				</div>
			</div>
		);
	}
}
