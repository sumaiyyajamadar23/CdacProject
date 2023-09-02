import react from "react";
import { useParams } from 'react-router-dom';
import AuthenticateService from "./AuthenticateService";
import SideBar from "./SideBar";


function Welcome()
{
    const { username } = useParams();
  const myStyle={
    backgroundImage: 
"url('https://images.unsplash.com/photo-1630002931917-964ccb95d0a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80')",
    height:'100vh',
    marginTop:'0px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const sidebarStyle={
    backgroundImage: 
"url('https://i.pinimg.com/736x/77/2b/fd/772bfd4570d9bd8b7a90785bbd460df7.jpg')",
    height:'100vh',
    marginTop:'0px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

   
     
    var handleOrder = ()=>{
      window.location = `/artist-order/${username}`;
    }
    var handleProduct = ()=>{
        window.location = `/artist-product`;
      }

    return(
        <div style={myStyle}>
            <SideBar/>
            
        </div>
 
    );
}

export default Welcome;