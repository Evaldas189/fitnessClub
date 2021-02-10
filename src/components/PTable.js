import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";
import "./PTable.css";

function PTable() {
  return (
    <div>
      <PricingTable highlightColor="#1976D2">
        <PricingSlot buttonText="TRY IT FREE" title="FREE" priceText="$0/month">
          <PricingDetail>
            {" "}
            <b>0</b> water
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>No</b> pool
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>no</b> spa
          </PricingDetail>
          <PricingDetail strikethrough>
            {" "}
            <b>Any time</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          highlighted
          buttonText="SIGN UP"
          title="BASIC"
          priceText="$24/month"
        >
          <PricingDetail>
            {" "}
            <b>1</b> water
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b></b>pool
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>no</b> SPA
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Any time</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          highlighted
          buttonText="SIGN UP"
          title="PROFESSIONAL"
          priceText="$99/month"
        >
          <PricingDetail>
            {" "}
            <b>2</b> water
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b></b>pool
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b></b>SPA
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Any time</b>
          </PricingDetail>
        </PricingSlot>
        <PricingSlot
          highlighted
          buttonText="SIGN UP"
          title="ENTERPRISE"
          priceText="$200/month"
        >
          <PricingDetail>
            {" "}
            <b>Any</b> water
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b></b>pool
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b></b>SPA
          </PricingDetail>
          <PricingDetail>
            {" "}
            <b>Any time</b>
          </PricingDetail>
        </PricingSlot>
      </PricingTable>
    </div>
  );
}

export default PTable;
