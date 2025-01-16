import { getSession } from "@/actions/session";

export default async function Dashboard() {
  const session = await getSession();
  return <pre>{JSON.stringify(session, null, 2)}</pre>
}