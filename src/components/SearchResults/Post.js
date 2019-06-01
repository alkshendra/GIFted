import React, { Component } from 'react';

// Import styles
import styles from './style.module.scss';

export default class Post extends Component {
	state = {
		playing: false,
	};

	playGif = () => {
		this.setState({ playing: !this.state.playing });
	}

	render() {
		const {
			title,
			stillImgUrl,
			gifUrl,
		} = this.props;

		const { playing } = this.state;
		return (
			<button
				className={styles.post}
				onClick={this.playGif}
				style={{ backgroundImage: `url(${playing ? gifUrl : stillImgUrl})` }}
			>
				<svg className={styles.playAct} viewBox="0 0 48 48">
					<path style={{fill: '#8BC34A'}} d="M 38 42 L 10 42 C 7.789063 42 6 40.210938 6 38 L 6 10 C 6 7.789063 7.789063 6 10 6 L 38 6 C 40.210938 6 42 7.789063 42 10 L 42 38 C 42 40.210938 40.210938 42 38 42 " />
					<path style={{fill: '#FFFFFF'}} d="M 31 24 L 20 16 L 20 32 Z " />
				</svg>
				<p className={styles.title}>{title}</p>
			</button>
		)
	}
}
