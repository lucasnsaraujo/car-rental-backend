import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import multer from 'multer'
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp',

})

// Create a category
categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
})


// List all categories
categoriesRoutes.get('/', (request, response ) => {
   return listCategoriesController.handle(request, response);
})


// Import categories
categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
    return importCategoryController.handle(request, response);

})


export { categoriesRoutes }