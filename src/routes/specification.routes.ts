import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.get('/', (request, response) => {})

specificationRoutes.post('/', (request, response) => {
    return createSpecificationController.handle(request, response);

})


export { specificationRoutes }