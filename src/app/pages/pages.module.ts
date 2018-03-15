import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle/battle.component';
import { CreateComponent } from './create/create.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BattleComponent, CreateComponent, LeaderBoardComponent]
})
export class PagesModule { }
