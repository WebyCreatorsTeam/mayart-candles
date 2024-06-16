import { Document, Schema, Model, model,HydratedDocument } from "mongoose";

interface IAbout {
    title: string
    desc: string
    images: [{ img: string }]
}

interface IAboutMethods {
    updateImages(id: any,image: any, oldId: any): any
}

interface AboutModel extends Model<IAbout, {}, IAboutMethods> {
    getAboutImages(id: any, image: any, oldId: any): Promise<HydratedDocument<IAbout, IAboutMethods>>
}

// type UserModel = Model<IAbout, {}, IAboutMethods>
// interface AboutModel extends Model<IAbout>
// export interface IAbout extends Document {
//     _id: string;
//     title: string
//     desc: string
//     images: [{ _id: string, img: string }]
//     updateImages: () => void
// }

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
AboutSchema.static('getAboutImages', async function getAboutImages(id: any,image: any, oldId: any) {
    console.log(id, image, oldId)
    console.log("`````````````````about`````````````````")
    await this.findById(id).then(doc=> console.log(doc))
    // console.log(about)
    // const [firstName, lastName] = name.split(' ');
    // return this.create({ firstName, lastName });
});

AboutSchema.method('updateImages', function updateImages(image: any, id: any) {

})
// AboutSchema.method('updateImages', function updateImages(aboutId: string,image: any, id: any) {
//     const items:any = [...this.images]
//     console.log(items)
//     const aa = items.map((i: any) => { 
//                 if(i._id === id) {
//                     return i.img=image
//                 } else {
//                     return i
//                 }})
                
//                 console.log(aa)
                
//                 this.images = aa
//                 return this.save
// })
    
    export const About = model<IAbout, AboutModel>("About", AboutSchema)
// About.method("updateImages", function (): void {
    
// })
