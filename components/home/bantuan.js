import classes from "./bantuan.module.css";

function Bantuan() {
  return (
    <div className={`card ${classes.bantuan}`}>
      <div className={classes.cardInfo}>
        <h4 className={classes.title}>Apa itu Resi?</h4>
        <p className={classes.desc}>
          Nomor resi adalah nomor yang diberikan oleh jasa ekspedisi atas paket
          yang dikirimkan. Nomor ini berfungsi sebagai nama atau identitas dari
          paket tersebut. Adanya nomor ini dapat membuktikan bahwa paket yang
          Anda kirimkan sedang dalam proses pengiriman.
        </p>
      </div>
      <div className={classes.cardInfo}>
        <h4 className={classes.title}>Cara Melacak Resi</h4>
        <p className={classes.desc}>
          Cari nomor resi yang telah diberikan oleh jasa ekspedisi. kemudian
          masukan nomor resi pada kolom pencarian diatas, lalu klik “Lacak”.
          kamu akan dialhikan ke halaman yang menunjukan detail keberadaan paket
          kamu.
        </p>
      </div>
    </div>
  );
}

export default Bantuan;
