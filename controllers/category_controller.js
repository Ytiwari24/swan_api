// // category_controller.js

// const Category = require('../models/category');

// exports.getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.createCategory = async (req, res) => {
//   const { name, description } = req.body;

//   try {
//     const category = new Category({
//       name,
//       description,
//     });

//     const savedCategory = await category.save();
//     res.json(savedCategory);
//   } catch (error) {
//     if (error.name === 'ValidationError') {
//       res.status(400).json({ message: 'Invalid category name' });
//     } else {
//       res.status(500).json({ message: error.message });
//     }
//   }
// };

// exports.updateCategory = async (req, res) => {
//   const { name, description } = req.body;

//   try {
//     let category = await Category.findById(req.params.id);

//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     category.name = name || category.name;
//     category.description = description || category.description;

//     const updatedCategory = await category.save();
//     res.json(updatedCategory);
//   } catch (error) {
//     if (error.name === 'ValidationError') {
//       res.status(400).json({ message: 'Invalid category name' });
//     } else {
//       res.status(500).json({ message: error.message });
//     }
//   }
// };

// exports.deleteCategory = async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);

//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     await category.remove();
//     res.json({ message: 'Category removed' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
