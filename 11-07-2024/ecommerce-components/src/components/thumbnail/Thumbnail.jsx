import styles from "./Thumbnail.module.css";
import classNames from "classnames";

const DATA = [
  {
    id: self.crypto.randomUUID(),
    product: "/public/images/image-product-1.jpg",
    thumbnail: "/public/images/image-product-1-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "/public/images/image-product-2.jpg",
    thumbnail: "/public/images/image-product-2-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "/public/images/image-product-3.jpg",
    thumbnail: "/public/images/image-product-3-thumbnail.jpg",
  },
  {
    id: self.crypto.randomUUID(),
    product: "/public/images/image-product-4.jpg",
    thumbnail: "/public/images/image-product-4-thumbnail.jpg",
  },
];

const Thumbnail = ({ isSelected = false, thumbnail = "" }) => {
  return (
    <div className={classNames(styles.wrapper)}>
      {DATA.map((item) => {
        return (
          <div
            className={classNames(
              styles.thumbnail,
              isSelected && styles.selected
            )}
            key={item.id}
          >
            <img src={item.thumbnail} key={item.id} />
          </div>
        );
      })}
      <div className={classNames(isSelected && styles.over)}></div>
    </div>
  );
};

export default Thumbnail;
