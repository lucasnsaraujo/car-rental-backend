import { v4 as uuid } from 'uuid';

class Category {
    id?: string;
    name: string;
    description: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Category }