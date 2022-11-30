import Head from "next/head";
import Link from "next/link";
import Logo from "../components/icons/logo";
import Navbar from "./navbar";

export default function Header({ children }) {
  return (
    <>
      <Head>{/* Add fonts */}</Head>
      <header className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Navbar />
      </header>
    </>
  );
}
