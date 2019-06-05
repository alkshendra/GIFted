import React from 'react'

// import styles
import styles from './style.module.scss';

const Loader = () => (
	<ul className={styles.loader}>
		<li className={styles[`item-1`]}></li>
		<li className={styles[`item-2`]}></li>
		<li className={styles[`item-3`]}></li>
		<li className={styles[`item-4`]}></li>
		<li className={styles[`item-5`]}></li>
	</ul>
);

export default Loader;