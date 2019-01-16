import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgxFormsExampleComponent } from "./ngx-forms-example.component";

describe("NgxFormsExampleComponent", () => {
	let component: NgxFormsExampleComponent;
	let fixture: ComponentFixture<NgxFormsExampleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxFormsExampleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxFormsExampleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
