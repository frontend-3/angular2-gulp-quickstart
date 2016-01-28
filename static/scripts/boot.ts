import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './modules/app.component';
import {ScaleService} from './modules/scale/scale.service';
bootstrap(AppComponent,[ScaleService]);
