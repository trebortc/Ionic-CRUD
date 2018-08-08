import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { RootPage } from '../pages/root/root';
import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = RootPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      //Removido para ver si vale efecto
      //splashScreen.hide();
      let splash = modalCtrl.create(SplashPage);
      splash.present();
    });
  }
}

