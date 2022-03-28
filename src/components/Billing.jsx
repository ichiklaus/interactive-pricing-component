import React, { Component } from "react";
import { currencyFormatter } from "../utils/currencyFormatter";

class Billing extends Component {
  state = {
    pricingPrice: 10,
    period: "month",
    views: `${100}K`,
  };

  //   - 10K pageviews / $8 per month
  // - 50K pageviews / $12 per month
  // - 100K pageviews / $16 per month
  // - 500k pageviews / $24 per month
  // - 1M pageviews / $36 per month
  //   If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

  priceOnChange = (event) => {
    // this.setState({ pricingPrice: event.target.value });
    event.target.value < 1000000
      ? this.setState({ views: `${Math.trunc(event.target.value / 1000)}K` })
      : this.setState({
          views: `${Math.trunc(event.target.value / 1000000)}M`,
        });

    if (event.target.value <= 10000) {
      this.setState({ pricingPrice: 8 });
    } else if (event.target.value > 10000 && event.target.value <= 50000) {
      this.setState({ pricingPrice: 12 });
    } else if (event.target.value > 50000 && event.target.value <= 100000) {
      this.setState({ pricingPrice: 16 });
    } else if (event.target.value > 100000 && event.target.value <= 500000) {
      this.setState({ pricingPrice: 24 });
    } else if (event.target.value > 500000 && event.target.value <= 1000000) {
      this.setState({ pricingPrice: 36 });
    }
  };

  discountHandler = (event) => {
    event.target.checked
      ? this.setState({ pricingPrice: this.state.pricingPrice / 1.25 })
      : this.setState({ pricingPrice: this.state.pricingPrice * 1.25 });
  };

  render() {
    return (
      <div className="App-pricing__billing">
        <p id="pageviews">{this.state.views} PAGEVIEWS</p>

        {/* Slider */}
        <div id="slider" className="App-pricing__slider-container">
          <input
            type="range"
            name="pricing-slider"
            id="pricing-slider"
            className="pricing-slider-class"
            min="10000"
            max="1000000"
            onChange={this.priceOnChange}
          />
        </div>
        {/* Price */}
        <p
          id="price"
          className="App-pricing__price"
        >{`${currencyFormatter.format(this.state.pricingPrice)} /${
          this.state.period
        }`}</p>
        {/* Billing type */}
        <div id="billing-period" className="App-pricing__billing-period">
          <span>Monthly billing</span>
          <span>
            <label className="switch">
              <input type="checkbox" onChange={this.discountHandler} />
              <span className="slider round"></span>
            </label>
          </span>
          <span>
            Yearly billing
            <span className="App-pricing__billing-period--discount">
              <small>25% discount</small>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Billing;
