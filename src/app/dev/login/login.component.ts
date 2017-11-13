import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { selector } from 'rxjs/operator/publish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private message: string;

  private formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.create();
  }

  private create(): void {

    this.formGroup = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit() {
    this.message = '';
    this.route.paramMap.subscribe(data => {

      if (data.has('message')) {
        this.message = data.get('message');
      }
    });
  }
}
