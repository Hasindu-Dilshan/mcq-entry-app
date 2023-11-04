import { React, useState } from "react";

function Rows({ numberOfRows }) {
  return [...Array(numberOfRows)].map((element, index) => (
    <div key={index}>{`Row Number ${index}`}<input /></div>
  ));
}

function Table() {
  const [numberOfRows, setNumberOfRows] = useState(0);

  const addRow = () => {
    setNumberOfRows((prev) => prev + 1);
  };

  const deleteRow = () => {
    if (numberOfRows > 0) {
      setNumberOfRows((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="headings">
        <p>Item Description</p>
        <p>Quantity</p>
        <p>Rate</p>
        <p>Amount</p>
      </div>
      <Rows numberOfRows={numberOfRows} />
      <button className="add" onClick={addRow}>
        Add row
      </button>
      <button className="delete" onClick={deleteRow}>
        Delete row
      </button>
    </div>
  );
}

export default Table;
