import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from '../../../lib/mongodb';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",        // Ensures the user is prompted for consent every time they log in
                    access_type: "offline",   // Enables long-lived access tokens for offline access
                    response_type: "code",    // Ensures the response is in the form of an authorization code
                },
            },
        }),
    ],
    // Additional NextAuth configurations (if any)
});