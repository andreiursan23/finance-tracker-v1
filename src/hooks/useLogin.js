import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // Sign the user in
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);

      // Dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

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

  return { error, isPending, login };
};
