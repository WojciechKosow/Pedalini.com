
import { getCurrentUser } from "@/lib/auth/current-user";
import Help from "./Help";

export default async function HelpPage() {
  const user = await getCurrentUser();

  return <Help isLoggedIn={!!user} />;
}
