import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';

// Import styles
import Loader from 'components/Loader';

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
			// stillImgLoadingUrl,
			gifUrl,
			gifLoadingUrl,
		} = this.props;

		const { playing } = this.state;

		const getImgLoader = (playing = false) => (
			playing
			? (
				<div className={styles.gifLoader} data-loading={true}>
					<img data-loading={true} src={stillImgUrl} alt="GIF still" />
					<Loader />
				</div>
			) : <div data-loading={true} className={styles.imgLoading} />
		);

		return (
			<ProgressiveImage
				src={playing ? gifUrl : stillImgUrl}
				placeholder={gifLoadingUrl}
			>
				{(src, loading) => (
					<button
						className={`${styles.post} ${
							loading ? styles.loading : ''
						} ${
							playing ? styles.playing : ''
						}`}
						onClick={this.playGif}
					>
						{loading
							? getImgLoader(playing)
							: <img data-loading={loading} src={src} alt="GIF playing" />
						}
						{playing
							? (
								<svg className={`${styles.gifActIcon} ${styles.pause}`} viewBox="0 0 30 30">
									<use xlinkHref="/icons.svg#pause" />
								</svg>
							) : (
								<svg className={styles.gifActIcon} viewBox="0 0 30 30">
									<use xlinkHref="/icons.svg#play" />
								</svg>
							)
						}
						<p className={styles.title}>{title}</p>
					</button>
				)}
			</ProgressiveImage>
		)
	}
}
