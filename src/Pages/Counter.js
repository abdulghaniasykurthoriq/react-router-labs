import React from 'react'
// import { Link } from 'react-router-dom'


class Counter extends React.Component{

    state={
        counter:0
    }

    handleplus = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    goBack = () =>{
        this.props.history.goBack();
    }
    
    render(){
        return(
            <div>
                <p>Counter Page</p>
                <br/>

                <button onClick={() => this.setState({counter: this.state.counter - 1})}>Decrement</button>
                {this.state.counter}
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increment</button>

                <br/>
                <br/>
                {/* <Link to='/profile'>{('<-')} Back to Profile</Link> */}
                <button onClick={() => this.goBack() }>Go Back</button>
            </div>
        )
    }
}

export default Counter