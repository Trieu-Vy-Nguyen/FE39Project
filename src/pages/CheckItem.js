

export default function CheckItem() {
    return (
        <div className="mt-11 pb-11">
            <div className="flex justify-between">
                <div className="flex-1">
                   
                </div>
                <div className="flex-1">
                    <img src='./images/all1-4.webp' />
                </div>
                <div className="flex-1 px-10 ">
                    <h1 className="font-semibold text-2xl mt-10">T1 Logo Fleece Jacket </h1>
                    <p className=" text-xl mt-3">SKU: T1-LOGO-FL-J-S </p>
                    <h1 className="font-semibold text-xl mt-5">1.835.348đ </h1>
                    <img className="mt-4 w-full" src="./images/checkitem1.webp" />
                    <p className=" text-lg mb-5">100% Polyester </p>
                    <p className=" text-lg mb-5">* For best use of the Fleece Jacket, we recommend hand washing before first use. Please be sure to turn the product inside out when hand washing.
                        (Please be aware that if the product is damaged due to washing carelessness, it is impossible to exchange/return it.) </p>

                    <button className=" border border-solid border-black p-3 w-[90%] bg-black text-white" type="button" >
                        ADD TO CART
                    </button>
                </div>

            </div>
        </div>
    );
}