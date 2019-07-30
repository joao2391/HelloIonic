import { AlertController, LoadingController, Loading,
         ToastController, Toast } from 'ionic-angular';
import { ConfiguracaoPaginaBase } from './ConfiguracaoPaginaBase';
import {FormBuilder} from '@angular/forms';

export abstract class PaginaBase {
    
    protected _formBuilder?: FormBuilder;
    protected _altertCtrl?:  AlertController;
    protected _loadingCtrl?: LoadingController;
    protected _loading:      Loading;
    protected _toastCtrl?:   ToastController;
    protected _toast:        Toast;


    constructor (cpb: ConfiguracaoPaginaBase){

        this._formBuilder = cpb.formBuilder;
        this._altertCtrl = cpb.alertCtrl;
        this.carregarValidadores();
        this._loadingCtrl = cpb.loadingCtrl;
        this._toastCtrl = cpb.toastCtrl;

    }

    protected carregarValidadores(): void{

        if(this._formBuilder != null){
            this.doCarregarValidadores();
        }
    }

    protected doCarregarValidadores(): void{
        
    }

    protected mostrarMensagemErro(mensagem: string){
        if(this._altertCtrl != null){
            let alert = this._altertCtrl.create({
                title: "Erro",
                subTitle: mensagem,
                buttons: ["OK"]
            });
            alert.present();

        }
    }

    protected mostrarLoading(mensagem: string, duracao: number = 0){
        if(duracao == 0){
            this._loading = this._loadingCtrl.create({
                duration: duracao,
                content: mensagem                
            });
        }

        this._loading.present();
    }

    protected esconderLoading():void{
        if(this._loading != null){
            this._loading.dismiss();            
        }
    }

    protected mostrarToast(mensagem: string){
        this._toast = this._toastCtrl.create({
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: 'OK'
        });
        this._toast.setMessage(mensagem);
        this._toast.present();
    }

    protected esconderToast():void{
        if(this._toast != null){
            this._toast.dismiss();
        }
    }
}
