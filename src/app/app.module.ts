import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';    
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar locale de la app
import localeEs from "@angular/common/locales/es-HN";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es_HN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
