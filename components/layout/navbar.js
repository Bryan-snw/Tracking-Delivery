import classes from "./navbar.module.css";
import Logo from "./logo";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Navbar() {
  const { data: session } = useSession();
  const router = useRouter()

  function logOutHandler() {
    router.replace("/rahasia");
    signOut();
    // alert("CLick")
  }

  return (
    <div className={`center ${classes.navbar}`}>
      <Logo />
      <nav className={classes.nav}>
        {/* Have a Session (Admin) */}
        {session && <Link href="/rahasia/home">Home</Link>}
        {session && (
          <Link href="javascript:" onClick={logOutHandler}>
            Log Out
          </Link>
        )}
        {!session && <Link href="/about">About</Link>}
        {!session && <Link href="#footer">Contact</Link>}
      </nav>
    </div>
  );
}

export default Navbar;
