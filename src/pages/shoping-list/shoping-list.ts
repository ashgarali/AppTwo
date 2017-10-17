import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ShopingListService} from '../../servicies/shopinglistservice';
import {Ingredent} from '../../model/ingredent';

@Component({
  selector: 'page-shoping-list',
  templateUrl: 'shoping-list.html',
})
export class ShopingListPage {
 itemList:Ingredent[];
constructor(private shopingListSerice : ShopingListService) {
  
}
ionViewWillEnter(){
  this.loadItems();
}
onAddItem(from:NgForm){
  this.shopingListSerice.addItem(from.value.ingredentName,from.value.amount)
  from.reset();
  this.loadItems();
}
private loadItems()
{
  this.itemList = this.shopingListSerice.getItems();
}
}
