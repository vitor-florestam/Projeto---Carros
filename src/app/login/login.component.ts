import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  form!: FormGroup
  username: any
  password: any

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.username = this.form.get('username'),
    this.password = this.form.get('password')

  }

  onClickSubmit(): void {
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe((res: any) =>{
        if(res.roles.includes('ROLE_ADMIN')){
          this.router.navigate(['dashboard'])
        }
      }, err => {
        alert('Login incorreto')
      })
    }
  }
}
