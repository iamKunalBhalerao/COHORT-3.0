import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials:{ 
                name: {
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter Full Name"
                },
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Enter Email"
                },
                password: {
                    label: "Password",
                    type: "passwordd",
                    placeholder: "Enter Password"
                }
            },
            async authorize(credentials) {
                const name = credentials?.name
                const email = credentials?.email
                const password = credentials?.password

                const user = {
                    id: "1",
                    name: "Kunal",
                    email: "kunal@gmail.com",
                    password: "Pass@123"
                }

                if(user) {
                    return user
                } else {
                    return null
                }

            }
        })
    ]
    
})

export {handler as GET, handler as POST}