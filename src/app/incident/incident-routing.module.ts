import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IncidentsComponent } from "./incidents/incidents.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "incidents",
    pathMatch: "full"
  },
  {
    path: "incidents",
    component: IncidentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentRoutingModule {}
