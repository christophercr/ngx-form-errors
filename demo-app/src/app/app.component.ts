/*tslint:disable:completed-docs trackBy-function template-cyclomatic-complexity*/
import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { ParentErrorStateMatcher } from "./parent-error-state-matcher";
import { PasswordValidator } from "./password-validator";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	public formMatError: FormGroup;
	public formNgxError: FormGroup;
	public validationMessages: object;
	public errors: object;
	public parentErrorStateMatcher: ErrorStateMatcher = new ParentErrorStateMatcher();
	public passwordPattern: string = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$";

	public constructor(private formBuilder: FormBuilder) {}

	public ngOnInit(): void {
		// user details form validations
		this.formMatError = this.formBuilder.group({
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

		this.validationMessages = {
			username: [
				{
					type: "required",
					message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.USER_NAME.REQUIRED"
				},
				{
					type: "minlength",
					message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.USER_NAME.MIN_LENGTH"
				},
				{
					type: "maxlength",
					message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.USER_NAME.MAX_LENGTH"
				},
				{ type: "pattern", message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.USER_NAME.PATTERN" },
				{ type: "unique", message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.USER_NAME.UNIQUE" }
			],
			password: [
				{
					type: "required",
					message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.PASSWORD.REQUIRED"
				},
				{
					type: "minlength",
					message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.PASSWORD.MIN_LENGTH"
				},
				{ type: "pattern", message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.PASSWORD.PATTERN" }
			],
			confirmPassword: [
				{
					type: "required",
					message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.CONFIRM_PASSWORD.REQUIRED"
				},
				{
					type: "areEqual",
					message: "DEMO.FORM_VALIDATION.WITHOUT_NGX_FORM_ERRORS.CONFIRM_PASSWORD.ARE_EQUAL"
				}
			]
		};
	}

	public onSubmitUserDetails(formGroup: FormGroup): void {
		console.log("CCR==========> onSubmitUserDetails value", formGroup.value);
	}

	public getFormStatus(): void {
		console.log("CCR==========> form status", this.formMatError);
	}
}
