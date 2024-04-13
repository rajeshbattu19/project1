import React, { Component } from 'react'
import './Pr.css';
export class Pr extends Component {
  render() {
    return (
        <>
        <div>
        <section id="product1" class="section-p1">
<h2>Our Products</h2>
<p>Nature’s Pickings, Handpicked for You!</p>
<div class="pro-container">
    <div class="pro">
        <img src="/img-s/products/Tomatos.png" alt="pr-1"/>
        <div class="des">
            <h5>Tomato</h5>
            <p>45.00 Rs</p>
        </div>
    </div>

    <div class="pro">
        <img src="/img-s/products/Brinjal.png" alt="pr-2"/>
        <div class="des">
            <h5>Brinjal</h5>
            <p>40.00 Rs</p>
        </div>
    </div>

    <div class="pro">
        <img src="/img-s/products/Lf.png" alt="pr-3"/>
        <div class="des">
            <h5>Ladies Finger</h5>
            <p>49.00 Rs</p>
        </div>
    </div>


    <div class="pro">
        <img src="/img-s/products/Cap.png" alt="pr-4"/>
        <div class="des">
            <h5>Capsicum</h5>
            <p>39.00 Rs</p>

        </div>
    </div>


    <div class="pro">
        <img src="/img-s/products/Cf.png" alt="pr-5"/>
        <div class="des">
            <h5>C F</h5>
            <p>40.00 Rs</p>
        </div>
    </div>

    <div class="pro">
        <img src="/img-s/products/Potato.png" alt="pr-6"/>
        <div class="des">
            <h5>Potato</h5>
            <p>40.00 Rs</p>
        </div>
    </div>
</div>

</section>
        </div>
        </>
    )
  }
}


export default Pr;
