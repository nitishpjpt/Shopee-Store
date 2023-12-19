import React from "react";
import { MdOutlinePayment } from "react-icons/md";

const Payment = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <a
        href="https://buy.stripe.com/test_14k6st8Mv6Rl76g288"
        style={{
          backgroundColor: "#E94560",
          color: "white",
          padding: "4px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Payment <MdOutlinePayment />
      </a>
    </div>
  );
};

export default Payment;
