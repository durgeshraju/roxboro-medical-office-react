import styles from "./Hero.module.css";
const Hero = () => {
    return (
        <section className={styles.hero}>
            <picture className={styles.hero__media}>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
                    alt="Front view of Roxboro Medical Office building"
                    className={styles.hero__img}
                    loading="eager"
                    decoding="async"
                    width="1062"
                    height="371"
                />
            </picture>
        </section>
    )
}

export default Hero;
