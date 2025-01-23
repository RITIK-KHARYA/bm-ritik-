import { getSession } from "@/actions/session";
import BookmarkTabs from "@/components/bookmark-tab";

export default async function Dashboard() {
  const session = await getSession();
  return (
  <div className="px-4">
    <BookmarkTabs />
    

  </div>)
}