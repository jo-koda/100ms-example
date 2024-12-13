import NextAuth, { DefaultSession, Session, User } from 'next-auth';
import { AdapterSession, AdapterUser } from 'next-auth/adapters';
import Credentials from 'next-auth/providers/credentials';
import camelize from 'camelize';
// import { signInAccount } from './services/room-services';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {} & DefaultSession['user'];
    token: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // authorize: async (credentials) => {
      //   const formData = new FormData();
      //   formData.append('email', credentials.email as string);
      //   formData.append('password', credentials.password as string);
      //   const response = await signInAccount({
      //     formData,
      //   });
      //   const user = await response.json();

      //   if (response.ok) {
      //     return camelize(user);
      //   } else {
      //     throw new Error(
      //       JSON.stringify({
      //         message: user.error,
      //         status: response.status,
      //       }),
      //     );
      //   }
      // },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      user && (token.user = user);
      if (trigger === 'update') {
        return session;
      }
      return token;
    },
    session({ session, token }) {
      session = token.user as { user: AdapterUser } & AdapterSession & Session;
      return session;
    },
  },
});
