import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-drawer-action-btn',
  templateUrl: './drawer-action-btn.component.html',
  styleUrls: ['./drawer-action-btn.component.scss']
})
export class DrawerActionBtnComponent {
  @Input()
  public routeHref = '';
}
