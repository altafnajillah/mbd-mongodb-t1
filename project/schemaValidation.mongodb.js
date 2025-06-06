use("project");

db.getCollection("siswa").drop();

db.createCollection("siswa", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "nis", "kelas", "semester"],
      properties: {
        nama: { bsonType: "string" },
        nis: { bsonType: "string" },
        kelas: { bsonType: "string" },
        semester: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["tahun_ajaran", "semester_ke", "nilai"],
            properties: {
              tahun_ajaran: { bsonType: "string" },
              semester_ke: { bsonType: "int" },
              nilai: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required: ["mata_pelajaran", "nilai"],
                  properties: {
                    mata_pelajaran: { bsonType: "string" },
                    nilai: {
                      bsonType: "int",
                      minimum: 0,
                      maximum: 100,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});
db.siswa.insertMany([
  {
    nama: "John Doe",
    nis: "123456",
    kelas: "10A",
    semester: [
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 1,
        nilai: [
          { mata_pelajaran: "Matematika", nilai: 101 }, // nilai tidak valid, harus antara 0 dan 100
          { mata_pelajaran: "Bahasa Indonesia", nilai: 90 },
          { mata_pelajaran: "Bahasa Inggris", nilai: 88 },
        ],
      },
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 2,
        nilai: [
          { mata_pelajaran: "Matematika", nilai: 88 },
          { mata_pelajaran: "Bahasa Indonesia", nilai: 92 },
          { mata_pelajaran: "Bahasa Inggris", nilai: 90 },
        ],
      },
    ],
  },
  {
    nama: "Jane Smith",
    nis: "654321",
    kelas: "10B",
    semester: [
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 1,
        nilai: [
          { mata_pelajaran: "Matematika", nilai: 78 },
          { mata_pelajaran: "Bahasa Indonesia", nilai: 85 },
          { mata_pelajaran: "Bahasa Inggris", nilai: 80 },
        ],
      },
      {
        tahun_ajaran: "2024/2025",
        semester_ke: 2,
        nilai: [
          { mata_pelajaran: "Matematika", nilai: 82 },
          { mata_pelajaran: "Bahasa Indonesia", nilai: 88 },
          { mata_pelajaran: "Bahasa Inggris", nilai: 84 },
        ],
      },
    ],
  },
]);
