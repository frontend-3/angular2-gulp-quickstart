import {Component} from 'angular2/core';


@Component({
  selector: 'my-app',
  templateUrl: 'templates/first-example.html'
})

export class AppComponent {
  name:String = "Roro";
  isLove:Boolean = false;

  onClick() {
    alert('Me dieron click');
  }
}
