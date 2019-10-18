import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { PluginModule } from './plugin.module';
import { ServiceModule } from './service.module';
import { InicioComponent } from './inicio/inicio.component';
import { CampamentoComponent } from './campamento/campamento.component';
import { CampanyaComponent } from './campamento/campanya/campanya.component';

@NgModule({
  declarations: [AppComponent, InicioComponent, CampamentoComponent, CampanyaComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, PluginModule, ServiceModule],
  providers: [
    StatusBar,
    SplashScreen,
	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
