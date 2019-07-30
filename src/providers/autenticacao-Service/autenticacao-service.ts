import { NativeStorage } from '@ionic-native/native-storage';
import { HelloIonicConstants } from './../../app/HelloIonicConstants';
import { LoginModel } from './../../models/LoginModel';
import { IAutenticacaoService } from './../../providers-interfaces/IAutenticacaoService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AutenticacaoService implements IAutenticacaoService {

  constructor(public http: HttpClient, private nativeStorage: NativeStorage) {
    console.log('Hello AutenticacaoServiceProvider Provider');
  }

  login(loginModel: LoginModel): Observable<void>{

    if(!loginModel || !loginModel.email || !loginModel.senha){
      return Observable.throw('Email e/ou senha não informados.');
    }
    let corpoRequisicao = {
      email: loginModel.email,
      senha: loginModel.senha
    };

    //return loginModel.email == "teste@email.com" && loginModel.senha == "123";
      return this.http.post(HelloIonicConstants.BASE_URL + '/'+HelloIonicConstants.Auth.LOGIN,corpoRequisicao)
            .map(response => {              
              let resp = response;
              this.nativeStorage.setItem('token_autenticacao', {token: resp})
                                .then(() => console.log('teste token'),
                                (erro) => alert(erro));
            });
  }

  logout():void{

  }

  

}
