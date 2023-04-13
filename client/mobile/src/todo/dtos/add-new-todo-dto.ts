import * as Yup from 'yup';

export type AddNewTodoDto = {
    name: string;
};

export class AddNewTodoDtoValidationSchema extends Yup.ObjectSchema<AddNewTodoDto> {
    constructor() {
        super({
            name: Yup.string().required(),
        });
    }
}
