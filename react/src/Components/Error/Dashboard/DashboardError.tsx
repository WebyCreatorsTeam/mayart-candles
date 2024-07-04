import { FC } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const DashboardError: FC = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return  <div id="error-page">
             <h1>Oops!</h1>
             <p>Sorry, an unexpected error has occurred.</p>
             <p>
                 <i>{error.status} || {error.statusText}</i>
             </p>
         </div>
     }

     return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}

export default DashboardError;