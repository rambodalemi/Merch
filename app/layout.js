import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import TanstackProvider from "@/providers/TanstackProvider";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TanstackProvider>
        <body className={inter.className}>{children}
        <Toaster />
        </body>
      </TanstackProvider>
      <PrelineScript />
    </html>
  );
}
