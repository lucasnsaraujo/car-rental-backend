import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    private importCategoryUseCase;
    constructor(importCategoryUseCase: ImportCategoryUseCase) {
        this.importCategoryUseCase = importCategoryUseCase;
    }

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importCategoryUseCase.execute(file!);

        return response.send('received')
    }

}
export { ImportCategoryController }