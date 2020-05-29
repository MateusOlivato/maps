import { Component, ViewChild, ElementRef } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx'


declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  map: any;
  posicaoAtual: any;
  marker: any;
  marker2: any;
  marker3: any;
  marker4: any;
  marker5: any;

  
 
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;



  constructor(private geolocation: Geolocation) { }

  public async showMap() {
   
        await this.buscaPosicao();
       
        
    const options = {
      
      center: this.posicaoAtual,
      zoom: 12,
      disableDefaultUI: true
    }

    
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)

    //Marcador na posição atual
    const marcador = new google.maps.Marker({
      position: this.posicaoAtual,
      map: this.map,
      title: "Localização atual",
      //colocar ícones
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      animation: google.maps.Animation.BOUNCE})

      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(-22.509882, -48.558585),
        map: this.map,
        title: "Supermercado Fernandes!",
        //colocar ícones
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        animation: google.maps.Animation.DROP})

        const marker2 = new google.maps.Marker({
          position: new google.maps.LatLng(-22.519068, -48.562145),
          map: this.map,
          title: "Chapa Lanches",
          //colocar ícones
          icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          animation: google.maps.Animation.DROP})

        const marker3 = new google.maps.Marker({
          position: new google.maps.LatLng(-22.514993, -48.541642),
          map: this.map,
          title: "Famosa prainha",
          //colocar ícones
          icon: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
          animation: google.maps.Animation.DROP})

          const marker4 = new google.maps.Marker({
            position: new google.maps.LatLng(-22.520296, -48.535657),
            map: this.map,
            title: "Eclusa",
            //colocar ícones
            icon: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png',
            animation: google.maps.Animation.DROP})

            const marker5 = new google.maps.Marker({
              position: new google.maps.LatLng(-22.502510, -48.561650),
              map: this.map,
              title: "Igaraçu Park",
              //colocar ícones
              icon: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
              animation: google.maps.Animation.DROP})
  
  }
  //"ionViewDidEnter" quando a página for aparecer, o mapa será chamado, ou seja, o mapa carrega APÓS a página.
  ionViewDidEnter() {
    this.showMap();
  }

  //o codigo para continuar recebendo a localização do usuário não pdoe ser posto solto, deve-se criar uma estrutura como:
  public async buscaPosicao() {
    await this.geolocation.getCurrentPosition().then((posicaoGPS) => {
      this.posicaoAtual = {
        lat: posicaoGPS.coords.latitude,
        lng: posicaoGPS.coords.longitude
      }
      
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
  }
  

}