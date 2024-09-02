import { FileUpload } from "./ui/file-upload"
import { uploadFilesToImgBB } from "@/utils/uploadImage";
import { useAppDispatch } from "@/redux/hooks";


const ImageUpload = () => {
  const dispatch = useAppDispatch()

  const handleFileUpload = (files: File[]) => {
    uploadFilesToImgBB(files, dispatch);
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-72 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  )
}

export default ImageUpload