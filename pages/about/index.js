
import classes from './index.module.css';
function AboutPage() {
  return (
    <div className={classes.layout}>
      <h1 className={classes.logo}>LOGO</h1>
      <h2 className={classes.title}>(Nama Perusahaan)</h2>
      <h3 className={classes.desc}>
        (Nama Perusahaan) adalah perusahaan yang bergerak dalam bidang XXXXXX.
        (Nama Perusahaan) berlokasi di provinsi xxxxx, kota xxxxx, di jalan
        xxxxxxxxx. Visi (Perusahaan) adalah untuk Lorem ipsum dolor sit amet.
        dan Misi Perusahaan adalah Lorem ipsum dolor sit amet.
      </h3>
    </div>
  );
}

export default AboutPage;
