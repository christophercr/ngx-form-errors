import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { NgxFormErrorsMessageService, NgxFormErrorsModule } from "@nationalbankbelgium/ngx-form-errors";
import { AppComponent } from "./app.component";
import { initializeTranslation } from "./translation.config";
import { LanguageSelectorComponent, SimpleFormErrorComponent, TranslatedFormErrorComponent } from "./components";

/* tslint:disable:no-hardcoded-credentials */
@NgModule({
	declarations: [AppComponent, LanguageSelectorComponent, SimpleFormErrorComponent, TranslatedFormErrorComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		TranslateModule.forRoot(),
		NgxFormErrorsModule.forRoot({
			formErrorComponent: TranslatedFormErrorComponent
		})
	],
	exports: [LanguageSelectorComponent],
	providers: [],
	entryComponents: [SimpleFormErrorComponent, TranslatedFormErrorComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
	public constructor(private translateService: TranslateService, private errorMessageService: NgxFormErrorsMessageService) {
		initializeTranslation(this.translateService);

		errorMessageService.addErrorMessages({
			required: "DEMO.FORM_VALIDATION.WITH_NGX_FORM_ERRORS.REQUIRED",
			// "matchingPasswords.password.required": "DEMO.FORM_VALIDATION.WITH_NGX_FORM_ERRORS.REQUIRED",
			minlength: "DEMO.FORM_VALIDATION.WITH_NGX_FORM_ERRORS.PASSWORD.MIN_LENGTH",
			maxlength: "DEMO.FORM_VALIDATION.WITH_NGX_FORM_ERRORS.PASSWORD.MAX_LENGTH",
			pattern: "DEMO.FORM_VALIDATION.WITH_NGX_FORM_ERRORS.PASSWORD.PATTERN"
		});

		errorMessageService.addFieldNames({
			username: "DEMO.FIELDS.USER_NAME",
			"matchingPasswords.password": "DEMO.FIELDS.PASSWORD",
			"matchingPasswords.confirmPassword": "DEMO.FIELDS.CONFIRM_PASSWORD"
		});
	}
}
