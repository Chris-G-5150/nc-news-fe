import { createContext, useState } from "react";

export const userContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({"username":"grumpy19"})

    return (
        
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>    
        
    )
}