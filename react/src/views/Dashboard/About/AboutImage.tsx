import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import PopUp from '../UI/PopUp/PopUp';
import UploadFile from '../UI/UploadFile';
import axios from 'axios';

interface IAboutImage {
    id: string
    img: { _id: string, img: string }
    idx: number
}

const AboutImage: FC<IAboutImage> = ({ id, img, idx }) => {
    const [aboutImage, setAboutImage] = useState<{ _id: string, img: string }>(img)
    const [popUpEditImage, setPopUpEditImage] = useState<boolean>(false)
    const [prevFileShow, setPrevFileShow] = useState<string>("")
    const [file, setFile] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({ height: 0, width: 0 });

    const loadImage = (setImageDimensions: any, imageUrl: any) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            setImageDimensions({
                height: img.height,
                width: img.width
            });
        };
        img.onerror = (err) => {
            console.log("img error");
            console.error(err);
        };
    };

    const handleSelectFile = (ev: React.SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            loadImage(setImageDimensions, URL.createObjectURL(target.files[0]));
            console.log(imageDimensions)
            if (imageDimensions.height >= 700 && imageDimensions.width >= 530) {
                return alert("התמונה גדולה מדי")
            } else {
                setFile(target.files[0])
                return setPrevFileShow(URL.createObjectURL(target.files[0]));
            }
        }
    };

    const handleUpload = async () => {
        try {
            setLoading(true);
            const data = new FormData()
            data.append("my_file", file!)
            const token = sessionStorage.getItem('token')

            const res = await axios.patch(`http://localhost:7575/about/update-about-image?token=${token}&id=${id}&oldURL=${img.img}&oldId=${img._id}`, data, {
                headers: {
                    'content-type': "mulpipart/form-data"
                }
            })

            const { continueWork, secure_url, message } = res.data
            if (continueWork) {
                alert("תמונה עודכנה בהצלחה")
                return setAboutImage((i) => { return { ...i, img: secure_url } })
            }
            if (!continueWork) return alert(message)
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
            setPopUpEditImage(false)
        }
    };

    return (
        <>
            <div className="aboutDash__images--imageItem">
                <img src={aboutImage.img} alt={`תמונת עבודה של מאיה מספר ${idx + 1}`} />
                <div className="aboutDash__images--imageItem__btnSection">
                    <button onClick={() => setPopUpEditImage(true)}><EditIcon color="primary" />עריכת תמונה</button>
                </div>
            </div>
            {popUpEditImage && (
                <PopUp>
                    <div className='popupEditImage'>
                        <h1>בחירת תמונה</h1>
                        <p className='popupEditImage--text'>נא לבחור תמונה ברוחב 530px וגובה 700px</p>
                        <UploadFile loader={loading} handleSelectFile={handleSelectFile} prevFileShow={prevFileShow} />
                        {prevFileShow && <>
                            <img src={prevFileShow} alt="project" className='edit_project__image2' />
                            <button onClick={handleUpload}>שמור תמונה חדשה</button>
                        </>}
                        <button onClick={() => {
                            setPopUpEditImage(false)
                            setFile(null)
                            setPrevFileShow("")
                        }}>סגור חלון</button>
                    </div>
                </PopUp>)}
        </>
    )
}

export default AboutImage