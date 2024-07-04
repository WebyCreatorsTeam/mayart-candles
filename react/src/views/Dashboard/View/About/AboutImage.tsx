import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import PopUp from '../../UI/PopUp/PopUp';
import UploadFile from '../../UI/UploadFile';
import axios from 'axios';
import { getImageSize } from 'react-image-size';
import { BASE_API } from '../../../../utils/api-connect';

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
    const [loader, setLoader] = useState<boolean>(false)

    const loadImage = async (imageUrl: any) => {
        return await getImageSize(imageUrl);
    };

    const handleSelectFile = async (ev: React.SyntheticEvent) => {
        let target = ev.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            const { width, height } = await loadImage(URL.createObjectURL(target.files[0]))
            if (width > 530 || height > 700) {
                return alert("התמונה גדולה מדי")
            } else {
                setFile(target.files[0])
                return setPrevFileShow(URL.createObjectURL(target.files[0]));
            }
        }
    };

    const handleUpload = async () => {
        try {
            setLoader(true);
            const data = new FormData()
            data.append("my_file", file!)
            const token = sessionStorage.getItem('token')
            const res = await axios.patch(`${BASE_API}/about/update-about-image?token=${token}&id=${id}&oldURL=${img.img}&oldId=${img._id}`, data, {
                headers: {
                    'content-type': "mulpipart/form-data"
                }
            })
            const { continueWork, secure_url, message } = res.data
            if (continueWork) {
                alert("תמונה עודכנה בהצלחה")
                setPrevFileShow("")
                console.log(secure_url)
                return setAboutImage((i) => { return { ...i, img: secure_url } })
            }
            if (!continueWork) return alert(message)
        } catch (error) {
            alert(error);
        } finally {
            setLoader(false);
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
                    <h1>בחירת תמונה</h1>
                    <div className='popupEditImage'>
                        <p className='popupEditImage--text'>
                            נא לבחור תמונה ברוחב מקסימאלי של 530px וגובה מקסימלי של 700
                        </p>
                        <div className={prevFileShow ? 'popupEditImage--uploadBtn' : 'popupEditImage--uploadBtn--grided'}>
                            <UploadFile
                                loader={loader}
                                handleSelectFile={handleSelectFile}
                                prevFileShow={prevFileShow}
                            />
                        </div>
                        {prevFileShow && <img src={prevFileShow} alt="project" className='edit_project__image2' />}
                        <div className='popupEditImage--btns'>
                            {prevFileShow && <button onClick={handleUpload}
                                className={loader ? "form-btn_disable" : "form-btn_active"}>
                                {loader ? "מעדכן" : " שמור תמונה חדשה"}
                            </button>}
                            <button onClick={() => {
                                setPopUpEditImage(false)
                                setFile(null)
                                setPrevFileShow("")
                            }}
                                className={loader ? "action-loading" : "cancel-btn"}
                            >סגור חלון</button>
                        </div>
                    </div>
                </PopUp>)}
        </>
    )
}

export default AboutImage