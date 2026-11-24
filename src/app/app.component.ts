import { Component } from '@angular/core';
import { DadoComponent } from './dado/dado.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'practica1';

    numeroCalculado: number = 0;
    numeroCalculado2: number = 0;
    numeroCalculado3: number = 0;
    numeroCalculado4: number = 0;
    numeroCalculado5: number = 0;
    numeroCalculado6: number = 0;

    numerosTotal: number[] = [];
    numerosRonda: number[] = [];

    cantidadRondas: number = 0;
    conteo: number = 0;

    constructor() {
        this.botonTirar();
    }

    botonTirar() {
        if (this.cantidadRondas < 10) {
            this.numerosRonda = [];
            this.numeroCalculado = this.getRandomInt(6, 1);
            this.numerosTotal.push(this.numeroCalculado);
            this.numerosRonda.push(this.numeroCalculado);

            this.numeroCalculado2 = this.getRandomInt(6, 1);
            this.numerosTotal.push(this.numeroCalculado2);
            this.numerosRonda.push(this.numeroCalculado2);

            this.numeroCalculado3 = this.getRandomInt(6, 1);
            this.numerosTotal.push(this.numeroCalculado3);
            this.numerosRonda.push(this.numeroCalculado3);

            this.numeroCalculado4 = this.getRandomInt(6, 1);
            this.numerosTotal.push(this.numeroCalculado4);
            this.numerosRonda.push(this.numeroCalculado4);

            this.numeroCalculado5 = this.getRandomInt(6, 1);
            this.numerosTotal.push(this.numeroCalculado5);
            this.numerosRonda.push(this.numeroCalculado5);

            this.numeroCalculado6 = this.getRandomInt(6, 1);
            this.numerosTotal.push(this.numeroCalculado6);
            this.numerosRonda.push(this.numeroCalculado6);
            // cuento una ronda
            this.cantidadRondas++;
        }
    }

    getRandomInt(max: number, min: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    botonReiniciar() {
        this.cantidadRondas = 0;
    }

    ganar(arrNum: number[]) {
        if (arrNum[0] == arrNum[1]) {
            if (arrNum[1] == arrNum[2]) {
                if (arrNum[2] == arrNum[3]) {
                    if (arrNum[4] == arrNum[5]) {
                        if (arrNum[5] == arrNum[6]) {
                            return '¡Has ganado!';
                        } else return '¡Has perdido!';
                    } else return '¡Has perdido!';
                } else return '¡Has perdido!';
            } else return '¡Has perdido!';
        } else return '¡Has perdido!';
    }

    contarOcurrencias(contado: number, arrNum: number[]) {
        this.conteo = 0;
        for (let i: number = 0; i < arrNum.length; i++) {
            if (arrNum[i] == contado) {
                this.conteo++;
            }
        }
        return this.conteo;
    }

    porcentaje(contado: number, arrNum: number[]) {
        if (arrNum.length == 0) {
            return 0;
        } else return Math.floor((contado / arrNum.length) * 100);
    }
}
