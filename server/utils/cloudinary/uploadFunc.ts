// const cloudinary = require("cloudinary").v2;
const cloudinary = require("cloudinary").v2;

export const getPublicId = (imageURL: any) => imageURL.split("/").pop().split(".")[0];

// const resizedBuffer: Buffer = await sharp(file.buffer)
//     .resize({ width: your - width, height: your - height })
//     .toBuffer();

export const handleUpload = async (file: any) => {
    try {        
        const res = await cloudinary.uploader.upload(file, {
            resource_type: "auto",
            folder: 'mayart'
        });
        return res;
    } catch (error) {
        console.log(error)
        return error
    }
}

export const handleDeleteMany = async (publicIds: Array<string>) => {
    try {
        const res = await cloudinary.api.delete_resources(publicIds);
        return res;
    } catch (error) {
        console.log(error)
        return error
    }
}

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

export const handleDeleteImage = async (imageId: string) => {
    try {
        const result = await cloudinary.uploader.destroy(`mayart/${imageId}`)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return error
    }
}