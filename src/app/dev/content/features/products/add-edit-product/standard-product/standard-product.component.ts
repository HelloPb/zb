import { StandardProductService } from './standard-product.service';
import { AppResponsiveService } from '../../../../../../app-responsive.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-product',
  templateUrl: './standard-product.component.html',
  styleUrls: ['./standard-product.component.css'],
  providers: [StandardProductService]
})
export class StandardProductComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(
    private rsv: AppResponsiveService
  ) {
  }

  ngOnInit() {
  }

}
