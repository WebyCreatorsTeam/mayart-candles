import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
                const token = cookies.get('token')
            const { data: { continueWork, message } } = await axios.patch(`https://mayart-candles-api.vercel.app/about/update-about-desc?token=${token}`, { id, aboutDesc })
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
                <div className="aboutDash__editTitle--editWindow">
                    <textarea
                        defaultValue={aboutDesc}
                        className='updateAboutTextarea'
                        onChange={(ev: any) => setAboutDesc(ev.target.value)}></textarea>
                    <div className="aboutDash__editTitle--editWindow--btns">
                        <button
                            onClick={handleChangeTitle}
                            className={loader ? "action-loading" : "agree-btn"}
                        >
                            {loader ? "המעדכן" : "עדכן"}
                        </button>
                        <button onClick={() => {
                            setEditDesc(false)
                            setAboutDesc(desc)
                        }}
                            className={loader ? "action-loading" : "cancel-btn"}
                        >בטל</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default AboutDesc