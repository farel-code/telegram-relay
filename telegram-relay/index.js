const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 10000;

// Ganti dengan milikmu
const botToken = "7235411649:AAHsuxYFpuqu-yr8qzpbPZrGWwTerc1vaOo";
const chatId = "7717702544";

app.get("/", (req, res) => {
  res.send("Telegram relay aktif!");
});

app.get("/send", async (req, res) => {
  const message = req.query.message || "⚠️ Pesan kosong";
  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await axios.get(url, {
      params: {
        chat_id: chatId,
        text: message,
      },
    });
    res.send("✅ Pesan dikirim ke Telegram!");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("❌ Gagal kirim pesan ke Telegram");
  }
});

app.listen(port, () => {
  console.log(`Server aktif di port ${port}`);
});
