import classes from "./detailAktivitas.module.css";

export default function DetailAktivitas(props) {
  const { Tanggal, Jam, Keterangan } = props.aktivitas;

  const formattedDate = new Date(Tanggal).toLocaleString("ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const hari = new Date(Tanggal).toLocaleString("ID", {
    weekday: "long",
  });

  return (
    <li>
      <div className={classes.aktiv}>
        <div className={classes.tanggal}>
          <span className={classes.hari}>{hari}</span>
          {formattedDate}
        </div>
        <div className={classes.desc}>
          <span className={classes.jam}>{Jam} </span>
          {Keterangan}
        </div>
      </div>
    </li>
  );
}
