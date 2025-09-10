import * as productService from "../services/product.service.js";
import error from "../utils/error.js";

export const createProduct = async (req, res, next) => {
  try {
    const isProductExists = await productService.createProduct(req.body);
    if (isProductExists) {
      return next(error(`Product already exists!`, 400));
    }
    return res.status(201).json({ message: "Product Created Successfully" });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const isProductExists = await productService.updateProduct(id, req.body);
    if (isProductExists) {
      return next(error(`Product already exists!`, 400));
    }
    return res.status(201).json({ message: "Product Updated Successfully" });
  } catch (err) {
    next(err);
  }
};

export const serachProduct = async (req, res, next) => {
  try {
    const productList = await productService.serachProduct(req.body);
    return res.status(200).json(productList);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const num = await productService.deleteProduct(id);
    if (num == 1) {
      return res.send({ message: "Product was deleted successfully!" });
    } else {
      return next(
        error(
          `Cannot delete Product with id=${id}. Maybe it was not found!`,
          404
        )
      );
    }
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await productService.getProduct(req.params.id);
    if (!product) {
      return next(error(`Product with id=${req.params.id} not found`, 404));
    }
    return res.status(200).send(product);
  } catch (err) {
    next(err);
  }
};
