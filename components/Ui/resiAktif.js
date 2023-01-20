import Link from "next/link";
import classes from "./resiAktif.module.css";
export default function ResiAktif(props) {
  const { nomorResi, kotaPengirim, kotaPenerima } = props;
  const link = `/rahasia/home/edit/${nomorResi}`;
  return (
    <Link href={link}>
      <div className={` ${classes.card}`}>
        {nomorResi} | {kotaPengirim} - {kotaPenerima}
      </div>
    </Link>
  );
}
