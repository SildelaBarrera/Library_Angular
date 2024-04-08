import { Book } from 'src/app/models/book';

export class Respuesta {

    constructor(public error: boolean, public codigo: number, public message: string, public dataLibrary: Book[],public dataBook: Book){}
}