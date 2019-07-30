import { TabsPage } from './../tabs/tabs';
import { IAutenticacaoService } from './../../providers-interfaces/IAutenticacaoService';
import { HomePage } from './../home/home';
import { LoginModel } from './../../models/LoginModel';
import { HelloIonicValidadores } from './../../validadores/HelloIonicValidadores';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import {PaginaBase} from '../../infra/PaginaBase';





@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends PaginaBase {

  loginFrmGroup: FormGroup;
  foiSubmetido: boolean;
  loginModel: LoginModel;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              @Inject('IAutenticacaoService')
              public autenticacaoService: IAutenticacaoService,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {
      super({formBuilder: formBuilder,
           alertCtrl: alertCtrl,
           loadingCtrl: loadingCtrl,
           toastCtrl: toastCtrl})

    this.foiSubmetido = false;
    this.loginModel = new LoginModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  protected doCarregarValidadores():void{
    this.loginFrmGroup = this._formBuilder.group({
      email: ['',Validators.compose([Validators.required, HelloIonicValidadores.email])],
      senha: ['',Validators.compose([Validators.required, Validators.minLength(3)])]

    })
  }

  login(): void {

    this.foiSubmetido = true;
    this.esconderToast();

    if(this.loginFrmGroup.valid){

          //this.mostrarLoading('Fazendo Login...');
          //this.navCtrl.setRoot(TabsPage,{},{animate: true, direction: 'forward'});
           //this.esconderLoading();
          this.autenticacaoService.login(this.loginModel).subscribe(data =>{
            
            this.esconderLoading();
            this.navCtrl.setRoot(TabsPage,{},{animate: true, direction: 'forward'});
          },
            err => {
              this.esconderLoading();
              let mensagem = `${JSON.parse(err._body).erro.mensagem}`;
              this.mostrarToast(mensagem);
              //`${JSON.parse(err._body).erro.mensagem}`
            }
          );
          
       /* if(this.autenticacaoService.login(this.loginModel)){

          this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

        }else{

          this.mostrarMensagemErro("Login e/ou Senha incorretos!");
        }*/      
    }
  }

}
