const Product = require("../models/ProductModel");

module.exports = {
  createProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      return res
        .status(200)
        .json({ success: true, message: "Product Created Successfully. ✅" });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        message: "Product Created Failed! ❌",
      });
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        message: "Products Fetched Successfully. ✅",
        data: products,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        message: "Products Fetch Failed! ❌",
      });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      return res.status(200).json({
        success: true,
        message: "Product Fetched Successfully. ✅",
        data: product,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        message: "Product Fetch Failed! ❌",
      });
    }
  },
  searchProduct: async (req, res) => {
    try {
      const query = req.params.key;
      const result = await Product.aggregate([
        {
          $search: {
            index: "furniture_products",
            text: {
              query: query,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      return res.status(200).json({
        success: true,
        message: "Search Completed. ✅",
        data: result,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({
        success: false,
        message: "Search Failed! ❌",
      });
    }
  },
};
