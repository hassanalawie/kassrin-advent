import { redirect } from "next/navigation";

export default function Home() {
  redirect("/gifts/1");
  return null;
}
