import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  nombreLower: string = 'pablo';
  nombreUpper: string = 'PABLO';
  nombreCompleto: string = 'paBlo';

  fecha: Date = new Date();
}
