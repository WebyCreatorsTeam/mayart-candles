const cloudinary = require("cloudinary").v2;

export const getPublicId = (imageURL: any) => imageURL.split("/").pop().split(".")[0];

export const imageUpdater = async (imagePublicId: any, imagePath: any) => {
    try {
        const result = await cloudinary.uploader.upload(imagePath, {
            public_id: `mayart/${imagePublicId}`
        })
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}
