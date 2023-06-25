import React from "react";
import CardItem from "../CardItem";
import styles from "./index.module.css";
function CardList({ renderItem }) {
  return (
    <div>
      <div className={styles.main_card_container}>
        {renderItem.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
