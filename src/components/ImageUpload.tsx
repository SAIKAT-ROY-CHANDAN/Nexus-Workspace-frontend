import { useState } from "react";
import { FileUpload } from "./ui/file-upload"


const ImageUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  console.log(files);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-72 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
    </div>
  )
}

export default ImageUpload