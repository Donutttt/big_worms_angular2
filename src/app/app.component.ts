import {Component, OnInit} from '@angular/core';

import '../styles.css';


@Component({
    selector: 'my-app',
    template: `
      <div>
          <h1>App component works</h1>
      </div>
    `
})

export class AppComponent implements OnInit {

    testVal: string;

    ngOnInit() {
        console.log('AppComponent initializing...');
    }

    constructor(){
    }

}
