import { getCurrentUser } from "@/lib/auth/current-user";
import Navbar from "./Navbar";
import LoginNavbar from "./loginnavbar";

export default async function NavbarWrapper(){
    const user = await getCurrentUser();

    if(user){
        return <LoginNavbar name={user.name} />;
    }

    return <Navbar />
}