import { FC, useEffect, useState } from 'react'
import { getImageSize } from 'react-image-size';
import axios from 'axios';
import { useCandleIdContext } from '../Context/CandleContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';
import PopUp from '../../../UI/PopUp/PopUp';
import UploadFile from '../../../UI/UploadFile';

interface ICandleImages {
    images: Array<candlePic>
    candleName: string
}

interface candlePic {
    img: string, _id?: string
}
const CandleImages: FC<ICandleImages> = ({ images, candleName }) => {
    const [imagesOfCandle, setImagesOfCandle] = useState<Array<candlePic>>(images)
    const [mainImage, setMainImage] = useState<string>(imagesOfCandle[0].img)
    const [loader, setLoader] = useState<boolean>(false)
    const [prevFileShow, setPrevFileShow] = useState<string>("")
    const [file, setFile] = useState<any>(null);
    const [popUpEditImage, setPopUpEditImage] = useState<boolean>(false)
    const id = useCandleIdContext()

    useEffect(() => {
        (() => {
            setMainImage(imagesOfCandle[0].img)
        })()
    }, [imagesOfCandle])

    const loadImage = async (imageUrl: any) => {
        return await getImageSize(imageUrl);
    };

    const handleSelectFile = async (ev: React.SyntheticEvent) => {
        if (imagesOfCandle.length === 4) {
            return alert("לא ניתן לעלות יותר מ4 תמונות")
        }
        const target = ev.target as HTMLInputElement;
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
            const res = await axios.post(`https://mayart-candles-api.vercel.app/candles/add-candle-image?token=${token}&id=${id}`, data, {
                headers: {
                    'content-type': "mulpipart/form-data"
                }
            })

            const { continueWork, pictures, message } = res.data
            console.log(pictures)
            if (continueWork) {
                alert("תמונה עודכנה בהצלחה")
                setPrevFileShow("")
                return setImagesOfCandle(pictures)
            }
            if (!continueWork) return alert(message)
        } catch (error) {
            alert(error);
        } finally {
            setLoader(false);
            setPopUpEditImage(false)
        }
    };

    const handleDeleteImage = async (imageId: string, img: string) => {
        try {
            const confirm = window.confirm("למוק את התמונה?")
            if (!confirm) return;
            setLoader(true)
            const token = sessionStorage.getItem('token')
            const { data: { continueWork, message, pictures } } = await axios.delete(`http://localhost:7575/candles/delete-image?token=${token}`, { data: { id, imageId, img } })
            if (continueWork) {
                alert(message)
                return setImagesOfCandle(pictures)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <section className='candle-images'>
            <div className='candle-images__top-show-big'>
                <img src={mainImage} alt={`תמונה ראשית של ${candleName}`} width={776} height={840} />
            </div>
            <div className='candle-images__bottom-show'>
                {imagesOfCandle.length > 0 && imagesOfCandle.map((img, idx) => (
                    <div
                        key={idx}
                        className={`imageEl ${mainImage === img.img ? "choosenImage" : ""}`}
                        onMouseEnter={() => setMainImage(img.img)}
                    >
                        <img
                            src={img.img}
                            alt={`תמונה ${candleName} מספר ${idx + 1}`}
                            width={153}
                            height={153}
                            key={idx}
                            onMouseEnter={() => setMainImage(img.img)}
                        />
                        {
                            imagesOfCandle.length > 1 &&
                            <div className='candle-images__bottom-show--deleteEl'>
                                <button
                                    onClick={() => handleDeleteImage(img._id!, img.img)}
                                ><DeleteOutlineIcon fontSize="large" sx={{ color: red[700] }} /></button>
                            </div>
                        }

                    </div>
                ))}
                {imagesOfCandle.length < 4 &&
                    <div className='candle-images__bottom-show--addEl'>
                        <button 
                        className='candle-images__bottom-show--addEl--btn'
                        onClick={() => {
                            if (imagesOfCandle.length === 4) {
                                return alert("לא ניתן לעלות יותר מ4 תמונות")
                            }
                            setPopUpEditImage(true)
                        }}>
                            <img src="/icons/dashboard/add-category.svg" alt="הוספת תמונה" width={70} height={70} />
                        </button>
                    </div>}
            </div>
            {popUpEditImage &&
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
                               className={loader ? "action-loading" : "agree-btn"}>
                                {loader ? "מעדכן" : "שמור תמונה חדשה"}
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
                </PopUp>}
        </section>
    )
}

export default CandleImages