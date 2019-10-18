import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campamento',
  templateUrl: './campamento.component.html',
  styleUrls: ['./campamento.component.scss'],
})
export class CampamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public navegarPorCampamento(parametro: string) {
	switch (parametro) {
		case 'campanya':
			this.router.navigate(['campamento/campanya'])
		break;
	}
  }
}
