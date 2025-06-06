use("belajar");

db.getCollection("mahasiswa").drop();

db.getCollection("mahasiswa").insertMany([
  {
    nama: "Budi",
    umur: 20,
    jurusan: "Teknik Informatika",
    nim: "123456789",
    ipk: 3.5,
    alamat: {
      jalan: "Jl. Merdeka No.1",
      kota: "Jakarta",
      kodePos: "10110",
    },
    kontak: {
      email: "budi@example.com",
      telepon: "08123456789",
    },
    aktif: true,
    mataKuliah: [
      { kode: "IF101", nama: "Algoritma", nilai: 85 },
      { kode: "IF102", nama: "Basis Data", nilai: 90 },
    ],
    tanggalMasuk: new Date("2021-08-01"),
    beasiswa: false,
  },
  {
    nama: "Siti",
    umur: 22,
    jurusan: "Sistem Informasi",
    nim: "987654321",
    ipk: 3.8,
    alamat: {
      jalan: "Jl. Sudirman No.2",
      kota: "Bandung",
      kodePos: "40211",
    },
    kontak: {
      email: "siti@example.com",
      telepon: "08234567890",
    },
    aktif: true,
    mataKuliah: [
      { kode: "SI201", nama: "Manajemen Data", nilai: 88 },
      { kode: "SI202", nama: "Analisis Sistem", nilai: 92 },
    ],
    tanggalMasuk: new Date("2020-08-01"),
    beasiswa: true,
  },
  {
    nama: "Andi",
    umur: 21,
    jurusan: "Teknik Komputer",
    nim: "1122334455",
    ipk: 3.2,
    alamat: {
      jalan: "Jl. Diponegoro No.3",
      kota: "Surabaya",
      kodePos: "60213",
    },
    kontak: {
      email: "andi@example.com",
      telepon: "08345678901",
    },
    aktif: false,
    mataKuliah: [
      { kode: "TK301", nama: "Jaringan Komputer", nilai: 80 },
      { kode: "TK302", nama: "Sistem Operasi", nilai: 78 },
    ],
    tanggalMasuk: new Date("2019-08-01"),
    beasiswa: false,
  },
]);

db.getCollection("mahasiswa").find({ nama: "Budi" });
