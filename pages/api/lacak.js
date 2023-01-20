export default function handler(req, res) {
  if (req.method === "POST") {
    const resi = req.body;
    res.status(201).json({ message: resi });
  }
  res.status(200).json({ name: "Tes" });
}
