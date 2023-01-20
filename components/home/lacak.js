import classes from "./lacak.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

function Lacak() {
  const router = useRouter();
  const [noResi, setNoResi] = useState("");

  function lacakPaket(event) {
    event.preventDefault();
    const resi = noResi;

    router.replace(`/lacak/${resi}`);
  }

  return (
    <div className={`card-shw ${classes.lacak}`}>
      <form onSubmit={lacakPaket}>
        <h1>Lacak Paket Anda</h1>
        <input
          required
          value={noResi}
          onChange={(event) => {
            setNoResi(event.target.value);
          }}
          className={classes.input}
          type="text"
          placeholder="Masukan Nomor Resi"
        ></input>
        <button className={classes.btn}>Lacak</button>
      </form>
    </div>
  );
}

export default Lacak;
