import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import {
  signUpWithGoogle,
  signInWithEmailPassword,
} from "@/helpers/userFunctions";
import { toast } from "react-toastify";

export default function Home() {
  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignInWithEmail = async () => {
    try {
      if (!email || !password) {
        toast("Email and password are required");
        return;
      }
      await signInWithEmailPassword(email, password);
      router.push("/dashboard");
    } catch (error: any) {
      const errorMessage = error.message || "An unknown error occurred";
      if (errorMessage === "auth/invalid-credential") {
        toast("Incorrect login credentials");
      } else {
        toast("Troubles logging in, please try again");
      }
    }
  };
  return (
    <main className="flex justify-center items-center h-screen ">
      <form>
        <TextInput
          label="Email"
          id="email"
          type="email"
          placeholder="Email"
          htmlFor="email"
        />
        <TextInput
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          htmlFor="password"
        />
        <Button
          variant="primary"
          type="button"
          action={handleSignInWithEmail}
        />
        <Button variant="secondary" type="button" action={handleGoogleSignUp} />
      </form>
    </main>
  );
}
