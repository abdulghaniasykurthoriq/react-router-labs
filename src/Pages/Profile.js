import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class Profile extends React.Component{
    
    goBack = () =>{
        console.log(this.props, 's')
        this.props.history.goBack();
    }

    render(){
        console.log('props:', this.props)
        return(
            <div>
                <p>Profile Page</p>
                <br/>
                <Link to='/counter'>Go to Counter {('->')}</Link><br/><br/>
                {/* <Link to='/home'>{('<-')} Back to home</Link> */}
                <button onClick={() => this.goBack() }>Go Back</button>
            </div>
        )
    }
}

export default withRouter(Profile)