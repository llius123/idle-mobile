import { Injectable } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Injectable({
  providedIn: 'root',
})
export class OrientacionService {

	constructor(private screenOrientation: ScreenOrientation) {}

	public setOrientacionEstirado() {
		this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
	}
}