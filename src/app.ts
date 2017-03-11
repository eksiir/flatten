import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

import {flatten} from 'flat';
import {unflatten} from 'flat';

@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html'
})
export class App {
  private text: string; 
  private textRows: number;
  private textCols: number;
  private textPlaceholder: string;
  
  constructor() {
    this.clear();
  }

  private clear= () => {
    this.text = ''; 
    this.textRows = 20;
    this.textCols = 80;
    this.textPlaceholder = 'Enter JSON Object';
  }

  private flattenObj = () => (this.text) ? this.transform(flatten) : null;

  private unflattenObj = () => (this.text) ? this.transform(unflatten) : null;

  private transform = (op) => {
    try {
      this.show(op(JSON.parse(this.text)));
    } catch(e) {
      alert(e + '\nFor testing, try samples from www.json-generator.com');
    }
  }
  
  private show = (obj: object) => {
    this.textPlaceholder = '';
    this.text = JSON.stringify(obj, null, 2);
   
    const lines = this.text.split("\n");
    this.textRows = lines.length;
    
    lines.forEach((line) => {
      this.textCols = Math.max(this.textCols, line.length);
    });
  }
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [ 
    App
    ],
  bootstrap: [ App ]
})
export class AppModule {}