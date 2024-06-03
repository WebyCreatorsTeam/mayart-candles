import axios from 'axios'
import { FC, Suspense } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'

interface IAdmins {
    name: string,
    _id: string,
    role?: string
}

const Users: FC = () => {
    const { admins } = useLoaderData() as { admins: Array<IAdmins> }
console.log(admins)
    return (
        <Suspense>
            <Await resolve={admins}>
                <h2>משתמשים עם גישה</h2>
                <div>
                    {admins.map((adm, idx) => (
                        <div key={idx}>
                            <p>{adm.name.slice(0, 2).toLocaleUpperCase()}</p> {/* בעיצוב של עמוד יוזרים, האותיות העיגול */}
                            <p>{adm.name}</p> {/* שם של משתמש */}
                            {/* {adm.role && (<button>מחיקת משתמש</button>) } */} {/* Need to add in the model role of user */}
                        </div>
                    ))}
                </div>
                <Link to="/dashboard/regist">הוספת משתמש</Link>
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