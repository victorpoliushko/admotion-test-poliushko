import React from "react";
import "./token-list.css";

const TokenList = (props) => {
  const { data } = props;
  console.log(props);

  const items = data.map((item) => {
    console.log(item);
    return (
      <li className="list-group-item">
        
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default TokenList;
