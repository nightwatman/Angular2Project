import { TestBed, async } from '@angular/core/testing';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule }  from '@angular/forms';
import {FilterPipe} from './pipe/app.pipe';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

describe('AppComponent', () => {
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[HttpModule,FormsModule ,ReactiveFormsModule],
        declarations: [
        AppComponent,FilterPipe
      ],
    }).compileComponents(); 
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have as title Movie Information', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toBe('Movie Information');
  }));

});