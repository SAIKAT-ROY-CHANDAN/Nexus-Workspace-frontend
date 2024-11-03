import CheckoutItem from "@/components/CheckoutItem"
import { useInitiatePaymentMutation } from "@/redux/api/payemnt";
import { useAppSelector } from "@/redux/hooks";

const Checkout = () => {
    const totalPrice = useAppSelector((state) => state.totalPrice.totalPrice);
    const bookingIds = useAppSelector((state) => state.totalPrice.bookingIds);
    const userInfo = useAppSelector((state) => state.auth);
    const [initiatePayment, { isLoading }] = useInitiatePaymentMutation();

    const handlePayment = async () => {
        if (bookingIds.length === 0) {
            console.error('No booking IDs available for payment');
            return;
        }
        
        try {
            const paymentResult = await initiatePayment({
                bookingIds,
                user: {
                    name: userInfo.name,
                    email: userInfo.email,
                    phone: userInfo.phone,
                    address: userInfo.address,
                    totalPrice
                }
            }).unwrap();

            if (paymentResult.success) {
                window.location.href = paymentResult.data.paymentUrl;
            } else {
                console.error('Payment failed:', paymentResult.message);
            }

        } catch (error) {
            console.error('Payment failed:', error);
        }
    };

    return (
        <div className="font-sans mt-20 mx-8 w-full">
            <div className="grid lg:grid-cols-3 gap-9 max-lg:max-w-7xl mx-auto w-full">
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
                    <button
                        onClick={handlePayment}
                        disabled={isLoading || bookingIds.length === 0}
                        type="button"
                        className="mt-8 max-w-md text-sm px-6 py-3 w-full bg-black hover:bg-black/70 text-white font-semibold tracking-wide rounded-lg">
                        Pay Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout