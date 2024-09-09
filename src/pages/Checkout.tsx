import CheckoutItem from "@/components/CheckoutItem"

const Checkout = () => {
    return (
        <div className="font-sans mt-20 mx-5">
            <div className="grid lg:grid-cols-3 gap-4 max-lg:max-w-3xl mx-auto">
           <CheckoutItem />

                <div className="bg-gradient-to-tl bg-slate-100/35 rounded-lg p-10 lg:sticky top-0">
                    <ul className="text-gray-800 divide-y divide-gray-300">
                        <li className="flex flex-wrap gap-4 text-sm pb-4 font-semibold">Subtotal <span className="ml-auto">$46.00</span></li>
                        <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">Shipping <span className="ml-auto">$4.00</span></li>
                        <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">Tax <span className="ml-auto">$4.00</span></li>
                        <li className="flex flex-wrap gap-4 text-sm pt-4 font-bold">Total <span className="ml-auto">$54.00</span></li>
                    </ul>
                    <button type="button" className="mt-8 max-w-md text-sm px-6 py-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide rounded-lg">Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout