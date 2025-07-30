import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LockboxComponent } from './pages/lockbox/lockbox.component';
import { GoMuscuComponent } from './pages/go-muscu/go-muscu.component';
import { NiceToMealYouComponent } from './pages/nice-to-meal-you/nice-to-meal-you.component';
import { BelComponent } from './pages/bel/bel.component';
import { MossComponent } from './pages/moss/moss.component';
import { AirbusComponent } from './pages/airbus/airbus.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'projets/lockbox', component: LockboxComponent
  },
  {
    path: 'projets/gomuscu', component: GoMuscuComponent
  },
  {
    path: 'projets/nicetomealyou', component: NiceToMealYouComponent
  },
  {
    path: 'experiences/bel', component: BelComponent
  },
  {
    path: 'experiences/moss', component: MossComponent
  },
  {
    path: 'experiences/airbus', component: AirbusComponent
  },
];
