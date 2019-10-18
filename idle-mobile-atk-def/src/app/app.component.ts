import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

interface pj {
	id: number,
	hp: number;
	atk: number;
	def: number;
}

@Component( {
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: [ "./app.component.scss" ]
} )
export class AppComponent implements OnInit {
	public aliado: FormGroup;
	public aliado2: FormGroup
	public aliado3: FormGroup
	public enemigo: FormGroup;
	public enemigo2: FormGroup;
	public enemigo3: FormGroup;

	ngOnInit() {

		this.aliado = new FormGroup( {
			id: new FormControl(1),
			hp: new FormControl(100),
			atk: new FormControl(10),
			def: new FormControl(5)
		} );
		this.aliado2 = new FormGroup( {
			id: new FormControl(2),
			hp: new FormControl(100),
			atk: new FormControl(10),
			def: new FormControl(5)
		} );
		this.aliado3 = new FormGroup( {
			id: new FormControl(3),
			hp: new FormControl(100),
			atk: new FormControl(10),
			def: new FormControl(5)
		} );
		this.enemigo = new FormGroup( {
			id: new FormControl(4),
			hp: new FormControl(100),
			atk: new FormControl(10),
			def: new FormControl(0)
		} );
		this.enemigo2 = new FormGroup( {
			id: new FormControl(5),
			hp: new FormControl(100),
			atk: new FormControl(10),
			def: new FormControl(0)
		} );
		this.enemigo3 = new FormGroup( {
			id: new FormControl(6),
			hp: new FormControl(100),
			atk: new FormControl(10),
			def: new FormControl(0)
		} );
	}
	
	public crearPelea() {

		this.pelea(
			this.crearAliado(),
			this.crearEnemigo()
			)
	}

	public crearAliado() {
		return [this.aliado.getRawValue(), this.aliado2.getRawValue(), this.aliado3.getRawValue()];
	}
	public crearEnemigo() {
		return [this.enemigo.getRawValue(), this.enemigo2.getRawValue(), this.enemigo3.getRawValue()];
	}

	public pelea(aliado: pj[], enemigo: pj[]) {

		//Cambiar esto por uina funcion generica
		let pelea = [[aliado[0], enemigo[0]], [aliado[1], enemigo[1]], [aliado[2], enemigo[2]]]
		let peleaIndex = 1;

		let aliadosMuertos: boolean = false;
		let enemigosMuertos: boolean = false;

		for(let i = 0; i < 1; ){
			
			this._aliadoSuperviviente = [];
			this._enemigoSuperviviente = [];
			
			for(const [index, val] of pelea.entries()){

				let auxInfinito = 0;

				while (val[0] && val[1] && val[0].hp > 0 && val[1].hp > 0){

					if(auxInfinito <= 50){

						val[1].hp = val[1].hp - this.ataque(val[1].def, val[0].atk);
						val[0].hp = val[0].hp - this.ataque(val[0].def, val[1].atk);
						if(val[1].hp < 0){
							console.log('Enemigo eliminado')
							this.aliadoSuperviviente(val[0])
						}
						if(val[0].hp < 0){
							console.log('Aliado eliminado')
							this.enemigoSuperviviente(val[1]);
						}

						auxInfinito++;
					}else{
						console.log('Bucle infinito')
						break;
					}

				}
			}
			i = 1
		}
		if(this._aliadoSuperviviente.length > 0 && this._enemigoSuperviviente.length > 0){
			console.log('Nueva pelea')

			this.checkJugadores();

			this.pelea(this._aliadoSuperviviente, this._enemigoSuperviviente)
		}else{
			if(pelea[0][0].hp <= 0 && pelea[0][1].hp <= 0){
				console.log('Final, Empate', pelea)
				return 'Final, Empate';
			}
			if(pelea[0][0].hp <= 0){
				console.log('Final, Ganan los enemigos', pelea)
				return 'Final, Ganan los enemigos';
			}else{
				console.log('Final, Ganan los aliados', pelea)
				return 'Final, Ganan los aliados';
			}
		}
	}

	private ataque(def: number, atk: number){
		if(def-atk > 0){
			return def - atk;
		}else{
			return -(def-atk);
		}
	}

	private checkJugadores() {
		let pelea = [[this._aliadoSuperviviente[0], this._enemigoSuperviviente[0]], [this._aliadoSuperviviente[1], this._enemigoSuperviviente[1]], [this._aliadoSuperviviente[2], this._enemigoSuperviviente[2]]];

		for (const [index, value] of pelea.entries()){
			if(value[0] === undefined || value[0].hp === 0){
				this._enemigoSuperviviente.splice(index);
			}
			if(value[1] === undefined || value[1].hp === 0){
				this._aliadoSuperviviente.splice(index);
			}
		}
	}

	private _aliadoSuperviviente: pj[];
	private aliadoSuperviviente(aliado: pj) {
		this._aliadoSuperviviente.push(aliado);
	}
	private _enemigoSuperviviente: pj[];
	private enemigoSuperviviente(enemigo: pj) {
		this._enemigoSuperviviente.push(enemigo);
	}

	public test1Res: string;
	public test1() {
		this.test1Res = '';
		this.test1Res = this.pelea(
			[
				{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
		],
		[
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
		],
		)
	}

	public test2Res: string;
	public test2() {
		this.test2Res = '';
		this.test2Res = this.pelea(
			[
				{
				id:1,
				hp:100,
				atk:20,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:20,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:20,
				def:5
			},
		],
		[
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
		],
		)
	}

	public test3Res: string;
	public test3() {
		this.test3Res = '';
		this.test3Res = this.pelea(
			[
				{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:10,
				def:5
			},
		],
		[
			{
				id:1,
				hp:100,
				atk:20,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:20,
				def:5
			},
			{
				id:1,
				hp:100,
				atk:20,
				def:5
			},
		],
		)
	}
}