const cloudinary = require("cloudinary").v2;

export const handleUpload = async (file: any) => {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
        folder: 'mayart'
    });
    return res;
}