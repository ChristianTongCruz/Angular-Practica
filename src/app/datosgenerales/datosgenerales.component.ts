import { Component, Input } from '@angular/core';
import { DatoGeneral } from '../interface/datosgenerales.model';

@Component({
  selector: 'app-datosgenerales',
  templateUrl: './datosgenerales.component.html',
  styleUrls: ['./datosgenerales.component.css'],
})
export class DatosgeneralesComponent {
  @Input() DatoGeneral!: DatoGeneral;
}
