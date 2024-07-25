export const mailText = (
    mailTitle: string,
    details: string,
    orderCandles: any,
    totalPay: number,
    orderNumber: string,
    customerName: string,
    customerTelNo: string,
) => {
    const html = `
        <head>
            <style>
                table,
                th,
                td {
                    border: 1px solid black;
                    font-size: 18px;
                }

                p {
                    font-size: 18px;
                }
            </style>
        </head>
        <div style="text-align: center;" dir="rtl">
            <h1 style="color: rgb(34,139,34)">${mailTitle}</h1>
            <div>
                    <p>מספר הזמנה: <b>${orderNumber}</b></p>
                    <p>שם המזמין: <b>${customerName}</b></p>
                    <p>מספר טלפון המזמין: <a href="tel:${customerTelNo}"><b>${customerTelNo}</b></a></p>
                    ${details}
            </div>
            <h2>פירוט הזמנה</h2>
            <table style="width:100%">
                <thead>
                    <tr>
                        <td><b>מוצר</b></td>
                        <td><b>צבע</b></td>
                        <td><b>ריח</b></td>
                        <td><b>כמות</b></td>
                        <td><b>מחיר</b></td>
                        <td><b>לתשלום</b></td>
                    </tr>
                </thead>
                <tbody>
                    ${orderCandles}
                </tbody>
                <tfoot>
                    <tr>
                        <td class="total"><b>סה"כ לתשלום</b></td>
                        <td><b>${totalPay} ש"ח</b></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        `
    return html
}