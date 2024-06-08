import { SideBar } from "@/Components/SideBar/SideBar";
import { Nav } from "@/Components/Nav/Nav";
import { Landing as LandingComponent } from "@/Components/Landing/Landing";
export default function LandingPage() {
  return (
    <section className=" bg-slate-300 w-[100vw] h-fit flex">
      <SideBar />
      <Nav />
      <LandingComponent />
    </section>
  );
}
