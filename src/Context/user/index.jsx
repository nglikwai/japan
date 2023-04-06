import React, { useContext, useState } from "react";

const UserContext = React.createContext({ setUser: () => "" });

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [locations, setLocations] = useState([]);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
          noticeOpen,
          setNoticeOpen,
          notice,
          setNotice,
          locations,
          setLocations,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
