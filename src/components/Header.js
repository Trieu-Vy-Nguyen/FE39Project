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
			<div className=" sticky top-0 z-10 bg-black h-[180px]">
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
								<button><img src='./images/Logo1.png ' className='h-[50px] ' /></button>
							</NavLink>

						</div>
						<div className=" flex-1 flex flex-row items-center justify-end ">
							<a href="#" className="text-white text-sm px-4 hover:text-blue-600">Account</a>
							
							<button className="text-white text-sm px-4 hover:text-blue-600" onClick={toggleShowCart}>
								Cart ({carts.length})
							</button>
						</div>
					</div>
					<div className=" text-center flex justify-center space-x-4">
						
						<div className='parent flex flex-col text-white  text-lg p-10 cursor-pointer'> APPAREL
									
						<a href="#" className="child hidden text-black  text-lg p-3 mt-5 hover:text-blue-600 bg-white">ALL</a>
						<a href="#" className="child hidden text-black  text-lg p-3 hover:text-blue-600 bg-white">SHIRT</a>
						<a href="#" className="child hidden text-black  text-lg p-3 hover:text-blue-600 bg-white">HOODIE & SWEARSHIRT</a>
						<a href="#" className="child hidden text-black  text-lg p-3 hover:text-blue-600 bg-white">JACKET</a>
						<a href="#" className="child hidden text-black  text-lg p-3 hover:text-blue-600 bg-white">PAINTS</a>
						</div>
									
						<div className='parent flex flex-col text-white text-lg p-10 cursor-pointer'> ACCESORIES
									
						<a href="#" className="child hidden text-black  text-lg p-5 mt-5 hover:text-blue-600 bg-white">HEADWEAR</a>
						<a href="#" className="child hidden text-black  text-lg p-5 hover:text-blue-600 bg-white">FOODWEAR</a>
						<a href="#" className="child hidden text-black  text-lg p-5 hover:text-blue-600 bg-white">BAG</a>
						
						</div>

						<div className='parent flex flex-col text-white text-lg p-10 cursor-pointer'> COLLECTIBLES
									
						<a href="#" className="child hidden text-black  text-lg p-5 mt-5 hover:text-blue-600 bg-white">PINS</a>
						<a href="#" className="child hidden text-black  text-lg p-5 hover:text-blue-600 bg-white">KEYCHAINS</a>
						<a href="#" className="child hidden text-black  text-lg p-5 hover:text-blue-600 bg-white">DRINKWARE</a>
						
						</div>

						<div className='parent flex flex-col text-white text-lg p-10 cursor-pointer'> COLLABORATION
									
						<a href="#" className="child hidden text-black  text-lg p-5 mt-5 hover:text-blue-600 bg-white">T1 X NIKE</a>
						<a href="#" className="child hidden text-black  text-lg p-5 hover:text-blue-600 bg-white">T1 X SAMBYPEN</a>
						
						
						</div>
					
					

						<a href="#" className="text-white text-lg p-10 hover:text-blue-600 ">SALE</a>
					</div>
				</div>
			</div>
			{isShowCart && <Cart toggleShowCart={toggleShowCart} />}
		</>
	);
}
