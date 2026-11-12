import { getCurrentUser } from "@/lib/auth/current-user";

import Navbar from "./components/Navbar";
import LoginNavbar from "./components/loginnavbar";
import Footer from "./components/Footer";
import LandingPage from "./LandingPage/landingpage";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen flex flex-col bg-[#08080f]">
      {user ? <LoginNavbar name={user.name} /> : <Navbar />}
      <LandingPage name={user?.name} />
      <Footer />
    </div>
  );
}
