

export default function Carts() {
    return (

        <div className="w-[80%] h-[800px] m-auto ">
            <h1 className="font-semibold text-center text-2xl mt-10">Cart</h1>
            <div className="flex justify-between w-[80%] m-auto p-10">
                <div className="flex-1 py-5 border-b border-solid border-black">
                    <p className="text-start text-xl ">Product</p>
                </div>
                <div className="flex-1 py-5 border-b border-solid border-black">
                    <p className="text-center text-xl ">Quantity</p>
                </div>
                <div className="flex-1 py-5 border-b border-solid border-black">
                    <p className="text-end text-xl ">Total</p>
                </div>
            </div>

            <div className="flex justify-between w-[80%] m-auto p-10">
                <div className="flex-1 py-5 border-b border-solid border-black">
                    <div className="flex">
                        <img className="w-[120px] h-[123px]" src="./images/all1-4.webp" />
                        <div className="flex flex-col">
                            <p className="mt-5">T1 Logo Fleece Jacket</p>
                            <p className="">S</p>
                            <p className="">1.835.348₫</p>
                        </div>

                    </div>
                </div>
                <div className="flex-1 py-5 border-b border-solid border-black ">
                    <div className="flex justify-center">
                        <button className=" border-b border-t border-l border-solid border-black py-2 px-3">-</button>
                        <button className=" border-b border-t  border-black py-2 px-3">1</button>
                        <button className=" border-b border-t border-r border-black py-2 px-3">+</button>
                    </div>
                </div>
                <div className="flex-1 py-5 border-b border-solid border-black">
                    <p className="text-end text-xl ">1.835.348₫</p>
                </div>
            </div>

            <div className="flex justify-between w-[80%] m-auto p-10">
                <div className="flex-1 py-5 ">

                </div>
                <div className="flex-1 py-5 ">

                </div>
                <div className="flex-1 py-5 ">
                    <div className="flex flex-col">
                        <p className="text-end">Total: 1.835.348 VND </p>
                        <p className="text-end mt-3">Shipping & taxes calculated at checkout </p>
                        <button className="border border-black py-2 px-3 mt-4 bg-black text-white">Check out</button>
                    </div>
                </div>
            </div>

        </div>


    );
}

