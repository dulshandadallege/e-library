import { BackendApiService } from './../backend-api.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  fname;
  lname;
  category;
  address;
  number;
  dob;
  nationality;
  email;
  password;

  nationalities: Food[] = [
    {value: 'srilankan', viewValue: 'Srilankan'},
    {value: 'indian', viewValue: 'Indian'},
  ];

  constructor(private registerUser: BackendApiService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  userRegDB(){
    console.log('test');
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.nationality);
    console.log(this.address);
    console.log(this.number);
    console.log(this.dob);
    console.log(this.email);
    console.log(this.password);

    const userReg = {};

    userReg['User_First_Name'] = this.fname;
    userReg['User_Last_Name'] = this.lname;
    userReg['User_Nationality'] = this.nationality;
    userReg['User_Address'] = this.address;
    // advertisment['model'] = this.model;
    userReg['User_Contact_Number'] = this.number;
    userReg['User_DOB'] = this.dob;
    userReg['User_Email'] = this.email;
    userReg['User_Password'] = this.password;

    this.registerUser.userRegister(userReg).subscribe(result => {

      console.log(result);

    });

    this.openSnackBar('Your Add Posted Sucessfully', 'OK');





  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
  

}
