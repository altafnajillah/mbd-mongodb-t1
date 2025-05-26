# MongoDB Script #

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

| Operator      | Keterangan                                      |
|---------------|-------------------------------------------------|
| `$eq`         | Sama dengan (equal)                             |
| `$ne`         | Tidak sama dengan (not equal)                   |
| `$gt`         | Lebih besar dari (greater than)                 |
| `$gte`        | Lebih besar atau sama dengan (greater or equal) |
| `$lt`         | Kurang dari (less than)                         |
| `$lte`        | Kurang atau sama dengan (less or equal)         |
| `$in`         | Ada di dalam array nilai                        |
| `$nin`        | Tidak ada di dalam array nilai                  |

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

| Operator    | Keterangan                                      |
|-------------|-------------------------------------------------|
| `$and`      | Menggabungkan beberapa kondisi dengan logika AND |
| `$or`       | Menggabungkan beberapa kondisi dengan logika OR  |
| `$not`      | Membalikkan hasil query (NOT)                    |
| `$nor`      | Mengembalikan dokumen yang tidak memenuhi kondisi apa pun di dalam array |

### Contoh penggunaan:
```mongosh
db.<nama_col>.find({
    $operator: [
        { field1: { $comparision1: value1 } },
        { field2: { $comparision2: value2 } }
    ]
})
```

## Bulk Write
## Aggregation
## Schema/Validation