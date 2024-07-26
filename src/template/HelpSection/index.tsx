import clsx from 'clsx';
import { Col, Row } from 'react-bootstrap';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.scss';

interface IProps {
    content: ILinkArray;
    largerBlockPosition: 'left' | 'right';
}

export default function HelpSection({ content, largerBlockPosition }: IProps) {
    const renderColumns = (columns: ILink[][]) => (
        columns.map((column, colIndex) => (
            <Col key={colIndex} xs={12} md={4} md={4} lg={4}>
                {column.map((link, linkIndex) => (
                    <p key={linkIndex}><a className={styles.link} href={link.href}>{link.text}</a></p>
                ))}
            </Col>
        ))
    );

    const renderSection = (section: IColumn, sectionIndex: number) => (
        <div key={sectionIndex} className={styles.linkBlocks}>
            <h2 className={styles.title}>{section.title}</h2>
            <Row>{renderColumns(section.columns)}</Row>
        </div>
    );

    const renderContent = (content: IColumn | IColumn[]) => {
        if (Array.isArray(content)) {
            return content.map((section, index) => renderSection(section, index));
        } else {
            return renderSection(content, 0);
        }
    };

    const renderSmallBlock = (content: IColumn) => (
        <div className={clsx(styles.highlightBlock, {
            [styles.purple]: largerBlockPosition === 'left',
            [styles.blue]: largerBlockPosition !== 'left',
        })}>
            {largerBlockPosition === 'left' ? <img className={styles.imageBg} src={useBaseUrl('/img/circle.png')} /> : null}

            <h2 className={styles.title}>{content.title}</h2>

            {content.columns.map((column, colIndex) => (
                column.map((link, linkIndex) => (
                    <p key={`${colIndex}-${linkIndex}`}><a className={styles.link} href={link.href}>{link.text}</a></p>
                ))
            ))}
        </div>
    );

    return (
        <section className={styles.section}>
            <div className="container">
                <Row>
                    {largerBlockPosition === 'left' ? (
                        <>
                            <Col xs={12} md={9}>
                                {renderContent(content.left)}
                            </Col>
                            <Col xs={12} md={3}>
                                {renderSmallBlock(Array.isArray(content.right) ? content.right[0] : content.right)}
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col xs={12} md={4}>
                                {renderSmallBlock(Array.isArray(content.left) ? content.left[0] : content.left)}
                            </Col>
                            <Col xs={12} md={8} >
                                {renderContent(content.right)}
                            </Col>
                        </>
                    )}
                </Row>
            </div>
        </section>
    )
}
