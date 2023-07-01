import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository"

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {

    private specificationsRepository;
    
    constructor(specificationsRepository: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }

    execute({name, description}: IRequest) {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error('Specification already exists')
        }
        
        this.specificationsRepository.create({name, description})
    }
}

export { CreateSpecificationService }