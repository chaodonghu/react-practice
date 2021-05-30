import React from "react";
import "./styles.css";

const WalletBalance = ({}) => {
  return (
    <div className="block">
      <div className="block-title">Wallet Balance</div>
      <div className="block-headers block-transparent-headers">
        <span>Assets</span>
        <span>Amount</span>
      </div>
      <div className="amounts">
        <div className="block-headers">
          <span>USD</span>
          <span className="amount">0.00</span>
        </div>
        <div className="block-headers">
          <span>BTC</span>
          <span className="amount">0.00000000</span>
        </div>
      </div>
      <div className="block-buttons">
        <button className="action-button">DEPOSIT</button>
        <button className="action-button">WITHDRAW</button>
      </div>
    </div>
  );
};

export default WalletBalance;
