import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./incident/incident.module").then(m => m.IncidentModule)
  },
  {
    path: 'map',
    component: MapComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
