import { connectDB } from "@/lib/mongodb";
import User from "@/models/user.model";

export default async function createUser(user:any){
    try {
        await connectDB();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
      } catch (error) {
        console.log(error);
      }
}