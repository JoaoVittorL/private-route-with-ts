"use client";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { Button } from "./styles";

export default function Home() {
  const router = useRouter();

  function handleLogin() {
    Cookie.set("auth_token", "kjahbsdajsbdkjbabdasdbabd");
    router.push("/dashboard");
  }

  return (
    <div>
      <Button onClick={handleLogin}>OI</Button>
    </div>
  );
}
