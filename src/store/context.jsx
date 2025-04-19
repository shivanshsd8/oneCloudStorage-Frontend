import { createContext, useState } from "react";

export const OneCloudContext = createContext();

export default function OneCloudProvider({children}){
    const [test,setTest] = useState(0)

    return (
        <OneCloudContext.Provider value={{test,setTest}}>
            {children}
        </OneCloudContext.Provider>
    )
}
