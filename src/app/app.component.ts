import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre: string = 'Pablooooooo';
  calor: number = 1000;
  obj = {
    nombre: "Pablo"
  }

  mostrarNombre() {
    console.log(this.nombre);
  }
}
