import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//import {AppComponent} from "./app.component";
import { ReactiveFormsExampleComponent } from "./pages/reactive-forms-example/reactive-forms-example.component";
import { NgxFormsExampleComponent } from "./pages/ngx-forms-example/ngx-forms-example.component";

const routes: Routes = [
	//{  path: "", component: AppComponent},
	{ path: "", redirectTo: "/reactive-forms", pathMatch: "full" },
	{ path: "reactive-forms", component: ReactiveFormsExampleComponent },
	{ path: "ngx-form-errors", component: NgxFormsExampleComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
