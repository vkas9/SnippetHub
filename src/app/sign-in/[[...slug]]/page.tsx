import { SignIn } from "@clerk/nextjs";



export default function Signin() {


  return (
    <div className="flex items-center  justify-center h-screen">
      <SignIn 
        // appearance={{
        //   elements: {
        //     formButtonPrimary: {
        //       backgroundColor: "red",
        //     },
        //   },
        // }}
        
        path="/sign-in" // Ensure this path is correct
      />    
    </div>
  );
}
