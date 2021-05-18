import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Censor Keywords';
  inputForm = new FormGroup({
    keywordInput: new FormControl('', Validators.required),
    documentInput: new FormControl('', Validators.required)
  });
  

  onSubmit() {
    console.log(this.inputForm.value)
  };
}