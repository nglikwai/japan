import React, { useContext, useEffect, useState } from "react";

const UserContext = React.createContext({ setUser: () => "" });

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [notice, setNotice] = useState("載入成功");
  const [locations, setLocations] = useState([]);
  const [value, setValue] = useState();

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
          value,
          setValue,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
