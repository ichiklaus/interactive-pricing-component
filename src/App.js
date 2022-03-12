import './App.css';
import './Breakouts.css';
import './Variables.css';
import 'normalize.css';
// import bgPattern from './images/bg-pattern.svg';

let HeaderComponent = () => {
  return (
    <header>
      <div className="App-header">
        <h1 className='App-header__title'>
          Simple, traffic-based pricing
        </h1>
        <p className='App-header__description'>
          <span>Sign-up for our 30-day-trial.</span>
          <span>No credit card required.</span>
        </p>
      </div>
    </header>
  );
}

const pricingPrice = 10;
const period = 'month';

/* Currency formatter taken from https://stackoverflow.com/a/16233919*/
let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

let MainComponent = () => {
  return (
    <main>
      <div className='App-pricing App-pricing--shadow'>
        {/* GRID TEMPLATE AREA */}
        <div className='App-pricing__billing'>
          <p id='pageviews'>100K PAGEVIEWS</p>
         
          {/* Slider */}
          <div id='slider' className="App-pricing__slider-container">
            <input type="range" name="pricing-slider" id="pricing-slider" className='pricing-slider-class' minLength='10000' maxLength='1000000' />
          </div>
          {/* Price */}
          <p id='price' className='App-pricing__price'>{`${formatter.format(pricingPrice)} /${period}`}</p>
          {/* Billing type */}
          <div id='billing-period' className="App-pricing__billing-period"> 
            <span>Monthly billing</span>
            <span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </span>
            <span>
              Yearly billing
              <span className='App-pricing__billing-period--discount'>
                <small>25% discount</small>
              </span>
            </span>
          </div>
        </div>
        <div className='App-pricing-action'>
          <div className='App-pricing-action__text'>
            <span>Unlimited websites</span>
            <span>100% data ownership</span>
            <span>Email reports</span>
          </div>
          {StartTrialCta}
        </div>
      </div>
    </main>
  );
}

let StartTrialCta = (
  <div className='App-button'>
    <button className='App-button__submit App-button__submit--dsb' type="submit">Start my trial</button>
  </div>
)

function App() {
  return (
    <div className="App">
      {HeaderComponent()}
      {MainComponent()}
    </div>
  );
}

export default App;
