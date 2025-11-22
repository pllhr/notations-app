import { auth } from "../auth";
import NotationsApp from "../components/NotationsApp";

export default async function Home() {
  const session = await auth();

  return <NotationsApp user={session?.user} />;
}