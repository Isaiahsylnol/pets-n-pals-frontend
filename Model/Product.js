module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    sku: String,
    price: Number,
    inventory_quantity: String,
    breed: String,
    name: String,
    rating: Number,
    description: String,
    thumbnail: String,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Product = mongoose.model("product", schema);
  return Product;
};
