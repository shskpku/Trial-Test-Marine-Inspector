const questionsA = [
  {
    id: 1,
    type: "multiple_choice",
    question: "GMDSS adalah kepanjangan dari :",
    options: [
      { key: "A", text: "Global Maritime Data and Safety System" },
      { key: "B", text: "Global Maritime Distress and Safety System" },
      { key: "C", text: "Global Maritime Distress and Securite System" },
      { key: "D", text: "Global Maritime Designated and Safety System" },
    ],
    answer: "B",
  },
  {
    id: 2,
    type: "multiple_choice",
    question:
      "Proses pengesahan gambar yang harus melampirkan surat pengantar dari syahbandar setempat adalah :",
    options: [
      { key: "A", text: "Pengesahan gambar bangunan baru dan bangunan lama" },
      { key: "B", text: "Pengesahan gambar bangunan baru dan perombakan" },
      { key: "C", text: "Pengesahan gambar hasil lelang dan ganti bendera" },
      { key: "D", text: "Pengesahan gambar perombakan dan ganti nama kapal" },
    ],
    answer: "B",
  },
  {
    id: 3,
    type: "multiple_choice",
    question: "Hasil inclining test yaitu mendapatkan, kecuali :",
    options: [
      { key: "A", text: "Berat kapal kosong" },
      { key: "B", text: "Titik berat memanjang" },
      { key: "C", text: "Titik berat vertikal" },
      { key: "D", text: "Hanya berat pelat kapal" },
    ],
    answer: "D",
  },
  {
    id: 4,
    type: "multiple_choice",
    question: "Kapan dilaksanakan peletakan lunas :",
    options: [
      {
        key: "A",
        text: "Kapal yang akan launching dengan berat 50 ton atau lebih",
      },
      { key: "B", text: "Kapal yang sudah dibangun dengan bobot 5 ton" },
      {
        key: "C",
        text: "Material terpasang paling sedikit 50 ton atau 1% dari estimasi berat kapal seluruhnya",
      },
      {
        key: "D",
        text: "Material terpasang minimal 50 ton atau 2% dari estimasi berat kapal seluruhnya",
      },
    ],
    answer: "C",
  },
  {
    id: 5,
    type: "multiple_choice",
    question: "Metode peluncuran kapal yang saat ini umum digunakan yaitu :",
    options: [
      { key: "A", text: "Menggunakan balon" },
      { key: "B", text: "End launching" },
      { key: "C", text: "Side launching" },
      { key: "D", text: "Menggunakan tug boat" },
    ],
    answer: "A",
  },
  {
    id: 6,
    type: "multiple_choice",
    question:
      "Secara idealis, apa yang harus dilakukan oleh seorang MI, jika pada saat survey sertifikasi garis muat menemukan pintu kedap cuaca yang keropos :",
    options: [
      { key: "A", text: "Tidak menerbitkan sertifikat" },
      {
        key: "B",
        text: "Memberikan rekomendasi untuk memperbaiki dan menerbitkan sertifikat sementara",
      },
      { key: "C", text: "Menerbitkan sertifikat" },
      {
        key: "D",
        text: "Memberikan rekomendasi perbaikan sambil menerbitkan sertifikat sementara walau perbaikan belum dilaksanakan",
      },
    ],
    answer: "B",
  },
  {
    id: 7,
    type: "multiple_choice",
    question: "Apa konsep mendasar GMDSS?",
    options: [
      {
        key: "A",
        text: "Sistem komunikasi marabahaya dari stasiun pantai ke kapal",
      },
      {
        key: "B",
        text: "Sistem komunikasi marabahaya dari kapal ke stasiun pantai atau darat",
      },
      {
        key: "C",
        text: "Sistem komunikasi marabahaya dan keselamatan dari kapal ke kapal",
      },
      {
        key: "D",
        text: "Sistem komunikasi marabahaya dari kapal ke perusahaan",
      },
    ],
    answer: "B",
  },
  {
    id: 8,
    type: "essay",
    question:
      "Explain the purpose of and survey regime under the HSSC (Harmonized System of Survey and Certification) :",
    answer:
      "The purpose of HSSC is to simplify the survey and certification process by harmonizing the periods of validity and the intervals between surveys for certificates required by international conventions. The regime includes Initial surveys, Annual surveys, Intermediate surveys, Periodical surveys, and Renewal surveys.",
  },
  {
    id: 9,
    type: "essay",
    question: "Explain the term : Statutory Certificate",
    answer:
      "Statutory Certificates are documents issued by a Flag State administration (or a Recognized Organization on its behalf) to certify that a ship complies with the relevant international conventions (SOLAS, MARPOL, Load Line, etc.) and national regulations.",
  },
  {
    id: 10,
    type: "multiple_choice",
    question: "Pernyataan berikut tentang daerah pelayaran benar, kecuali :",
    options: [
      { key: "A", text: "Daerah pelayaran diluar stasiun pantai" },
      {
        key: "B",
        text: "Daerah pelayaran diluar daerah A1 dan A2 dalam cakupan satelit INMARSAT",
      },
      {
        key: "C",
        text: "Daerah pelayaran diluar daerah A1 dalam jarak capai MF dari stasiun pantai",
      },
      {
        key: "D",
        text: "Daerah pelayaran dalam jarak capai VHF dari stasiun pantai",
      },
    ],
    answer: "A",
  },
  {
    id: 11,
    type: "essay",
    question: "Explain the term : Exemption Certificate",
    answer:
      "A certificate issued by the administration to a ship which is exempt from certain requirements of a convention, provided that the ship complies with other requirements which the administration deems sufficient for the service for which the ship is intended.",
  },
  {
    id: 12,
    type: "multiple_choice",
    question:
      "Manakah perangkat yang wajib bagi kapal yang berlayar didaerah pelayaran A2?",
    options: [
      {
        key: "A",
        text: "VHF, VHF DSC, NBDP, MF, INMARSAT-C, SART EPIRP, NAVTEX",
      },
      {
        key: "B",
        text: "VHF, VHF DSC, VHF Portable, MF, MF DSC, SART, EPIRP, NAVTEX",
      },
      { key: "C", text: "INMARSAT-C, SART, EPIRP, NAVTEX" },
      {
        key: "D",
        text: "VHF, VHF DSC, INMARSAT-B, MF, INMARSAT-C, SART EPIRP, NAVTEX",
      },
    ],
    answer: "B",
  },
  {
    id: 13,
    type: "multiple_choice",
    question:
      "INMARSAT menyediakan pelayanan bebas biaya maritime safety information service yang ditujukan bagi seluruh kapal-kapal, namanya adalah :",
    options: [
      { key: "A", text: "Navtex" },
      { key: "B", text: "HF telex" },
      { key: "C", text: "Fleet Net" },
      { key: "D", text: "EGC (Enhanced Group Call)" },
    ],
    answer: "D",
  },
  {
    id: 14,
    type: "multiple_choice",
    question:
      "Manakah pernyataan berikut yang merupakan metode perawatan perangkat GMDSS :",
    options: [
      { key: "A", text: "Duplication of equipment" },
      { key: "B", text: "Semua jawaban benar" },
      { key: "C", text: "Share based maintenance" },
      { key: "D", text: "At sea electronic maintenance" },
    ],
    answer: "B",
  },
  {
    id: 15,
    type: "multiple_choice",
    question:
      "Kapal-kapal yang berlayar didaerah pelayaran A3 dan A4 wajib memilih........dari tiga metode perawatan :",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "2" },
    ],
    answer: "D",
  },
  {
    id: 16,
    type: "multiple_choice",
    question:
      "Pengukuran kapal metode Dalam Negeri dikenal ada beberapa faktor, untuk kapal sejenis tongkang menggunakan faktor berapa?",
    options: [
      { key: "A", text: "0.50" },
      { key: "B", text: "0.60" },
      { key: "C", text: "0.70" },
      { key: "D", text: "0.85" },
    ],
    answer: "C",
  },
  {
    id: 17,
    type: "multiple_choice",
    question:
      "Surat Edaran tentang Pengawasan Surat, Sertifikat dan Dokumen Kapal Yang masih Bersifat Sementara, SE Nomor :",
    options: [
      { key: "A", text: "SE-DK 7 Tahun 2022" },
      { key: "B", text: "SE 1 Tahun 2017" },
      { key: "C", text: "SE/66/PK/DK-2022" },
      { key: "D", text: "SE-DK 4 Tahun 2022" },
    ],
    answer: "C",
  },
  {
    id: 18,
    type: "multiple_choice",
    question:
      "Surat Edaran Dirjen Hubla tentang Kewajiban Kapal Untuk Mengoperasikan BNWAS, SE Nomor :",
    options: [
      { key: "A", text: "UM.003/4/3/DJPL-16" },
      { key: "B", text: "UM.003/5/15/DK-16" },
      { key: "C", text: "UM.003/3/7/DJPL-15" },
      { key: "D", text: "UM.003/3/17/DJPL-16" },
    ],
    answer: "D",
  },
  {
    id: 19,
    type: "multiple_choice",
    question:
      "Peraturan Menteri tentang Pemasangan dan Pengaktifan Sistem Identifikasi Otomatis Bagi Kapal Yang Berlayar Di Wilayah Perairan Indonesia, PM Nomor :",
    options: [
      { key: "A", text: "PM 7 Tahun 2019" },
      { key: "B", text: "PM 18 Tahun 2022" },
      { key: "C", text: "PM 58 Tahun 2019" },
      { key: "D", text: "PM 10 Tahun 2022" },
    ],
    answer: "A",
  },
  {
    id: 20,
    type: "multiple_choice",
    question:
      "Tindakan Ahli Ukur Kapal agar surat ukur sementara tidak berlarut-larut hingga expired adalah :",
    options: [
      {
        key: "A",
        text: "Segera membuat daftar ukur dan surat pengantar pengesahan ke Kantor Pusat",
      },
      { key: "B", text: "Membuat surat ukur permanen tanpa pengesahan" },
      { key: "C", text: "Menerbitkan kembali surat ukur sementara" },
      { key: "D", text: "Membiarkan expired" },
    ],
    answer: "A",
  },
  {
    id: 21,
    type: "multiple_choice",
    question:
      "Rumus perhitungan Volume Ruangan Dibawah Geladak Ukur untuk metode dalam negeri adalah :",
    options: [
      { key: "A", text: "P x L x D" },
      { key: "B", text: "K1 x V" },
      { key: "C", text: "P x L x D x K1" },
      { key: "D", text: "P x L x D x factor" },
    ],
    answer: "C",
  },
  {
    id: 22,
    type: "multiple_choice",
    question:
      "Kapal dengan tonase diatas 500 GRT minimal membawa SART sebanyak :",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "2" },
    ],
    answer: "D",
  },
  {
    id: 23,
    type: "multiple_choice",
    question:
      "Peraturan Menteri tentang Pelaksanaan Konvensi Internasional Untuk Keselamatan Jiwa di Laut (SOLAS), PM Nomor :",
    options: [
      { key: "A", text: "PM 13 Tahun 2023" },
      { key: "B", text: "PM 12 Tahun 2023" },
      { key: "C", text: "PM 10 Tahun 2023" },
      { key: "D", text: "PM 11 Tahun 2023" },
    ],
    answer: "B",
  },
  {
    id: 24,
    type: "multiple_choice",
    question:
      "Jika terdapat perubahan ukuran dan tonase setelah pengukuran ulang, apa yang dilakukan pemilik agar data valid?",
    options: [
      { key: "A", text: "Menjual kapal" },
      { key: "B", text: "Mengajukan CSR" },
      { key: "C", text: "Mengajukan akta baliknama" },
      {
        key: "D",
        text: "Mengajukan halaman tambahan pada Grosse Akta Pendaftaran",
      },
    ],
    answer: "D",
  },
  {
    id: 25,
    type: "multiple_choice",
    question: "Bahaya utama terkait pengangkutan muatan curah padat adalah :",
    options: [
      {
        key: "A",
        text: "Kerusakan struktur kapal karena pemuatan yang tidak tepat",
      },
      { key: "B", text: "Hilangnya stabilitas kapal karena pergeseran muatan" },
      { key: "C", text: "Reaksi kimia muatan" },
      { key: "D", text: "Semuanya benar" },
    ],
    answer: "D",
  },
  {
    id: 26,
    type: "multiple_choice",
    question: "Perangkat GMDSS yang digunakan sesuai fungsi Alerting adalah :",
    options: [
      { key: "A", text: "SART, EPIRP, DSC, INMARSAT-C" },
      { key: "B", text: "EPIRP, DSC, INMARSAT-C, LRT" },
      { key: "C", text: "DSC, INMARSAT-C, EPIRP, SSAS" },
      { key: "D", text: "INMARSAT-C, EPIRP, DSC" },
    ],
    answer: "C",
  },
  {
    id: 27,
    type: "multiple_choice",
    question: "Pemeriksaan EPIRB diantaranya meliputi :",
    options: [
      {
        key: "A",
        text: "Mampu mengapung bebas dan terlepas dari kaitan (manual/otomatis)",
      },
      {
        key: "B",
        text: "Tanggal kadaluarsa baterai EPIRB dan hydrostatic release unit",
      },
      { key: "C", text: "Semua jawaban benar" },
      {
        key: "D",
        text: "Mampu memancar dengan bukti printout shore base maintenance",
      },
    ],
    answer: "C",
  },
  {
    id: 28,
    type: "multiple_choice",
    question:
      "Kapal tanpa dedicated radio officer wajib menunjuk minimal perwira deck sebanyak :",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "3" },
      { key: "C", text: "2" },
      { key: "D", text: "4" },
    ],
    answer: "C",
  },
  {
    id: 29,
    type: "multiple_choice",
    question:
      "Peralatan manakah yang harus disediakan untuk menerima Informasi Keselamatan Maritim?",
    options: [
      { key: "A", text: "NBDP, Inmarsat atau NAVTEX" },
      { key: "B", text: "EGC penerima, B Inmarsat atau terminal" },
      { key: "C", text: "Semua jawaban benar" },
      { key: "D", text: "NAVTEX, EGC atau NBDP" },
    ],
    answer: "C",
  },
  {
    id: 30,
    type: "essay",
    question: "Explain the term : Statement of Compliance",
    answer:
      "A document issued by the administration or a recognized organization to confirm that a ship, its equipment, or its management system complies with specific requirements of a convention, code, or national regulation.",
  },
  {
    id: 31,
    type: "multiple_choice",
    question: "Berikut bahaya terkait pengangkutan batu bara, kecuali :",
    options: [
      { key: "A", text: "Terjadi likuifikasi pada ukuran kecil" },
      { key: "B", text: "Terjadi self heating" },
      { key: "C", text: "Terjadi kebakaran" },
      { key: "D", text: "Semua jawaban salah" },
    ],
    answer: "D",
  },
  {
    id: 32,
    type: "multiple_choice",
    question:
      "Baterai SART dapat bertahan dalam keadaan standby selama kurun waktu :",
    options: [
      { key: "A", text: "1 X 24 Jam" },
      { key: "B", text: "90 detik" },
      { key: "C", text: "96 Jam" },
      { key: "D", text: "96 hari" },
    ],
    answer: "C",
  },
  {
    id: 33,
    type: "multiple_choice",
    question:
      "Lampu berkedip pada SART setelah dioperasikan manual menunjukkan :",
    options: [
      { key: "A", text: "Baterai lemah" },
      { key: "B", text: "SART posisi standby" },
      { key: "C", text: "SART sedang diinterogasi oleh radar" },
      { key: "D", text: "Ada kesalahan SART" },
    ],
    answer: "C",
  },
  {
    id: 34,
    type: "multiple_choice",
    question:
      "Masing-masing Negara mempunyai MID (Maritime Identification Digit) number, berapakah MID number untuk Indonesia :",
    options: [
      { key: "A", text: "212" },
      { key: "B", text: "555" },
      { key: "C", text: "525" },
      { key: "D", text: "543" },
    ],
    answer: "C",
  },
  {
    id: 35,
    type: "essay",
    question: "Explain the term : Electronic Certificate",
    answer:
      "Digital documents that are issued by the Administration or a Recognized Organization in lieu of traditional paper certificates. They have the same legal validity and are verifiable through a unique tracking number or QR code.",
  },
  {
    id: 36,
    type: "multiple_choice",
    question: "Berikut tugas dan fungsi BTKP yang salah, yaitu :",
    options: [
      { key: "A", text: "Melaksanakan type approval manufaktur" },
      { key: "B", text: "Melaksanakan sertifikasi kesehatan pelaut" },
      { key: "C", text: "Monitoring penyedia jasa (service provider)" },
      { key: "D", text: "Menerbitkan SPK alat keselamatan" },
    ],
    answer: "B",
  },
  {
    id: 37,
    type: "multiple_choice",
    question:
      "Ciri perangkat radio VHF/MF/HF yang sudah menjadi satu dengan DSC adalah :",
    options: [
      { key: "A", text: "Memiliki antenna transceiver" },
      { key: "B", text: "Memiliki tombol marabahaya (distress button)" },
      { key: "C", text: "Memiliki tombol 2182" },
      { key: "D", text: "Memiliki tombol tuning" },
    ],
    answer: "B",
  },
  {
    id: 38,
    type: "multiple_choice",
    question:
      "Berikut ketentuan pemeliharaan perangkat bagi kapal yang beroperasi di wilayah A1, kecuali :",
    options: [
      { key: "A", text: "Duplikasi Equipment" },
      { key: "B", text: "At Sea Electronic Maintenance" },
      { key: "C", text: "Shore based maintenance" },
      { key: "D", text: "Salah satu diantara tiga metode yang diperlukan" },
    ],
    answer: "D",
  },
  {
    id: 39,
    type: "multiple_choice",
    question:
      "Manakah perangkat GMDSS yang harus dibawa ke sekoci penolong saat meninggalkan kapal?",
    options: [
      { key: "A", text: "DSC" },
      { key: "B", text: "SART" },
      { key: "C", text: "VHF Portable" },
      { key: "D", text: "B dan C benar" },
    ],
    answer: "D",
  },
  {
    id: 40,
    type: "multiple_choice",
    question:
      "Penanggung jawab komunikasi marabahaya minimal ditunjuk perwira deck sebanyak :",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "4" },
    ],
    answer: "A",
  },
  {
    id: 41,
    type: "multiple_choice",
    question: "Ruang lingkup pengesahan gambar antara lain, kecuali :",
    options: [
      { key: "A", text: "Kapal bangunan baru" },
      { key: "B", text: "Penutuhan Kapal (Scrapping)" },
      { key: "C", text: "Kapal bangunan lama" },
      { key: "D", text: "Perombakan kapal" },
    ],
    answer: "B",
  },
  {
    id: 42,
    type: "multiple_choice",
    question:
      "Kategori kapal bangunan lama pada pengesahan gambar adalah berikut, kecuali :",
    options: [
      { key: "A", text: "Kapal ganti bendera" },
      { key: "B", text: "Kapal ganti nama" },
      { key: "C", text: "Kapal hasil lelang" },
      {
        key: "D",
        text: "Kapal yang beroperasi dan sudah memiliki surat pengesahan",
      },
    ],
    answer: "B",
  },
  {
    id: 43,
    type: "multiple_choice",
    question: "Perombakan kapal dikarenakan adanya perubahan, kecuali :",
    options: [
      { key: "A", text: "Ukuran utama kapal" },
      { key: "B", text: "Perubahan Mesin daya/merek sama" },
      { key: "C", text: "Kapasitas kapal" },
      { key: "D", text: "Konstruksi lambung" },
    ],
    answer: "B",
  },
  {
    id: 44,
    type: "multiple_choice",
    question: "Kapal L < 10m atau < GT 7 dapat dilakukan :",
    options: [
      { key: "A", text: "Pengesahan gambar sesuai kaidah teknis" },
      { key: "B", text: "Tanpa pengesahan gambar" },
      { key: "C", text: "Bangun kapal tanpa pengesahan" },
      { key: "D", text: "Pengesahan gambar tanpa kaidah teknis" },
    ],
    answer: "A",
  },
  {
    id: 45,
    type: "multiple_choice",
    question:
      "Berikut kegiatan yang MI harus saksikan saat pembangunan, kecuali :",
    options: [
      { key: "A", text: "Peluncuran kapal" },
      { key: "B", text: "Inclining test" },
      { key: "C", text: "Peletakan lunas" },
      { key: "D", text: "Sea trial" },
    ],
    answer: "A",
  },
  {
    id: 46,
    type: "multiple_choice",
    question: "Berikut isi buku perhitungan stabilitas, kecuali :",
    options: [
      { key: "A", text: "Tank calibration, load case" },
      { key: "B", text: "Capacity plan, KN Value, Shell expansion" },
      { key: "C", text: "Load case, hydrostatic curve" },
      { key: "D", text: "Limiting KG, KN value" },
    ],
    answer: "B",
  },
  {
    id: 47,
    type: "multiple_choice",
    question:
      "Kondisi kapal L < 50m saat perombakan yang wajib dilakukan inclining test adalah :",
    options: [
      { key: "A", text: "Perubahan berat < 2%" },
      { key: "B", text: "Perubahan berat > 2%" },
      { key: "C", text: "Pergeseran titik berat memanjang < 1%" },
      { key: "D", text: "Pergeseran titik berat memanjang < 0,5%" },
    ],
    answer: "B",
  },
  {
    id: 48,
    type: "multiple_choice",
    question: "Draft survey dilakukan terhadap kapal, kecuali :",
    options: [
      { key: "A", text: "Kapal kembar (Sister ship)" },
      { key: "B", text: "Tongkang geladak (Deck barge)" },
      { key: "C", text: "Tongkang crane (Crane barge)" },
      { key: "D", text: "Pontoon tanpa bangunan atas" },
    ],
    answer: "A",
  },
  {
    id: 49,
    type: "multiple_choice",
    question:
      "Apa tindakan MI jika menemukan tinggi railing kapal kurang dari 1 meter?",
    options: [
      {
        key: "A",
        text: "Tidak wajib perombakan, tapi beri rekomendasi tinggi 1m",
      },
      { key: "B", text: "Harus pengesahan gambar perombakan" },
      { key: "C", text: "Rekomendasi las pagar tambahan" },
      {
        key: "D",
        text: "Rekomendasi pengesahan perombakan dan tinggi minimal 1m",
      },
    ],
    answer: "D",
  },
  {
    id: 50,
    type: "multiple_choice",
    question: "Uji stabilitas kapal ukuran 20 meter menggunakan metode :",
    options: [
      { key: "A", text: "Inclining test" },
      { key: "B", text: "Periode oleng (Rolling period)" },
      { key: "C", text: "Draft survey" },
      { key: "D", text: "Lightweight survey" },
    ],
    answer: "B",
  },
  {
    id: 51,
    type: "multiple_choice",
    question:
      "Surat kapal yang memuat ukuran dan tonase kapal hasil pengukuran adalah :",
    options: [
      { key: "A", text: "Surat Laut" },
      { key: "B", text: "Surat Pacak" },
      { key: "C", text: "Surat Ukur" },
      { key: "D", text: "Surat Kebangsaan" },
    ],
    answer: "C",
  },
  {
    id: 52,
    type: "multiple_choice",
    question: "Daftar Ukur adalah...",
    options: [
      { key: "A", text: "Daftar perhitungan tonase kapal" },
      { key: "B", text: "Daftar kepemilikan kapal" },
      { key: "C", text: "Daftar riwayat kapal" },
      { key: "D", text: "Daftar identitas kapal" },
    ],
    answer: "A",
  },
  {
    id: 53,
    type: "multiple_choice",
    question:
      "Pejabat Hubla yang berwenang melaksanakan pengukuran kapal adalah :",
    options: [
      { key: "A", text: "Juru Ukur" },
      { key: "B", text: "Ahli Ukur" },
      { key: "C", text: "Petugas Syahbandar" },
      { key: "D", text: "Pejabat Provinsi" },
    ],
    answer: "B",
  },
  {
    id: 54,
    type: "multiple_choice",
    question: "Persyaratan menjadi ahli ukur kapal adalah berikut, kecuali :",
    options: [
      { key: "A", text: "PNS Hubla" },
      { key: "B", text: "Lulus Diklat Pengukuran" },
      { key: "C", text: "Memiliki pengukuhan Dirjen" },
      { key: "D", text: "Memiliki ijin Pimpinan" },
    ],
    answer: "D",
  },
  {
    id: 55,
    type: "multiple_choice",
    question:
      "Metode Pengukuran Kapal sesuai PM 8/2013 adalah berikut, kecuali :",
    options: [
      { key: "A", text: "Dalam Negeri" },
      { key: "B", text: "Internasional" },
      { key: "C", text: "Khusus" },
      { key: "D", text: "Sungai dan Danau" },
    ],
    answer: "D",
  },
  {
    id: 56,
    type: "multiple_choice",
    question:
      "Definisi kendaraan air bentuk tertentu bertenaga mekanik/angin dll :",
    options: [
      { key: "A", text: "Kendaraan Air" },
      { key: "B", text: "Moda Transportasi" },
      { key: "C", text: "Kapal" },
      { key: "D", text: "Angkutan Laut" },
    ],
    answer: "C",
  },
  {
    id: 57,
    type: "multiple_choice",
    question: "Panjang Kapal (Length) adalah :",
    options: [
      { key: "A", text: "Panjang 96% garis air pada sarat 85% D" },
      { key: "B", text: "Panjang geladak ukur" },
      { key: "C", text: "Panjang linggi haluan ke buritan" },
      { key: "D", text: "Panjang keseluruhan (LOA)" },
    ],
    answer: "A",
  },
  {
    id: 58,
    type: "multiple_choice",
    question: "Rangkaian huruf pelabuhan penerbit surat ukur disebut :",
    options: [
      { key: "A", text: "Kode Register" },
      { key: "B", text: "Kode Pelabuhan" },
      { key: "C", text: "Kode Pengukuran" },
      { key: "D", text: "Kode Wilayah" },
    ],
    answer: "C",
  },
  {
    id: 59,
    type: "multiple_choice",
    question: "Volume kapal dalam tonase kotor disebut :",
    options: [
      { key: "A", text: "Net tonnage" },
      { key: "B", text: "Gross tonnage" },
      { key: "C", text: "Ruang Muat" },
      { key: "D", text: "Tonase Kapal" },
    ],
    answer: "B",
  },
  {
    id: 60,
    type: "multiple_choice",
    question:
      "Kegiatan wajib sebelum kapal dioperasikan untuk menentukan dimensi adalah :",
    options: [
      { key: "A", text: "Cek Fisik" },
      { key: "B", text: "Pengukuran" },
      { key: "C", text: "Registrasi" },
      { key: "D", text: "Pendaftaran Online" },
    ],
    answer: "B",
  },
  {
    id: 61,
    type: "essay",
    question:
      "Explain the purpose of the Minimum Safe Crewing Document (MSCD) :",
    answer:
      "MSCD is a document issued by the Flag State Administration that specifies the minimum number of crew members, by grade and capacity, necessary for the safe operation of the ship, the security of its personnel and the protection of the marine environment.",
  },
  {
    id: 62,
    type: "essay",
    question:
      "Explain purpose and scope: Cargo Ship Safety Equipment Certificate (CSSEC) :",
    answer:
      "The purpose is to certify that a cargo ship's life-saving appliances, fire-fighting equipment, and navigational aids comply with SOLAS requirements. It applies to cargo ships of 500 GT and above engaged in international voyages.",
  },
  {
    id: 63,
    type: "essay",
    question:
      "Explain purpose and scope: Cargo Ship Safety Radio Certificate (CSSRC) :",
    answer:
      "This certificate confirms that the ship's radio communication installations, including GMDSS equipment, meet SOLAS Chapter IV standards. It is required for cargo ships of 300 GT and above.",
  },
  {
    id: 64,
    type: "essay",
    question:
      "Explain purpose and scope: Cargo Ship Safety Construction Certificate (CSSCC) :",
    answer:
      "This document certifies that the hull, machinery, and equipment of a cargo ship (500 GT and above) have been surveyed and found to comply with the structural and mechanical requirements of SOLAS.",
  },
  {
    id: 65,
    type: "essay",
    question:
      "Explain purpose and scope: Cargo Ship Safety Certificate (CSSC) :",
    answer:
      "Under the HSSC, this single certificate replaces the separate Construction, Equipment, and Radio certificates. It ensures comprehensive safety compliance for cargo ships.",
  },
  {
    id: 66,
    type: "essay",
    question:
      "Explain purpose and scope: International Oil Pollution Prevention Certificate (IOPPC) :",
    answer:
      "Required under MARPOL Annex I, it certifies that a ship (400 GT and above, or tankers 150 GT and above) has the proper structures and equipment (like OWS) to prevent oil discharge into the sea.",
  },
  {
    id: 67,
    type: "essay",
    question:
      "Explain purpose and scope: International Sewage Pollution Prevention Certificate (ISPPC) :",
    answer:
      "Issued under MARPOL Annex IV, it applies to ships of 400 GT and above or ships carrying more than 15 persons, ensuring they have an approved sewage treatment plant or holding tank.",
  },
  {
    id: 68,
    type: "essay",
    question:
      "Explain purpose and scope: International Pollution Prevention Certificate for Carriage of NLS (INLS) :",
    answer:
      "Certifies that a ship carrying Noxious Liquid Substances in bulk complies with MARPOL Annex II requirements regarding tank construction and discharge procedures.",
  },
  {
    id: 69,
    type: "essay",
    question:
      "Explain purpose and scope: International Air Pollution Prevention Certificate (IAPPC) :",
    answer:
      "Issued under MARPOL Annex VI, it ensures the ship's diesel engines and incineration equipment comply with NOx and SOx emission limits to prevent air pollution.",
  },
  {
    id: 70,
    type: "essay",
    question:
      "Explain purpose and scope: International Energy Efficiency Certificate (IEEC) :",
    answer:
      "A permanent certificate issued once for a ship, verifying that it has an Energy Efficiency Design Index (EEDI) and a Ship Energy Efficiency Management Plan (SEEMP).",
  },
  {
    id: 71,
    type: "multiple_choice",
    question:
      "Ruang mesin risiko tinggi dilindungi bahan tahan api adalah ketentuan HSC :",
    options: [
      { key: "A", text: "Umum" },
      { key: "B", text: "Khusus" },
      { key: "C", text: "Kategori A" },
      { key: "D", text: "Kategori B" },
    ],
    answer: "B",
  },
  {
    id: 72,
    type: "multiple_choice",
    question:
      "Syarat fungsional pengangkutan muatan berbahaya adalah berikut, kecuali :",
    options: [
      { key: "A", text: "Ventilasi cukup" },
      { key: "B", text: "APD lengkap" },
      { key: "C", text: "Alat pemadam cocok" },
      { key: "D", text: "Terpisah sumber api" },
    ],
    answer: "B",
  },
  {
    id: 73,
    type: "multiple_choice",
    question:
      "Peralatan kemudi harus di uji sebelum kapal berlayar dalam kurun waktu :",
    options: [
      { key: "A", text: "1 jam" },
      { key: "B", text: "3 jam" },
      { key: "C", text: "6 jam" },
      { key: "D", text: "12 jam" },
    ],
    answer: "D",
  },
  {
    id: 74,
    type: "multiple_choice",
    question:
      "Kode kapal berbahan bakar gas/titik nyala rendah (IGF Code) resolusi :",
    options: [
      { key: "A", text: "IFG Code" },
      { key: "B", text: "ISM Code" },
      { key: "C", text: "IGF Code" },
      { key: "D", text: "ISPS Code" },
    ],
    answer: "C",
  },
  {
    id: 75,
    type: "multiple_choice",
    question: "Pasca pemeriksaan, dilarang merubah hal berikut, kecuali :",
    options: [
      { key: "A", text: "Susunan Bangunan" },
      { key: "B", text: "Ruang akomodasi" },
      { key: "C", text: "Permesinan" },
      { key: "D", text: "Perlengkapan" },
    ],
    answer: "C",
  },
  {
    id: 76,
    type: "multiple_choice",
    question:
      "Pedoman pemeriksaan Emergency Generator adalah berikut, kecuali :",
    options: [
      { key: "A", text: "Uji start" },
      { key: "B", text: "Tinggi BBM" },
      { key: "C", text: "Akses ruang" },
      { key: "D", text: "Kondisi alat start" },
    ],
    answer: "B",
  },
  {
    id: 77,
    type: "multiple_choice",
    question: "Kapal yang tidak dicakup konvensi internasional disebut :",
    options: [
      { key: "A", text: "Kapal lama" },
      { key: "B", text: "Kapal Non Konvensi" },
      { key: "C", text: "Kapal Konvensi" },
      { key: "D", text: "Kapal Indonesia" },
    ],
    answer: "B",
  },
  {
    id: 78,
    type: "multiple_choice",
    question: "PM tentang Pelaksanaan Konvensi Internasional SOLAS, PM Nomor :",
    options: [
      { key: "A", text: "PM 14 Tahun 2023" },
      { key: "B", text: "PM 13 Tahun 2023" },
      { key: "C", text: "PM 12 Tahun 2023" },
      { key: "D", text: "PM 11 Tahun 2023" },
    ],
    answer: "C",
  },
  {
    id: 79,
    type: "multiple_choice",
    question:
      "Kewajiban pemegang Sertifikat Pengujian Pertama sebelum dijual adalah :",
    options: [
      { key: "A", text: "Balik Nama" },
      { key: "B", text: "Pelayanan" },
      { key: "C", text: "Pelabelan" },
      { key: "D", text: "Pemeriksaan Tahunan" },
    ],
    answer: "C",
  },
  {
    id: 80,
    type: "multiple_choice",
    question: "Tindakan MI jika tinggi pagar kurang dari 1 meter (Ulang):",
    options: [
      { key: "A", text: "Pengesahan perombakan" },
      { key: "B", text: "Rekomendasi tinggi 1m" },
      { key: "C", text: "Las pagar" },
      { key: "D", text: "Pengesahan perombakan dan tinggi 1m" },
    ],
    answer: "D",
  },
  {
    id: 81,
    type: "multiple_choice",
    question: "PM 39/2016 tentang garis muat berlaku untuk :",
    options: [
      { key: "A", text: "Kapal Perang" },
      { key: "B", text: "Kapal Niaga Negara" },
      { key: "C", text: "Kapal Layar Motor" },
      { key: "D", text: "Kapal Ikan" },
    ],
    answer: "B",
  },
  {
    id: 82,
    type: "multiple_choice",
    question: "Tinggi ambang pintu minimum pada geladak lambung timbul :",
    options: [
      { key: "A", text: "380 mm" },
      { key: "B", text: "550 mm" },
      { key: "C", text: "600 mm" },
      { key: "D", text: "1000 mm" },
    ],
    answer: "C",
  },
  {
    id: 83,
    type: "multiple_choice",
    question: "Ketentuan tinggi Bullwark dan Railing diatur dalam :",
    options: [
      { key: "A", text: "PM 39/2016" },
      { key: "B", text: "PM 7/2013" },
      { key: "C", text: "PM 29/2014" },
      { key: "D", text: "PM 54/2021" },
    ],
    answer: "A",
  },
  {
    id: 84,
    type: "multiple_choice",
    question: "Plimsoll Mark digunakan untuk kapal ukuran :",
    options: [
      { key: "A", text: "15 <= L <= 24 m" },
      { key: "B", text: "15 <= L < 24 m" },
      { key: "C", text: "15 < L <= 24 m" },
      { key: "D", text: "L >= 24 m" },
    ],
    answer: "D",
  },
  {
    id: 85,
    type: "multiple_choice",
    question:
      "Sebuah kapal dengan data-data : P.Tegak 26.38 m, P.Air 28.25 m, L 8.40 m, D 3.50 m, d 3.00 m, dan Volume 405.00 m3. Berapakah Koefisien blok (Cb) kapal tersebut :",
    options: [
      { key: "A", text: "0.612" },
      { key: "B", text: "0.572" },
      { key: "C", text: "0.518" },
      { key: "D", text: "0.484" },
    ],
    answer: "B",
  },
  {
    id: 86,
    type: "multiple_choice",
    question:
      "Fungsi utama SMEPEP (Shipboard Marine Pollution Emergency Plan) untuk Noxious Liquid Substances adalah :",
    options: [
      { key: "A", text: "Mencegah limbah domestik" },
      { key: "B", text: "Mengatur air ballast" },
      {
        key: "C",
        text: "Menyediakan prosedur darurat untuk tumpahan bahan cair selain minyak",
      },
      { key: "D", text: "Meningkatkan efisiensi energi" },
    ],
    answer: "C",
  },
  {
    id: 87,
    type: "multiple_choice",
    question:
      "Sertifikat Annex VI yang berkaitan dengan SEEMP dan EEDI bertujuan untuk :",
    options: [
      { key: "A", text: "Menentukan kualitas bahan bakar" },
      {
        key: "B",
        text: "Meningkatkan efisiensi energi dan mengurangi emisi gas rumah kaca",
      },
      { key: "C", text: "Mengelola air ballast" },
      { key: "D", text: "Mengatur pemisahan muatan cair" },
    ],
    answer: "B",
  },
  {
    id: 88,
    type: "multiple_choice",
    question:
      "Sesuai Annex IV, kapal dengan ukuran kurang dari GT 400 namun membawa 15 orang atau lebih wajib dilengkapi :",
    options: [
      { key: "A", text: "Sludge tank" },
      { key: "B", text: "Cargo record book" },
      {
        key: "C",
        text: "Sistem penghancur atau pengolah kotoran yang disetujui",
      },
      { key: "D", text: "Ballast record book" },
    ],
    answer: "C",
  },
  {
    id: 89,
    type: "multiple_choice",
    question:
      "AFS Convention membatasi konsentrasi organotin (TBT) pada sistem anti-fouling maksimum sebesar :",
    options: [
      { key: "A", text: "1500 mg/kg" },
      { key: "B", text: "500 mg/kg" },
      { key: "C", text: "2500 mg/kg" },
      { key: "D", text: "1000 mg/kg" },
    ],
    answer: "C",
  },
  {
    id: 90,
    type: "multiple_choice",
    question:
      "Asuransi atau jaminan keuangan lainnya untuk tanggung jawab ganti rugi pencemaran minyak bagi kapal pengangkut minyak curah 150 - 1999 ton adalah :",
    options: [
      { key: "A", text: "Civil liability convention" },
      { key: "B", text: "CLS NLS" },
      { key: "C", text: "CLS Oil Pollution" },
      { key: "D", text: "CLS Bunker" },
    ],
    answer: "C",
  },
  {
    id: 91,
    type: "multiple_choice",
    question:
      "Konvensi internasional yang mengatur standar pelatihan, sertifikasi, dan dinas jaga bagi pelaut adalah :",
    options: [
      { key: "A", text: "SOLAS" },
      { key: "B", text: "MARPOL" },
      { key: "C", text: "STCW" },
      { key: "D", text: "UNCLOS" },
    ],
    answer: "C",
  },
  {
    id: 92,
    type: "multiple_choice",
    question:
      "Pejabat atau personil yang bertanggung jawab penuh atas keselamatan pelayaran di atas kapal adalah :",
    options: [
      { key: "A", text: "Mualim II" },
      { key: "B", text: "KKM" },
      { key: "C", text: "Nahkoda" },
      { key: "D", text: "Operator radio" },
    ],
    answer: "C",
  },
  {
    id: 93,
    type: "multiple_choice",
    question:
      "Instansi pemerintah yang berwenang melakukan penyijilan (signing-on/off) buku pelaut di pelabuhan adalah :",
    options: [
      { key: "A", text: "Kantor Navigasi" },
      { key: "B", text: "Direktorat Perkapalan" },
      { key: "C", text: "KSOP / UPT Syahbandar" },
      { key: "D", text: "BTKP" },
    ],
    answer: "C",
  },
  {
    id: 94,
    type: "multiple_choice",
    question:
      "Sertifikat yang membuktikan kompetensi seorang perwira deck untuk jabatan tertentu di kapal adalah :",
    options: [
      { key: "A", text: "Sertifikat Inapornet" },
      { key: "B", text: "ANT (Ahli Nautika Tingkat)" },
      { key: "C", text: "GMDSS Certificate" },
      { key: "D", text: "ATT (Ahli Teknika Tingkat)" },
    ],
    answer: "B",
  },
  {
    id: 95,
    type: "multiple_choice",
    question:
      "Konvensi yang mengatur standar kesejahteraan, jam kerja, dan akomodasi awak kapal di tingkat internasional adalah :",
    options: [
      { key: "A", text: "SOLAS" },
      { key: "B", text: "COLREG" },
      { key: "C", text: "MLC (Maritime Labour Convention)" },
      { key: "D", text: "MARPOL" },
    ],
    answer: "C",
  },
  {
    id: 96,
    type: "multiple_choice",
    question:
      "Tujuan utama pelaksanaan inspeksi kelaiklautan kapal oleh Marine Inspector adalah untuk memastikan :",
    options: [
      {
        key: "A",
        text: "Kapal memenuhi standar keselamatan dan regulasi teknis yang berlaku",
      },
      { key: "B", text: "Performa kerja awak kapal maksimal" },
      { key: "C", text: "Ketepatan jadwal pelayaran kapal" },
      { key: "D", text: "Semua jawaban benar" },
    ],
    answer: "A",
  },
  {
    id: 97,
    type: "multiple_choice",
    question: "Komponen apa yang diperiksa dalam inspeksi stabilitas kapal?",
    options: [
      { key: "A", text: "Jumlah penumpang yang makan" },
      { key: "B", text: "Pengaturan muatan dan kondisi tangki ballast" },
      { key: "C", text: "Warna cat lambung kapal" },
      { key: "D", text: "Kecepatan kapal saat manuver" },
    ],
    answer: "B",
  },
  {
    id: 98,
    type: "multiple_choice",
    question:
      "Pemeriksaan alat pemadam kebakaran dan peralatan penyelamat jiwa termasuk dalam kategori inspeksi :",
    options: [
      { key: "A", text: "Inspeksi Permesinan" },
      { key: "B", text: "Inspeksi Keselamatan Kapal (Safety)" },
      { key: "C", text: "Inspeksi Dokumen Administratif" },
      { key: "D", text: "Semua jawaban benar" },
    ],
    answer: "B",
  },
  {
    id: 99,
    type: "multiple_choice",
    question:
      "Peralatan navigasi radar 9 Ghz tidak wajib dipersyaratkan untuk kapal ukuran :",
    options: [
      {
        key: "A",
        text: "Kurang dari GT 300 yang berlayar di perairan Indonesia",
      },
      { key: "B", text: "Kurang dari GT 150" },
      { key: "C", text: "Jawaban A benar" },
      { key: "D", text: "Semua kapal wajib radar" },
    ],
    answer: "C",
  },
  {
    id: 100,
    type: "multiple_choice",
    question:
      "Apabila ditemukan ketidaksesuaian yang bersifat mayor saat pemeriksaan, tindakan MI yang paling tepat adalah :",
    options: [
      {
        key: "A",
        text: "Memberikan sanksi administratif dan melarang kapal berlayar hingga diperbaiki",
      },
      { key: "B", text: "Mencabut sertifikat permanen segera" },
      { key: "C", text: "Menahan kapal di galangan" },
      { key: "D", text: "Mengurangi jumlah awak kapal" },
    ],
    answer: "A",
  },
];
const questionsB = [
  {
    id: 201,
    type: "multiple_choice",
    question:
      "Peraturan Menteri nomor PM 39 Tahun 2016 tentang garis muat dan pemuatan berlaku untuk kapal berbendera Indonesia sebagai berikut :",
    options: [
      { key: "a", text: "Kapal Negara yang digunakan untuk kegiatan niaga" },
      { key: "b", text: "Kapal Layar Motor" },
      { key: "c", text: "Kapal Penangkap Ikan" },
      { key: "d", text: "Kapal Perang" },
    ],
    answer: "a",
  },
  {
    id: 202,
    type: "multiple_choice",
    question:
      "Tinggi ambang pintu minimum pada geladak lambung timbul sesuai aturan Load Line adalah :",
    options: [
      { key: "a", text: "380 mm" },
      { key: "b", text: "550 mm" },
      { key: "c", text: "1000 mm" },
      { key: "d", text: "600 mm" },
    ],
    answer: "d",
  },
  {
    id: 203,
    type: "multiple_choice",
    question:
      "Ketentuan mengenai tinggi minimum kubu-kubu (Bulwark) dan pagar pengaman (Railing) diatur dalam :",
    options: [
      { key: "a", text: "PM 39 Tahun 2016" },
      { key: "b", text: "PM 7 Tahun 2013" },
      { key: "c", text: "PM 29/2014" },
      { key: "d", text: "PM 54/2021" },
    ],
    answer: "a",
  },
  {
    id: 204,
    type: "multiple_choice",
    question:
      "Plimsoll Mark atau tanda garis muat digunakan untuk kapal berukuran :",
    options: [
      { key: "a", text: "15 meter < L < 24 meter" },
      { key: "b", text: "15 meter < L <= 24 meter" },
      { key: "c", text: "L >= 24 meter atau GT 150 ke atas" },
      { key: "d", text: "15 meter <= L < 24 meter" },
    ],
    answer: "c",
  },
  {
    id: 205,
    type: "multiple_choice",
    question:
      "Sebuah kapal dengan data : Panjang Tegak 26.38 m, Lebar 8.40 m, Dalam 3.50 m, dan Volume 405 m3. Berapakah Koefisien blok (Cb) kapal tersebut :",
    options: [
      { key: "a", text: "0.572" },
      { key: "b", text: "0.612" },
      { key: "c", text: "0.518" },
      { key: "d", text: "0.484" },
    ],
    answer: "a",
  },
  {
    id: 206,
    type: "multiple_choice",
    question:
      "Cargo securing manual wajib tersedia bagi kapal dengan ukuran GT 500 atau lebih yang mengangkut :",
    options: [
      { key: "a", text: "Muatan curah" },
      { key: "b", text: "Muatan cair curah" },
      { key: "c", text: "Muatan unit (peti kemas, pallet, ro-ro)" },
      { key: "d", text: "Hanya muatan kayu" },
    ],
    answer: "c",
  },
  {
    id: 207,
    type: "multiple_choice",
    question:
      "Metode pengujian stabilitas kapal yang bertujuan untuk mendapatkan titik berat kapal kosong disebut :",
    options: [
      { key: "a", text: "Manuvering test" },
      { key: "b", text: "Lightweight survey" },
      { key: "c", text: "Rolling period test" },
      { key: "d", text: "Inclining test" },
    ],
    answer: "d",
  },
  {
    id: 208,
    type: "multiple_choice",
    question:
      "Hasil akhir dari pelaksanaan inclining test adalah parameter berikut, kecuali :",
    options: [
      { key: "a", text: "Berat pelat kapal rata-rata" },
      { key: "b", text: "Berat kapal kosong (LDT)" },
      { key: "c", text: "Titik berat memanjang (LCG)" },
      { key: "d", text: "Titik berat vertikal (KG/VCG)" },
    ],
    answer: "a",
  },
  {
    id: 209,
    type: "multiple_choice",
    question:
      "Draft survey dilakukan terhadap kapal-kapal berikut untuk menentukan berat muatan, kecuali :",
    options: [
      { key: "a", text: "Kapal kembar (Sister ship)" },
      { key: "b", text: "Tongkang geladak" },
      { key: "c", text: "Pontoon" },
      { key: "d", text: "Tongkang kerja berakomodasi" },
    ],
    answer: "a",
  },
  {
    id: 210,
    type: "multiple_choice",
    question:
      "Informasi stabilitas kapal dalam buku stabilitas harus mencantumkan hal berikut, kecuali :",
    options: [
      { key: "a", text: "Diagram KT-KQ J (Propeller)" },
      { key: "b", text: "Lightweight data" },
      { key: "c", text: "Tabel TPC (Tonne per cm Immersion)" },
      { key: "d", text: "Tabel Hydrostatic" },
    ],
    answer: "a",
  },
  {
    id: 211,
    type: "multiple_choice",
    question:
      "Proses pengesahan gambar bangunan baru wajib melampirkan surat pengantar dari :",
    options: [
      { key: "a", text: "Nahkoda kapal" },
      { key: "b", text: "Surveyor klas" },
      { key: "c", text: "Pemilik kapal" },
      { key: "d", text: "Syahbandar tempat pembangunan" },
    ],
    answer: "d",
  },
  {
    id: 212,
    type: "multiple_choice",
    question:
      "Perombakan kapal (Conversion) dianggap terjadi apabila ada perubahan pada :",
    options: [
      { key: "a", text: "Ukuran utama kapal" },
      { key: "b", text: "Penggantian mesin dengan daya yang sama" },
      { key: "c", text: "Kapasitas tangki ballast" },
      { key: "d", text: "Fungsi atau jenis kapal" },
    ],
    answer: "a",
  },
  {
    id: 213,
    type: "multiple_choice",
    question:
      "Kapal LCT yang dirombak menjadi kapal penumpang wajib memenuhi persyaratan berikut, kecuali :",
    options: [
      { key: "a", text: "Standard klas awal pembangunan" },
      { key: "b", text: "Perhitungan stabilitas sesuai standar keselamatan" },
      { key: "c", text: "Hanya diijinkan untuk pelayaran lokal" },
      { key: "d", text: "Syarat keselamatan kapal penumpang penuh" },
    ],
    answer: "c",
  },
  {
    id: 214,
    type: "multiple_choice",
    question:
      "Kapal dengan panjang lebih dari 160 meter yang mengalami perombakan wajib inclining test ulang jika :",
    options: [
      { key: "a", text: "Berat kapal kosong berubah lebih dari 1%" },
      { key: "b", text: "Berat kapal kosong berubah kurang dari 1%" },
      { key: "c", text: "Titik berat memanjang berubah lebih dari 1%" },
      { key: "d", text: "Titik berat memanjang berubah kurang dari 0.5%" },
    ],
    answer: "a",
  },
  {
    id: 215,
    type: "multiple_choice",
    question:
      "Official Sea trial (uji coba laut) dilakukan pada saat-saat berikut, kecuali :",
    options: [
      { key: "a", text: "Selesai pembangunan baru" },
      { key: "b", text: "Selesai penambahan panjang kapal" },
      { key: "c", text: "Selesai pembongkaran silinder head mesin" },
      { key: "d", text: "Selesai perubahan daya mesin utama" },
    ],
    answer: "c",
  },
  {
    id: 216,
    type: "multiple_choice",
    question:
      "Dalam pengujian mesin jangkar, rantai jangkar minimal harus diturunkan dan ditarik kembali sebanyak :",
    options: [
      { key: "a", text: "1 segel haluan" },
      { key: "b", text: "2 segel haluan" },
      { key: "c", text: "3 segel haluan" },
      { key: "d", text: "4 segel haluan" },
    ],
    answer: "b",
  },
  {
    id: 217,
    type: "multiple_choice",
    question:
      "Sesuai regulasi, permesinan kapal kecepatan tinggi (HSC) kategori C memiliki daya maksimum sebesar :",
    options: [
      { key: "a", text: "750 HP" },
      { key: "b", text: "600 KW" },
      { key: "c", text: "600 HP" },
      { key: "d", text: "750 KW" },
    ],
    answer: "d",
  },
  {
    id: 218,
    type: "multiple_choice",
    question:
      "Formula tinggi Double Bottom (dasar ganda) untuk kapal barang adalah :",
    options: [
      { key: "a", text: "Lebar Kapal (B) / 15" },
      { key: "b", text: "Lebar Kapal (B) / 20" },
      { key: "c", text: "Jawaban A dan B Benar" },
      { key: "d", text: "Jawaban A dan B Salah" },
    ],
    answer: "a",
  },
  {
    id: 219,
    type: "multiple_choice",
    question:
      "Ketentuan teknis mengenai lampu navigasi dan isyarat bunyi diatur dalam konvensi internasional :",
    options: [
      { key: "a", text: "COLREG 72" },
      { key: "b", text: "SOLAS 74" },
      { key: "c", text: "ILLC 66" },
      { key: "d", text: "MARPOL 73/78" },
    ],
    answer: "a",
  },
  {
    id: 220,
    type: "multiple_choice",
    question:
      "Sesuai aturan COLREG 72, besar sudut pancar untuk lampu samping (side light) adalah :",
    options: [
      { key: "a", text: "360 derajat" },
      { key: "b", text: "180 derajat" },
      { key: "c", text: "112,5 derajat" },
      { key: "d", text: "225 derajat" },
    ],
    answer: "c",
  },
  {
    id: 221,
    type: "multiple_choice",
    question:
      "Tujuan utama Marine Inspector melaksanakan pemeriksaan adalah memastikan :",
    options: [
      { key: "a", text: "Kinerja awak kapal" },
      { key: "b", text: "Ketepatan waktu tiba" },
      { key: "c", text: "Kelaiklautan sesuai regulasi keselamatan" },
      { key: "d", text: "Semua benar" },
    ],
    answer: "c",
  },
  {
    id: 222,
    type: "multiple_choice",
    question:
      "Parameter apa yang paling krusial dalam pemeriksaan stabilitas kapal barang curah?",
    options: [
      { key: "a", text: "Jumlah makanan awak" },
      { key: "b", text: "Titik berat muatan dan pemakaian tangki harian" },
      { key: "c", text: "Warna logo cerobong" },
      { key: "d", text: "Kecepatan kapal" },
    ],
    answer: "b",
  },
  {
    id: 223,
    type: "multiple_choice",
    question:
      "Inspeksi keselamatan kapal meliputi pemeriksaan alat-alat berikut, kecuali :",
    options: [
      { key: "a", text: "Sekoci penolong" },
      { key: "b", text: "Pompa pemadam darurat" },
      { key: "c", text: "Sertifikat medis awak" },
      { key: "d", text: "Semua jawaban salah" },
    ],
    answer: "d",
  },
  {
    id: 224,
    type: "multiple_choice",
    question:
      "Peralatan radio AIS tidak wajib dipasang pada kapal niaga di bawah ukuran :",
    options: [
      { key: "a", text: "GT 150" },
      { key: "b", text: "GT 300" },
      { key: "c", text: "GT 500" },
      { key: "d", text: "GT 35" },
    ],
    answer: "d",
  },
  {
    id: 225,
    type: "multiple_choice",
    question:
      "Jika MI menemukan kerusakan struktur lambung yang membahayakan, tindakan utamanya adalah :",
    options: [
      { key: "a", text: "Memberikan larangan berlayar (detention)" },
      { key: "b", text: "Memberikan ijin satu kali jalan" },
      { key: "c", text: "Mencabut akta pendaftaran" },
      { key: "d", text: "Mengganti Nahkoda" },
    ],
    answer: "a",
  },
  {
    id: 226,
    type: "multiple_choice",
    question: "Pemeriksaan ruang mesin meliputi hal-hal berikut, kecuali :",
    options: [
      { key: "a", text: "Kekedapan seachest" },
      { key: "b", text: "Kondisi bilge alarm" },
      { key: "c", text: "Jumlah wastafel di kabin masinis" },
      { key: "d", text: "Fungsi quick closing valve tangki BBM" },
    ],
    answer: "c",
  },
  {
    id: 227,
    type: "multiple_choice",
    question:
      "Dalam inspeksi navigasi, MI wajib memastikan berfungsinya alat-alat berikut :",
    options: [
      { key: "a", text: "Radar dan GPS" },
      { key: "b", text: "Pompa ballast" },
      { key: "c", text: "Jumlah life jacket" },
      { key: "d", text: "EPIRB dan SART" },
    ],
    answer: "a",
  },
  {
    id: 228,
    type: "multiple_choice",
    question:
      "Pejabat yang berwenang menandatangani sertifikat keselamatan kapal sesuai regulasi Indonesia adalah :",
    options: [
      { key: "a", text: "Nahkoda" },
      { key: "b", text: "Petugas pendaftaran" },
      { key: "c", text: "Marine Inspector yang memiliki pengukuhan" },
      { key: "d", text: "Direktur Perusahaan" },
    ],
    answer: "c",
  },
  {
    id: 229,
    type: "multiple_choice",
    question:
      "Aturan SOLAS mengenai konstruksi - perlindungan, deteksi dan pemadaman kebakaran terdapat pada :",
    options: [
      { key: "a", text: "Chapter IV" },
      { key: "b", text: "Chapter V" },
      { key: "c", text: "Chapter III" },
      { key: "d", text: "Chapter II-2" },
    ],
    answer: "d",
  },
  {
    id: 230,
    type: "multiple_choice",
    question:
      "KM 65 Tahun 2008 mengatur tentang Standar Kapal Non-Konvensi (NCVS) untuk :",
    options: [
      { key: "a", text: "Kapal berbendera asing di perairan RI" },
      { key: "b", text: "Hanya kapal penumpang" },
      {
        key: "c",
        text: "Kapal berbendera Indonesia yang tidak dicakup SOLAS penuh",
      },
      { key: "d", text: "Kapal perang" },
    ],
    answer: "c",
  },
  {
    id: 231,
    type: "multiple_choice",
    question:
      "Sanksi bagi kapal NCVS yang tidak memenuhi standar keselamatan adalah :",
    options: [
      { key: "a", text: "Denda harian" },
      { key: "b", text: "Wajib segera docking" },
      { key: "c", text: "Larang berlayar hingga dipenuhi" },
      { key: "d", text: "Kurangi jumlah muatan" },
    ],
    answer: "c",
  },
  {
    id: 232,
    type: "multiple_choice",
    question:
      "Kapal NCVS dikategorikan berdasarkan daerah pelayaran berikut, kecuali :",
    options: [
      { key: "a", text: "Pelayaran Lokal" },
      { key: "b", text: "Pelayaran Terbatas" },
      { key: "c", text: "Pelayaran Antar Benua" },
      { key: "d", text: "Pelayaran Dekat Pantai" },
    ],
    answer: "c",
  },
  {
    id: 233,
    type: "multiple_choice",
    question:
      "Berdasarkan PM 7 tahun 2024 tentang HSSC, interval pengedokan kapal kargo menurut standar klasifikasi adalah :",
    options: [
      { key: "a", text: "30 bulan" },
      { key: "b", text: "33 bulan" },
      { key: "c", text: "36 bulan" },
      { key: "d", text: "60 bulan" },
    ],
    answer: "c",
  },
  {
    id: 234,
    type: "multiple_choice",
    question:
      "Interval maksimal antara dua pemeriksaan bagian luar lambung kapal (alas kapal) adalah :",
    options: [
      { key: "a", text: "12 bulan" },
      { key: "b", text: "24 bulan" },
      { key: "c", text: "36 bulan" },
      { key: "d", text: "48 bulan" },
    ],
    answer: "c",
  },
  {
    id: 235,
    type: "multiple_choice",
    question:
      "Saat pelaksanaan pengedokan, Marine Inspector wajib memeriksa bagian berikut :",
    options: [
      { key: "a", text: "Kemudi dan baling-baling" },
      { key: "b", text: "Kekedapan sea chest" },
      { key: "c", text: "Ketebalan pelat lambung" },
      { key: "d", text: "Semua jawaban benar" },
    ],
    answer: "d",
  },
  {
    id: 236,
    type: "multiple_choice",
    question:
      "PM 57 Tahun 2021 mengatur tentang sistem pengawasan kelaiklautan kapal melalui :",
    options: [
      { key: "a", text: "Pemberian sanksi denda" },
      { key: "b", text: "Rekomendasi teknis tertulis" },
      {
        key: "c",
        text: "Penarikan sertifikat jika ditemukan ketidaksesuaian kritis",
      },
      { key: "d", text: "Penahanan Nahkoda" },
    ],
    answer: "c",
  },
  {
    id: 237,
    type: "multiple_choice",
    question:
      "Pemeriksaan bagian luar lambung kapal wajib dihadiri oleh Marine Inspector dan :",
    options: [
      { key: "a", text: "Petugas Bea Cukai" },
      { key: "b", text: "Surveyor dari Badan Klasifikasi yang ditunjuk" },
      { key: "c", text: "Hanya pemilik kapal" },
      { key: "d", text: "Petugas Navigasi" },
    ],
    answer: "b",
  },
  {
    id: 238,
    type: "multiple_choice",
    question:
      "Peraturan Menteri tentang Pencegahan Pencemaran dari Kapal diatur dalam :",
    options: [
      { key: "a", text: "PM 29 Tahun 2014" },
      { key: "b", text: "PM 39 Tahun 2016" },
      { key: "c", text: "PM 7 Tahun 2019" },
      { key: "d", text: "PM 110 Tahun 2016" },
    ],
    answer: "a",
  },
  {
    id: 239,
    type: "multiple_choice",
    question:
      "Sesuai regulasi, kapal tongkang yang mengangkut muatan berbahaya wajib memiliki :",
    options: [
      { key: "a", text: "Sistem pemadam permanen" },
      { key: "b", text: "Double bottom penuh" },
      { key: "c", text: "Konstruksi Double Hull (Lambung Ganda)" },
      { key: "d", text: "Mesin pendorong sendiri" },
    ],
    answer: "c",
  },
  {
    id: 240,
    type: "multiple_choice",
    question:
      "Definisi sertifikat keselamatan kapal menurut NCVS adalah bukti kelaiklautan untuk kapal :",
    options: [
      { key: "a", text: "Yang hanya berlayar internasional" },
      { key: "b", text: "Yang berlayar domestik dan non-konvensi" },
      { key: "c", text: "GT di bawah 7" },
      { key: "d", text: "Kapal kayu tradisional saja" },
    ],
    answer: "b",
  },
  {
    id: 241,
    type: "multiple_choice",
    question:
      "Rencana Darurat Penanggulangan Pencemaran Minyak dari Kapal (SOPEP) wajib untuk :",
    options: [
      { key: "a", text: "Kapal minyak GT 150 ke atas" },
      { key: "b", text: "Kapal non-minyak GT 400 ke atas" },
      { key: "c", text: "Semua kapal niaga" },
      { key: "d", text: "Jawaban A dan B Benar" },
    ],
    answer: "d",
  },
  {
    id: 242,
    type: "multiple_choice",
    question:
      "Sertifikat Internasional Pencegahan Pencemaran Udara (IAPP) mengatur tentang emisi :",
    options: [
      { key: "a", text: "Karbon dioksida saja" },
      { key: "b", text: "Nitrogen Oksida (NOx) dan Sulfur Oksida (SOx)" },
      { key: "c", text: "Hanya asap hitam cerobong" },
      { key: "d", text: "Limbah cair mesin" },
    ],
    answer: "b",
  },
  {
    id: 243,
    type: "multiple_choice",
    question:
      "Kapal berukuran kurang dari GT 400 namun berkapasitas 15 orang atau lebih wajib memiliki :",
    options: [
      { key: "a", text: "Oil Content Meter" },
      { key: "b", text: "Sertifikat Pencegahan Pencemaran Kotoran (Sewage)" },
      { key: "c", text: "Sertifikat IAPP" },
      { key: "d", text: "Sertifikat Garis Muat" },
    ],
    answer: "b",
  },
  {
    id: 244,
    type: "multiple_choice",
    question:
      "Konvensi Anti-Fouling System (AFS) melarang penggunaan senyawa berikut pada cat dasar kapal :",
    options: [
      { key: "a", text: "Tembaga (Copper)" },
      { key: "b", text: "Organotin (TBT)" },
      { key: "c", text: "Epoxy Resin" },
      { key: "d", text: "Zinc" },
    ],
    answer: "b",
  },
  {
    id: 245,
    type: "multiple_choice",
    question:
      "Sertifikat jaminan keuangan ganti rugi pencemaran minyak (CLC) wajib bagi kapal pengangkut minyak curah lebih dari :",
    options: [
      { key: "a", text: "1000 ton" },
      { key: "b", text: "2000 ton" },
      { key: "c", text: "150 ton" },
      { key: "d", text: "500 ton" },
    ],
    answer: "b",
  },
  {
    id: 246,
    type: "multiple_choice",
    question:
      "Inventarisasi Bahan Berbahaya (IHM) pada kapal bertujuan untuk :",
    options: [
      { key: "a", text: "Menjual kapal bekas" },
      {
        key: "b",
        text: "Keamanan kru dari bahan beracun saat kapal beroperasi dan didaur ulang",
      },
      { key: "c", text: "Meningkatkan kecepatan" },
      { key: "d", text: "Hanya untuk kapal tangki kimia" },
    ],
    answer: "b",
  },
  {
    id: 247,
    type: "multiple_choice",
    question:
      "Kapal GT 1000 ke atas wajib memiliki asuransi ganti rugi pencemaran minyak yang berasal dari :",
    options: [
      { key: "a", text: "Muatan cair curah" },
      { key: "b", text: "Tangki bahan bakar kapal (Bunker)" },
      { key: "c", text: "Limbah got (Bilge)" },
      { key: "d", text: "Limbah domestik" },
    ],
    answer: "b",
  },
  {
    id: 248,
    type: "multiple_choice",
    question:
      "Apabila kapal ditemukan menggunakan cat anti-fouling yang mengandung TBT, maka tindakan MI adalah :",
    options: [
      { key: "a", text: "Mencabut sertifikat AFS" },
      {
        key: "b",
        text: "Wajib melapis ulang dengan sealer coat yang disetujui",
      },
      { key: "c", text: "Menahan kapal selamanya" },
      { key: "d", text: "Membiarkan saja jika cat sudah lama" },
    ],
    answer: "b",
  },
  {
    id: 249,
    type: "multiple_choice",
    question:
      "Pemeriksaan Sewage Treatment Plant dilakukan untuk memastikan kadar mikroba pembuangan tidak melebihi :",
    options: [
      { key: "a", text: "100 coliform per 100 ml" },
      { key: "b", text: "200 coliform per 100 ml" },
      { key: "c", text: "500 coliform per 100 ml" },
      { key: "d", text: "1000 coliform per 100 ml" },
    ],
    answer: "a",
  },
  {
    id: 250,
    type: "multiple_choice",
    question:
      "Pemisah Air Berminyak (OWS) harus mampu membuang air dengan kadar minyak tidak lebih dari :",
    options: [
      { key: "a", text: "5 ppm" },
      { key: "b", text: "15 ppm" },
      { key: "c", text: "50 ppm" },
      { key: "d", text: "100 ppm" },
    ],
    answer: "b",
  },
  {
    id: 251,
    type: "multiple_choice",
    question:
      "Ketentuan jam kerja dan jam istirahat awak kapal sesuai STCW dan MLC adalah :",
    options: [
      { key: "a", text: "Istirahat minimal 10 jam dalam periode 24 jam" },
      { key: "b", text: "Istirahat minimal 8 jam dalam periode 24 jam" },
      { key: "c", text: "Kerja maksimal 15 jam" },
      { key: "d", text: "Kerja tanpa istirahat saat darurat" },
    ],
    answer: "a",
  },
  {
    id: 252,
    type: "multiple_choice",
    question:
      "Sertifikat Kesehatan Pelaut (Medical Certificate) berlaku selama :",
    options: [
      { key: "a", text: "1 tahun" },
      { key: "b", text: "2 tahun" },
      { key: "c", text: "5 tahun" },
      { key: "d", text: "Selama sertifikat keahlian berlaku" },
    ],
    answer: "b",
  },
  {
    id: 253,
    type: "multiple_choice",
    question:
      "Awak kapal yang bertugas di bagian deck harus memiliki sertifikat keahlian :",
    options: [
      { key: "a", text: "ATT (Ahli Teknika Tingkat)" },
      { key: "b", text: "ANT (Ahli Nautika Tingkat)" },
      { key: "c", text: "BST (Basic Safety Training)" },
      { key: "d", text: "GMDSS" },
    ],
    answer: "b",
  },
  {
    id: 254,
    type: "multiple_choice",
    question:
      "Sijil Awak Kapal (Crew List) yang disahkan syahbandar membuktikan :",
    options: [
      { key: "a", text: "Kepemilikan kapal" },
      { key: "b", text: "Legalitas pengawakan sesuai jabatan di atas kapal" },
      { key: "c", text: "Daftar penumpang gelap" },
      { key: "d", text: "Asuransi kapal" },
    ],
    answer: "b",
  },
  {
    id: 255,
    type: "multiple_choice",
    question:
      "Setiap awak kapal wajib memiliki dokumen identitas resmi yang disebut :",
    options: [
      { key: "a", text: "Paspor Biru" },
      { key: "b", text: "Buku Pelaut (Seaman's Book)" },
      { key: "c", text: "Surat Ijin Berlayar" },
      { key: "d", text: "Sertifikat Inapornet" },
    ],
    answer: "b",
  },
  {
    id: 256,
    type: "multiple_choice",
    question:
      "Training dasar keselamatan kerja di laut yang wajib bagi seluruh personil kapal adalah :",
    options: [
      { key: "a", text: "SCRB" },
      { key: "b", text: "AFF" },
      { key: "c", text: "BST (Basic Safety Training)" },
      { key: "d", text: "MEFA" },
    ],
    answer: "c",
  },
  {
    id: 257,
    type: "multiple_choice",
    question: "Sertifikat MSCD (Minimum Safe Crewing Document) menentukan :",
    options: [
      { key: "a", text: "Jumlah muatan maksimal" },
      { key: "b", text: "Jumlah minimum awak kapal agar operasional aman" },
      { key: "c", text: "Daftar pelabuhan tujuan" },
      { key: "d", text: "Kecepatan kapal" },
    ],
    answer: "b",
  },
  {
    id: 258,
    type: "multiple_choice",
    question:
      "Dalam sistem pengawakan, personil yang bertanggung jawab atas mesin utama disebut :",
    options: [
      { key: "a", text: "Mualim" },
      { key: "b", text: "Masinis / Engineer" },
      { key: "c", text: "Serang" },
      { key: "d", text: "Juru Mudi" },
    ],
    answer: "b",
  },
  {
    id: 259,
    type: "multiple_choice",
    question:
      "Sertifikat kompetensi GMDSS Radio Operator wajib dimiliki oleh :",
    options: [
      { key: "a", text: "Hanya KKM" },
      { key: "b", text: "Seluruh perwira deck" },
      { key: "c", text: "Hanya koki" },
      { key: "d", text: "Hanya Nahkoda" },
    ],
    answer: "b",
  },
  {
    id: 260,
    type: "multiple_choice",
    question:
      "Sertifikat pengukuhan (Endorsement) pada CoC membuktikan bahwa :",
    options: [
      { key: "a", text: "Sertifikat tersebut asli dan diakui negara" },
      { key: "b", text: "Kapal sudah bayar pajak" },
      { key: "c", text: "Awak kapal sudah menikah" },
      { key: "d", text: "Sertifikat sudah expired" },
    ],
    answer: "a",
  },
  {
    id: 261,
    type: "multiple_choice",
    question:
      "Konvensi internasional pelatihan pelaut (sama dengan B 251-260) :",
    options: [
      { key: "a", text: "MARPOL" },
      { key: "b", text: "STCW" },
      { key: "c", text: "UNCLOS" },
      { key: "d", text: "SOLAS" },
    ],
    answer: "b",
  },
  {
    id: 262,
    type: "multiple_choice",
    question: "Tanggung jawab keselamatan penuh di atas kapal ada pada :",
    options: [
      { key: "a", text: "Mualim II" },
      { key: "b", text: "KKM" },
      { key: "c", text: "Nahkoda" },
      { key: "d", text: "Operator" },
    ],
    answer: "c",
  },
  {
    id: 263,
    type: "multiple_choice",
    question: "Penyijilan buku pelaut dilakukan oleh :",
    options: [
      { key: "a", text: "Kantor Navigasi" },
      { key: "b", text: "Perkapalan" },
      { key: "c", text: "KSOP / Syahbandar" },
      { key: "d", text: "BTKP" },
    ],
    answer: "c",
  },
  {
    id: 264,
    type: "multiple_choice",
    question: "Sertifikat jabatan perwira dek :",
    options: [
      { key: "a", text: "SIB" },
      { key: "b", text: "ANT" },
      { key: "c", text: "GMDSS" },
      { key: "d", text: "ATT" },
    ],
    answer: "b",
  },
  {
    id: 265,
    type: "multiple_choice",
    question: "Konvensi MLC mengatur standar :",
    options: [
      { key: "a", text: "SOLAS" },
      { key: "b", text: "COLREG" },
      { key: "c", text: "Kesejahteraan dan kerja awak kapal" },
      { key: "d", text: "MARPOL" },
    ],
    answer: "c",
  },
  {
    id: 266,
    type: "multiple_choice",
    question: "Kurikulum pendidikan kepelautan meliputi :",
    options: [
      { key: "a", text: "Keselamatan" },
      { key: "b", text: "Kecakapan" },
      { key: "c", text: "Iptek" },
      { key: "d", text: "Semua Benar" },
    ],
    answer: "d",
  },
  {
    id: 267,
    type: "multiple_choice",
    question: "Sertifikat Keahlian (CoC) mencakup kompetensi :",
    options: [
      { key: "a", text: "Nautika" },
      { key: "b", text: "Tehnika" },
      { key: "c", text: "Teknik elektro" },
      { key: "d", text: "Semua Benar" },
    ],
    answer: "d",
  },
  {
    id: 268,
    type: "multiple_choice",
    question:
      "Peraturan Menteri tentang pengawakan kapal niaga terbaru adalah :",
    options: [
      { key: "a", text: "PM 16/2021" },
      { key: "b", text: "PM 26/2021" },
      { key: "c", text: "PM 16/2022" },
      { key: "d", text: "PM 26/2022" },
    ],
    answer: "c",
  },
  {
    id: 269,
    type: "multiple_choice",
    question: "Peraturan Pemerintah tentang kepelautan adalah :",
    options: [
      { key: "a", text: "PP 7 Tahun 2000" },
      { key: "b", text: "PM 70/2013" },
      { key: "c", text: "PM 39/2017" },
      { key: "d", text: "KM 65/2009" },
    ],
    answer: "a",
  },
  {
    id: 270,
    type: "multiple_choice",
    question: "Sertifikat kesehatan pelaut wajib dikeluarkan oleh :",
    options: [
      { key: "a", text: "Kemenhub" },
      { key: "b", text: "Syahbandar" },
      { key: "c", text: "Rumah Sakit / Klinik yang ditunjuk resmi" },
      { key: "d", text: "BMKG" },
    ],
    answer: "c",
  },
  {
    id: 271,
    type: "multiple_choice",
    question: "Syarat sijil buku pelaut (sign-on) adalah :",
    options: [
      { key: "a", text: "PKL (Perjanjian Kerja Laut)" },
      { key: "b", text: "CBA (Collective Bargaining Agreement)" },
      { key: "c", text: "Mutasi Perusahaan" },
      { key: "d", text: "Semua Benar" },
    ],
    answer: "d",
  },
  {
    id: 272,
    type: "multiple_choice",
    question: "Kegunaan AFF (Advanced Fire Fighting) adalah :",
    options: [
      { key: "a", text: "Latihan fisik" },
      { key: "b", text: "Syarat administrasi" },
      { key: "c", text: "Keterampilan pemadaman kebakaran lanjutan" },
      { key: "d", text: "Menghindari bahaya" },
    ],
    answer: "c",
  },
  {
    id: 273,
    type: "multiple_choice",
    question: "Seafarers Identity Document (SID) berfungsi sebagai :",
    options: [
      { key: "a", text: "Daftar awak" },
      { key: "b", text: "Buku pelaut" },
      { key: "c", text: "Passpor pelaut" },
      { key: "d", text: "Kartu identitas resmi pelaut internasional" },
    ],
    answer: "d",
  },
  {
    id: 274,
    type: "multiple_choice",
    question: "Jam istirahat minimal pelaut sesuai MLC 2006 adalah :",
    options: [
      { key: "a", text: "10 jam dalam periode 24 jam" },
      { key: "b", text: "9 jam dalam periode 24 jam" },
      { key: "c", text: "8 jam dalam periode 24 jam" },
      { key: "d", text: "7 jam dalam periode 24 jam" },
    ],
    answer: "a",
  },
  {
    id: 275,
    type: "multiple_choice",
    question:
      "Persyaratan keselamatan kapal meliputi aspek teknis berikut, kecuali :",
    options: [
      { key: "a", text: "Material lambung" },
      { key: "b", text: "Konstruksi" },
      { key: "c", text: "Permesinan" },
      { key: "d", text: "Harga Ruang Muat" },
    ],
    answer: "d",
  },
  {
    id: 276,
    type: "multiple_choice",
    question: "Tujuan pelatihan BST bagi pelaut adalah :",
    options: [
      { key: "a", text: "Mencari tenaga kerja" },
      { key: "b", text: "Skill mesin" },
      { key: "c", text: "Keselamatan dasar di laut" },
      { key: "d", text: "Efisiensi bahan bakar" },
    ],
    answer: "c",
  },
  {
    id: 277,
    type: "multiple_choice",
    question: "Fungsi GMDSS pada pengawakan kapal adalah untuk :",
    options: [
      { key: "a", text: "Navigasi" },
      { key: "b", text: "Jadwal makan" },
      { key: "c", text: "Komunikasi darurat global" },
      { key: "d", text: "Informasi cuaca saja" },
    ],
    answer: "c",
  },
  {
    id: 278,
    type: "multiple_choice",
    question:
      "Pengawakan kapal niaga ditentukan berdasarkan kriteria berikut, kecuali :",
    options: [
      { key: "a", text: "Jenis Kapal" },
      { key: "b", text: "Warna Kapal" },
      { key: "c", text: "Daerah Pelayaran" },
      { key: "d", text: "Tonase kotor (GT)" },
    ],
    answer: "b",
  },
  {
    id: 279,
    type: "multiple_choice",
    question: "Masa berlaku Sertifikat Pengawakan (MSCD) adalah :",
    options: [
      { key: "a", text: "6 Bulan" },
      { key: "b", text: "9 Bulan" },
      { key: "c", text: "5 Tahun (Selama tidak ada perubahan data)" },
      { key: "d", text: "1 Tahun" },
    ],
    answer: "c",
  },
  {
    id: 280,
    type: "multiple_choice",
    question: "Standar NCVS berlaku bagi kapal-kapal berikut, kecuali :",
    options: [
      { key: "a", text: "Kapal niaga internasional GT 500" },
      { key: "b", text: "KLM (Kapal Layar Motor)" },
      { key: "c", text: "Kapal kayu tradisional" },
      { key: "d", text: "Kapal negara non-niaga" },
    ],
    answer: "a",
  },
  {
    id: 281,
    type: "multiple_choice",
    question:
      "Berdasarkan PM 7 Tahun 2019, kapal yang wajib dilengkapi AIS adalah :",
    options: [
      { key: "a", text: "Semua kapal" },
      { key: "b", text: "Kapal GT 300 atau lebih" },
      { key: "c", text: "Hanya kapal penumpang" },
      { key: "d", text: "Hanya kapal tangki" },
    ],
    answer: "b",
  },
  {
    id: 282,
    type: "multiple_choice",
    question:
      "Unsur kelaiklautan kapal menurut UU 17 Tahun 2008 meliputi hal berikut, kecuali :",
    options: [
      { key: "a", text: "Keselamatan kapal" },
      { key: "b", text: "Pencegahan pencemaran" },
      { key: "c", text: "Pengawakan" },
      { key: "d", text: "Nilai asuransi kargo" },
    ],
    answer: "d",
  },
  {
    id: 283,
    type: "multiple_choice",
    question: "NCVS tidak berlaku bagi kapal-kapal jenis :",
    options: [
      { key: "a", text: "Kapal Perang" },
      { key: "b", text: "Kapal Ikan" },
      { key: "c", text: "Kapal Layar Motor" },
      { key: "d", text: "Kapal Kecepatan Tinggi" },
    ],
    answer: "a",
  },
  {
    id: 284,
    type: "multiple_choice",
    question: "Kapal yang wajib memenuhi konvensi radio internasional adalah :",
    options: [
      { key: "a", text: "Kapal barang GT 300 internasional" },
      { key: "b", text: "Kapal barang GT 150" },
      { key: "c", text: "Hanya kapal pesiar" },
      { key: "d", text: "Jawaban A benar" },
    ],
    answer: "d",
  },
  {
    id: 285,
    type: "multiple_choice",
    question:
      "Endorsement (pengukuhan) sertifikat perlengkapan dilakukan pada saat :",
    options: [
      { key: "a", text: "Survey Tahunan" },
      { key: "b", text: "Survey Antara (Intermediate)" },
      { key: "c", text: "Survey Berkala" },
      { key: "d", text: "Jawaban A dan C Benar" },
    ],
    answer: "d",
  },
  {
    id: 286,
    type: "multiple_choice",
    question:
      "Sertifikat keselamatan dilengkapi dengan catatan peralatan (Record of Equipment) kategori :",
    options: [
      { key: "a", text: "Form C / E / R" },
      { key: "b", text: "Form A / B" },
      { key: "c", text: "Hanya Form E" },
      { key: "d", text: "Hanya Form R" },
    ],
    answer: "a",
  },
  {
    id: 287,
    type: "multiple_choice",
    question: "Kapal Non-Konvensi adalah kapal yang :",
    options: [
      { key: "a", text: "Berbendera asing" },
      {
        key: "b",
        text: "Tidak dicakup oleh konvensi internasional (SOLAS, Load Line, dll)",
      },
      { key: "c", text: "Tidak boleh berlayar" },
      { key: "d", text: "Tidak punya mesin" },
    ],
    answer: "b",
  },
  {
    id: 288,
    type: "multiple_choice",
    question: "Metode pemeliharaan radio GMDSS wilayah A3 meliputi :",
    options: [
      { key: "a", text: "Duplikasi" },
      { key: "b", text: "Shore-base maintenance" },
      { key: "c", text: "Pengecekan rutin di laut" },
      { key: "d", text: "Dua dari tiga metode di atas wajib dipilih" },
    ],
    answer: "d",
  },
  {
    id: 289,
    type: "multiple_choice",
    question:
      "Pemeriksaan komponen keselamatan kapal sebelum dijual ke luar negeri wajib menyertakan :",
    options: [
      { key: "a", text: "Ijin ekspor" },
      { key: "b", text: "Sertifikat Penghapusan (De-registration)" },
      { key: "c", text: "Sertifikat Pelabelan Komponen" },
      { key: "d", text: "Bukti bayar pajak" },
    ],
    answer: "c",
  },
  {
    id: 290,
    type: "multiple_choice",
    question:
      "Pemeriksaan survey tahunan Load Line meliputi aspek berikut, kecuali :",
    options: [
      { key: "a", text: "Ventilator dan Air pipe" },
      { key: "b", text: "Hatch covers" },
      { key: "c", text: "Warna cat furniture kabin" },
      { key: "d", text: "Freeing ports" },
    ],
    answer: "c",
  },
  {
    id: 291,
    type: "multiple_choice",
    question: "Regulasi PM 12 Tahun 2022 tentang HSC berlaku untuk :",
    options: [
      { key: "a", text: "Kapal penumpang cepat di perairan Indonesia" },
      { key: "b", text: "Hanya kapal asing" },
      { key: "c", text: "Tongkang batu bara" },
      { key: "d", text: "Kapal ikan tradisional" },
    ],
    answer: "a",
  },
  {
    id: 292,
    type: "multiple_choice",
    question:
      "Jenis muatan curah yang diatur dalam IMSBC Code contohnya adalah :",
    options: [
      { key: "a", text: "Minyak kelapa" },
      { key: "b", text: "Gula pasir dalam sak" },
      { key: "c", text: "Biji nikel (Nickel Ore)" },
      { key: "d", text: "Kontainer" },
    ],
    answer: "c",
  },
  {
    id: 293,
    type: "multiple_choice",
    question: "Implementasi penuh HSSC PM 7 Tahun 2024 dimulai pada :",
    options: [
      { key: "a", text: "1 Januari 2024" },
      { key: "b", text: "16 Oktober 2024" },
      { key: "c", text: "1 April 2025" },
      { key: "d", text: "Desember 2023" },
    ],
    answer: "b",
  },
  {
    id: 294,
    type: "multiple_choice",
    question:
      "Tata cara pemuatan bijih nikel pada tongkang diatur khusus dalam :",
    options: [
      { key: "a", text: "KP-DJPL 345/2025" },
      { key: "b", text: "KP-DJPL 358/2024" },
      {
        key: "c",
        text: "Instruksi Dirjen Hubla terkait stabilitas muatan curah",
      },
      { key: "d", text: "Jawaban B dan C benar" },
    ],
    answer: "d",
  },
  {
    id: 295,
    type: "multiple_choice",
    question:
      "Penyelenggaraan kelaiklautan kapal secara elektronik (E-Cert) diatur dalam :",
    options: [
      { key: "a", text: "KP-DJPL 358/2025" },
      { key: "b", text: "KP-DJPL 468/2024" },
      { key: "c", text: "PM 110/2016" },
      { key: "d", text: "UU No 17/2008" },
    ],
    answer: "a",
  },
  {
    id: 296,
    type: "multiple_choice",
    question:
      "Pedoman keselamatan pemuatan batu bara di atas tongkang diatur dalam SE :",
    options: [
      { key: "a", text: "SE No 28 Tahun 2024" },
      { key: "b", text: "SE No 12 Tahun 2023" },
      { key: "c", text: "PM 39/2016" },
      { key: "d", text: "Tidak ada aturan khusus" },
    ],
    answer: "a",
  },
  {
    id: 297,
    type: "multiple_choice",
    question: "Jangkauan radio VHF untuk wilayah pelayaran A1 adalah :",
    options: [
      { key: "a", text: "20 - 30 mil laut" },
      { key: "b", text: "100 mil laut" },
      { key: "c", text: "Jarak tempuh heli" },
      { key: "d", text: "Hanya 5 mil" },
    ],
    answer: "a",
  },
  {
    id: 298,
    type: "multiple_choice",
    question:
      "Pemeriksaan lambung luar kapal barang (Bottom Survey) dilakukan :",
    options: [
      { key: "a", text: "Setiap tahun" },
      { key: "b", text: "Setiap 5 tahun sekali" },
      { key: "c", text: "Minimal dua kali dalam periode 5 tahun" },
      { key: "d", text: "Hanya saat rusak" },
    ],
    answer: "c",
  },
  {
    id: 299,
    type: "multiple_choice",
    question:
      "Batas waktu keterlambatan survey tahunan (Annual Survey) adalah :",
    options: [
      {
        key: "a",
        text: "Tidak boleh terlambat (Plus minus 3 bulan dari tanggal ulang tahun sertifikat)",
      },
      { key: "b", text: "Boleh telat 1 tahun" },
      { key: "c", text: "Boleh telat 6 bulan" },
      { key: "d", text: "Sesuai keinginan pemilik" },
    ],
    answer: "a",
  },
  {
    id: 300,
    type: "multiple_choice",
    question:
      "Kapal kecepatan tinggi (HSC) kategori A dilarang melakukan pelayaran :",
    options: [
      { key: "a", text: "Di malam hari" },
      { key: "b", text: "Saat hujan" },
      { key: "c", text: "Membawa anak-anak" },
      { key: "d", text: "Di laut lepas" },
    ],
    answer: "a",
  },
];
