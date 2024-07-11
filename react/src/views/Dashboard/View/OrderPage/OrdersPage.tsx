import axios from 'axios'
import { useState, Suspense, Fragment, FC } from 'react'
import { Await, defer, Link, useLoaderData } from 'react-router-dom'
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, IconButton, Collapse, Typography, Paper, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LaunchIcon from '@mui/icons-material/Launch';
import { red } from '@mui/material/colors';

interface ICandles {
    name: string,
    color: string,
    fragrance: string,
    description: string,
    quantity: number,
    price: number,
    _id: string
}

interface IOrders {
    _id: string
    name: string
    telNumber: string
    candles: Array<ICandles>
    createdAt: string
}


interface IRow {
    order: IOrders
    hendleDeleteOrder: Function
}

const Row: FC<IRow> = ({ order, hendleDeleteOrder }) => {
    const [open, setOpen] = useState(false);

    const totalPay = (order: IOrders) => {
        let totalPrice = 0;
        order.candles.forEach((candle: ICandles) => {
            totalPrice += candle.quantity * candle.price
        })
        return totalPrice
    }

    return (
        <Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {order._id.slice(-5, order._id.length)}
                </TableCell>
                <TableCell align="center">{order.name}</TableCell>
                <TableCell align="center">{order.telNumber}</TableCell>
                <TableCell align="center">{order.createdAt.slice(0, 10)}</TableCell>
                <TableCell align='center'>
                    <DeleteOutlineIcon
                        fontSize="large"
                        sx={{ color: red[700] }}
                        onClick={() => hendleDeleteOrder(order._id)}
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div" align="right">
                                פירוט הזמנה
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">קישור לנר</TableCell>
                                        <TableCell align="center">מוצר</TableCell>
                                        <TableCell align="center">צבע</TableCell>
                                        <TableCell align="center">ריח</TableCell>
                                        <TableCell align="center">כמות</TableCell>
                                        <TableCell align="center">חיר</TableCell>
                                        <TableCell align="center">סה"כ ש"ח</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {order.candles.map((ord) => (
                                        <TableRow key={ord._id}>
                                            <TableCell component="th" scope="row" align="center">
                                                <Link to={`/dashboard/candle/${ord._id}`}>
                                                    <LaunchIcon />
                                                </Link>
                                            </TableCell>
                                            <TableCell align="center">{ord.name}</TableCell>
                                            <TableCell align="center">{ord.color}</TableCell>
                                            <TableCell align="center">{ord.fragrance}</TableCell>
                                            <TableCell align="center">{ord.quantity}</TableCell>
                                            <TableCell align="center">{ord.price}</TableCell>
                                            <TableCell align="center">{ord.price * ord.quantity}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell />
                                        <TableCell align="center" colSpan={2}>סה"כ לתשלום</TableCell>
                                        <TableCell align="center"><b>{totalPay(order)}</b></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}

const OrdersPage = () => {
    const { orders } = useLoaderData() as { orders: Array<IOrders> }
    const [allOrders, setAllOrders] = useState<Array<IOrders>>(orders)

    const hendleDeleteOrder = async (id: string) => {
        const confirm = window.confirm("למחוק את ההזמנה?")
        if(!confirm) return;
        const token = sessionStorage.getItem('token')
        const { data } = await axios.delete(`https://mayart-candles-api.vercel.app/orders/delete-order?token=${token}`, { data: { id } })
        const { continueWork, message } = data;
        console.log(data)
        if (continueWork) {
            setAllOrders(orders => orders.filter((order) => order._id !== id))
            return alert(message)
        }
        if (!continueWork) return alert("הראה שגיאה, נסה שנית")
    }

    return (
        <Suspense>
            <Await resolve={orders}>
                <section>
                    <h1>הזמנות</h1>
                    <section>
                        <TableContainer component={Paper}>
                            <Table aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell align="center">מספר הזמנה</TableCell>
                                        <TableCell align="center">שם המזמין</TableCell>
                                        <TableCell align="center">מספר טלפון</TableCell>
                                        <TableCell align="center">תאריך יצירת הזמנה</TableCell>
                                        <TableCell align="center">מחיקה</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {allOrders.map((order: any) => (
                                        <Row key={order._id} order={order} hendleDeleteOrder={hendleDeleteOrder} />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </section>
                </section>
            </Await>
        </Suspense>
    )
}

export default OrdersPage

const hendleGetOrders = async () => {
    const token = sessionStorage.getItem('token')
    const { data } = await axios.get(`https://mayart-candles-api.vercel.app/orders/get-orders?token=${token}`)
    const { continueWork, order } = data;
    if (continueWork) return order
    if (!continueWork) return alert("הראה שגיאה, נסה שנית")
}

export const ordersLoader = async () => {
    return defer({
        orders: await hendleGetOrders()
    })
}