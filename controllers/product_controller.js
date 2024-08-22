const Product = require('../models/product_model');

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, category, price, description, status } = req.body;

  try {
    const product = new Product({
      name,
      category,
      price,
      description,
      status,
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
