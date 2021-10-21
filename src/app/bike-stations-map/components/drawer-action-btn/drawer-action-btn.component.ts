import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-drawer-action-btn',
  templateUrl: './drawer-action-btn.component.html',
  styleUrls: ['./drawer-action-btn.component.scss']
})
export class DrawerActionBtnComponent {
  @Input()
  public routeHref = '';
  @Input()
  public tooltipText = '';
  @Input()
  public tooltipPosition = 'bottom';
  @Input()
  public color = 'accent';
  @Input()
  public label = '';
}
