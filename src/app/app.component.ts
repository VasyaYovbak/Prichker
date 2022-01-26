import { Component } from '@angular/core';
import {API} from "aws-amplify";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prichker';

  constructor() {
    async function getData() {


      let response =  await API.get('pythonApi', '/hello',{});
      console.log(response);
    }
    getData();
  }

}
