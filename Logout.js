import React from 'react';
import {Redirect} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function Logout()
{
    localStorage.clear();
   
    return(
        <div>
            <Redirect to='/login' />
        </div>
    )
}
export default Logout;