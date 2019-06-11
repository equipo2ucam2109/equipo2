import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { OwlCheckBoxModule, OwlRadioModule } from 'owl-ng';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameAboutComponent } from './game-about/game-about.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameControlComponent } from './game-control/game-control.component';
import { GameGalleryComponent } from './game-gallery/game-gallery.component';
import { GameTileComponent } from './game-tile/game-tile.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './store';
import { GameSocialIconComponent } from './social-icon/game-social-icon.component';

@NgModule({
    declarations: [
        AppComponent,
        GameAboutComponent,
        GameBoardComponent,
        GameControlComponent,
        GameGalleryComponent,
        GameTileComponent,
        TopBarComponent,
        GameSocialIconComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        OwlCheckBoxModule,
        OwlRadioModule,

        AppRoutingModule,
        StoreModule.forRoot(reducers)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
