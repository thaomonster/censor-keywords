import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Censor Keywords';
  resultDoc=''
  inputForm = new FormGroup({
    keywordInput: new FormControl('', Validators.required),
    documentInput: new FormControl('', Validators.required),
  });

  onSubmit = () => {
    const keyword = this.inputForm.get('keywordInput')!.value
    const document = this.inputForm.get('documentInput')!.value

    if (document.includes(keyword)) {
      const result = document.replaceAll(keyword, 'XXXX')
      this.resultDoc = result
    } else {
      console.log('no matching word')
    }

    //use replace to replace all words that match the keyword
    //use a condtional to do this

    // console.log(this.inputForm.get('keywordInput')!.value)
    // console.log(this.inputForm.get('documentInput')!.value)
  };
}