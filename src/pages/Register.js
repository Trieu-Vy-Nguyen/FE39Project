


import React from 'react';
import { useState } from 'react';



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const Register = () => {
	return (
		<div className="flex items-center justify-center my-10">
		
			<form className="w-[450px] min-h-[580px] p-[40px] ">
				<h1 className='font-semibold py-5 text-center text-2xl'>Register</h1>
				<p className=' py-5 text-center text-lg'>Please fill in the information below :</p>
				<input

					className="w-full h-10 border border-gray-300 rounded px-[14px]"
					placeholder="First Name"
					
					
				/>
				<div className="relative flex flex-row items-center  mt-[16px]">
					<input
						className="w-full h-10 border border-gray-300 rounded px-[14px]"
						placeholder="Last Name"
					
						
					
					/>
					<button
						className="absolute right-4"
					
						type="button"
					>
					
					</button>
				</div>

                <div className="relative flex flex-row items-center  mt-[16px]">
					<input
						className="w-full h-10 border border-gray-300 rounded px-[14px]"
						placeholder="E-mail"
                        type='email'
						
					
					/>
					<button
						className="absolute right-4"
					
						type="button"
					>
					
					</button>
				</div>

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
					type="password"
				
				>
					CREATE MY ACCOUNT
				</button>
				
			
			
			</form>
		</div>
	);
	
};

export default Register;
