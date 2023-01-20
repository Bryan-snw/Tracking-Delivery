import { useRouter } from "next/router";
import { Fragment, useRef, useState } from "react";
import classes from "./inputForm.module.css";

export default function InputForm(props) {
  const { stat, resi, data } = props;

  console.log(data);

  const router = useRouter();

  const statusPengirimanRef = useRef();
  const namaPengirim = useRef();
  const nomorPengirim = useRef();
  const kotaPengirim = useRef();
  const namaPenerima = useRef();
  const nomorPenerima = useRef();
  const kotaPenerima = useRef();
  const alamatPenerima = useRef();

  const hari = useRef();
  const jam = useRef();
  const keterangan = useRef();

  function check() {
    if (stat === "edit") {
      const {
        StatusPengiriman,
        Nama_Pengirim,
        Nomor_Pengirim,
        Kota_Pengirim,
        Nama_Penerima,
        Nomor_Penerima,
        Kota_Penerima,
        Alamat_Penerima,
      } = data;
      if (typeof window !== "undefined") {
        // browser code
        document.getElementById("status").value = StatusPengiriman;
        document.getElementById("namaPengirim").value = Nama_Pengirim;
        document.getElementById("nomorPengirim").value = Nomor_Pengirim;
        document.getElementById("kotaPengirim").value = Kota_Pengirim;
        document.getElementById("namaPenerima").value = Nama_Penerima;
        document.getElementById("nomorPenerima").value = Nomor_Penerima;
        document.getElementById("kotaPenerima").value = Kota_Penerima;
        document.getElementById("alamatPenerima").value = Alamat_Penerima;
      }
    }
  }

  const run = setTimeout(check, 10);

  function clickhandler(event) {
    event.preventDefault();

    const data = {
      nomorResi: resi,
      statusPengiriman: statusPengirimanRef.current.value,
      namaPengirim: namaPengirim.current.value,
      nomorPengirim: nomorPengirim.current.value,
      kotaPengirim: kotaPengirim.current.value,
      namaPenerima: namaPenerima.current.value,
      nomorPenerima: nomorPenerima.current.value,
      kotaPenerima: kotaPenerima.current.value,
      alamatPenerima: alamatPenerima.current.value,
      hari: hari.current.value,
      jam: jam.current.value,
      keterangan: keterangan.current.value,
    };

    if (stat === "baru") {
      fetch("/api/baru", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.replace("/rahasia/home");
    } else {
      fetch("/api/edit", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.replace("/rahasia/home");
    }
  }

  return (
    <Fragment>
      <form id="form1" onSubmit={clickhandler}>
        <div className={`card ${classes.card}`}>
          <label htmlFor="status">Status Pengiriman</label>
          <span className={classes.selectWrap}>
            <select
              id="status"
              name="status"
              className="inputFrm"
              ref={statusPengirimanRef}
            >
              <option selected value="Dalam Perjalanan">
                Dalam Perjalanan
              </option>
              {stat === "edit" ? (
                <option value="Selesai">Selesai</option>
              ) : null}
            </select>
          </span>
        </div>
        <div className={`card ${classes.card}`}>
          <label htmlFor="namaPengirim">Nama Pengirim</label>
          <input
            id="namaPengirim"
            name="namaPengirim"
            placeholder="Nama"
            type="text"
            className="inputFrm disableForm"
            ref={namaPengirim}
            required
          />
          <label htmlFor="nomorPengirim">Nomor Pengirim</label>
          <input
            id="nomorPengirim"
            name="nomorPengirim"
            placeholder="08xxxxxxxx"
            type="text"
            className="inputFrm disableForm"
            ref={nomorPengirim}
            required
          />
          <label htmlFor="kotaPengirim">Kota Pengirim</label>
          <input
            id="kotaPengirim"
            name="kotaPengirim"
            placeholder="Kota"
            type="text"
            className="inputFrm disableForm"
            ref={kotaPengirim}
            required
          />
          <label htmlFor="namaPenerima">Nama Penerima</label>
          <input
            id="namaPenerima"
            name="namaPenerima"
            placeholder="Nama"
            type="text"
            className="inputFrm disableForm"
            ref={namaPenerima}
            required
          />
          <label htmlFor="nomorPenerima">Nomor Penerima</label>
          <input
            id="nomorPenerima"
            name="nomorPenerima"
            placeholder="08xxxxxxxx"
            type="text"
            className="inputFrm disableForm"
            ref={nomorPenerima}
            required
          />
          <label htmlFor="kotaPenerima">Kota Penerima</label>
          <input
            id="kotaPenerima"
            name="kotaPenerima"
            placeholder="Kota"
            type="text"
            className="inputFrm disableForm"
            ref={kotaPenerima}
            required
          />
          <label htmlFor="alamatPenerima">Alamat Penerima</label>
          <textarea
            id="alamatPenerima"
            name="alamatPenerima"
            placeholder="Alamat"
            type="text"
            className="inputFrm disableForm"
            ref={alamatPenerima}
            required
          />
        </div>

        <div className={`card ${classes.card}`}>
          <h3>Aktivitas</h3>
          <div className={classes.layout}>
            <div className={classes.labelDiv}>
              <label>Hari</label>
              <label>Jam</label>
              <label>Keterangan</label>
            </div>
            <div className={classes.inputDiv}>
              <input type="date" className="inputFrm" ref={hari} required />
              <input type="time" className="inputFrm" ref={jam} required />
              <textarea className="inputFrm" ref={keterangan} required />
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}
