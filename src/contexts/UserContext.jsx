import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState(sampleUserData);
  const [userId, setUserId] = useState(null);

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};
const sampleUserData = {
  name: "Apoorv Goyal",
  email: "",
  month: 1,
  day: 4,
  year: 2002,
  password: "",
  username: "",
  id: "",
  bio: "Full Stack Developer👨‍💻",
  website: "UserProfile.com",
  location: "India",
};
