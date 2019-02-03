import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroe/heroes.component';
import { EditComponent } from './components/heroe/edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
// ROUTING
import { APP_ROUTING } from './app.routing';

// servicios
import { HeroesService} from './services/heroes.service';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    EditComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers:  [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
