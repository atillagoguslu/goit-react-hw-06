import styles from "./SearchBox.module.css";

function SearchBox({ search, onSearchChange }) {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
