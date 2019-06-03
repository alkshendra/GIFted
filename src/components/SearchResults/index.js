import React from 'react';
import Masonry from 'react-masonry-css'


// Import styles
import styles from './style.module.scss';

// Import components
import Post from './Post.js';

function SearchResults(props) {
	const { currentSearchTerm, posts, clearSearch } = props;
	return (
		<div className={styles.searchResults}>
			<p className={styles.resultsMessage}>
				<span>Showing results for</span>
				<button className={styles.clearSearch} onClick={clearSearch}>
					{currentSearchTerm}
					<svg viewBox="0 0 30 30">
						<path d="M 7.9785156 5.9804688 A 2.0002 2.0002 0 0 0 6.5859375 9.4140625 L 12.171875 15 L 6.5859375 20.585938 A 2.0002 2.0002 0 1 0 9.4140625 23.414062 L 15 17.828125 L 20.585938 23.414062 A 2.0002 2.0002 0 1 0 23.414062 20.585938 L 17.828125 15 L 23.414062 9.4140625 A 2.0002 2.0002 0 0 0 21.960938 5.9804688 A 2.0002 2.0002 0 0 0 20.585938 6.5859375 L 15 12.171875 L 9.4140625 6.5859375 A 2.0002 2.0002 0 0 0 7.9785156 5.9804688 z" />
					</svg>
				</button>
			</p>
			{posts && posts.length > 0
				? (
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
						{posts.map(post => (
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
				) : ('loading')
			}
		</div>
	)
}

export default SearchResults;