import css from "./Contact.module.css"

export default function Contact({ data, onDelete }) {
    return (
        <div className={css.item}>
            <div>
                <p>{data.name}</p>
                <p>{data.number}</p>
            </div>
            <button className={css.button} onClick={() => onDelete(data.id)}>Delete</button>
        </div>
    )
}