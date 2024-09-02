import ImageUpload from "@/components/ImageUpload"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const CreateRoom = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex mt-10 justify-center">
        <div className="flex w-11/12 2xl:w-2/5 items-center border justify-center p-10 rounded-lg bg-slate-200/20 flex-col gap-6">
          <div className="flex flex-col gap-6 w-full">
            <Input type="text" className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm" placeholder="Name" />
            <Input type="text" className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm" placeholder="Room No" />
          </div>
          <div className="grid 2xl:grid-cols-4 gap-4 w-full">
            <Input type="text" className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm" placeholder="Floor No" />
            <Input type="text" className="p-2 w-full focus-within:ring-1 outline-none rounded-lg 2xl:col-span-3 text-gray-800 text-sm" placeholder="Capacity" />
          </div>
          <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 w-full">
            <Input type="text" className="p-2 w-full focus-within:ring-1 outline-none rounded-lg text-gray-800 text-sm" placeholder="Price" />
            <Input type="text" className="p-2 w-full focus-within:ring-1 outline-none rounded-lg 2xl:col-span-2 text-gray-800 text-sm" placeholder="Amenities" />
          </div>
          <ImageUpload />
          <Button>Submit</Button>
        </div>
      </div>
    </section>
  )
}

export default CreateRoom