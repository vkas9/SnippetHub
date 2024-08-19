import { connectDB } from "@/lib/mongodb/mongodb";
import User from "@/models/user.model";

export default async function createUser(user:any){
    try {
        await connectDB();
        console.log(global)
        const isUserExist=await User.findOne({clerkId:user?.clerkId});
        console.log("isUserExist---------------------------------------------------->",isUserExist)
        if(isUserExist){
          console.log("user Already exist----------------------------------------------------------------------------------------------------------------------")
          return "user Already exist"
        }
        const newUser = await User.create(user);
        console.log("newUser",newUser)
        return JSON.parse(JSON.stringify(newUser));
      } catch (error) {
        console.log(error);
      }
}