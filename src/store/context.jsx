import axios from "axios";
import { createContext, useState } from "react";

export const OneCloudContext = createContext();

export default function OneCloudProvider({ children }) {
    const [user, setUser] = useState(null);

    async function login({ email, password, country, projectType }) {
        if (!email || !password || !country || !projectType) {
            return { success: false, message: "Missing login information." };
        }

        const domainMap = {
            US: "us.onecloudstorage.com",
            UK: "uk.onecloudstorage.com",
            India: "onecloudstorage.com",
        };

        const domain = domainMap[country];
        const isMedical = projectType === "Medical";
        const pathPrefix = isMedical ? "medicaldatavault/" : "";

        const loginURL = `https://${domain}/${pathPrefix}CDTLoginProcess.php`;
        const redirectURL = `https://${domain}/${pathPrefix}home.php`;

        try {
            const formData = new URLSearchParams();
            formData.append("user", email);
            formData.append("pass", password);
            formData.append("branch", "");
            formData.append("company", "");

            const response = await axios.post(loginURL, formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true,
            });

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
    );
}
