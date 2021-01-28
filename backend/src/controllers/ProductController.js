import Product from '../models/Product.js';

class ProductController {
  async index(req, res) {
    const product = await Product.find().sort({ title: 1 });

    res.json(product);
  }

  async create(req, res) {
    try {
      const { title, category, price, stockAmount } = req.body;
      let data = { title, category, price, stockAmount };

      const product = await Product.create(data);

      res.status(200).json(product);
    } catch (error) {
      console.error(error);
    }
  }

  async update(req, res) {
    const { _id, title, category, price, stockAmount } = req.body;
    const data = { title, category, price, stockAmount };

    const product = await Product.findByIdAndUpdate({ _id }, data, {
      new: true,
    });

    res.json(product);
  }

  async delete(req, res) {
    try {
      const { _id } = req.params;
      const product = await Product.findByIdAndDelete({ _id });

      res.json(product);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new ProductController();
