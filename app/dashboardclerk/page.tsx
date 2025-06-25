import { UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Page() {

  // ✅ auth est synchrone
  const { userId } = await auth();
  
  if (!userId) {
    return <div>Sign in to view this page</div>;
  }

  // ✅ currentUser est async
  const user = await currentUser();
  
  return (
    <div>
      <p>Welcome, {user?.firstName}!</p>
      <p>Your e-mail is {user?.emailAddresses?.[0]?.emailAddress}!</p>

      <div>
        <SignInButton />
        <SignUpButton />
        <UserButton />
      </div>
    </div>
  );
}