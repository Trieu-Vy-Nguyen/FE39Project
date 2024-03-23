import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { NavLink ,Link } from 'react-router-dom';
import { ROUTERS } from '../constants/Routers';


import Cart from './Cart';


export default function Header() {
	const carts = useSelector((state) => state.cart.carts);

	const [isShowCart, setShowCart] = useState(false);
	const toggleShowCart = () => setShowCart(!isShowCart);

	return (
		<>
			<div className=" sticky top-0 z-10 bg-black">
				<div className="container flex flex-col mx-auto py-5 ">
					<div className='flex flex-row justify-between w-full'>
						<div className='flex flex-1 ' />
						<div className='flex flex-1 items-center justify-center'>
							<NavLink
								to={ROUTERS.HOME}
								className={({ isActive }) =>
									`${isActive && 'font-bold'} `
								}
							>
								<img src='./images/Logo1.png'className='h-[50px]' />
							</NavLink>

						</div>
						<div className=" flex-1 flex flex-row items-center justify-end ">
							<a href="#" className="text-white text-sm px-4 hover:text-blue-600">Account</a>
							<a href="#" className="text-white text-sm px-4 hover:text-blue-600">Search</a>
							<button className="text-white text-sm px-4 hover:text-blue-600" onClick={toggleShowCart}>
								Cart ({carts.length})
							</button>
						</div>
					</div>
					<div className="mt-4 text-center">
						<a href="#" className="text-white text-lg p-12 hover:text-blue-600 ">ALL</a>
						<a href="#" className="text-white text-lg p-12 hover:text-blue-600 ">APPAREL</a>
						<a href="#" className="text-white text-lg p-12 hover:text-blue-600 ">ACCESSORIES</a>
						<a href="#" className="text-white text-lg p-12 hover:text-blue-600 ">COLLECTIBLES</a>
						<a href="#" className="text-white text-lg p-12 hover:text-blue-600 ">COLLABORATIONS</a>
						<a href="#" className="text-white text-lg p-12 hover:text-blue-600 ">SALE</a>
					</div>
				</div>
			</div>
			{isShowCart && <Cart toggleShowCart={toggleShowCart} />}
		</>
	);
}
