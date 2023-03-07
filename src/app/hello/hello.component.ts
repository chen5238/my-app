import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name: string = 'csx';
  date: Date = new Date();
  box: string = 'div-box';
  itemClass: string = 'div-item';

}
