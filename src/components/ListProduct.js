import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../store/redux/CartSlice';
import { message } from 'antd';
import { useEffect } from 'react';
import { getProductsRequest } from '../store/redux/ProductSlice';



function List() {
	const { products, fetching } = useSelector((state) => state.product);
	const dispatch = useDispatch();

	const onAdd = (newProduct) => {
		dispatch(addProductToCart(newProduct));
		message.success('Thêm sản phẩm thành công');
	};

	const getProducts = () => {
		dispatch(getProductsRequest());
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className=''>
			<h1 className='font-bold text-center py-10 text-2xl'>ALL PRODUCT </h1>
			<div className='flex flex-row-4 justify-around py-10'>
				<div className='w-[325px] h-[331px] flex flex-col '>
					<a href='#'>
						<img src='./images/Product1.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>2024 T1 Uniform Jacket</p></a>
					<a href='#'><p className='text-center'>3.914.021 đ</p></a>

				</div>

				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD2.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>2024 T1 Uniform Jersey </p></a>
					<a href='#'><p className='text-center'>2.716.340 đ</p></a>

				</div>
				<div className='w-[325px] h-[331px]  flex flex-col'  >
					<a href='#'>
						<img src='./images/PD3.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>2024 T1 Uniform Jersey Sponsor Making Kit</p></a>
					<a href='#'><p className='text-center'>276.664 đ</p></a>

				</div>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD4.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>T1 Logo Fleece Jacket</p></a>
					<a href='#'><p className='text-center'>1.836.044 đ</p></a>

				</div>


			</div>
			<div className='flex flex-row-4 justify-around mt-10 py-10'>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD5.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>2024 T1 Cheering Gymsack</p></a>
					<a href='#'><p className='text-center'>377.269 đ</p></a>

				</div>

				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD6.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>T1 Player Hoodie - Faker</p></a>
					<a href='#'><p className='text-center'>1.634.834 đ</p></a>

				</div>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD7.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>T1 Player Hoodie - Zeus</p></a>
					<a href='#'><p className='text-center'>1.634.834 đ</p></a>

				</div>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD8.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>T1 Player Hoodie - Oner</p></a>
					<a href='#'><p className='text-center'>1.634.834 đ</p></a>

				</div>


			</div>

			<div className='flex flex-row-4 justify-around mt-10 py-10'>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD9.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>T1 Player Hoodie - Gumayusi</p></a>
					<a href='#'><p className='text-center'>1.634.834 đ</p></a>

				</div>

				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD10.jpg' />
					</a>
					<a href='#'><p className='text-center font-semibold '>T1 Player Hoodie - Keria</p></a>
					<a href='#'><p className='text-center'>1.634.834 đ</p></a>

				</div>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD11.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>2023 World Champion T1 Desk Mat Ver.1</p></a>
					<a href='#'><p className='text-center'>829.993 đ</p></a>

				</div>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD12.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>2023 World Champion T1 Desk Mat Ver.2</p></a>
					<a href='#'><p className='text-center'>829.993 đ</p></a>

				</div>


			</div>

			<div className='flex flex-row-4 justify-around mt-10 py-10'>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD13.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>T1 Logo Badge - Champion Edition</p></a>
					<a href='#'><p className='text-center'>251.513 đ</p></a>

				</div>

				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD14.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>2024 T1 Calendar</p></a>
					<a href='#'><p className='text-center'>377.269 đ</p></a>

				</div>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD15.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>2024 T1 Fabric Calendar</p></a>
					<a href='#'><p className='text-center'>452.723 đ</p></a>

				</div>
				<div className='w-[325px] h-[331px]  flex flex-col'>
					<a href='#'>
						<img src='./images/PD16.webp' />
					</a>
					<a href='#'><p className='text-center font-semibold '>[T1 X MASTERCARD] Player Emblem Jersey</p></a>
					<a href='#'><p className='text-center'>2.464.827 đ</p></a>

				</div>



			</div>

			<div className=' w-[90%] mt-10 flex justify-beetween ml-10'>
					<div className='flex-1'></div>
					<button type='' className='px-[10px] py-[18px] bg-black text-white flex-1 '>
						VIEW MORE
					</button>
					<div className='flex-1'></div>
			</div>
		</div>


	);

}

export default List;
