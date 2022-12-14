import { onAuthStateChanged, User } from "firebase/auth/react-native";
import { useEffect, useState } from "react";
import { auth } from "../../config/firebase";

export function useAuthentication() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
    return unsubscribeFromAuthStatusChanged;
  }, []);

  return { user };
}
