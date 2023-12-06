"use client";
import { withAuth } from "@/helpers/withAuth";

function Dashboard() {
  return (
    <div>
      <h1>dashbaord</h1>
    </div>
  );
}

export default withAuth(Dashboard);
