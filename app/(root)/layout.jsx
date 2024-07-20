import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="dark:bg-neutral-900 ">
        <Nav />
        <div className="w-full 2xl:px-60">
          <div className="p-4 sm:p-6">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
