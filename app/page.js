'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import AppleSignIn from './components/AppleSignIn';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Login with Apple</h1>
      {!session ? (
        <>
          <p>You are not signed in</p>
          <AppleSignIn>
            <button onClick={() => signIn('apple')}>Sign in with Apple</button>
          </AppleSignIn>
        </>
      ) : (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}