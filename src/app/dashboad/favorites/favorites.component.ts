import { Component } from '@angular/core';
import { Products } from '../../models/products';
import { FavoritesService } from '../../services/favorites.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  products: Products[] = [];

  constructor(private favoritesService: FavoritesService, private router: Router) { }

  ngOnInit(): void {
    this.favoritesService.getAllFavorites().subscribe(data => {
      this.products = data;
    });
  }

}
