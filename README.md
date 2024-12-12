# Website Top-Up Game Online

## Deskripsi
Website ini memungkinkan pengguna untuk melakukan top-up game secara mudah, cepat, dan aman. Website dilengkapi dengan antarmuka modern, backend sederhana, dan simulasi pembayaran.

---

## Fitur Utama
1. **Frontend:**
   - Tampilan modern menggunakan HTML dan CSS.
   - Interaktivitas form dengan JavaScript.

2. **Backend:**
   - Dibangun menggunakan Node.js (Express.js).
   - API untuk menerima dan menyimpan data transaksi.

3. **Pembayaran:**
   - Sistem pembayaran dapat diintegrasikan dengan **Midtrans** atau **Xendit** untuk transaksi yang aman.

---

## Teknologi yang Digunakan
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js (Express.js)
- **Database:** MySQL atau MongoDB
- **Pembayaran:** Midtrans/Xendit (untuk integrasi pembayaran real-time)

---

## Cara Instalasi dan Penggunaan

### 1. **Kloning Proyek**
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. **Frontend Setup**
File frontend ada di folder `frontend`. Struktur foldernya adalah sebagai berikut:
```
frontend/
├── index.html
├── styles.css
└── script.js
```

1. **Pindah ke Folder Frontend:**
   ```bash
   cd frontend
   ```

2. **Buka File di Browser:**
   Buka `index.html` menggunakan browser untuk melihat antarmuka website.

### 3. **Backend Setup**
Backend ada di folder `backend`. Struktur foldernya adalah sebagai berikut:
```
backend/
├── server.js
├── package.json
└── package-lock.json
```

1. **Pindah ke Folder Backend:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan Server:**
   ```bash
   node server.js
   ```

4. **Cek API Endpoint:**
   Akses `http://localhost:3000/api/topup` untuk menguji API.

### 4. **Integrasi Frontend dengan Backend**

1. **Ubah URL di `script.js`:**
   ```javascript
   fetch("http://localhost:3000/api/topup", {
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify({ game, playerId, nominal })
   })
   .then(response => response.json())
   .then(data => alert(data.message))
   .catch(error => console.error("Error:", error));
   ```

2. **Jalankan Frontend dan Backend Bersamaan.**

---

## Metode Pembayaran
Untuk pembayaran, gunakan gateway seperti **Midtrans** atau **Xendit**. Ikuti dokumentasi resmi mereka untuk mengintegrasikan API pembayaran:
- [Midtrans API Documentation](https://midtrans.com/)
- [Xendit API Documentation](https://xendit.co/)

1. **Daftarkan Akun di Gateway Pembayaran.**
2. **Dapatkan API Key.**
3. **Implementasikan API Key di Backend:**
   Tambahkan endpoint pembayaran di `server.js` untuk mengirim request ke Midtrans/Xendit.

Contoh kode integrasi pembayaran:
```javascript
const axios = require("axios");

app.post("/api/payment", async (req, res) => {
    const { orderId, amount } = req.body;

    try {
        const response = await axios.post("https://api.sandbox.midtrans.com/v2/charge", {
            transaction_details: {
                order_id: orderId,
                gross_amount: amount
            },
            payment_type: "bank_transfer",
            bank_transfer: {
                bank: "bca"
            }
        }, {
            headers: {
                "Authorization": "Basic <YOUR_API_KEY>",
                "Content-Type": "application/json"
            }
        });

        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send({ message: "Payment failed.", error: error.message });
    }
});
```

---

## Deployment

1. **Frontend:**
   - Unggah folder `frontend` ke layanan hosting statis seperti Netlify atau Vercel.

2. **Backend:**
   - Deploy aplikasi Node.js ke layanan seperti Heroku atau Render.

3. **Database:**
   - Siapkan database pada layanan cloud seperti AWS RDS, MongoDB Atlas, atau Google Cloud SQL.

4. **Domain:**
   - Hubungkan domain Anda dengan layanan hosting.

---

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).
