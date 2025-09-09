import { col, fn, Op, where } from "sequelize";
import { db } from "../sequalize/db-context.js";
import { subcategoryModel } from "../sequalize/models/subcategory.js";
const Product = db.product;

export const createProduct = async (newProduct) => {
  return await Product.create(newProduct);
};

export const findProductByName = async (name) => {
  const product = await Product.findOne({
    where: where(fn("LOWER", col("productname")), fn("LOWER", name)),
  });
  return !!product;
};

export const updateProduct = async (id, product) => {
  return await Product.update(product, { where: { id } });
};

export const deleteProduct = async (id) => {
  return await Product.update({ isdelete: true }, { where: { id } });
};

export const serachProduct = async (params) => {
  let where = {};
  const andCondition = [];

  if (params.name) {
    andCondition.push({
      productname: {
        [Op.iLike]: `%${params.name}%`,
      },
    });
  }

  if (params.subcategoryid) {
    andCondition.push({
      subcategoryid: params.subcategoryid,
    });
  }

  if (params.price) {
    andCondition.push({
      price: { [Op.between]: [params.price[0], params.price[1]] },
    });
  }

  if (params.rating) {
    andCondition.push({
      rating: params.rating,
    });
  }

  if (params.quantity) {
    andCondition.push({
      quantity: params.quantity,
    });
  }

  if (andCondition.length && andCondition) {
    where = {
      [Op.and]: andCondition,
    };
  }

  return await Product.findAndCountAll({
    where,
    order: params.order,
    offset: params.offset,
    limit: params.limit,
  });
};

export const getProduct = async (id) => {
  const result = await Product.findOne({
    include: [
      {
        model: subcategoryModel,
        as: "subcategory",
        attributes: ["subcategory"],
      },
    ],
    where: { id },
  });

  let responce = {};

  return (responce = {
    id: result.id,
    productname: result.productname,
    description: result.description,
    subcategory: result.subcategory.subcategory,
    price: result.price,
    rating: result.rating,
    quantity: result.quantity,
  });
};
