import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Censor Keywords';
  inputForm = new FormGroup({
    keywordInput: new FormControl(''),
    documentInput: new FormControl('')
  });
  

  onSubmit() {
    console.log(this.inputForm.value)
  };
}