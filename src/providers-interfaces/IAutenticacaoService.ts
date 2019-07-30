import { LoginModel } from './../models/LoginModel';
import { Observable } from 'rxjs/Observable';


export interface IAutenticacaoService{

    login(loginModel: LoginModel): Observable<void>;
    logout(): void;
}