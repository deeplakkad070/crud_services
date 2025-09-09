import * as tutorialRepository from '../repositories/tutorial.repository.js';

export const createTutorial = async (tutorialData) => {
  if (!tutorialData.title) {
    throw new Error("Content can not be empty!");
  }

  const tutorial = {
    title: tutorialData.title,
    description: tutorialData.description,
    published: tutorialData.published ? tutorialData.published : false
  };

  return await tutorialRepository.createTutorial(tutorial);
};

export const findAllTutorials = async (query) => {
  return await tutorialRepository.findAllTutorials(query);
};

export const findTutorialById = async (id) => {
  const tutorial = await tutorialRepository.findTutorialById(id);
  if (!tutorial) {
    throw new Error(`Tutorial with id=${id} not found`);
  }
  return tutorial;
};

export const deleteTutorial = async (id) => {
  const num = await tutorialRepository.deleteTutorial(id);
  if (num == 0) {
    throw new Error(`Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`);
  }
  return num;
};

export const deleteAllTutorials = async () => {
  const num = await tutorialRepository.deleteAllTutorials();
  if (num == 0) {
    throw new Error("No tutorials found to delete.");
  }
  return num;
};

export const findAllPublishedTutorials = async () => {
  return await tutorialRepository.findAllPublishedTutorials();
};

export const editTutorial = async (id, tutorialData) => {
  return await tutorialRepository.updateTutorial(id, tutorialData);
};

export const addMulipleTutorial = async (tutorialData) => {
  return await tutorialRepository.createBulkTutorial(tutorialData);
}
