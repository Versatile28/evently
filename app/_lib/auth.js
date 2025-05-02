import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createUser, getUser } from "./data-service";
 
const authConfig = {
   providers: [
      Google({
         clientId: process.env.AUTH_GOOGLE_ID,
         clientSecret: process.env.AUTH_GOOGLE_SECRET,
      }),
   ],
   callbacks: {
      authorized({auth, request}) {
         return !!auth?.user;
      },
      async signIn({ user, account, profile }) {
         try {
            const { email, name } = user;
            const existingUser = await getUser(email);

            if(!existingUser){
               await createUser({ 
                  email: email, 
                  fullName: name,
                });                
            }
            return true;
         } catch {
            return false;
         }
      },
      async session({ session, guest }){
         const user = await getUser(session.user.email);
         session.user.userId = user.id;
         return session;
      }
   },
   pages: {
      signIn: "/login",
   }
};

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig);