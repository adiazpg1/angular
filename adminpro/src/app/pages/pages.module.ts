import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { KeysPipe } from '../pipes/keys.pipe';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        KeysPipe
    ],
     exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
     ],
     imports: [
         SharedModule,
         PAGES_ROUTES,
         FormsModule,
         ChartsModule   
     ]
})

export class PagesModule {}
