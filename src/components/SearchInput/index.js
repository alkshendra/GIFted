import React, { Component } from 'react'

// Import styles
import styles from './style.module.scss';

class SearchInput extends Component {
	render() {
		return (
			<div className={styles.searchInputContainer}>
				<p className={styles.title}>GIFted</p>
				<div className={styles.searchInputWrap}>
					<input
						className={styles.searchInput}
						type="text"
					/>
					<button
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

export default SearchInput;