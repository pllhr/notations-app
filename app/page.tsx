import { auth } from "../auth";
import NotationsApp from "../components/NotationsApp";
import { getUserByEmail } from "../lib/data";

export default async function Home() {
  const session = await auth();
  let user = session?.user;

  if (session?.user?.email) {
    const dbUser = await getUserByEmail(session.user.email);
    if (dbUser) {
      user = {
        ...session.user,
        ...dbUser, // This includes the 'image' from the DB
      };
    }
  }

  return <NotationsApp user={user} />;
}