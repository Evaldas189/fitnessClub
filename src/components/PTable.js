import React from "react";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";
import "./PTable.css";
import { useHistory } from "react-router-dom";

function PTable() {
  let history = useHistory();

  const pushData = (myText) => {
    history.push({
      pathname: "/info",
      customNameData: myText,
    });
  };

  return (
    <div>
      <PricingTable highlightColor="#1976D2">
        <PricingSlot
          buttonText="TRY IT FREE"
          title="FREE"
          priceText="$0/month"
          onClick={() =>
            pushData(
              "With this service you can't get any water, you cant visit our pool or SPA. The only benefit is that you can come to our fitness club at any time you want and it costs nothing."
            )
          }
        >
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
          onClick={() =>
            pushData(
              "With this service you can get one bottle of water, you can visit our pool but not SPA. You can also visit our fitness gym at any time you want and it costs only $24/month."
            )
          }
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
          onClick={() =>
            pushData(
              "With this service you can get two bottles of water, you can visit our pool and SPA. You can also visit our fitness gym at any time you want and it costs only $99/month."
            )
          }
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
          onClick={() =>
            pushData(
              "With this service you can get unlimited bottles of water, you can visit our pool and SPA. You can also visit our fitness gym at any time you want and it costs only $200/month."
            )
          }
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
