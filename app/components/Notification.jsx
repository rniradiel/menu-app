export default function Notification(props) {
    const cssClasses = `notification ${props.status}`;

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};