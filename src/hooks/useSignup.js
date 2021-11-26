import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // Signup user
      const res = await auth.createUserWithEmailAndPassword(email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // Add display name to user
      await res.user.updateProfile({ displayName });

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

  return { error, isPending, signup };
};
