import { createContext, useState } from "react";
export const firebaseContext=createContext(null)
export const authContext=createContext(null)


export default function Context({children}){
    const [User, setUser] = useState(null)
    return(
        <authContext.Provider value={{User,setUser}}>
            {children}
        </authContext.Provider>
    )
}
