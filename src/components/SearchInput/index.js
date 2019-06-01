import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

// Import styles
import styles from './style.module.scss';

class SearchInput extends Component {
	state = {
		searchPhrase: ''
	};

	handleInputChange = e => {
		this.setState({ searchPhrase: e.currentTarget.value });
	}

	handleSearch = () => {
		const { searchPhrase } = this.state;
		if (searchPhrase !== '') {
			this.props.history.push(`/search/${searchPhrase}`);
		}
	}

	render() {
		return (
			<div className={`${styles.searchInputContainer} ${
				!!this.props.currentSearchTerm ? styles.minifiedView : ''
			}`}>
				<p className={styles.title}>GIFted</p>
				<div className={styles.searchInputWrap}>
					<input
						onChange={this.handleInputChange}
						className={styles.searchInput}
						type="text"
					/>
					<button
						onClick={this.handleSearch}
						className={styles.searchAct}
						type="button"
					>
						<span>Search</span>
					</button>
				</div>
			</div>
		);
	}
}

export default withRouter(SearchInput);