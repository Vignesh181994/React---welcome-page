import { Link } from "react-router-dom"
import './NavBar.css';
import poke from './medshyne-logo.png'


export default function NavBar(props){


    return ( <body  >
    
               <div className="flex">
                    <div>
                             <img src={poke} alt="Register" className="li"></img>
                     </div>
                     <div className="list">
                            <span className="li1"><Link to="/login" >
                                     Home</Link></span>
                            <span className="li2"><Link to="/About" >
                                     About Us</Link></span>
                            <span className="li3"><Link to="/services" >
                                    services</Link></span>
                            <span className="li4"><Link to="/contactUs" >
                                    contact Us</Link></span> 
                            <span className="lii"></span> 
                            <span className="li5"><Link to="/signup" >
                                    Register</Link></span>
                            <span className="li6"><Link to="/login" >
                                    Log In</Link></span> 
                      </div>
                        
                </div>
                      <hr className="verticalline"></hr>
                <div className="flex1">
                        
                        <div className="flexcontainer">
                            <div className="text1">We take care of<br></br> your Health,</div>
                            <div  className="text2">Lorem ipsum dolor sit amet consectetur adipiscing elidolor <br></br> mattis sit phasellus mollis sit aliquam sit nullam neques.</div>
                            <div className="flex">
                        <div>
                            <button className="but1">Get Started<span> &#8594;</span></button>
                        </div>
                        <div>
                            <button className="but2">Learn more</button>
                        </div>
                        </div>
                        </div>
                        
                </div>
            </body>)
}