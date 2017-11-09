import { ProductGroup } from '../../features/shared/models/product/product-group';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.css']
})
export class HomeOverviewComponent implements OnInit {

  public productGroup: ProductGroup[] =
  [
    {
      name: 'Food',
      products: [
        { name: 'Breakfast', count: '1000' },
        { name: 'Launch', count: '1000' },
        { name: 'Chutney', count: '1000' },
        { name: 'Snacks', count: '1000' },
        { name: 'Dinner', count: '1000' }
      ]
    },
    {
      name: 'Diary',
      products: [
        { name: 'Milk', count: '1000' },
        { name: 'Ghee', count: '1000' },
        { name: 'Butter', count: '1000' },
        { name: 'Curd', count: '1000' },
        { name: 'Grinded Curd', count: '1000' }
      ]
    },
    {
      name: 'Vegitables',
      products: [
        { name: 'Organic', count: '1000' },
        { name: 'Non Organic', count: '1000' },
        { name: 'Natural', count: '1000' },
        { name: 'Snacks', count: '1000' },
        { name: 'Dinner', count: '1000' }
      ]
    },
    {
      name: 'Handicraft',
      products: [
        { name: 'Tailor', count: '1000' },
        { name: 'Potter', count: '1000' },
        { name: 'Oiler', count: '1000' }
      ]
    },
    {
      name: 'Domestic Helpers',
      products: [
        { name: 'Electrician', count: '1000' },
        { name: 'Plumber', count: '1000' },
        { name: 'Painter', count: '1000' },
        { name: 'Snacks', count: '1000' },
        { name: 'Dinner', count: '1000' },
        { name: 'Snacks', count: '1000' },
        { name: 'Dinner', count: '1000' },
        { name: 'Snacks', count: '1000' },
        { name: 'Dinner', count: '1000' },
        { name: 'Dinner', count: '1000' },
        { name: 'Snacks', count: '1000' },
        { name: 'Dinner', count: '1000' },
        { name: 'Dinner', count: '1000' },
        { name: 'Snacks', count: '1000' },
        { name: 'Dinner', count: '1000' }
      ]
    },
    {
      name: 'Handicraft',
      products: [
        { name: 'Tailor', count: '1000' },
        { name: 'Potter', count: '1000' },
        { name: 'Oiler', count: '1000' }
      ]
    },
    {
      name: 'Handicraft',
      products: [
        { name: 'Tailor', count: '1000' },
        { name: 'Potter', count: '1000' },
        { name: 'Oiler', count: '1000' }
      ]
    },
    {
      name: 'Handicraft',
      products: [
        { name: 'Tailor', count: '1000' },
        { name: 'Potter', count: '1000' },
        { name: 'Oiler', count: '1000' }
      ]
    },
    {
      name: 'Handicraft',
      products: [
        { name: 'Tailor', count: '1000' },
        { name: 'Potter', count: '1000' },
        { name: 'Oiler', count: '1000' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
