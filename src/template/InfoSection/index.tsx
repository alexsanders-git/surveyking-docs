import Heading from '@theme/Heading';
import { FaLongArrowAltRight } from "react-icons/fa";

import styles from './styles.module.scss';

interface IProps {
    title: string;
    description: string;
    linkName: string;
    linkURL: string;
}


export default function InfoSection({ title, description, linkName, linkURL }: IProps) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Heading as="h2" className={styles.title}>
                        {title}
                    </Heading>

                    <div className={styles.description}>
                        {description}
                    </div>

                    <a className={styles.link} href={linkURL}>{linkName}<FaLongArrowAltRight /></a>
                </div>
            </div>
        </section>
    )
}
