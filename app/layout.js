import "../public/styles.css";
import { Inter } from "next/font/google";
import Nav from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NetWorks",
  description:
    "An app for streamlining networking by organizing all of your contacts in one place. Built by the 100devs community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
