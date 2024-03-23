











export default function Shirt2() {
    return (
        <div className='py-[120px]'>
            <h1 className='font-semibold text-center py-10 text-2xl'>SHIRTS </h1>
            <div className='flex flex-row-4 justify-around py-10'>
                <div className='w-[325px] h-[331px] flex flex-col '>
                    <a href='#'>
                        <img src='./images/shirt2-1.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>2024 T1 Uniform Jacket</p></a>
                    <a href='#'><p className='text-center'>3.914.021 đ</p></a>

                </div>

                <div className='w-[325px] h-[331px]  flex flex-col'>
                    <a href='#'>
                        <img src='./images/shirt2-2.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>2024 T1 Uniform Jersey </p></a>
                    <a href='#'><p className='text-center'>2.716.340 đ</p></a>

                </div>
                <div></div>
                <div></div>


            </div>
           

        

            <div className="text-center mt-20 ">
                    <a href="#" className="px-8 py-5  font-semibold text-lg border-b border-solid border-black hover:text-blue-600">1</a>
                    <a href="#" className="px-8  py-5 font-semibold text-lg border-b border-solid border-black hover:text-blue-600">2</a>
                   
                    <a href="#" className="px-8  py-5 font-semibold text-lg border-b border-solid border-black hover:text-blue-600"> ... </a>
                </div>



        </div>

    );
}