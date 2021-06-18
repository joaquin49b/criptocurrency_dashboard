import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";


import CoinGecko from "coingecko-api";
import CoinGeckoInterface from '../interfaces/coingecko.interface';

@Injectable({
  providedIn: 'root'
})


export class CoingeckoService {
  coinGeckoClient = new CoinGecko();



  constructor(private http: HttpClient) { }

  async getAll() {
    let coins = [];

      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: new HttpParams().set('vs_currency', 'usd').set('per_page', '250').set('page', 1)
      };

      await this.http.get<CoinGeckoInterface[]>('https://api.coingecko.com/api/v3/coins/markets', httpOptions).toPromise().then((allCoins) => {
        for (const coin of allCoins) {
          const params = {
            name: coin.name,
            symbol: coin.symbol,
            img: coin.image,
            price: coin.current_price
          }

          coins.push(params);
        }


      });

    

    return coins;

  }



}
