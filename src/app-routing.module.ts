import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';


const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/forms'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}