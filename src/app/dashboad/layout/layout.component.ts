import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {
  public sidebarItems = [
    { label: 'Products', icon: 'fa fa-box', url: './products' },
    { label: 'Profile', icon: 'fa fa-user', url: './profile' },
    { label: 'Search', icon: 'fa fa-search', url: './search' }
  ]
}
