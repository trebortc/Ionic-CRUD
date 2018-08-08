import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingListPage } from '../shopping-list/shopping-list';

@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})
export class RootPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  navigateToListShopping(){
    this.navCtrl.push(ShoppingListPage);
  }
}
