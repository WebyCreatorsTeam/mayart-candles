import axios from 'axios'
import { FC, Suspense, useState } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { BASE_API } from '../../../utils/api-connect';

interface IAdmins {
    name: string,
    _id: string,
    role?: "user" | "admin"
}

const Users: FC = () => {
    const { admins } = useLoaderData() as { admins: Array<IAdmins> }
    const [allUser, setAllUser] = useState<Array<IAdmins>>(admins)
    const [loader, setLoader] = useState<boolean>(false)

    const handleRemoveUser = async (name: string, id: string) => {
        try {
            const confirm = window.confirm(`למחוק משתמש השם ${name}`)
            if (!confirm) return;
            setLoader(true)
            const { data: { continueWork, message } } = await axios.delete("http://localhost:7575/admin/remove-admin", { data: { id } })
            if (continueWork) {
                setAllUser(allUser.filter(us => { return us._id !== id }))
                return alert(message)
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoader(false)
        }

    }
    return (
        <Suspense fallback={<h1 className='no_data_text'>Loading...</h1>}>
            <Await resolve={admins}>
                <section className='user'>
                    <div className='user-view'>
                        <h1>משתמשים עם גישה</h1>
                        <div className='userName'>
                            {allUser.map((adm, idx) => (
                                <div className='gridUserName' key={idx}>
                                    <div className='gridName' key={idx}>
                                        <p className='iconName'>{adm.name.slice(0, 2).toLocaleUpperCase()}</p>
                                        <p>{adm.name}</p>
                                    </div>
                                    {adm.role === "user" && <button
                                        disabled={loader}
                                        className='delete'
                                        onClick={() => handleRemoveUser(adm.name, adm._id)}
                                    ><DeleteOutlineIcon /></button>}
                                </div>
                            ))}
                        </div>
                        <Link
                            className={`adminBtn ${loader ? "form-btn_disable" : "form-btn_active"}`}
                            to="/dashboard/regist"> <img className='addIcon' src="/icons/dashboard/user-add-plus.svg" alt="add user icon" /> הוספת משתמש</Link>
                    </div>
                </section>
            </Await>
        </Suspense>
    )
}

export default Users

const hendleGetAdmins = async () => {
    const token = sessionStorage.getItem('token')
    const { data } = await axios.get(`${BASE_API}/admin/all-admins?token=${token}`)
    const { continueWork, admins } = data;
    if (continueWork) return admins
    if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const adminsLoader = async () => {
    return defer({
        admins: await hendleGetAdmins()
    })
}