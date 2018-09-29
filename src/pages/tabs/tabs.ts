import { Component } from '@angular/core';

import { HomePage, GuardadosPage, MapaPage } from "../index.paginas";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1:any = HomePage;
  tab2:any = GuardadosPage;
  tab3:any = MapaPage;

  constructor() {}


}
