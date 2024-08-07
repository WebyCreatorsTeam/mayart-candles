import { FC, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface IAboutHeader {
    id: string
    title: string
}
const AboutHeader: FC<IAboutHeader> = ({ id, title }) => {
    const [editTitle, setEditTitle] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [aboutTitle, setAboutTitle] = useState<string>(title)

    const handleChangeTitle = async () => {
        try {
            setLoader(true)
            if (aboutTitle.length === 0) return alert("שם הנר לא יכול להיות ריק")
                const token = cookies.get('token')
            const { data: { continueWork, message } } = await axios.patch(`https://mayart-candles-api.vercel.app/about/update-about-title?token=${token}`, { id, aboutTitle })
            if (continueWork) {
                alert(message)
                return setEditTitle(false)
            }
            return alert(message)
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }
    }

    return (
        <section className="aboutDash__editTitle">
            {!editTitle && (
                <>
                    <h2>{aboutTitle}</h2>
                    <button onClick={() => setEditTitle(true)}><EditIcon color="primary" /></button>
                </>
            )}
            {editTitle && (
                <div className="aboutDash__editTitle--editWindow">
                    <input
                        type="text"
                        placeholder='הכנסי כותבת העמוד' defaultValue={aboutTitle}
                        onChange={(ev: any) => setAboutTitle(ev.target.value)}
                        className='updateInput'
                    />
                    <div className="aboutDash__editTitle--editWindow--btns">
                        <button
                            onClick={handleChangeTitle}
                            className={loader ? "action-loading" : "agree-btn"}
                        >
                            {loader ? "המעדכן" : "עדכן"}
                        </button>
                        <button onClick={() => {
                            setEditTitle(false)
                            setAboutTitle(title)
                        }}
                            className={loader ? "action-loading" : "cancel-btn"}
                        >בטל</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default AboutHeader;