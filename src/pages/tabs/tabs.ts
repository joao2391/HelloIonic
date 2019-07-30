import { PerfilPage } from './../perfil/perfil';
import { ProdutosPage } from './../produtos/produtos';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homeTab: any = HomePage;
  produtosTab: any = ProdutosPage;
  perfilTab: any = PerfilPage;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
