const Cart = require('../models/cart_model');
const Product = require('../models/product_model');

// Get all cart items for a user
exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user._id }).populate('product', 'name price');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a product to the cart
exports.addToCart = async (req, res) => {
  const { product_id, quantity } = req.body;

  try {
    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cartItem = await Cart.findOne({ user: req.user._id, product: product_id });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new Cart({
        user: req.user._id,
        product: product_id,
        quantity,
      });
    }

    const savedCartItem = await cartItem.save();
    res.json(savedCartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update cart item quantity
exports.updateCartItem = async (req, res) => {
  const { quantity } = req.body;

  try {
    let cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    cartItem.quantity = quantity || cartItem.quantity;
    const updatedCartItem = await cartItem.save();

    res.json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove a product from the cart
exports.removeFromCart = async (req, res) => {
  try {
    let cartItem = await Cart.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    await cartItem.remove();
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Clear all items from the cart
exports.clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({ user: req.user._id });
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
