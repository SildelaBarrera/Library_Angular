
export class User {

    public id_user: number;
    public name: string;
    public last_name: string;
    public email: string;
    public photo: string;
    public password: string;
    public password2: string;

    constructor(name: string, last_name: string, email: string, photo: string, password: string, password2: string){

        this.id_user;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.photo = photo;
        this.password = password;
        this.password2 = password2;
    }

}
