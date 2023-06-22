import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as Map from 'leaflet';
// import * as map from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  constructor() {}
  reqcount = 0;

  @ViewChild('map') mapElement: ElementRef;
  map: Map.Map;

  //

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);

      this.map = Map.map('map').setView([latitude, longitude], 13);

      Map.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
      }).addTo(this.map);

      var marker = Map.marker([latitude, longitude]).addTo(this.map);
      let mapMarkers1 = [];

      document.addEventListener('click', function (e) {
        // console.log('clicked');
        // let obj = [
        //   {
        //     latitude: 37.8142176,
        //     longitude: 144.966,
        //   },
        // ];
        // // if(obj.busline == '00001') {
        // for (var i = 0; i < obj.length; i++) {
        //   // map.removeLayer(mapMarkers1[i]);
        //   var marker = L.marker([obj[i].latitude, obj[i].longitude]).addTo(map);
        //   mapMarkers1.push(marker);
        // }
      });
    });
  }

  // readLocation() {
  //   let arr = [
  //     {
  //       latitude: 11.059821,
  //       longitude: 78.387451,
  //     },
  //     {
  //       latitude: 11.079821,
  //       longitude: 78.397451,
  //     },
  //     {
  //       latitude: 11.099821,
  //       longitude: 78.487451,
  //     },
  //     {
  //       latitude: 12.099821,
  //       longitude: 78.487451,
  //     },
  //   ];
  //   console.log(arr.length);
  //   arr.forEach((el) => {
  //     // let i = 0;
  //     let mapMarkers1 = [];
  //     // setTimeout(() => {
  //     this.map.remove();
  //     this.map = Map.map('map').setView([el.latitude, el.longitude], 13);
  //     Map.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       maxZoom: 19,
  //       attribution: '© OpenStreetMap',
  //     }).addTo(this.map);

  //     var marker = Map.marker([el.latitude, el.longitude]).addTo(this.map);

  //     mapMarkers1.push(marker);
  //     console.log(marker);
  //     // }, 5000);
  //   });
  // }

  readLocation() {
    let array = [
      {
        latitude: 11.059821,
        longitude: 78.387451,
      },

      {
        latitude: 12.983,
        longitude: 79.1332,
      },
      {
        latitude: 41.5655,
        longitude: 46.8161,
      },
      {
        latitude: 28.66,
        longitude: 77.23,
      },
      {
        latitude: 18.9667,
        longitude: 72.8333,
      },
      {
        latitude: 22.5411,
        longitude: 88.3378,
      },
      {
        latitude: 12.9699,
        longitude: 77.598,
      },
    ];

    var promise = Promise.resolve();
    array.forEach((el) => {
      promise = promise.then(() => {
        this.map.remove();
        this.map = Map.map('map').setView([el.latitude, el.longitude], 13);
        Map.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap',
        }).addTo(this.map);
        var marker = Map.marker([el.latitude, el.longitude]).addTo(this.map);
        console.log(el.latitude, el.longitude);
        return new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });
      });
    });

    promise.then(() => {
      console.log('Loop finished.');
    });
  }
  watchPosition(): void {
    let watchid = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        console.log(`lat: ${latitude}, lon: ${longitude}`);
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 1000,
        maximumAge: 0,
      }
    );
  }
}
