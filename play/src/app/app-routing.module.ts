/**
 * app-routing.module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameAboutComponent } from './game-about/game-about.component';

const routes: Routes = [
    {
        path: '',
        component: GameBoardComponent,
    },
    {
        path: 'about',
        component: GameAboutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

