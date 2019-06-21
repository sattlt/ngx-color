import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkerComponent } from './tutorial/darker/darker.component';
import { HomeComponent } from './tutorial/home/home.component';
import { LighterDarkerComponent } from './tutorial/lighter-darker/lighter-darker.component';
import { LighterComponent } from './tutorial/lighter/lighter.component';
import { NamesComponent } from './tutorial/names/names.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'names',
    component: NamesComponent
  },
  {
    path: 'lighter',
    component: LighterComponent
  },
  {
    path: 'darker',
    component: DarkerComponent
  },
  {
    path: 'lighterdarker',
    component: LighterDarkerComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
