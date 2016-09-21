import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lançamentos';

  public games: Array<any>;
  public gamesMostrar: Array<any>;
  public plataformaSelecionada; 

  constructor(){

    this.games = [
      { nome: "Bloodborne", plataformas: ['PS4'] },
      { nome: "Battlefield 1", plataformas: ['PS4','XBOX','PC']},
      { nome: "Pokemon Sun", plataformas: ['3DS']},
      { nome: "Pokemon Moon", plataformas: ['3DS']},
      { nome: "The Last Guardian", plataformas: ['PS4']},
      { nome: "Forza Horizon 3", plataformas: ['XBOX','PC']},
      { nome: "Super Mario Maker", plataformas: ['WIIU']},
      { nome: "Zelda Breath of the Wild", plataformas: ['WIIU', 'NX']}
    ];

    this.gamesMostrar = this.games;
  }

  mudaPlataforma(event: any, plataforma: string){
    let pl = plataforma.toUpperCase();
    console.log(pl);
    if(plataforma){
      this.gamesMostrar = this.games
        .filter( game => (game.plataformas.indexOf(pl) !== -1) );
    }else{
      this.gamesMostrar = this.games;
    }
  }


}
