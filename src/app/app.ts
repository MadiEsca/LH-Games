import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./menu/menu";
import { Inicio } from "./inicio/inicio";
import { Login } from "./login/login";
import { Rodape } from "./rodape/rodape";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-games-VersaoAtualizada');
}
