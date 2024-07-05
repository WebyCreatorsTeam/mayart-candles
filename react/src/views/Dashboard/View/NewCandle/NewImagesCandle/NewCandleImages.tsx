import React, { FC, SyntheticEvent, useState } from 'react'
import UploadManyFiles from '../../../UI/UploadManyFiles'

interface INewCandleImages {
    loader: boolean
    setImages: Function
}

const NewCandleImages: FC<INewCandleImages> = ({ loader, setImages }) => {
    const [prevFileShow, setPrevFileShow] = useState<Array<string>>([])

    const handleSelectFile = (ev: SyntheticEvent) => {
        const target = ev.target as HTMLInputElement;

        if (target.files) {
            setImages(target.files)
            for (let i = 0; i < target.files.length; i++) {
                const fileToShow = URL.createObjectURL(target.files[i])
                setPrevFileShow((prv: any) => [...prv, fileToShow])
            }
        }
    }

    return (
        <section>
            <h2>תמונות המוצר*</h2>
            <section>
                <h3>חייב לכלול לפחות תמונה אחת למוצר עד 4 תמונות למוצר*.</h3>
            </section>
            <UploadManyFiles loader={loader} handleSelectFile={handleSelectFile} prevFileShow={prevFileShow} />
            <div className='choosenImages'>
                {prevFileShow.map((img: string, idx: number) => (
                    <div key={idx}>
                        <img src={img} alt="img" width={530} height={700} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewCandleImages