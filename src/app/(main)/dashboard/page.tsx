import { getSession } from "@/actions/session";

export default async function Dashboard() {
  const session = await getSession();
  return (
  <div className="px-4">
    hehe
    

  </div>)
}