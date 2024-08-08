import s from "./SearchBox.module.css";

const SearchBox = ({ onFilter, filter }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <input
          type="text"
          name="text"
          value={filter}
          onChange={(e) => onFilter(e.target.value)}
          className={s.input}
        />
        Find contacts by name
      </label>
    </div>
  );
};

export default SearchBox;
