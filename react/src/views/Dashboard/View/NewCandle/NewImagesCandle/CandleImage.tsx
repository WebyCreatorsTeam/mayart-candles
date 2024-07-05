import { FC, useState } from 'react'
import { loadImage } from '../../../utils/getImageSize';
import PopUp from '../../../UI/PopUp/PopUp';
import UploadFile from '../../../UI/UploadFile';

interface ICandleImage {
    idx: number
    img: string
    setImages: Function
    setPrevFileShow: Function
}
const CandleImage: FC<ICandleImage> = ({ idx, img, setImages, setPrevFileShow }) => {
    const [popUpEdit, setPopUpEdit] = useState<boolean>(false);
    const [privImage, setPrivImage] = useState<string>("");
    const [loader, setLoader] = useState<boolean>(false);
    const [file, setFile] = useState<any>(null);

    const handleSelectFile = async (ev: React.SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        if (target.files && target.files[0]) {
            const { width, height } = await loadImage(URL.createObjectURL(target.files[0]))
            if (width > 530 || height > 700) {
                return alert("התמונה גדולה מדי")
            } else {
                setFile({ url: target.files[0], idx })
                return setPrivImage(URL.createObjectURL(target.files[0]));
            }
        }
    };

    const handleChangeImage = () => {
        try {
            setLoader(true)
            setPrevFileShow((priv: any) => { return priv.map((item: any, idx: number) => { return file.idx === idx ? URL.createObjectURL(file.url) : item }) })
            setImages((prv: any) => { return prv.map((item: any, idx: number) => { return file.idx === idx ? file.url : item }) })
            setPopUpEdit(false)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <div className={`singleImage ${idx === 0 && 'singleImage__first'}`}>
            <img src={img} alt="img" width={530} height={700} />
            {idx === 0 && <p>תמונה ראשית</p>}
            <div className='singleImage__change-btn'>
                <button onClick={() => setPopUpEdit(true)}>בחירת תמונה שונה</button>
            </div>
            {popUpEdit && (
                <PopUp>
                    <h1>בחירת תמונה</h1>
                    <div className='popupEditImage'>
                        <p className='popupEditImage--text'>
                            נא לבחור תמונה ברוחב מקסימאלי של 530px וגובה מקסימלי של 700
                        </p>
                        <div className={privImage ? 'popupEditImage--uploadBtn' : 'popupEditImage--uploadBtn--grided'}>
                            <UploadFile
                                loader={loader}
                                handleSelectFile={handleSelectFile}
                                prevFileShow={privImage}
                            />
                        </div>

                        {privImage && <img src={privImage} alt="project" className='edit_project__image2' width={530} height={700} />}
                        <div className='popupEditImage--btns'>
                            {privImage &&
                                <button
                                    onClick={handleChangeImage}
                                    className={loader ? "action-loading" : "agree-btn"}>
                                    {loader ? "מעדכן" : "החלף תמונה"}
                                </button>}
                            <button onClick={() => {
                                setPopUpEdit(false)
                                setFile(null)
                                setPrivImage("")
                            }}
                                className={loader ? "action-loading" : "cancel-btn"}
                            >סגור חלון</button>
                        </div>
                    </div>
                </PopUp>
            )}
        </div>
    )
}

export default CandleImage