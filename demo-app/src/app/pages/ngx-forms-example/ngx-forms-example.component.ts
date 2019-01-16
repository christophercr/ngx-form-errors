import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { ParentErrorStateMatcher } from "../../parent-error-state-matcher";
import { PasswordValidator } from "src/app/password-validator";

@Component({
	selector: "app-ngx-forms-example",
	templateUrl: "./ngx-forms-example.component.html",
	styleUrls: ["./ngx-forms-example.component.scss"]
})
export class NgxFormsExampleComponent implements OnInit {
	public formNgxError: FormGroup;
	public errors: object;
	public parentErrorStateMatcher: ErrorStateMatcher = new ParentErrorStateMatcher();
	public passwordPattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$";

	public constructor(private formBuilder: FormBuilder) {}

	public ngOnInit() {
		this.formNgxError = this.formBuilder.group({
			username: [undefined, Validators.required],
			matchingPasswords: new FormGroup(
				{
					password: new FormControl(
						"",
						Validators.compose([
							Validators.minLength(3),
							Validators.maxLength(10),
							Validators.required,
							Validators.pattern(this.passwordPattern) // this is for the letters (both uppercase and lowercase) and numbers validation
						])
					),
					confirmPassword: new FormControl("", Validators.required)
				},
				{
					validators: (formGroup: AbstractControl) => {
						return PasswordValidator.areEqual(<FormGroup>formGroup);
					}
				}
			)
		});
	}

	public onSubmitUserDetails(formGroup: FormGroup): void {
		console.log("CCR==========> onSubmitUserDetails value", formGroup.value);
	}

	public getFormStatus(): void {
		console.log("CCR==========> form status", this.formNgxError);
	}
}
