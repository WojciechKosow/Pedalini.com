
import { getCurrentUser } from "@/lib/auth/current-user";
import Footer from "./components/Footer";
import LandingPage from "./LandingPage/landingpage";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen flex flex-col bg-[#08080f]">
      <LandingPage name={user?.name} />
      <Footer />
    </div>
  );
}
