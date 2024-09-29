import CheckoutItem from "@/components/CheckoutItem"
import { useAppSelector } from "@/redux/hooks";

const Checkout = () => {
    const totalPrice = useAppSelector((state) => state.totalPrice.totalPrice);
    const userInfo = useAppSelector((state) => state.auth);

    return (
        <div className="font-sans mt-12 mx-8">
            <div className="grid lg:grid-cols-3 gap-9 max-lg:max-w-7xl mx-auto w-full items-center">
                <div className="col-span-2">
                    <CheckoutItem />
                </div>

                <div className="bg-gradient-to-tl bg-slate-100/35 rounded-lg p-10 lg:sticky top-0">
                    <ul className="text-gray-800 divide-gray-300">
                        <li className="flex flex-wrap gap-4 text-sm  font-semibold">{userInfo.name}</li>
                        <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">{userInfo.email}</li>
                        <li className="flex flex-wrap gap-4 text-sm pb-4 font-semibold">{userInfo.phone}</li>
                        <li className="flex flex-wrap gap-4 text-sm pt-4 font-bold">
                            Total <span className="ml-auto">{totalPrice}</span>
                        </li>
                    </ul>
                    <button type="button" className="mt-8 max-w-md text-sm px-6 py-3 w-full bg-black hover:bg-black/70 text-white font-semibold tracking-wide rounded-lg">Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout