import styles from './ItemCard.module.css';

export const ItemCard = ({ item }) => {
    const titleStyles = {
        Done: styles['itemcard__title--done'],
        'In Progress': styles['itemcard__title--in-progress'],
        pending: styles['itemcard__title--pending'],
    };

    const statusStyles = {
        Done: styles['itemcard__status--done'],
        'In Progress': styles['itemcard__status--in-progress'],
        pending: styles['itemcard__status--pending'],
    };

    return (
        <article className={styles.itemcard}>
            <h4
                className={`${styles.itemcard__title} ${titleStyles[item.status] || titleStyles.pending}`}
            >
                {item.title}
            </h4>
            <p className={styles.itemcard__description}>{item.description}</p>
            <span
                className={`${styles.itemcard__status} ${statusStyles[item.status] || statusStyles.pending}`}
            >
                {item.status}
            </span>
        </article>
    );
};
