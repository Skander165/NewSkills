import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import User from "../../../models/User";
import { compare } from "bcryptjs";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      // profile(profile) {
      //   return {
      //     id: profile.id,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.avatar_url,
      //     role: "USER",
      //   };
      // },
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // credentials: {
      //   email: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await User.findOne({ email: credentials.email });
        console.log(res);
        if (!res) {
          throw new Error("No user found with this email");
        }

        const doMatch = await compare(credentials.password, res.password);
        if (!doMatch || res.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return res;
      },
    }),

    // ...add more providers here
  ],
  //Configure adapters
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "NewSkills",
  }),
  secret: process.env.NEXTAUTH_SECRET,
  //pages
  // pages: {
  //     signIn: '/auth/signin',
  //     signOut: '/auth/signout',
  //     error: '/auth/error', // Error code passed in query string as ?error=
  //     verifyRequest: '/auth/verify-request', // (used for check email message)
  //     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
};
export default NextAuth(authOptions);
