import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    

  }

  ngOnInit() {
  }

  contarTres() {
    var promesa = new Promise((resolve, reject) => {

      let contador = 0;
      let interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve();
          clearInterval(interval);
        }
      }, 1000);
    });

    return promesa;

  }

}
