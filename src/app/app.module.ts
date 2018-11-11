import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'
import { ArtService } from './services/art.service';
import { ShopComponent } from './components/shop/shop.component';
import { MusicComponent } from './components/music/music.component'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'music', component: MusicComponent},
  { path: '**', component: HomeComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    MusicComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
    

  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
