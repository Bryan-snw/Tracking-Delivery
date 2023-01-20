import classes from "./footer.module.css";
import Link from "next/link";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer} id="footer">
      <div className={classes.logo}>LOGO</div>

      <div className={classes.info}>
        <ul>
          <li>
            <i className="fa-solid fa-location-dot"></i> Jln. Yang Pernah Ada No. 11, Kota Wakanda, 90xx Indonesia
          </li>
          <li>
            <i className="fa-brands fa-whatsapp"></i> 08xxxxxxxxxxxx
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i> test@Test.com
          </li>
        </ul>
      </div>
      <hr className={classes.hr} />

      <div className={classes.medsos}>
        <Link href="">
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link href="">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link href="">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link href="">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>

      <p className={classes.copyright}>&copy; Perusahaan {year}</p>
    </footer>
  );
}

export default Footer;
