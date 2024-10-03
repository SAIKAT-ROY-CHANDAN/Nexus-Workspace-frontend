import { addLinks, setLoading } from '@/redux/slices/fileImage';
import { Dispatch } from 'redux';


export const uploadFilesToImgBB = async (files: File[], dispatch: Dispatch) => {
    const imageLinks: string[] = [];

    dispatch(setLoading(true));


    for (const file of files) {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=1e8dd8ed6568d2a2fd488935f7f51849', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                imageLinks.push(result.data.url); 
                console.log('Uploaded to ImgBB:', result.data.url); 
            } else {
                console.error('Upload failed:', result.message);
            }
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }

    if (imageLinks.length > 0) {
        dispatch(addLinks(imageLinks));
    }

    dispatch(setLoading(false));
};
