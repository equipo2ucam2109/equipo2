import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PlayService } from './services/play.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'play';
  matrix: number[][];
  winmatrix: number[][];

  constructor(private play: PlayService) {
    this.matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    this.winmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];;
    this.play.getCredenciales();
  }

  respuestaInfo: any = [];
  respuestaSendPoints: any = [];

  punto;
  total;
  img;

  ngOnInit() {


    

    this.play.getInfo().subscribe(
      res => {
        this.respuestaInfo = res;
        console.log(this.respuestaInfo);
        for (var key in this.respuestaInfo) {
          if (key == 'items') {
           const valor = this.respuestaInfo[key];
            for (var i in valor){
              if (valor[i]['_id'] =="5ce41e8d42e49376b336d8cb"){
                console.log(valor[i]['imagenURL']);
                this.img = 'https://gameserver.centic.ovh' + valor[i]['imagenURL'];
                console.log(this.img);
              }
            }
    
          }
        }
      },
      err => {
        console.error(err);
      }
    );
  }


  enviar() {
    this.play.getCredenciales();
    this.play.sendPonits().subscribe(
      res => {
        console.log(res);

        this.respuestaSendPoints = res;
        for (var key in this.respuestaSendPoints) {
          if (key == 'match_score') {
            console.log(' name=' + key + ' value=' + this.respuestaSendPoints[key]);
            alert("Has consegido " + this.punto * 0.5 + " en esta partida");
          }
        }
      },
      err => {

        console.error(err);
        alert(err.toString);

      }
    );
  }

  checkForCompletion() {
    var flag = 0;
    console.log(this.matrix);
    console.log(this.winmatrix);

    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        if (this.winmatrix[i][j] != this.matrix[i][j]) {
          flag = 1;
        }
      }
    }
    if (flag == 0) {
      alert('Has ganado 10 puntos');
    }

  }
  moveTile(tileNumber: number) {
    var flag = 0;
    var won = 1;
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        if (this.matrix[i][j] == tileNumber) {
          this.swapTile(i, j);
          this.checkForCompletion();
          flag = 1;
          break;
        }
      }
      if (flag == 1) {
        break;
      }
    }
  }
  swapTile(i: number, j: number) {
    if (i + 1 < this.matrix.length && this.matrix[i + 1][j] == 0) {
      this.matrix[i + 1][j] = this.matrix[i][j];
      this.matrix[i][j] = 0;
    }
    else if (j + 1 < this.matrix[0].length && this.matrix[i][j + 1] == 0) {
      this.matrix[i][j + 1] = this.matrix[i][j];
      this.matrix[i][j] = 0;

    }
    else if (i - 1 >= 0 && this.matrix[i - 1][j] == 0) {
      this.matrix[i - 1][j] = this.matrix[i][j];
      this.matrix[i][j] = 0;

    }
    else if (j - 1 >= 0 && this.matrix[i][j - 1] == 0) {
      this.matrix[i][j - 1] = this.matrix[i][j];
      this.matrix[i][j] = 0;

    }

  }

  shuffleMatrix() {

    do {
      var k, j, tempk, tempj;
      for (var i = 0; i < this.matrix.length; i++) {
        k = this.matrix[i].length;
        while (k--) {
          j = Math.floor(Math.random() * (this.matrix.length - 1));
          tempk = this.matrix[i][k];
          tempj = this.matrix[i][j];
          this.matrix[i][k] = tempj;
          this.matrix[i][j] = tempk;
        }
      }

    } while (this.checkSolvable(this.matrixtoVector()) == false)

  }

  checkSolvable(pList: Array<any>) {
    var inversions: number = 0;

    for (var i = 0; i < pList.length; i++) {
      for (var j = i + 1; j < pList.length; j++) {
        if (pList[j] > pList[i]) {
          inversions++;
        }
      }
    }

    if (inversions % 2 == 1) {
      return false;
    } else {
      return true;
    }
  }

  matrixtoVector() {

    var listaNumeros = new Array();

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (this.matrix[i][j] != 0) {
          listaNumeros.push(this.matrix[i][j]);
        }

      }
    }

    return listaNumeros;

  }
}
