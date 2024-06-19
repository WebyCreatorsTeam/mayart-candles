import { Document, Schema, Model, model, HydratedDocument } from "mongoose";

interface IAbout {
    title: string
    desc: string
    images: [{ img: string }]
}

interface IAboutMethods {
    updateImages(secure_url: any, oldId: any): any
}

interface AboutModel extends Model<IAbout, {}, IAboutMethods> {
    getAboutImages(id: any, secure_url: any, oldId: any): Promise<HydratedDocument<IAbout, IAboutMethods>>
}

const AboutSchema = new Schema<IAbout, AboutModel, IAboutMethods>({
    title: {
        type: String,
        require: [true, "נא למלא את הכותרת"]
    },
    desc: {
        type: String,
        require: [true, "נא למלא תוכן הטקסט"],
    },
    images: {
        type: [{ img: String }]
    },
})

AboutSchema.static('getAboutImages', async function getAboutImages(id: any, secure_url: any, oldId: any) {
    await this.findById(id).then(
        async doc => {
            await doc?.updateImages(secure_url, oldId)
        }
    )
});

AboutSchema.method('updateImages', function updateImages(secure_url: any, oldId: any) {
    const items: any = [...this.images]
    const imageIndex = items.findIndex((i: any) => i._id == oldId)
    this.images[imageIndex].img = secure_url
    return this.save()
})

export const About = model<IAbout, AboutModel>("About", AboutSchema);
