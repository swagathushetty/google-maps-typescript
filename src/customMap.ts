import { Company } from "./Company";
import { User } from "./User";

//instructions to every other class
//om how they can be argument to addMarker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(user: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: user.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
