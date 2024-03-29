import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SignatureBoardComponent } from './signature-board/signature-board.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'SignBoard', component:SignatureBoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
