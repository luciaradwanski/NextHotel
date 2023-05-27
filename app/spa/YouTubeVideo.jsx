import styles from '../../styles/spa/Spa.module.css'

const YouTubeVideo = ({ videoId }) => {
    return (
        <div className={styles.ContainerVideo}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5bncJkgZH3I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
};

export default YouTubeVideo;