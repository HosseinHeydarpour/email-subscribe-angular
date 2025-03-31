import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    class: 'btn',
  },
})
export class ButtonComponent {}
