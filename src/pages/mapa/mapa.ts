import { Component } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor( public navParams: NavParams,
               private platform: Platform,
               private viewCtrl: ViewController ) {

  if( !this.platform.is('cordova') ){
    if(this.navParams.get("coords") != null){
      let coordsArray = this.navParams.get("coords").split(",");
      this.lat = Number( coordsArray[0].replace("geo:","") );
      this.lng = Number( coordsArray[1] );
    }else{
      console.log("sin parametros");
    }
  }else{
    if(this.navParams.get("coords") != null){
      let coordsArray = this.navParams.get("coords").split(",");
      this.lat = Number( coordsArray[0].replace("geo:","") );
      this.lng = Number( coordsArray[1] );
      console.log(  this.lat, this.lng );
    }
  }

  }


  cerrar_modal(){
    this.viewCtrl.dismiss();
  }


}
