use("project");

db.getCollection("siswa").drop();

db.siswa.insertOne({
  _id: ObjectId(),
  nama: "New User",
  nis: "111222",
  kelas: "10E",
  semester: [
    {
      tahun_ajaran: "2024/2025",
      semester_ke: 1,
      nilai: [
        {
          mata_pelajaran: "Matematika",
          nilai: 75,
        },
        {
          mata_pelajaran: "Bahasa Indonesia",
          nilai: 80,
        },
        {
          mata_pelajaran: "Bahasa Inggris",
          nilai: 78,
        },
      ],
    },
    {
      tahun_ajaran: "2024/2025",
      semester_ke: 2,
      nilai: [
        {
          mata_pelajaran: "Matematika",
          nilai: 77,
        },
        {
          mata_pelajaran: "Bahasa Indonesia",
          nilai: 82,
        },
        {
          mata_pelajaran: "Bahasa Inggris",
          nilai: 80,
        },
      ],
    },
  ],
});
