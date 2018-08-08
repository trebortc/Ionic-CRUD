import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AddShoppingPage } from '../add-shopping/add-shopping';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController) {
    this.shoppingListRef$ = this.database.list('shopping-list');
  }

  /*
    1. Editar el producto
    2. Eliminar  el producto
    3. Cancelar la acción
  */
  selectShoppingItem(shoppingItem: ShoppingItem) {
    this.actionSheetCtrl.create({
      title: `${shoppingItem.itemNombre}`,
      buttons: [
        {
          text: 'Editar',
          handler: () => {
            this.navCtrl.push(EditShoppingItemPage,
              { shoppingItemId: shoppingItem.$key });
          }
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.shoppingListRef$.remove(shoppingItem.$key);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("El usuario cancelo la acción");
          }
        }
      ]
    }).present();
  }


  navigateToAddShoppingPage() {
    // Me dirige para agregar un producto nuevo
    this.navCtrl.push(AddShoppingPage);
  }

}
