import { Component } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label:'listado',icon:'label',Url:'./list'},
    {label:'añadir',icon:'add',Url:'./new-hero'},
    {label:'buscar',icon:'search',Url:'./search'},
  ]

}
