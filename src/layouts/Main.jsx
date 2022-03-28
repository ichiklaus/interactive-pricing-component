import React from "react";
import StartTrialCta from "../components/StartTrial";
import Billing from "../components/Billing";

let MainComponent = () => {
  
  return (
    <main>
      <div className="App-pricing App-pricing--shadow">
        {/* GRID TEMPLATE AREA */}
        <Billing />
        <div className="App-pricing-action">
          <div className="App-pricing-action__text">
            <span>Unlimited websites</span>
            <span>100% data ownership</span>
            <span>Email reports</span>
          </div>
          <StartTrialCta />
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
