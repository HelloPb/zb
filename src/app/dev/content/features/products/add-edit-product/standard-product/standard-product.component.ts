import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-product',
  templateUrl: './standard-product.component.html',
  styleUrls: ['./standard-product.component.css']
})
export class StandardProductComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.create();
  }

  private create(): void {
    this.formGroup = this.formBuilder.group({
      time: ['10:00', Validators.required ]
    });
  }

  // Angular Lifecycle Hooks
  ngOnInit() {
  }

}
