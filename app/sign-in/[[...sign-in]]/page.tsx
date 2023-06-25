import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center bg-[url('https://i.imgur.com/1NB3PqP.png')] bg-cover">
      <SignIn />
    </div>
  );
}