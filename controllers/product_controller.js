// const Product = require('../models/product_model');

// // Add a new product
// exports.addProduct = async (req, res) => {
//     const { name, category, price, description, status } = req.body;

//     try {
//         const product = new Product({
//             name,
//             category,
//             price,
//             description,
//             status,
//         });

//         const savedProduct = await product.save();

//         res.status(201).json(savedProduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


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

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.json({ "success": true, "message": "Products Data Retrieve Successfully...!!!", "data": products });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ "success": true, "message": "Products Data Retrieve Successfully...!!!", "data": product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, category, price, description, status } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, {
            name,
            category,
            price,
            description,
            status,
            updated_on: Date.now(),
        }, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ "success": true, "message": "Product Updated Successfully...!!!", "data": product });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ "success": true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

