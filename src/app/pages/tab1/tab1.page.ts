import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from '../../services/coingecko.service';
import CoinGeckoInterface from '../../interfaces/coingecko.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  items: CoinGeckoInterface[];
  
  constructor(private coingeckoService: CoingeckoService) {
    
  }
  
  
  async ngOnInit() {
    this.items = await this.coingeckoService.getAll()

    console.log(this.items)

  }

}
