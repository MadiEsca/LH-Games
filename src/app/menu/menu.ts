import { Component } from '@angular/core';
/*Importações referentes ao Angular Material */
import {MatButtonModule} from '@angular/material/button'; // Botões
import {MatCardModule} from '@angular/material/card'; //Cards
import {MatFormFieldModule} from '@angular/material/form-field'; //Form Field
import {MatIconModule} from '@angular/material/icon'; //Icons
import {MatInputModule} from '@angular/material/input'; //Inputs
import {MatMenuModule} from '@angular/material/menu'; //Menu
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from "@angular/router"; //Toolbar

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}