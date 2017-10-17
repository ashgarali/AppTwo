import {Ingredent} from'../model/ingredent';
export class ShopingListService{
    
    private ingredeants :Ingredent[] =[];

    addItem(name:string ,amount:number){
        this.ingredeants.push(new Ingredent(name,amount));
        console.log(this.ingredeants);
    }
    addItems(item:Ingredent[]){
        this.ingredeants.push(...item);
    }
    getItems():Ingredent[] {
        return this.ingredeants.slice();
    }
    removeItem(index:number){
        this.ingredeants.splice(index,1);
    }
}