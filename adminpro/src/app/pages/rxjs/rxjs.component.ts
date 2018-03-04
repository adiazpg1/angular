import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 

    let obs = new Observable(observer => {
    
      let contador = 1;
        let intervalo = setInterval( () => {
          contador += 1;
          observer.next(contador);

        }, 1000);
    });

    obs.subscribe( (numero) => {
      console.log(numero);
    })

  }

  ngOnInit() {
  }



}
