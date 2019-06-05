import React from 'react';
import { Link } from 'react-router-dom';

// Import styles
import styles from './style.module.scss';

function RecentSearches(props) {
	const { img, term } = props;
	return (
		<Link
			className={styles.searchItem}
			to={`/search/${term}`}
		>
			<img alt={term} src={img} />
			<p>{term}</p>
		</Link>
	);
}

export default RecentSearches;