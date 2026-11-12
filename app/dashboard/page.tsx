import { getCurrentUser } from "@/lib/auth/current-user";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/loginPage");
  }

  return (
    <main>
      <h1>Welcome, {user.email}</h1>
    </main>
  );
}
