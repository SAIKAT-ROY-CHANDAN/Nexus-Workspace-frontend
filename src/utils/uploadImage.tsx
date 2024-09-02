import { addLink } from "@/redux/slices/fileImage";
import { Dispatch } from "@reduxjs/toolkit";

export const uploadFilesToImgBB = async (files: File[], dispatch: Dispatch) => {
    console.log(files);
    for (const file of files) {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=1e8dd8ed6568d2a2fd488935f7f51849', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log('Uploaded to ImgBB:', result.data.url);
            dispatch(addLink(result.data.url))
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }
};