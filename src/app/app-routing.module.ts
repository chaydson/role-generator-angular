import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/content/main/main.component';
import { ResultComponent } from './components/content/result/result.component';
import { RegisterComponent } from './components/register/register.component';
import { CatListingComponent } from './components/registration-display/categories/cat-listing/cat-listing.component';
import { CatRegisterComponent } from './components/registration-display/categories/cat-register/cat-register.component';
import { OpListingComponent } from './components/registration-display/options/op-listing/op-listing.component';
import { OpRegisterComponent } from './components/registration-display/options/op-register/op-register.component';

const routes: Routes = [
  {path: '', redirectTo:'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: MainComponent},
  {path: 'result', component: ResultComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'options/list', component: OpListingComponent},
  {path: 'categories/list', component: CatListingComponent},
  {path: 'options/register', component: OpRegisterComponent},
  {path: 'categories/register', component: CatRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
