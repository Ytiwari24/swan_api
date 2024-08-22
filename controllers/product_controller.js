// const Product = require('../models/product_model');

// // @desc    Add a new product
// // @route   POST /api/products
// // @access  Private
// exports.addProduct = async (req, res) => {
//   const { name, category, price, description, status } = req.body;

//   try {
//     const product = new Product({
//       name,
//       category,
//       price,
//       description,
//       status,
//       created_at: Date.now(),
//       updated_on: Date.now(),
//     });

//     const savedProduct = await product.save();
//     res.json(savedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Get all products
// // @route   GET /api/products
// // @access  Private
// exports.getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Get a product by ID
// // @route   GET /api/products/:id
// // @access  Private
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Update a product by ID
// // @route   PUT /api/products/:id
// // @access  Private
// exports.updateProduct = async (req, res) => {
//   const { name, category, price, description, status } = req.body;

//   try {
//     let product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     product.name = name || product.name;
//     product.category = category || product.category;
//     product.price = price || product.price;
//     product.description = description || product.description;
//     product.status = status !== undefined ? status : product.status;
//     product.updated_on = Date.now();

//     const updatedProduct = await product.save();
//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Delete a product by ID
// // @route   DELETE /api/products/:id
// // @access  Private
// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     await product.remove();
//     res.json({ message: 'Product removed' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
