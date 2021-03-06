import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from '@app/app.component';
import {CoreModule} from '@app/core/core.module';
import {PagesModule} from "@app/pages/pages.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CoreModule,
        PagesModule,
        FlashMessagesModule

    ],
    providers: [FlashMessagesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
