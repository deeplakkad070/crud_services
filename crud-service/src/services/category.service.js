
import * as categoryRepository  from '../repositories/category.repository.js';

export const getSubcategories = async (filter) => {
    return await categoryRepository.getSubcategories(filter);
}