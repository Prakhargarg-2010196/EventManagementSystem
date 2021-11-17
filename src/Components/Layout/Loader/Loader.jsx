import styles from  "./Loader.module.css"
export const Loader = (props) => {
	return (
        
		<section className={styles.loading}>
			<h1 >{props.message}</h1>
			<div className={styles.loadingAnim}></div>
		</section>
	);
};
