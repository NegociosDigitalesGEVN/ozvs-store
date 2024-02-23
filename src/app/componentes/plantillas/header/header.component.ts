import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sidebarVisible3: boolean =false;

  @Output() show: EventEmitter<void> = new EventEmitter<void>()

    showCart(){
      this.show.emit()
    }
}
