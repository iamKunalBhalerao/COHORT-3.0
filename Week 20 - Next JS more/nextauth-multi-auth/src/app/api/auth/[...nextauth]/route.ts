import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",

      credentials: {
        username: {
          lable: "Username",
          type: "text",
          placeholder: "Enter Username",
        },
        password: {
          lable: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
          id: "1",
          username: username,
          password: password,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: "123",
      clientSecret: "Dummysecret",
      // clientId: process.env.GOOGLE_CLIENT_ID,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: "123",
      clientSecret: "Dummysecret",
      // clientId: process.env.GITHUB_ID,
      // clientSecret: process.env.GITHUB_SECRET
    }),
    FacebookProvider({
      clientId: "123",
      clientSecret: "Dummysecret",
      // clientId: process.env.FACEBOOK_CLIENT_ID,
      // clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    LinkedInProvider({
      clientId: "Dummy",
      clientSecret: "Dummy",
      // clientId: process.env.LINKEDIN_CLIENT_ID,
      // clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    }),
  ],
});

export { handler as GET, handler as POST };
