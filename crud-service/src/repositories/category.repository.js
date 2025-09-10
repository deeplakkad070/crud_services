import { db } from "../sequalize/db-context.js";
import { subcategoryModel } from "../sequalize/models/subcategory.js";
const Category = db.category;

export const getSubcategories = async (filter) => {
  const categories = await Category.findAll({
    include: [
      {
        model: subcategoryModel,
        as: "subcategories",
        required: true,
        attributes: ["id", "subcategory"],
      },
    ],
    attributes: ["id", "category"],
    offset: filter.offset,
    limit: filter.limit,
    order: filter.order,
  });
  
  return { data: categories, count: categories.length };
};
  
  // const responce = categories.map((category) => {
  //   return {
  //     id: category.id,
  //     category: category.category,
  //     subcategories: category.subcategories.map((subcategory) => {
  //       return {
  //         id: subcategory.id,
  //         subcategory: subcategory.subcategory,
  //       };
  //     }),
  //   };
  // });

  // const newResponce = {
  //   data: responce,
  //   count: categories.length,
  // };


// const subcategories = await sequelize.query(
//   `
//   SELECT c."category",s."subcategory",s."id",s."isdelete" FROM "subcategory" as s
//   INNER JOIN "category" as c ON s."categoryid" = c.id
//   WHERE s.isdelete = false
//   `,
//   {
//     type: sequelize.QueryTypes.SELECT,
//   }
// );
