import Comp2 from "./Comp2"


const Component = (props) => {
    const {message,message2} = props

    const styles = {
        backgroundColor:'green',
        color:'yellow',
        padding:'10px'
    }

    return(
        <div className="comp1">
            <h2 className="">My First Component!</h2>  
            <p>{message}</p>
            <p>{message2}</p>
            <Comp2 message={message} message2={message2}  /> 
        </div>
    )
}

export default Component