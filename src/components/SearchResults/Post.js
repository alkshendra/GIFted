import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';

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
			stillImgLoadingUrl,
			gifUrl,
			gifLoadingUrl,
		} = this.props;

		const { playing } = this.state;
		return (
			<button
				className={`${styles.post} ${playing ? styles.playing : ''}`}
				onClick={this.playGif}
			>
				{playing
					? (
						<ProgressiveImage
							src={gifUrl}
							placeholder={gifLoadingUrl}
						>
							{src => <img src={src} alt="" />}
						</ProgressiveImage>
					) : (
						<ProgressiveImage
							src={stillImgUrl}
							placeholder={stillImgLoadingUrl}
						>
							{src => <img src={src} alt="" />}
						</ProgressiveImage>
					)
				}
				{playing
					? (
						<svg className={`${styles.gifActIcon} ${styles.pause}`} viewBox="0 0 48 48">
							<path style={{fill: '#8BC34A'}} d="M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z" />
							<rect style={{fill: '#FFFFFF'}} x="26" y="18" width="4" height="12" />
							<rect style={{fill: '#FFFFFF'}} x="18" y="18" width="4" height="12" />
						</svg>
					) : (
						<svg className={styles.gifActIcon} viewBox="0 0 48 48">
							<path style={{fill: '#8BC34A'}} d="M 38 42 L 10 42 C 7.789063 42 6 40.210938 6 38 L 6 10 C 6 7.789063 7.789063 6 10 6 L 38 6 C 40.210938 6 42 7.789063 42 10 L 42 38 C 42 40.210938 40.210938 42 38 42 " />
							<path style={{fill: '#FFFFFF'}} d="M 31 24 L 20 16 L 20 32 Z " />
						</svg>
					)
				}
				<p className={styles.title}>{title}</p>
			</button>
		)
	}
}
