import { Document, Schema, Model, model,HydratedDocument } from "mongoose";

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
AboutSchema.static('getAboutImages', async function getAboutImages(id: any,secure_url: any, oldId: any) {
    console.log("`````````````````getAboutImages`````````````````")
    console.log(id, secure_url, oldId)
    await this.findById(id).then(
        doc=> {
            // console.log(doc)
            doc?.updateImages(secure_url, oldId)
        }
    )
    // console.log(about)
    // const [firstName, lastName] = name.split(' ');
    // return this.create({ firstName, lastName });
});

AboutSchema.method('updateImages', function updateImages(secure_url: any, oldId: any) {
    console.log("`````````````````updateImages`````````````````")
    console.log(this.images)
    console.log(secure_url, oldId)
    const items: any = [...this.images]
    
    console.log("`````````````````updateImages the items`````````````````")
    console.log(items)
    console.log("`````````````````updateImages the object`````````````````")
    const aa = items.find((i:any) => i._id == oldId)
    const aa11 = items.findIndex((i:any) => i._id == oldId)
    console.log(aa)
    console.log(aa11)

    // aa.img =secure_url

this.images[aa11].img = secure_url
    // const aa = items.map((i: any) => {
    //     if(i._id === oldId) {
    //         return i.img=secure_url
    //     } else {
    //         return i
    //     }
    //  })

    //  this.images = aa
     return this.save
                        // return this.save
        //                 if(i._id === id) {
        //                     return i.img=image
        //                 } else {
        //                     return i
        //                 }})
                        
        //                 console.log(aa)
                        
        //                 this.images = aa
        //                 return this.save

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
