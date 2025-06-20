use("modelKeyValue");

db.dropDatabase();

db.createCollection("products");

db.products.insertMany([
  { _id: "P001", name: "Kopi Arabika", price: 30000 },
  { _id: "P002", name: "Teh Hijau", price: 25000 },
  { _id: "P003", name: "Cokelat Bubuk", price: 40000 },
  { _id: "P004", name: "Susu Almond", price: 45000 },
  { _id: "P005", name: "Madu Hutan", price: 60000 },
]);

db.createCollection("orders");

db.orders.insertMany([
  { _id: "ORD1001", product_id: "P001", quantity: 2, total: 60000 },
  { _id: "ORD1002", product_id: "P003", quantity: 1, total: 40000 },
  { _id: "ORD1003", product_id: "P005", quantity: 1, total: 60000 },
  { _id: "ORD1004", product_id: "P002", quantity: 3, total: 75000 },
  { _id: "ORD1005", product_id: "P004", quantity: 2, total: 90000 },
]);

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "_id",
      as: "product_info",
    },
  },
  { $unwind: "$product_info" },
  {
    $project: {
      _id: 1,
      product: "$product_info.name",
      quantity: 1,
      total: 1,
    },
  },
]);
