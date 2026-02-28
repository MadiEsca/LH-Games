import { Component } from '@angular/core';

import {MatButtonModule} from '@angular/material/button'; // Botões
import {MatCardModule} from '@angular/material/card'; //Cards
import {MatFormFieldModule} from '@angular/material/form-field'; //Form Field
import {MatIconModule} from '@angular/material/icon'; //Icons
import {MatInputModule} from '@angular/material/input'; //Inputs
import {MatMenuModule} from '@angular/material/menu'; //Menu
import {MatToolbarModule} from '@angular/material/toolbar'; //Toolbar

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
