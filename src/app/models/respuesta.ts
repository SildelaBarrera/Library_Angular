import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';

export class Respuesta {

    constructor(public error: boolean, public codigo: number, public message: string, public dataLibrary: Book[], public dataBook: Book, public dataUser:User){}
}