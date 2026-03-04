import { Outlet ,Link} from "react-router-dom";

function Dashboard()
{
    return <>
         <h1>Dashboard</h1>

         <nav>
            <Link to="user">User</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="admin">Admin</Link>
         </nav>
         <hr/>
         <Outlet/>

    </>
    
   
}
export default Dashboard;