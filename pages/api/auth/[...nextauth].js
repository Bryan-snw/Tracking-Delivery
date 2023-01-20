import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { user, password } = credentials;

        console.log(user, password);

        if (!user || !password) {
          throw new Error("Invalid credentials");
        }

        if (user != process.env.USER_CREDENTIALS){
          throw new Error("Invalid username");
        }

        if (password != process.env.PASS_CREDENTIALS){
          throw new Error("Invalid password");
        }

        return { user: user};
      },
    }),
  ],
});
