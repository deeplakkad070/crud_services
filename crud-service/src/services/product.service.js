import * as productRepository from "../repositories/product.repository.js";

export const createProduct = async (newProduct) => {
  const existingProduct = await productRepository.findProductByName(
    newProduct.productname
  );
  if (existingProduct) {
    return true;
  }
  await productRepository.createProduct(newProduct);
  return false;
};

export const updateProduct = async (id,product) => {
    const existingProduct = await productRepository.findProductByName(
        product.productname
      );
      if (existingProduct) {
        return true;
      }
      await productRepository.updateProduct(id,product);
      return false;
}


export const serachProduct = async(params) => {
    return await productRepository.serachProduct(params);
}

export const deleteProduct = async (id) => {
    return await productRepository.deleteProduct(id);
}

export const getProduct = async (id) => {
    return await productRepository.getProduct(id);
}   