









export default function AllItem4() {
    return (
        <div className='py-[120px]'>
            <h1 className='font-semibold text-center py-10 text-2xl'>ALL APPAREL </h1>
            <div className='flex flex-row-4 justify-around py-10'>
                <div className='w-[325px] h-[331px] flex flex-col '>
                    <a href='#'>
                        <img src='./images/all4-1.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>Nike x T1 Tech Fleece Pants</p></a>
                    <a href='#'><p className='text-center'>972.986₫</p></a>

                </div>

                <div className='w-[325px] h-[331px]  flex flex-col'>
                    <a href='#'>
                        <img src='./images/all4-2.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>Nike x T1 Club_White </p></a>
                    <a href='#'><p className='text-center'>595.860₫</p></a>

                </div>
                <div className='w-[325px] h-[331px]  flex flex-col'  >
                    <a href='#'>
                        <img src='./images/all4-3.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>Nike x T1 Club_Black</p></a>
                    <a href='#'><p className='text-center'>595.860₫</p></a>

                </div>
                <div className='w-[325px] h-[331px]  flex flex-col'>
                    <a href='#'>
                        <img src='./images/all4-4.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>Nike x T1 Tech Fleece Full Zip Hoodie</p></a>
                    <a href='#'><p className='text-center'>1.199.262₫ </p></a>

                </div>


            </div>
            <div className=' mt-10 py-10'>
                <div className='w-[325px] h-[331px]  flex flex-col'>
                    <a href='#'>
                        <img src='./images/all4-5.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>T1 Official Jersey 2021</p></a>
                    <a href='#'><p className='text-center'>897.561₫</p></a>

                </div>

               

            </div>

          

            <div className="text-center mt-20 ">
                    <a href="#" className="px-8 py-5  font-semibold text-lg border-b border-solid border-black hover:text-blue-600">1</a>
                    <a href="#" className="px-8  py-5 font-semibold text-lg border-b border-solid border-black hover:text-blue-600">2</a>
                    <a href="#" className="px-8  py-5 font-semibold text-lg border-b border-solid border-black hover:text-blue-600">3</a>
                    <a href="#" className="px-8  py-5 font-semibold text-lg border-b border-solid border-black hover:text-blue-600">4</a>
                    <a href="#" className="px-8  py-5 font-semibold text-lg border-b border-solid border-black hover:text-blue-600"> ... </a>
                </div>



        </div>

    );
}