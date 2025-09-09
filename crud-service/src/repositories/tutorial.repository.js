import sequelize from "../sequalize/db-config.js";
import { db } from "../sequalize/db-context.js";
const Tutorial = db.tutorial;
const Op = db.Sequelize.Op;

export const createTutorial = async (tutorial) => {
  return await Tutorial.create(tutorial);
};

export const findAllTutorials = async (query) => {
  const condition = query.title
    ? { title: { [Op.iLike]: `%${query.title}%` } }
    : null;

  return await Tutorial.findAll({
    attributes: { exclude: ["updatedAt"] },
    where: condition,
    limit: 2,
    offset: 2,
  });
};

export const findTutorialById = async (id) => {
  const [result] = await sequelize.query(
    `SELECT * FROM get_tutorial_by_id(${id})`
  );
  if (!result || result.length === 0) {
    throw new Error(`Tutorial with id=${id} not found`);
  }

  return result;
  // return await Tutorial.findByPk(id);
};

export const deleteTutorial = async (id) => {
  return await Tutorial.destroy({ where: { id } });
};

export const deleteAllTutorials = async () => {
  return await Tutorial.destroy({ where: {}, truncate: false });
};

export const findAllPublishedTutorials = async () => {
  return await Tutorial.findAll({ where: { published: true } });
};

export const updateTutorial = async (id, tutorialData) => {
  return await Tutorial.update(tutorialData, { where: { id } });
};

export const createBulkTutorial = async (tutorialData) => {
  return await Tutorial.bulkCreate(tutorialData);
};
