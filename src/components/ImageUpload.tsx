import { useState } from "react";
import { FileUpload } from "./ui/file-upload"
import { uploadFilesToImgBB } from "@/utils/uploadImage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


const ImageUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const dispatch = useAppDispatch()
  const images = useAppSelector((state) => state.imageLink.links);

  console.log(files);
  console.log(images);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    uploadFilesToImgBB(files, dispatch);
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-72 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  )
}

export default ImageUpload