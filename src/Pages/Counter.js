import React from 'react'
import { Link } from 'react-router-dom'


class Counter extends React.Component{

    render(){
        return(
            <div>
                <p>Counter Page</p>
                <br/>
                <Link to='/home'>Ayok ke Home</Link>
            </div>
        )
    }
}

export default Counter