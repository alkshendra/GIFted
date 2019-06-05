import React from 'react';
import { Link } from 'react-router-dom';

// Import components
import Loader from 'components/Loader';
import ProgressiveImage from 'react-progressive-image';

// Import styles
import styles from './style.module.scss';

function RecentSearches(props) {
	const { img, term } = props;
	return (
		<ProgressiveImage src={img}>
			{(src, loading) => (
				<Link
					className={styles.searchItem}
					to={`/search/${term}`}
				>
					{loading && 
						<Loader />
					}
					<img alt={term} src={img} />
					<p>{term}</p>
				</Link>
			)}
		</ProgressiveImage>
	);
}

export default RecentSearches;