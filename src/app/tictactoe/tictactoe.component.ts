import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrl: './tictactoe.component.css'
})
export class TictactoeComponent 
{
  playerA:player = new player('Player A', 'x', false, false);
  playerB:player = new player('Player B', 'o', false, false);

  updateplayername(playerlabel:string)
  {
    if (playerlabel=="A")
      {
        this.playerA.isEditing = true;
        this.playerB.isEditing = false;
      }
    if (playerlabel=="B")
      {
        this.playerA.isEditing = false;
        this.playerB.isEditing = true;
      }
  }
}

class player
{
  name: string;
  symbol: string; //x or o
  isturn: boolean;
  isEditing:boolean;
  constructor(name: string, symbol: string,isturn: boolean,isEditing: boolean)
  {
    this.name = name;
    this.symbol = symbol;
    this.isturn = isturn;
    this.isEditing = isEditing;
  }

  

}