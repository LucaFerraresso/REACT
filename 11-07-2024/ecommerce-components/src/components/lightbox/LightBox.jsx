import styles from "./LightBox.module.css";
import classNames from "classnames";
import CoverProduct from "../cover-product/CoverProduct";
import Thumbnail from "../thumbnail/Thumbnail";
import { useState } from "react";

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

const LightBox = (props) => {
  const initialiValue = DATA[0];
  const [selectedProduct, setSelectedProduct] = useState(initialiValue);
  const handleClick = (e) => {
    const thumbnail = e.currentTarget.id;
    const item = DATA.find((item) => item.id === thumbnail);
    //console.log(thumbnail);
    setSelectedProduct(item);
  };
  return (
    <div className={classNames(styles.lightBox)}>
      <CoverProduct imgUrl={selectedProduct.product} />
      <ul className={classNames(styles.thumbnailList)}>
        {DATA.map((item) => {
          return (
            <li key={item.id} id={item.id} onClick={handleClick}>
              <Thumbnail thumbnail={item.thumbnail} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LightBox;
