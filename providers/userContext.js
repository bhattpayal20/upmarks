import { createContext, useState, useEffect } from "react";
// import { refreshUserData } from "src/adapters/user";

const UserContext = createContext([{}, () => {}, () => {}]);

function UserProvider(props) {
  const [user, setUser] = useState(props.userData);
  return (
    <UserContext.Provider value={[user, setUserData, logout, refreshUser]}>
      {props.children}
    </UserContext.Provider>
  );

  function refreshUser() {
    refreshUserData().then((user_data) => setUser(user_data));
  }

  function setUserData(_user) {
    // _user = { ...user, ..._user };
    setUser(_user);
    // storeUserData(_user);
  }

  function logout() {
    removeDataFromCookie();
    setUser({ isAuthenticated: false });
  }
}

export { UserContext, UserProvider };
