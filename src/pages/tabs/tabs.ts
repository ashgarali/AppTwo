import { Component } from '@angular/core';

import {ShopingListPage} from '../shoping-list/shoping-list';
import {RecipesPage} from '../recipes/recipes';
import {GoogleAuthPage} from '../google-auth/google-auth';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  slPage=ShopingListPage;
  recipesPage=RecipesPage;
  googlePage=GoogleAuthPage;
  constructor() {

  }
}
