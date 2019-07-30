import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  token: string;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {

    this.nativeStorage.getItem('token_autenticacao')
                      .then(data => this.token = data.token,
                        erro => this.token = '<sem token>');
  }

}
