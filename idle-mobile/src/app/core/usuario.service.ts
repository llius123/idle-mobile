import { Injectable } from '@angular/core';
import { UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

	constructor() {}

	private _usuario: UsuarioModel;
	get usuario(): UsuarioModel { return this._usuario; }
	set usuario(usuario: UsuarioModel) {
		this._usuario = usuario;
	}
}