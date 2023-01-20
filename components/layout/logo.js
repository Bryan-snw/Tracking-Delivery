import classes from "./logo.module.css";
import Link from "next/link";

function Logo() {
  return (
    <Link href='/'>
      <h1 className={`center ${classes.logo}`}>LOGO</h1>
    </Link>
  );
}

export default Logo;
