import ConnectDB from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const db = await ConnectDB();

    // db.query(`INSERT INTO contoh (id, nama) VALUES ('', ${data.statusPengiriman})`, function(err, result) {
    //   res.status(201).json({ message: "Berhasil" });
    // })

    // res.status(201).json({ message: data });

    // ("INSERT INTO table1 (field1, field2) VALUES (value1, value2)");

    const fieldResi =
      "(id, NomorResi, StatusPengiriman, Nama_Pengirim, Nomor_Pengirim, Kota_Pengirim, Nama_Penerima, Nomor_Penerima, Kota_Penerima, Alamat_Penerima)";

    const valueResi = `('', '${data.nomorResi}', '${data.statusPengiriman}', '${data.namaPengirim}', '${data.nomorPengirim}', '${data.kotaPengirim}', '${data.namaPenerima}', '${data.nomorPenerima}', '${data.kotaPenerima}', '${data.alamatPenerima}')`;

    const queryTextResi = `INSERT INTO resi ${fieldResi} VALUES ${valueResi}`;

    const fieldAktivitas = "(id, NomorResi, Tanggal, Jam, Keterangan)";

    const valueAktivitas = `('', '${data.nomorResi}', '${data.hari}', '${data.jam}', '${data.keterangan}')`;

    const queryTextAktivitas = `INSERT INTO aktivitas ${fieldAktivitas} VALUES ${valueAktivitas}`;

    try {
      // Database Table Resi
      db.query(queryTextResi);
      // Database Aktivitas
      db.query(queryTextAktivitas);

      res.status(201).json({ message: "Sukses Resi" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}
