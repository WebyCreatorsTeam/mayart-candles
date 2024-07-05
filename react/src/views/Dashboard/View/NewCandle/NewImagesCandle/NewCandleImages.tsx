import { FC, SyntheticEvent, useState } from 'react'
import UploadManyFiles from '../../../UI/UploadManyFiles'
import { loadImage } from '../../../utils/getImageSize'
import CandleImage from './CandleImage'

interface INewCandleImages {
    loader: boolean
    setImages: Function
}

const NewCandleImages: FC<INewCandleImages> = ({ loader, setImages }) => {
    const [prevFileShow, setPrevFileShow] = useState<Array<string>>([])

    const handleSelectFile = async (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;
        const files = target.files

        if (files) {
            if ((prevFileShow.length <= 4) && (files.length <= 4 - prevFileShow.length)) {
                for (let i = 0; i < files.length; i++) {
                    const { width, height } = await loadImage(URL.createObjectURL(files[i]))

                    if (width > 530 || height > 700) {
                        return alert(`תמונה  ${files[i].name} גדולה מדי`)
                    }

                    setImages((prv: any) => [...prv, files[i]])
                    const fileToShow = URL.createObjectURL(files[i])
                    setPrevFileShow((prv: any) => [...prv, fileToShow])
                }
            } else {
                return alert("לא ניתן לעלות יותר מ4 תמונות")
            }
        }
    }

    return (
        <section className='candleImages'>
            <h2>תמונות המוצר*</h2>
            <section>
                <h3>חייב לכלול לפחות תמונה אחת למוצר עד 4 תמונות למוצר*.</h3>
                <p className='popupEditImage--text'>
                    נא לבחור תמונה ברוחב מקסימאלי של 530px וגובה מקסימלי של 700
                </p>
            </section>
            <UploadManyFiles loader={loader} handleSelectFile={handleSelectFile} prevFileShow={prevFileShow} />
            <div className='choosenImages'>
                {prevFileShow.map((img: string, idx: number) => (
                    <CandleImage key={idx} idx={idx} img={img} setImages={setImages} setPrevFileShow={setPrevFileShow} />
                ))}
            </div>
        </section>
    )
}

export default NewCandleImages