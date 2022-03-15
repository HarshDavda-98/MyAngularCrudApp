/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ChartsModule } from './charts.module';
import { ChartsAreaComponent } from './components';

/* Containers */
import * as chartsContainers from './containers';

/* Guards */
import * as chartsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: chartsContainers.ChartsComponent,

        data: {
            title: 'Charts - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Crud',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'CrudForm/:id',
        component: ChartsAreaComponent,

    },
];

@NgModule({
    imports: [ChartsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ChartsRoutingModule {}
