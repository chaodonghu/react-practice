import React, { useState } from "react";
import { sortBy } from "lodash";
import "./styles.css";

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, "title"),
  AUTHOR: (list) => sortBy(list, "author"),
  COMMENT: (list) => sortBy(list, "num_comments").reverse(),
  POINT: (list) => sortBy(list, "points").reverse()
};

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = useState("NONE");

  const handleSort = (sortKey) => {
    setSort(sortKey);
  };

  const sortedList = SORTS[sort](list);

  console.log("sort", sort === "AUTHOR");

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button
          className={sort === "TITLE" ? "active-button" : "button"}
          onClick={() => handleSort("TITLE")}
        >
          Title
        </button>
        <span
          className={sort === "AUTHOR" ? "active-button" : "button"}
          onClick={() => handleSort("AUTHOR")}
        >
          Author
        </span>
        <span
          className={sort === "COMMENT" ? "active-button" : "button"}
          onClick={() => handleSort("COMMENT")}
        >
          Comments
        </span>
        <span
          className={sort === "POINT" ? "active-button" : "button"}
          onClick={() => handleSort("POINT")}
        >
          Points
        </span>
      </div>
      {sortedList.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
};

const Item = ({ item, onRemoveItem }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </div>
);

export default List;
