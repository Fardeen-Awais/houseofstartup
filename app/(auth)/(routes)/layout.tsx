import { homeProfile } from "@/lib/home-profile";
import { redirect } from "next/navigation";

const AutoLayout = async({children}:{children:React.ReactNode}) => {
  const profile = await homeProfile();
  if(profile){
    return redirect('/home')
  }
    return (
      <div className="flex items-center justify-center min-h-screen p-10">
          {children}
      </div>
    )
  }
  
  export default AutoLayout