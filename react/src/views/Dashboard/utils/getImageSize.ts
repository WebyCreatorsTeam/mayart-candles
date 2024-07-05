import { getImageSize } from 'react-image-size';

export const loadImage = async (imageUrl: any) => {
    return await getImageSize(imageUrl);
};