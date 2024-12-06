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
    { label: 'Productos', icon: 'fa fa-box', url: './products' },
    { label: 'Perfil', icon: 'fa fa-user', url: './profile' },
    { label: 'Favoritos', icon: 'fa fa-star', url: './search' },
    { label: 'Compras', icon: 'fa fa-store', url: './search' },
    { label: 'Buscar', icon: 'fa fa-search', url: './search' }
  ]
}
