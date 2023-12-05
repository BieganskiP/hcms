import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";

function extractErrorDetails(error: unknown): [string, string] {
  if (error instanceof FirebaseError) {
    return [error.code, error.message];
  } else {
    return ["auth/unknown", "An unknown error occurred"];
  }
}

export const signUpWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    return user;
  } catch (error) {
    const [errorMessage] = extractErrorDetails(error);
    throw new Error(errorMessage);
  }
};

export const signInWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    return user;
  } catch (error) {
    const [errorMessage] = extractErrorDetails(error);
    throw new Error(errorMessage);
  }
};

export const signUpWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential) {
      throw new Error("No credential returned from Google sign in");
    }

    const user = result.user;

    return user;
  } catch (error) {
    const [errorMessage] = extractErrorDetails(error);
    throw new Error(errorMessage);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);

    toast.success("Logout successfull");
  } catch (error) {
    const [errorCode, errorMessage] = extractErrorDetails(error);
    toast.error(`Error during sign out: ${errorCode}, ${errorMessage}`);
    throw new Error(errorMessage);
  }
};
