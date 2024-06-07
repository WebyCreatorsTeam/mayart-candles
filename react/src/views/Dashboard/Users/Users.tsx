import axios from 'axios'
import { FC, Suspense } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface IAdmins {
    name: string,
    _id: string,
    role?: string
}

const Users: FC = () => {
    const { admins } = useLoaderData() as { admins: Array<IAdmins> }

    return (
        <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
            <Await resolve={admins}>
                <section className='user'>
                    <div className='user-view'>
                        <h1>משתמשים עם גישה</h1>
                        <div className='userName'>
                            {admins.map((adm, idx) => (
                                <div className='gridUserName' key={idx}>
                                    <div className='gridName' key={idx}>
                                        <p className='iconName'>{adm.name.slice(0, 2).toLocaleUpperCase()}</p> {/* בעיצוב של עמוד יוזרים, האותיות העיגול */}
                                        <p>{adm.name}</p> {/* שם של משתמש */}
                                        {/* {adm.role && (<button>מחיקת משתמש</button>) } */} {/* Need to add in the model role of user */}
                                    </div>
                                    <button className='delete'><DeleteOutlineIcon /></button>
                                </div>
                            ))}
                        </div>
                        <Link className='form-btn_active' to="/dashboard/regist"> <img className='addIcon' src="/icons/dashboard/user-add-plus.svg" alt="add user icon" /> הוספת משתמש</Link>
                    </div>
                </section>
            </Await>
        </Suspense>
    )
}

export default Users

const hendleGetAdmins = async () => {
    const token = sessionStorage.getItem('token')
    const { data } = await axios.get(`https://mayart-candles-api.vercel.app/admin/all-admins?token=${token}`)
    console.log(data)
    const { continueWork, admins } = data;
    if (continueWork) return admins
    if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const adminsLoader = async () => {
    return defer({
        admins: await hendleGetAdmins()
    })
}