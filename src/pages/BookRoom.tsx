import { Button } from "@/components/ui/button"
import ProductCarousel from "@/components/ui/ProductCarousel"


const BookRoom = () => {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 pt-4 pl-4 gap-6 lg:gap-20 mt-36 max-w-screen-2xl mx-auto bg-gray-50/60">
      <ProductCarousel />
      <div className="2xl:col-span-2 flex flex-col gap-2 mt-10 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Cool Sunglass</h2>
        <p className="mt-4 max-w-3xl tracking-wide text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, in labore deserunt eaque at dolorem a praesentium ipsam molestiae iusto obcaecati id ad assumenda repellendus.</p>
        <p className="text-xl text-gray-600 font-semibold mt-4">Floor: 1</p>
        <p className="text-xl text-gray-600 font-semibold mt-2">Room No: 201</p>
        <p className="text-xl font-semibold text-gray-600 mt-2">Capacity: 20 people</p>
        <p className="mt-4 max-w-3xl tracking-wide text-gray-500">Amenities: Projector, Whiteboard</p>
        <p className="text-2xl font-bold text-slate-800/85 mt-4">$100</p>
        <Button className="w-9/12 mt-6 flex items-center justify-center">Book Now</Button>
      </div>
    </div>
  )
}

export default BookRoom