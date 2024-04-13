import React, { Component } from 'react'
import './Page1.css';
export class Page1 extends Component {
  render() {
    return (
        <main className="food container">
    <div class="food-info">
        <h1>From Farm to Fork,
          Freshness Unleashed!</h1>
        <p>Green Goodness, Delivered to Your Doorstep.Eat Fresh, Live Fresh: Your Daily Dose of Green Goodness</p>
        <div class="food-btn">
            <button>Shop Now</button>
            <button>Catogery</button>
        </div>
    </div>
    <div class="food-img">
        <img src="/img-s/food-image.png" alt="f-1"/>
    </div>
</main>
    )
  }
}
export default Page1;
