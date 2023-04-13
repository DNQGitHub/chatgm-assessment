import * as Yup from 'yup';

export type EditTodoDto = {
    name: string;
};

export class EditTodoDtoValidationSchema extends Yup.ObjectSchema<EditTodoDto> {
    constructor() {
        super({
            name: Yup.string().required(),
        });
    }
}
