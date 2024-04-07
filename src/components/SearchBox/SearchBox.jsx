import { useSelector, useDispatch } from "react-redux";
import { setNewFilter, selectTextFilter } from "../../redux/filters/slice.js";

import css from "./search-box.module.css";

const SearchBox = () => {
  const filter = useSelector(selectTextFilter);
  const dispatch = useDispatch();

  //запис значення інпуту фільтра в STORE
  const changeFilter = ({ target }) => dispatch(setNewFilter(target.value));

  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>Find contacts by name</label>
      <input
        className={css.filterInput}
        onChange={changeFilter}
        value={filter}
        name="filter"
      />
    </div>
  );
};

export default SearchBox;
