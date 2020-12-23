import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchListComponent } from './launch-list/launch-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'launchList', pathMatch: 'full' },
  { path: 'launchList', component: LaunchListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
