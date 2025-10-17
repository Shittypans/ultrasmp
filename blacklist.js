// api/blacklist.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const response = await fetch("http://cz1.helkor.eu:41099/blacklist");
    const data = await response.json();

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Nepodařilo se načíst blacklist" });
  }
}
