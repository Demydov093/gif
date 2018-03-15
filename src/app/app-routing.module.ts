import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BattleComponent} from "@app/pages/battle/battle.component";
import {LeaderBoardComponent} from "@app/pages/leader-board/leader-board.component";
import {CreateComponent} from "@app/pages/create/create.component";

const routes: Routes = [
    {
        path: '',
        component: BattleComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'leader',
        component: LeaderBoardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
