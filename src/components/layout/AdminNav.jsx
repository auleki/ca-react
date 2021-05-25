import React from 'react'
import { Link } from 'react-router-dom'
const AdminNav = () => {
    
    return (
      <>
        <div className="navigation">
				<ul className="navbar_section">
					<li>
						<Link to="/admin/clothing">
							<span className="icon">
								<i className="ri-shopping-bag-2-fill" />
							</span>
							<span className="target">Shopping</span>
						</Link>
					</li>
					<li>
						<Link to="/admin/orders">
							<span className="icon">
								<i className="ri-bubble-chart-fill" />
							</span>
							<span className="target">Dashboard</span>
						</Link>
					</li>
					<li>
						<Link to="/admin/quiz">
							<span className="icon">
								<i className="ri-stack-fill" />
							</span>
							<span className="target">Products</span>
						</Link>
					</li>
					<li>
						<Link to="/admin/history">
							<span className="icon">
								<i className="ri-shopping-cart-fill" />
							</span>
							<span className="target">Orders</span>
						</Link>
					</li>
					<li>
						<Link to="/subscribers">
							<span className="icon">
								<i className="ri-bookmark-3-fill" />
							</span>
							<span className="target">Wishlist</span>
						</Link>
					</li>
					<li>
						<Link to="/settings">
							<span className="icon">
								<i className="ri-settings-3-fill" />
							</span>
							<span className="target">Store Profile</span>
						</Link>
					</li>
					<li>
						<Link to="/login">
							<span className="icon">
								<i className="ri-settings-3-fill" />
							</span>
							<span className="target">Login</span>
						</Link>
					</li>
					<li>
						<Link to="/register">
							<span className="icon">
								<i className="ri-settings-3-fill" />
							</span>
							<span className="target">Register</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="toggle" />  
      </>
  )
}

export default AdminNav