import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // Sign the user out
    try {
      await auth.signOut();

      // Dispatch logout action
      dispatch({ type: "LOGOUT" });

      // Update state
      if (!isCancelled) {
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        console.log(error.message);
      }
    } finally {
      if (!isCancelled) {
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, logout };
};
