export default function Navbar() {
    return(
        <div>
            			<nav className="main-menu">
							<ul>
								<li className="current-list-item"><a href="#">Home</a>
									<ul className="sub-menu">
										<li><a href="index.html">Static Home</a></li>
										<li><a href="index_2.html">Slider Home</a></li>
									</ul>
								</li>
								<li><a href="about.html">About</a></li>
								<li><a href="#">Pages</a>
									<ul className="sub-menu">
										<li><a href="404.html">404 page</a></li>
										<li><a href="about.html">About</a></li>
										<li><a href="cart.html">Cart</a></li>
										<li><a href="checkout.html">Check Out</a></li>
										<li><a href="contact.html">Contact</a></li>
										<li><a href="news.html">News</a></li>
										<li><a href="shop.html">Shop</a></li>
									</ul>
								</li>
								<li><a href="news.html">News</a>
									<ul className="sub-menu">
										<li><a href="news.html">News</a></li>
										<li><a href="single-news.html">Single News</a></li>
									</ul>
								</li>
								<li><a href="contact.html">Contact</a></li>
								<li><a href="shop.html">Shop</a>
									<ul className="sub-menu">
										<li><a href="shop.html">Shop</a></li>
										<li><a href="checkout.html">Check Out</a></li>
										<li><a href="single-product.html">Single Product</a></li>
										<li><a href="cart.html">Cart</a></li>
									</ul>
								</li>
								<li>
									<div className="header-icons">
										<a className="shopping-cart" href="cart.html"><i className="fas fa-shopping-cart"></i></a>
										<a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
									</div>
								</li>
							</ul>
						</nav>
        </div>
    )
}