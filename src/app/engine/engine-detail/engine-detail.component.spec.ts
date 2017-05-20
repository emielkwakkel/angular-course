/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EngineDetailComponent } from './engine-detail.component';
import { EngineService } from "../engine.service";
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from "@angular/router/testing";

describe('EngineDetailComponent', () => {
  let component: EngineDetailComponent;
  let fixture: ComponentFixture<EngineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineDetailComponent ],
      imports: [ RouterTestingModule, HttpModule],
      providers: [EngineService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
