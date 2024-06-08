import { redirect } from "next/navigation";
export default function Home() {
  redirect("/V1/Hero");
  return <></>;
}
