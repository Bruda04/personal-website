import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text font-sans selection:bg-primary selection:text-background relative overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-secondary) 1px, transparent 1px), 
                                      linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />

        <main className="max-w-6xl mx-auto pt-20 p-6 w-full grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
