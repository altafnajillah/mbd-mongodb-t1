use("project");

db.getCollection("siswa").drop();

db.siswa.insertMany([
  {
    _id: ObjectId(),
    nama: "John Doe",
    nis: "123456",
    kelas: "10A",
    semester: [
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 1,
        nilai: [
          {
            mata_pelajaran: "Matematika",
            nilai: 85,
          },
          {
            mata_pelajaran: "Bahasa Indonesia",
            nilai: 90,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 88,
          },
        ],
      },
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 2,
        nilai: [
          {
            mata_pelajaran: "Matematika",
            nilai: 88,
          },
          {
            mata_pelajaran: "Bahasa Indonesia",
            nilai: 92,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 90,
          },
        ],
      },
    ],
  },
  {
    _id: ObjectId(),
    nama: "Jane Smith",
    nis: "654321",
    kelas: "10B",
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
            nilai: 82,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 85,
          },
        ],
      },
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 2,
        nilai: [
          {
            mata_pelajaran: "Matematika",
            nilai: 80,
          },
          {
            mata_pelajaran: "Bahasa Indonesia",
            nilai: 84,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 88,
          },
        ],
      },
    ],
  },
  {
    _id: ObjectId(),
    nama: "Alice Johnson",
    nis: "789012",
    kelas: "10C",
    semester: [
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 1,
        nilai: [
          {
            mata_pelajaran: "Matematika",
            nilai: 90,
          },
          {
            mata_pelajaran: "Bahasa Indonesia",
            nilai: 93,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 95,
          },
        ],
      },
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 2,
        nilai: [
          {
            mata_pelajaran: "Matematika",
            nilai: 92,
          },
          {
            mata_pelajaran: "Bahasa Indonesia",
            nilai: 95,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 96,
          },
        ],
      },
    ],
  },
  {
    _id: ObjectId(),
    nama: "Bob Brown",
    nis: "345678",
    kelas: "10A",
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
            nilai: 87,
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
            nilai: 88,
          },
          {
            mata_pelajaran: "Bahasa Inggris",
            nilai: 89,
          },
        ],
      },
    ],
  },
]);

db.siswa.updateMany({ kelas: "10A" }, { $set: { kelas: "10E" } });
