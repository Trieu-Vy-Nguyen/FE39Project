import React from 'react';
import { Outlet } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';

import Header from './Header';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Footer from './Footer';
import Service from '../pages/More/Service';
import Privacy from '../pages/More/Privacy';
import FAQ from '../pages/More/FAQ';
import Exchange from '../pages/More/Exchange';
import Contact from '../pages/More/Contact';
import AllItem from '../pages/AllItem/AllItem';
import AllItem2 from '../pages/AllItem/AllItem2';
import AllItem3 from '../pages/AllItem/AllItem3';
import AllItem4 from '../pages/AllItem/AllItem4';
import Shirt1 from '../pages/Shirt/Shirt1';
import Shirt2 from '../pages/Shirt/Shirt2';
import Hoodie1 from '../pages/Hoodie/Hoodie1';
import Hoodie2 from '../pages/Hoodie/Hoodie2';
import Jacket from '../pages/Jacket/Jacket';
import Pant from '../pages/PANT/Pant';
import Headwear from '../pages/Accesories/Headwear';
import Footwear from '../pages/Accesories/Footwear';
import Bag from '../pages/Accesories/Bag';
import Pin from '../pages/Collectible/Pin';
import Keychain from '../pages/Collectible/Keychain';
import Drinkware from '../pages/Collectible/Drinkware';
import Nike from '../pages/Collaboration/Nike';
import Sambypen from '../pages/Collaboration/Sambypen';
import Sale from '../pages/Sale/Sale';
import Login from '../pages/Login';

export default function Layout() {
	return (
		<div className="min-h-screen">
			<Header />
			<Login />

			{/* <Routes>
				<Route path="/service" element={<Service />} />
			</Routes>


			<Banner1 />
			<Banner2 />
			
			<div className="container mx-auto">
				<Outlet />
			</div>
			<Footer /> */}
		</div>
	);
}
