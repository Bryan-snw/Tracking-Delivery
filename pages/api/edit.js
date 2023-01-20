import ConnectDB from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const db = await ConnectDB();

    // Update table Resi
    // UPDATE table1 SET field1=new_value1 WHERE condition;

    const fieldResi = `id='', NomorResi='${data.nomorResi}', StatusPengiriman='${data.statusPengiriman}', Nama_Pengirim='${data.namaPengirim}', Nomor_Pengirim='${data.nomorPengirim}', Kota_Pengirim='${data.kotaPengirim}', Nama_Penerima='${data.namaPenerima}', Nomor_Penerima='${data.nomorPenerima}', Kota_Penerima='${data.kotaPenerima}', Alamat_Penerima='${data.alamatPenerima}'`;

    const queryTextResi = `UPDATE resi SET ${fieldResi} WHERE NomorResi='${data.nomorResi}'`;

    // Insert Tabel Aktivitas

    const fieldAktivitas = "(id, NomorResi, Tanggal, Jam, Keterangan)";

    const valueAktivitas = `('', '${data.nomorResi}', '${data.hari}', '${data.jam}', '${data.keterangan}')`;

    const queryTextAktivitas = `INSERT INTO aktivitas ${fieldAktivitas} VALUES ${valueAktivitas}`;

    try {
      // Database Table Resi
      db.query(queryTextResi);
      // Database Aktivitas
      db.query(queryTextAktivitas);

      res.status(201).json({ message: "Sukses Update" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
}
