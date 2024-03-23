
















export default function Bag() {
    return (
        <div className='py-[120px]'>
            <h1 className='font-semibold text-center py-10 text-2xl'>BAG </h1>
            <div className='flex flex-row-4 justify-around py-10'>
                <div className='w-[325px] h-[331px] flex flex-col '>
                    <a href='#'>
                        <img src='./images/bag1.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>[T1 X MASTERCARD] Derby Bag</p></a>
                    <a href='#'><p className='text-center'>2.212.474₫</p></a>

                </div>

                <div className='w-[325px] h-[331px]  flex flex-col'>
                    <a href='#'>
                        <img src='./images/bag2.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>T1 2023 Worlds Edition Eco Bag </p></a>
                    <a href='#'><p className='text-center'>879.961₫</p></a>

                </div>
                <div className='w-[325px] h-[331px]  flex flex-col'  >
                    <a href='#'>
                        <img src='./images/bag3.webp' />
                    </a>
                    <a href='#'><p className='text-center font-semibold '>2024 T1 Cheering Gymsack</p></a>
                    <a href='#'><p className='text-center'>377.126₫</p></a>

                </div>
                <div className='w-[325px] h-[331px]  flex flex-col'>


                </div>


            </div>






        </div>

    );
}