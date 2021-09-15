import React from 'react';
import '../Navbar/style.css';
const Main =()=>{
    return(
        <div>
            <section class="header">
            <div class="text-box">
			    <h2>Special Gifts For <br></br>Someone <span>Special</span></h2>
			    <p>The Best Gift Collection Is Here....!!!</p>
			    <div class="star">
			        <i class='bx bxs-star'></i>
			        <i class='bx bxs-star'></i>
			        <i class='bx bxs-star'></i>
			        <i class='bx bxs-star'></i>
			        <i class='bx bxs-star'></i>
                    <span> <i class='bx bxs-circle'></i><span> 534 Reviews</span></span>
			    </div>
            </div>
            <div class="text-box-1">
			    <span class="n-1">$</span><span class="n-2">12</span><span class="n-3">.99</span>
			    <span class="fresh"> Fresh Lilly</span>
			    <button class="button-1">Add to cart<i class='bx bxs-cart'></i></button>
		    </div>
            </section>
        </div>
    );
}
export default Main;