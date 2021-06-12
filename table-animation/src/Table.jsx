import React, { useState } from "react";
import "./styles.css";

const Table = ({}) => {
  const [clickedState, setClickedState] = useState(false);
  const handleClicked = () => {
    console.log("handleClicked");
    setClickedState(!clickedState);
  };

  console.log("clickedState", clickedState);

  return (
    <>
      <table className="table">
        <colgroup>
          <col style={{ width: "32px" }} />
        </colgroup>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Chart</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bitcoin</td>
            <td>CA $43,135.98</td>
            <td>+2.06%</td>
            <td>+2.06%</td>
            <td>
              <button
                className={clickedState ? "buy-button clicked" : "buy-button"}
                onClick={handleClicked}
              >
                Buy
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ethereum</td>
            <td>CA $2,892.22</td>
            <td>+4.71%</td>
            <td>+2.06%</td>
            <td>
              <button className="buy-button">Buy</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bitcoin Cash</td>
            <td>CA $799.04</td>
            <td>+1.96%</td>
            <td>+2.06%</td>
            <td>
              <button className="buy-button">Buy</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Litecoin</td>
            <td>CA $206.20</td>
            <td>+4.55%</td>
            <td>+2.06%</td>
            <td>
              <button className="buy-button">Buy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
