import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>Censor Keyword</h1>
    </header> 
    <main>
    <div>
      <b>Censor keywords goes here</b>
      <input type='text' placeholder="Example 'protection', 'important', 'safety' " />
      <textarea type ='text' placeholder='Copy and paste document here'></textarea>
      <button>Submit</button>
    </div>
    <div>
      Results go here
    </div>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'censor-keywords';
}
