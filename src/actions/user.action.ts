import { connectDB } from "@/lib/mongodb";
import User from "@/models/user.model";

export default async function createUser(user:any){
    try {
        await connectDB();
        console.log(global)
        const newUser = await User.create(user);
        console.log("newUser",newUser)
        return JSON.parse(JSON.stringify(newUser));
      } catch (error) {
        console.log(error);
      }
}