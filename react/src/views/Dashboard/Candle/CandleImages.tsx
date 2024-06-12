import { FC, useState } from 'react'

interface ICandleImages {
    images: [string]
    candleName: string
}
const CandleImages: FC<ICandleImages> = ({ images, candleName }) => {
    const [mainImage, setMainImage] = useState<string>(images[0])
    const [imagesOfCandle, setImagesOfCandle] = useState<[string]>(images)

    return (
        <section className='candle-images'>
            <div className='candle-images__top-show-big'>
                <img src={mainImage} alt={`תמונה ראשית של ${candleName}`} width={776} height={840} />
            </div>
            <div className='candle-images__bottom-show'>
                {imagesOfCandle.length > 0 && imagesOfCandle.map((img, idx) => (
                    <button
                        onMouseEnter={() => setMainImage(img)}
                        className={mainImage === img? "choosenImage":""}
                    >
                        <img key={idx} src={img} alt={`תמונה משנית ${candleName} מספר ${idx + 1}`} width={153} height={153} />
                    </button>
                ))}
                <button>+</button>
            </div>
        </section>
    )
}

export default CandleImages