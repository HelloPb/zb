import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-product-navs',
  templateUrl: './standard-product-navs.component.html',
  styleUrls: ['./standard-product-navs.component.css']
})
export class StandardProductNavsComponent implements OnInit {

  private formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.create();
  }

  private create(): void {
    this.formGroup = this.formBuilder.group({
      time: ['10:00', Validators.required]
    });
  }

  ngOnInit() {
  }
}
