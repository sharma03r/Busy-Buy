import styles from "./Search.module.css";

function Search() {
  return (
    <form action="" className={styles.searchForm}>
      <input
        type="text"
        placeholder="Search By Name"
        className={styles.searchInput}
      />
    </form>
  );
}

export default Search;
