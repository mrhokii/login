const Greeting = (props)=>{
    const UserGreeting= () =>{return <h1>Welcome to my website <span className="c-b">{document.getElementById("user").value}</span></h1>}
    const GuestGreeting= () =>{return <h1>Please Sign Up in website</h1>}

    let show = GuestGreeting () 

    if(props.LogIn){
        show = UserGreeting ()
    }
    return(
        <div>
            {show}
        </div>
    )
}
export default Greeting