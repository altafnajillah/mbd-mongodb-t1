# MongoDB Script

## Database & Collection

### Memilih Database

```mongodb
use <nama_db>
```

### Database Methods

- Menghapus database:
  ```mongodb
  db.dropDatabase()
  ```
- Mendapatkan nama database:
  ```mongodb
  db.getName()
  ```
- Mengambil informasi host:
  ```mongodb
  db.hostInfo()
  ```
- Mengambil versi mongodb:
  ```mongodb
  db.version()
  ```
- Mengambil statistik penggunaan:
  ```mongodb
  db.stats()
  ```
- Mengambil semua nama collection:
  ```mongodb
  db.getCollectionNames()
  ```
- Membuat collection baru:
  ```mongodb
  db.createCollection(<nama_col>)
  ```
- Mendapatkan object collection:
  ```mongodb
  db.getCollection(<nama_col>)
  ```
- Mendapat informasi semua collection:
  ```mongodb
  db.getCollectionInfos()
  ```

## Collection Methods

- Mengambil semua document:
  ```mongodb
  db.<nama_col>.find()
  ```
- Mengambil jumlah document:
  ```mongodb
  db.<nama_col>.count()
  ```
- Menghapus collection:
  ```mongodb
  db.<nama_col>.drop()
  ```
- Mengambil total ukuran collection:
  ```mongodb
  db.<nama_col>.totalSize()
  ```
- Mengambil informasi statistik collection:
  ```mongodb
  db.<nama_col>.stats()
  ```

## Create Document

- Menambah dokumen:
  ```mongodb
  db.<nama_col>.insertOne(document)
  ```
- Menambah semua dokumen dari array:
  ```mongodb
  db.<nama_col>.insertMany(array<document>)
  ```

## Read Document

- Menampilkan semua document dari collection:
  ```mongosh
  db.<nama_col>.find()
  ```
- Menampilkan salah satu document:
  ```mongosh
  db.<nama_col>.findOne()
  ```
- Menampilkan dengan query:
  ```mongosh
  db.<nama_col>.find(query)
  ```
  ```mongosh
  db.<nama_col>.findOne(query)
  ```

## Update Document

- Mengedit sebuah dokumen:

  ```mongosh
  db.<nama_col>.updateOne(
          {"field": "value"},
          {$set: {"field": "value"}}
      );
  ```

- Mengedit banyak dokumen:
  ```mongosh
  db.<nama_col>.updateMany(
          {"field": "value"},
          {$set: {"field": "value"}}
      );
  ```

## Delete Document

- Menghapus semua document:

  ```mongosh
  db.<nama_col>.drop()
  ```

- Menghapus sebuah document dengan query:

  ```mongosh
  db.<nama_col>.dropOne(query)
  ```

- Menghapus banyak document dengan query:
  ```mongosh
  db.<nama_col>.dropMany(query)
  ```

## Comparision Query

### Tabel Comparision Query

| Operator | Keterangan                                      |
| -------- | ----------------------------------------------- |
| `$eq`    | Sama dengan (equal)                             |
| `$ne`    | Tidak sama dengan (not equal)                   |
| `$gt`    | Lebih besar dari (greater than)                 |
| `$gte`   | Lebih besar atau sama dengan (greater or equal) |
| `$lt`    | Kurang dari (less than)                         |
| `$lte`   | Kurang atau sama dengan (less or equal)         |
| `$in`    | Ada di dalam array nilai                        |
| `$nin`   | Tidak ada di dalam array nilai                  |

### Contoh penggunaan:

```mongosh
db.<nama_col>.find({
    field: {
        $operator: value
    }
})
```

## Logical Query

### Tabel Logical Query

| Operator | Keterangan                                                               |
| -------- | ------------------------------------------------------------------------ |
| `$and`   | Menggabungkan beberapa kondisi dengan logika AND                         |
| `$or`    | Menggabungkan beberapa kondisi dengan logika OR                          |
| `$not`   | Membalikkan hasil query (NOT)                                            |
| `$nor`   | Mengembalikan dokumen yang tidak memenuhi kondisi apa pun di dalam array |

### Contoh penggunaan:

```mongosh
db.<nama_col>.find({
    $operator: [
        { field1: { $comparision1: value1 } },
        { field2: { $comparision2: value2 } }
    ]
})
```

#### Untuk operator $not

```mongosh
db.<nama_col>.find({
    field: {
        $not: query
    }
})
```

## Bulk Write

### Tabel fungsi untuk Bulk Write:

| Fungsi       | Keterangan                                          |
| ------------ | --------------------------------------------------- |
| `insertOne`  | Menyisipkan satu dokumen ke dalam koleksi           |
| `updateOne`  | Memperbarui satu dokumen yang cocok dengan filter   |
| `updateMany` | Memperbarui banyak dokumen yang cocok dengan filter |
| `replaceOne` | Mengganti satu dokumen yang cocok dengan filter     |
| `deleteOne`  | Menghapus satu dokumen yang cocok dengan filter     |
| `deleteMany` | Menghapus banyak dokumen yang cocok dengan filter   |

### Contoh penggunaan:

```mongosh
db.<nama_col>.bulkWrite([
    {
        insertOne: query
    },
    {
        updateMany: query
    },
])
```

## Aggregation

### Tabel operator aggregation

| Operator     | Keterangan                                                |
| ------------ | --------------------------------------------------------- |
| `$group`     | Mengelompokkan dokumen berdasarkan field tertentu         |
| `$limit`     | Membatasi jumlah dokumen yang dihasilkan                  |
| `$project`   | Memilih dan memodifikasi field yang akan ditampilkan      |
| `$sort`      | Mengurutkan dokumen                                       |
| `$match`     | Menyaring dokumen sesuai kondisi tertentu (seperti WHERE) |
| `$addFields` | Menambah field baru ke dokumen                            |
| `$count`     | Menghitung jumlah dokumen                                 |
| `$lookup`    | Melakukan join antar collection                           |
| `$out`       | Menyimpan hasil agregasi ke collection baru               |

### Contoh penggunaan:

Menampilkan jumlah dokumen per kategori:

```mongosh
db.<nama_col>.aggregate([
    { $group: { _id: "$kategori", total: { $sum: 1 } } }
])
```

## Schema Validation

### Operator skema validation:

| Operator            | Keterangan                               |
| ------------------- | ---------------------------------------- |
| `bsonType`          | Menentukan tipe data field               |
| `required`          | Field yang wajib ada                     |
| `properties`        | Mendefinisikan aturan untuk setiap field |
| `minimum`/`maximum` | Batas nilai minimum/maksimum untuk angka |
| `enum`              | Daftar nilai yang diperbolehkan          |
| `pattern`           | Ekspresi reguler untuk string            |

### Contoh penggunaan:

```mongosh
db.<nama_col>.(field, {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [field1, field2],
            properties: {
                field1: {
                    bsonType: "string",
                    description: "harus berupa string dan wajib diisi"
                },
                field2: {
                    bsonType: "int",
                    minimum: 0,
                    description: "harus berupa integer >= 0 dan wajib diisi"
                },
                field3: {
                    bsonType: "string",
                    enum: [enum1, enum2, enum3],
                    description: "harus salah satu dari enum"
                }
            }
        }
    }
})
```
