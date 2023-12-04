import { useRouter } from "next/navigation";
import { logout } from "@/helpers/userFunctions";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Logout failed:", error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
