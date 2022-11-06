import React from "react";

const Payment = () => {
  const life = 3150;
  const month = 0;
  return (
    <>
      <div class="cont">
        <div class="pn">
          <h5>Payment Navigation</h5>
          <p>INVOICES</p>
          <p>MY BANK DETAILS</p>
        </div>
        <div class="deets"></div>
        <div class="earnings">
          <p>Lifetime Earning</p>
          <p class="rup">${life}</p>
          <p>This month Earning</p>
          <p class="rup">${month}</p>
        </div>
      </div>
    </>
  );
};

export default Payment;
