import React from 'react';
import Masonry from 'react-masonry-css'


// Import styles
import styles from './style.module.scss';

// Import components
import Post from './Post.js';

function SearchResults(props) {
	const { searchTerm, posts, resultsLoading, clearSearch } = props;

	// Reduce op. to flatten arrays of postsInAPage into a single array...
	const postsArr = Object.values(posts).reduce(
		(arr, postsInAPage) => postsInAPage.length > 0 ? arr.concat(postsInAPage) : arr,
		[],
	);
	return (
		<div className={styles.searchResults}>
			{postsArr.length > 0
				? (
					<React.Fragment>
						<p className={styles.resultsMessage}>
							<span>Serving fresh brewed results for</span>
							<button className={styles.clearSearch} onClick={clearSearch}>
								{searchTerm}
								<svg viewBox="0 0 30 30">
									<use xlinkHref="/icons.svg#close" />
								</svg>
							</button>
						</p>
						<Masonry
							breakpointCols={{
								default: 4,
								1100: 3,
								700: 2,
								500: 1
							}}
							className={styles.postsWrap}
							columnClassName="my-masonry-grid_column"
						>
							{postsArr.map((post, i) => (
								<Post
									key={post.id}
									title={post.title}
									stillImgUrl={post.images['480w_still'].url}
									stillImgLoadingUrl={post.images.fixed_height_small_still.url}
									gifUrl={post.images.original.url}
									gifLoadingUrl={post.images.fixed_height_small.url}
								/>
							))}
						</Masonry>
					</React.Fragment>
				) : (
					resultsLoading
					? <div className={styles.resultsLoading} />
					: (
						<div className={styles.noResultsFound}>
							<svg viewBox="0 0 30 30">
								<use xlinkHref="/icons.svg#ghost" />
							</svg>
							<p>No results found</p>
						</div>
					)
				)
			}
		</div>
	)
}

export default SearchResults;