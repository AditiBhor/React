import React from 'react';
import './style.css';


const Navbar =()=>{
    return(
        <div>
            
		    <nav>
                <a href="#" class="logo"><span><i class='bx bxs-florist'></i></span>LILLY</a>
			    <div class="nav-links">
				    <ul>
						<li>Home</li>
						<li>Flowers</li>
						<li>Catalogue</li>
						<li>Store</li>
						<li>Contanct</li>
				    </ul>
			    </div>
			    <div class="symbol">
				    <a href="#"><i class='bx bx-search'></i></a>
			        <a href="#"><i class='bx bx-user'></i></a>
				    <a href="#"><i class='bx bx-calendar-alt'></i></a>
			    </div>
            
            </nav>
        </div>
    );
}
export default Navbar;