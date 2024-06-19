import { FC, useState } from 'react'

interface ICandleImages {
    images: [{ img: string }]
    candleName: string
}
const CandleImages: FC<ICandleImages> = ({ images, candleName }) => {
    const [mainImage, setMainImage] = useState<string>(images[0].img)
    const [imagesOfCandle, setImagesOfCandle] = useState<[{ img: string }]>(images)

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
                            alt={`תמונה משנית ${candleName} מספר ${idx + 1}`}
                            width={153}
                            height={153}
                            key={idx}
                            onMouseEnter={() => setMainImage(img.img)}
                        />
                    </div>
                ))}
                <button>+</button>
            </div>
        </section>
    )
}

export default CandleImages