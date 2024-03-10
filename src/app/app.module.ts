import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { SignatureBoardComponent } from './signature-board/signature-board.component';
import { FooterComponent } from './Shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    SignatureBoardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
