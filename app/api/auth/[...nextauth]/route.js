
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you link YOUR password check to next-auth
        // The password comes from the sign-in form
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (credentials.password === adminPassword) {
          // Any object returned here will be saved in the session `user` property
          return { id: "1", name: "Admin" };
        } else {
          // If you return null, authentication will fail
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // You can add more pages and callbacks here if needed
  // pages: {
  //   signIn: '/auth/signin',
  // }
});

export { handler as GET, handler as POST };