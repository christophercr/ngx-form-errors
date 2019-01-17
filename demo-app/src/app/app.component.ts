/*tslint:disable:completed-docs trackBy-function template-cyclomatic-complexity*/
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	public get activeLink(): string {
		return this.router.url;
	}

	public constructor(private router: Router) {
		/*empty*/
	}

	public ngOnInit(): void {
		/*empty*/
	}
}
