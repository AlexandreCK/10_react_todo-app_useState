import styles from './ItemCard.module.css';

export const ItemCard = ({ item }) => {
    const getTitleStyle = () => {
        switch (item.status) {
            case 'Done':
                return styles['itemcard__title--done'];
            case 'In Progress':
                return styles['itemcard__title--in-progress'];
            default:
                return styles['itemcard__title--pending'];
        }
    };

    const getStatusStyle = () => {
        switch (item.status) {
            case 'Done':
                return styles['itemcard__status--done'];
            case 'In Progress':
                return styles['itemcard__status--in-progress'];
            default:
                return styles['itemcard__status--pending'];
        }
    };

    return (
        <article className={styles['itemcard']}>
            <h4 className={`${styles['itemcard__title']} ${getTitleStyle()}`}>
                {item.title}
            </h4>
            <p className={styles['itemcard__description']}>
                {item.description}
            </p>
            <span
                className={`${styles['itemcard__status']} ${getStatusStyle()}`}
            >
                {item.status}
            </span>
        </article>
    );
};
