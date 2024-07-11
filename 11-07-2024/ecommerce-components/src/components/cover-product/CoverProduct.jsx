import styles from "./CoverProduct.module.css";
import classNames from "classnames";

const CoverProduct = ({ imgUrl }) => {
  return (
    <div className={classNames(styles.cover)}>
      <img src={imgUrl} alt="cover" />
    </div>
  );
};

export default CoverProduct;
