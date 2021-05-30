import React from "react";
import "./styles.css";
import WalletBalance from "./WalletBalance";

const Sidebar = ({}) => {
  return (
    <>
      <WalletBalance />
      <div className="block">
        <div className="block-title">Wallet Balance</div>
        <div className="select-buttons">
          <button className="action-green-button">DEPOSIT</button>
          <button className="action-green-button">WITHDRAW</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
