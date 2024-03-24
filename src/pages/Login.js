import React from 'react';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const Login = () => {
	return (
		<div className="flex items-center justify-center my-10">
		
			<form className="w-[450px] min-h-[580px] p-[40px] ">
				<h1 className='font-semibold py-5 text-center text-2xl'>Login</h1>
				<p className='font-semibold py-5 text-center text-lg'>Please enter your e-mail and password</p>
				<input
					className="w-full h-10 border border-gray-300 rounded px-[14px]"
					placeholder="Email"
					type='email'
					
				/>
				<div className="relative flex flex-row items-center  mt-[16px]">
					<input
						className="w-full h-10 border border-gray-300 rounded px-[14px]"
						placeholder="Password"
						type='password'
						
					
					/>
					<button
						className="absolute right-4"
					
						type="button"
					>
					
					</button>
				</div>

				<button
					className="w-full h-10 bg-[#42A7C3] rounded mt-[32px]"
					type="button"
				
				>
					LOGIN
				</button>
				<p className="mt-[32px]">
					You haven't account ?{' '}
					<a
						className="text-[#42A7C3] font-semibold"
						href="#"
					>
						{' '}
						Create One
					</a>
				</p>
				
			
			</form>
		</div>
	);
	
};

export default Login;
