/*tslint:disable:completed-docs */
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsExampleComponent } from "./pages/reactive-forms-example/reactive-forms-example.component";
import { NgxFormsExampleComponent } from "./pages/ngx-forms-example/ngx-forms-example.component";
import { TemplateDrivenFormsExampleComponent } from "./pages/template-driven-forms-example/template-driven-forms-example.component";

const routes: Routes = [
	{ path: "", redirectTo: "/template-driven-forms", pathMatch: "full" },
	{ path: "reactive-forms", component: ReactiveFormsExampleComponent },
	{ path: "template-driven-forms", component: TemplateDrivenFormsExampleComponent },
	{ path: "ngx-form-errors", component: NgxFormsExampleComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
