import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "IamKunal" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        console.log(username)
        console.log(password)

        // DB request to chect if user is exists or not
        const user = {
          id: "1",
          name: "Kunal",
          username: "IamKunal",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
