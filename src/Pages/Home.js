import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class Home extends React.Component{
    // this is for handle Link 
    goBack = () =>{
        this.props.history.goBack();
    }
    render(){
        console.log(this.props, 'l')
        return(
            <div>
                <p>Home Page</p>
                <br/>
                <Link to='/profile'><button>Go to Profile {('->')}</button></Link>
                <button onClick={() => this.goBack() }>Go Back</button> <br/>
                <Link to={`${this.props.match.url}/testing`}>To testing</Link>
            </div>
        )
    }
}

export default withRouter(Home)