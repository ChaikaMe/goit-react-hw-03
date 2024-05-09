import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList({ Contacts, onDelete }) {
    return (
        <ul className={css.list}>
            {Contacts.map((ContactItem) =>
                <li key={ContactItem.id}>
                    <Contact data={ContactItem} onDelete={onDelete} />
                </li>
            )}
        </ul>
    );
}