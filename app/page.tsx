//app/page.tsx
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      <div>
        <UserButton afterSignOutUrl="/"/>
      </div>

      <h1>Welcome {user?.username}</h1>
    </div>
  )
}