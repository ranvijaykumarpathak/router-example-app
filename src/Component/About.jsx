import { useNavigate } from "react-router-dom"

function About()
{
    const navigate =useNavigate();
    return( <>
     <h1 className="text-warning">About  Page </h1>

    <button className="btn btn-primary" onClick={()=>navigate("/")}>Home</button>
    <button className="btn btn-warning" onClick={()=>navigate("/contact-us")}>Contact</button>

    </>
    );
}
export default About