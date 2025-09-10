import * as tutorialService from "../services/tutorial.service.js";
import error from "../utils/error.js";

// @summary::Manage Tutorial::
// @description::This API will Add and Edit tutorials::
export const manageTutorial = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (id) {
      const num = await tutorialService.editTutorial(id, req.body);
      if (num == 1) {
        return res.send({ message: "Tutorial was updated successfully." });
      } else {
        return next(
          error(
            `Cannot update Tutorial with id=${id}. Maybe it was not found or req.body is empty!`,
            400
          )
        );
      }
    } else {
      const tutorial = await tutorialService.createTutorial(req.body);
      return res.status(201).send(tutorial);
    }
  } catch (err) {
    next(err);
  }
};

// @summary::Retrive AllTutorial List::
// @description::This API will retive AllTutorials::
export const getAllTutorials = async (req, res, next) => {
  try {
    const tutorials = await tutorialService.findAllTutorials(req.query);
    return res.status(200).send(tutorials);
  } catch (err) {
    next(err);
  }
};

// @summary::Retrive Single Tutorial::
// @description::This API will retive Single Tutorial by id::
export const getTutorial = async (req, res, next) => {
  try {
    const tutorial = await tutorialService.findTutorialById(req.params.id);
    if (!tutorial) {
      return next(error(`Tutorial with id=${req.params.id} not found`, 404));
    }
    res.status(200).send(tutorial);
  } catch (err) {
    next(err);
  }
};

// @summary::Delete Single Tutorial::
// @description::This API will delete Single Tutorial by id::
export const deleteTutorial = async (req, res, next) => {
  try {
    const num = await tutorialService.deleteTutorial(req.params.id);
    if (num == 1) {
      return res.send({ message: "Tutorial was deleted successfully!" });
    } else {
      return next(
        error(
          `Cannot delete Tutorial with id=${req.params.id}. Maybe it was not found!`,
          404
        )
      );
    }
  } catch (err) {
    next(err);
  }
};

// @summary::Delete All Tutorials::
// @description::This API will delete All Tutorials::
export const deleteAllTutorial = async (_req, res, next) => {
  try {
    const nums = await tutorialService.deleteAllTutorials();
    return res.send({ message: `${nums} Tutorials were deleted successfully!` });
  } catch (err) {
    next(err);
  }
};

// @summary::Find All Published Tutorials::
// @description::This API will find all published tutorials::
export const findTutorialPublished = async (_req, res, next) => {
  try {
    const tutorials = await tutorialService.findAllPublishedTutorials({
      published: true,
    });
    return res.status(200).send(tutorials);
  } catch (err) {
    next(err);
  }
};

export const addMulipleTutorial = async (req, res, next) => {
  try {
    console.log(req.body);
    
    const tutorials = await tutorialService.addMulipleTutorial(req.body);
    return res.status(201).send(tutorials);
  } catch (err) {
    next(err);
  }
};
