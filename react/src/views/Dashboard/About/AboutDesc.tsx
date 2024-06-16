import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

interface IAboutDesc {
    id: string
    desc: string
}

const AboutDesc: FC<IAboutDesc> = ({ id, desc }) => {
    const [editDesc, setEditDesc] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [aboutDesc, setAboutDesc] = useState<string>(desc)

    const handleChangeTitle = async () => {
        try {
            setLoader(true)
            if (aboutDesc.length === 0) return alert("שם הנר לא יכול להיות ריק")
            const token = sessionStorage.getItem('token')
            // const { data: { continueWork, message } } = await axios.patch(`${BASE_API}/candles/change-candle-name?token=${token}`, { id, name: aboutTitle })
            const { data: { continueWork, message } } = await axios.patch(`http://localhost:7575/about/update-about-desc?token=${token}`, { id, aboutDesc })
            if (continueWork) {
                alert(message)
                return setEditDesc(false)
            }
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }
    return (
        <section className="aboutDash__editDesc">
            {!editDesc && (
                <>
                    <p className="aboutDash__text">{aboutDesc}</p>
                    <button onClick={() => setEditDesc(true)}><EditIcon color="primary" /></button>
                </>
            )}
            {editDesc && (
                <>
                    <textarea defaultValue={aboutDesc} rows={5} cols={90} onChange={(ev: any) => setAboutDesc(ev.target.value)}></textarea>
                    <button
                        onClick={handleChangeTitle}>
                        {loader ? "המעדכן" : "עדכן"}
                    </button>
                    <button onClick={() => {
                        setEditDesc(false)
                        setAboutDesc(desc)
                    }}>בטל</button>
                </>
            )}
        </section>
    )
}

export default AboutDesc