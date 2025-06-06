use("project");

db.getCollection("siswa").drop();

db.siswa.insertMany([
  {
    _id: ObjectId(),
    nama: "New User 1",
    nis: "789012",
    kelas: "10C",
    semester: [
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 1,
        nilai: [
          {
            mata_pelajaran: "Matematika",
            nilai: 82,
          },
          {
            mata_pelajaran: "Bahasa Indonesia",
            nilai: 85,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 80,
          },
        ],
      },
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 2,
        nilai: [
          {
            mata_pelajaran: "Matematika",
            nilai: 84,
          },
          {
            mata_pelajaran: "Bahasa Indonesia",
            nilai: 87,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 85,
          },
        ],
      },
    ],
  },
  {
    _id: ObjectId(),
    nama: "New User 2",
    nis: "345678",
    kelas: "10D",
    semester: [
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 1,
        nilai: [
          {
            mata_pelajaran: "Matematika",
            nilai: 78,
          },
          {
            mata_pelajaran: "Bahasa Indonesia",
            nilai: 80,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 75,
          },
        ],
      },
    ],
  },
]);
