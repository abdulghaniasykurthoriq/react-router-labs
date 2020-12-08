import React from 'react'
import { Link } from 'react-router-dom'


class Profile extends React.Component{

    render(){
        return(
            <div>
                <p>Profile Page</p>
                <br/>
                <Link to='/counter'>Ayok ke Counter</Link>
            </div>
        )
    }
}

export default Profile