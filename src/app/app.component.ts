import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  values1: string['sadasd','assad'];

  values2: string[] = ['sdsd', 'asdsad', 'asdasdasd'];

  values3: string[];
}
