import axios from "axios";
import { createContext, useState } from "react";

export const OneCloudContext = createContext();

export default function OneCloudProvider({ children }) {
    const [user, setUser] = useState(null);

    // async function login({ email, password, country, projectType }) {
    //     try {
    //         const response = await axios.post(
    //             "https://us.onecloudstorage.com/CDTLoginProcess.php",
    //             {
    //                 user: email,
    //                 pass: password,
    //                 branch: '',
    //                 company: "neridioSystems",
    //             },
    //             {
    //                 withCredentials: true // <-- 🔥 this is the fix
    //             }
    //         );


    //         if (response.data.success) {
    //             setUser({ email, projectType, country });
    //             alert('logged in!!')
    //             window.location.href = 'https://us.onecloudstorage.com/home.php'
    //             return { success: true, message: response.data.msg };
    //         } else {
    //             alert('Login failed!!')
    //             return { success: false, message: response.data.msg };
    //         }
    //     } catch (error) {
    //         console.error("Login error:", error);
    //         return { success: false, message: "Network error or server unavailable." };
    //     }
    // }

    // async function login({ email, password, country, projectType }) {
    //     try {
    //         const response = await axios.post(
    //             "https://us.onecloudstorage.com/CDTLoginProcess.php",
    //             {
    //                 user: email,
    //                 pass: password,
    //                 branch: '',
    //                 company: "neridioSystems",
    //             },
    //             {
    //                 withCredentials: true
    //             }
    //         );

    //         if (response.data.success) {
    //             setUser({ email, projectType, country });
    //             alert('Logged in!!');
    //             window.location.href = 'https://us.onecloudstorage.com/home.php';
    //             return { success: true, message: response.data.msg };
    //         } else {
    //             alert('Login failed!!');
    //             return { success: false, message: response.data.msg };
    //         }
    //     } catch (error) {
    //         console.error("Login error:", error);
    //         return { success: false, message: "Network error or server unavailable." };
    //     }
    // }


    async function login({ email, password, country, projectType }) {
        if (!email || !password || !country || !projectType) {
            return { success: false, message: "Missing login information." };
        }
    
        const domainMap = {
            US: "us.onecloudstorage.com",
            UK: "uk.onecloudstorage.com",
            India: "india.onecloudstorage.com",
        };
    
        const domain = domainMap[country];
        const isMedical = projectType === "Medical";
        const pathPrefix = isMedical ? "medicaldatavault/" : "";
    
        const loginURL = `https://${domain}/${pathPrefix}CDTLoginProcess.php`;
        const redirectURL = `https://${domain}/${pathPrefix}home.php`;
    
        try {
            const response = await axios.post(
                loginURL,
                {
                    user: email,
                    pass: password,
                    branch: '',
                    company: "neridioSystems",
                },
                {
                    withCredentials: true,
                }
            );
    
            if (response.data.success) {
                setUser({ email, projectType, country });
                window.location.href = redirectURL;
                return { success: true, message: response.data.msg };
            } else {
                return { success: false, message: response.data.msg };
            }
        } catch (error) {
            console.error("Login error:", error);
            return { success: false, message: "Network error or server unavailable." };
        }
    }
    


    return (
        <OneCloudContext.Provider value={{ login, user }}>
            {children}
        </OneCloudContext.Provider>
    )
}
