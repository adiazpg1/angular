import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(private router: Router,
    public _title: Title,
    public _meta: Meta) {

    this.getDataRoute().subscribe(data => {
      console.log(data);
      this.label = data.titulo;
      this._title.setTitle(data.titulo);
    })

  }

  ngOnInit() {
  }


  getDataRoute() {
    return this.router.events
      .filter(event => event instanceof ActivationEnd)
      .filter((event: ActivationEnd) => event.snapshot.firstChild === null)
      .map((event: ActivationEnd) => event.snapshot.data);
  }



}
