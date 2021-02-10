import "../../App.css";
import React from "react";
import PTable from "../PTable";
import Footer from "../Footer";
import "../../App.css";

function Services() {
  return (
    <div>
      <div
        className="services"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginBottom: 20 }}>SERVICES</h1>
        <p>
          Here you can choose the service you like at a certain price. the more
          expensive the service, the more benefits it brings to your workouts{" "}
        </p>
        <PTable />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Services;
