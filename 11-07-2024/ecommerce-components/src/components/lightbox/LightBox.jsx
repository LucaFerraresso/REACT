import styles from "./LightBox.module.css";
import classNames from "classnames";
import CoverProduct from "../cover-product/CoverProduct";
import Thumbnail from "../thumbnail/Thumbnail";

const LightBox = (props) => {
  return (
    <div className={classNames(styles.lightBox)}>
      <CoverProduct imgUrl={"/public/images/image-product-1.jpg"} />
      <Thumbnail thumbnail="/public/images/image-product-1-thumbnail.jpg" />
    </div>
  );
};

export default LightBox;
