import Heading from '@theme/Heading';

import styles from './styles.module.scss';

export default function StartedNow() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Heading as="h2" className={styles.title}>
                        Get Started Now
                    </Heading>

                    <div className={styles.description}>
                        We have you covered on anything from customer surveys, employee surveys, to market research. Get started and create your first survey for free.
                    </div>

                    <a className={styles.button} href='#'>Create a Survey</a>
                </div>
            </div>
        </section>
    )
}