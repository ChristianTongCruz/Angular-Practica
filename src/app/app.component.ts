import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { DatoGeneral } from './interface/datosgenerales.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Página de Inicio';
  http = inject(HttpClient);
  DatosGenerales: DatoGeneral[] = [];

  ngOnInit() {
    this.http
      .get<DatoGeneral[]>('http://127.0.0.1:8000/api/datosgenerales/')
      .subscribe((data) => {
        this.DatosGenerales = data;
      });
    console.log(this.DatosGenerales);
  }
}
