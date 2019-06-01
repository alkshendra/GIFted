import React from 'react';

function SearchResults(props) {
	return (
		<div>
			{props.posts && props.posts.length
				? (
					<div>
						{props.posts.map(post => post.title)}
					</div>
				) : ('loading')
			}
		</div>
	)
}

export default SearchResults;