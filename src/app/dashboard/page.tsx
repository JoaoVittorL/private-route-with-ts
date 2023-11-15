"use client";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { Button } from "./styles";

export default function Dashboard() {
  const router = useRouter();

  function handleLogout() {
    Cookie.remove("auth_token");
    router.push("/");
  }

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
