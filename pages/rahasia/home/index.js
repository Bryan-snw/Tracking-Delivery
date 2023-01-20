import classes from "./index.module.css";
import ResiAktif from "../../../components/Ui/resiAktif";
import { useState } from "react";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { CariAll } from "../../../lib/db";
import { useRouter } from "next/router";

export default function HomeAdmin(props) {
  const [resi, setResi] = useState();
  const { data } = props;
  const router = useRouter();

  function clickHandler(event) {
    event.preventDefault();
    const Resi = resi;
    router.replace(`/rahasia/home/edit/${Resi}`);
  }

  return (
    <div className={`${classes.layout}`}>
      <div className={`card ${classes.cari}`}>
        <form onSubmit={clickHandler}>
          <h2>Cari Nomor Resi</h2>
          <input
            required
            type="text"
            value={resi}
            onChange={(event) => setResi(event.target.value)}
          />
          <button className="btnPendek">Cari</button>
        </form>
      </div>

      <div className={classes.container}>
        <Link href="/rahasia/home/baru">
          <button className="btnPanjang">Buat Nomor Baru</button>
        </Link>
      </div>

      <div className={classes.container}>
        <hr />
        {data.map((dt) => (
          <ResiAktif
            key={dt.id}
            nomorResi={dt.NomorResi}
            kotaPengirim={dt.Kota_Pengirim}
            kotaPenerima={dt.Kota_Penerima}
          />
        ))}
        <hr />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const column = "*";
  const table = "resi";

  const data = await CariAll(column, table);

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: "/rahasia",
        permanent: false,
      },
    };
  }

  return {
    props: { data: data },
  };
}
