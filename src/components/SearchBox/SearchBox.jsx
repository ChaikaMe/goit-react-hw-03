import css from "./SearchBox.module.css"

export default function SearchBox({ value, onChange }) {
    return (
        <label className={css.label}>
            Find contacts by name
            <input type="text"
                className={css.input}
                value={value}
                onChange={(event)=> onChange(event.target.value)} />
        </label>
    );
}