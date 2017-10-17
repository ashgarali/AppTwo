import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService, AppGlobals } from 'angular2-google-login';

/**
 * Generated class for the GoogleAuth page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-google-auth',
  templateUrl: 'google-auth.html',
})
export class GoogleAuthPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams,public googleAuth:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleAuth');
  }
 ngOnInit(){
   AppGlobals.GOOGLE_CLIENT_ID = '343753043222-stm16dcg0tg8p4ufl7g55kcou4a94k89.apps.googleusercontent.com';
 }
}
