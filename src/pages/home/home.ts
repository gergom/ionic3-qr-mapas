import { Component } from '@angular/core';
// Plugins
// Componentes
import { ToastController, Platform } from 'ionic-angular';

// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// servicios
import { HistorialService } from "../../providers/historial/historial";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( private barcodeScanner: BarcodeScanner,
               private toastCtrl: ToastController,
               private platform: Platform,
               private _historialService:HistorialService) {}


scan(){
    console.log("Realizando scan...");
    if( !this.platform.is('cordova') ){
	     console.log("en desktop");
       this.mostrar_mensaje( "No puede probarlo en web "  );
      return;
    }

    this.barcodeScanner.scan().then( (barcodeData) => {
     console.log("result:", barcodeData.text );
     console.log("format:", barcodeData.format );
     console.log("cancelled:", barcodeData.cancelled );

     if( !barcodeData.cancelled && barcodeData.text != null ){
       console.log("recibido:", barcodeData.text );
         this.mostrar_mensaje( "Recibido "+barcodeData.text );
       this._historialService.agregar_historial( barcodeData.text  );
     }else{
       console.log("cancelado:");
        this.mostrar_mensaje( "Cancelado" );
     }


    }, (err) => {
        console.error("Error: ", err );
        this.mostrar_mensaje( "Error: " + err );
    });

  }

  mostrar_mensaje( mensaje:string ){

    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500
    });

    toast.present();

  }

}
