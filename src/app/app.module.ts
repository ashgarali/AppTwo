import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {ShopingListPage} from  '../pages/shoping-list/shoping-list';
import {RecipesPage} from '../pages/recipes/recipes';
import {RecipePage} from '../pages/recipe/recipe';
import {EditRecipePage} from '../pages/edit-recipe/edit-recipe';
import { TabsPage } from '../pages/tabs/tabs';
import {ShopingListService} from '../servicies/shopinglistservice';
import {GoogleAuthPage} from '../pages/google-auth/google-auth'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthService} from 'angular2-google-login'
 
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ShopingListPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
   GoogleAuthPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ShopingListPage,
    RecipesPage,
    RecipePage,
    EditRecipePage,
    GoogleAuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ShopingListService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
