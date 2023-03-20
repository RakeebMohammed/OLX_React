import { createContext, useState } from "react";
export const postContext=createContext(null)
export default function Postesh({children}){
    const [PostDetails, setPostDetails] = useState(null)
    
    return(
<postContext.Provider value={{PostDetails,setPostDetails}}>
    {children}
</postContext.Provider>
    )
}