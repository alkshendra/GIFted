import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

// Import styles
import styles from './style.module.scss';

class SearchInput extends Component {
	state = {
		searchPhrase: ''
	};

	handleInputChange = e => {
		this.setState({ searchPhrase: e.currentTarget.value });
	}

	handleSearch = e => {
		e.preventDefault();
		const { searchPhrase } = this.state;
		if (searchPhrase !== '') {
			this.props.history.push(`/search/${searchPhrase}`);
		}
	}

	render() {
		const { showMinifiedSearch } = this.props;
		return (
			<div className={`${styles.searchInputWrap} ${
				showMinifiedSearch ? styles.minifiedView : ''
			}`}>
				<p className={styles.title}>
					<Link to="/">
						GIFted
					</Link>
				</p>
				<form
					className={styles.searchInput}
					onSubmit={this.handleSearch}
				>
					<input
						onChange={this.handleInputChange}
						type="text"
					/>
					<button
						className={styles.searchAct}
						type="submit"
					>
						<svg viewBox="0 0 30 30">
							<use xlinkHref="/icons.svg#search" />
						</svg>
						<span className={styles.btnLabel}>Search</span>
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(SearchInput);