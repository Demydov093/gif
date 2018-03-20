import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle/battle.component';
import { CreateComponent } from './create/create.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "@app/shared/shared.module";
import {FlashMessagesModule} from "angular2-flash-messages";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FlashMessagesModule
  ],
  declarations: [BattleComponent, CreateComponent, LeaderBoardComponent]
})
export class PagesModule { }
