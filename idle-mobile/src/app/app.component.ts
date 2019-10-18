import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OrientacionService } from './core/orientacion.service';
import { UsuarioService } from './core/usuario.service';

@Component( {
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.scss' ]
} )
export class AppComponent {
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private orientacionService: OrientacionService,
		private usuarioService: UsuarioService
	) {
		this.initializeApp();
		//Fuerzo la app a verse en estirado
		this.orientacionService.setOrientacionEstirado();

		//Fake datos
		this.fakeDatos()
	}

	initializeApp() {
		this.platform.ready().then( () => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		} );
	}

	//Datos para no necesitar el back
	private fakeDatos() {
		this.usuarioService.usuario = {
			id: 1,
			nombre: 'Jesus',
			atk: 10,
			def: 10,
			hp: 100
		}
		console.log('Fake datos: ', this.usuarioService.usuario)
	}
}
