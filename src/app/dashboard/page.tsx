"use client";
import LogoutButton from "@/components/LogoutButton";
import { withAuth } from "@/helpers/withAuth";

function Dashboard() {
  return (
    <div>
      <h1>dashbaord</h1>
      <LogoutButton />
    </div>
  );
}

export default withAuth(Dashboard);
