import Heading from '@theme/Heading';

import styles from './styles.module.scss';

export default function HeroSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <Heading as="h1" className={styles.title}>
                    Documentation to create, send, and analyze surveys
                </Heading>

                <div className={styles.description}>
                    Whether you're a rookie survey builder or a seasoned survey veteran, this help section provides the references you need to create the perfect survey.
                </div>
            </div>
        </section>
    )
}
