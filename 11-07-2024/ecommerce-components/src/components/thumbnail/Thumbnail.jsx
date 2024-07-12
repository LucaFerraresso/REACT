import styles from "./Thumbnail.module.css";
import classNames from "classnames";

const Thumbnail = ({ isSelected = false, thumbnail = "" }) => {
  return (
    <div
      className={classNames(styles.thumbnail, isSelected && styles.selected)}
    >
      <img src={thumbnail} alt="thumbnail" />

      <div className={classNames(isSelected && styles.over)}></div>
    </div>
  );
};

export default Thumbnail;
