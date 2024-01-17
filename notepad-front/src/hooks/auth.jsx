import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const res = await api.post("/sessions", { email, password });
      const { user, token } = res.data;

      localStorage.setItem("@notepad:user", JSON.stringify(user));
      localStorage.setItem("@notepad:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.res) {
        alert(error.res.data.message);
      } else {
        alert("Login failed");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@notepad:token");
    localStorage.removeItem("@notepad:user");

    setData({});
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user);
      localStorage.setItem("@notepad:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Profile Updated Successfully ");
    } catch (error) {
      if (error.res) {
        alert(error.res.data.message);
      } else {
        alert("Update Profile Failed");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@notepad:token");
    const user = localStorage.getItem("@notepad:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
