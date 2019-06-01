import React from 'react';

// Import styles
import styles from './style.module.scss';

// Import components
import Post from './Post.js';

function SearchResults(props) {
	return (
		<div className={styles.postsWrap}>
			{props.posts && props.posts.length
				? (
					<React.Fragment>
						{props.posts.map(post => (
							<Post
								key={post.id}
								title={post.title}
								stillImgUrl={post.images['480w_still'].url}
								gifUrl={post.images.original.url}
							/>
						))}
					</React.Fragment>
				) : ('loading')
			}
		</div>
	)
}

export default SearchResults;