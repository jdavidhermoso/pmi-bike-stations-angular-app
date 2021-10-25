import {Injectable} from '@angular/core';
import {ShepherdService} from 'angular-shepherd';
import {Store} from '@ngrx/store';
import {AppState} from '../../models/app.state';
import {closeBikeStationInfo, showBikeStationInfo} from '../../state/actions/bike-stations-map.actions';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

const tourTexts: any = {
  es: {
    next: 'Siguiente',
    complete: 'Completar',
    back: 'Atrás',
    exit: 'Salir',
    title: 'Carril Bici Palma',
    intro: `Carril Bici Palma es una aplicación web que muestra donde puedes alquilar una bici y cual es el recorrido del carril bici.
            <br /> <br /> Se ha desarrollado para hacer la bici más accesible dentro de Palma.
            <br /> <br /> Carril Bici Palma no tiene nada que ver con el Ajuntament de Palma o cualquier otro organismo público.
    <br /> <br />Solo es un proyecto open source para promocionar la bicicleta como medio de transporte.`,
    mapMarker: 'Cuando clickas en una estacion de bicis del mapa (los iconos verdes con una bici), puedes ver su información',
    mapMarkerClicked: 'Puedes ver la dirección exacta de la estación, a que distancia estas, o como llegar a pie o en bici.',
    drawerActions: 'Estos botones te llevaran a la aplicación de mapas para ver la ruta',
    menu: 'Clicando en el botón del lateral, puedes abrir el menú para navegar entre páginas o cambiar de idioma.',
    closeInfoDrawer: 'Clicka en el icono de cerrar para volver al mapa',
    finish: 'Esperamos que Carril Bici Palma te sea útil para moverte por Palma de forma sana, segura, ecológica, barata, y cómoda.'
  },
  ca: {
    next: 'Següent',
    complete: 'Acabar',
    back: 'Enrere',
    exit: 'Sortir',
    title: 'Carril Bici Palma',
    intro: 'Carril bici Palma és una aplicació web que mostra ón pots llogar una bici i quin és el recorregut del carril bici.\n' +
      'S\'ha desenvolupat per fer la bici més accessible a Palma.\n' +
      'Carril Bici Palma no té res a veure amb l\'Ajuntamente de Palma o qualsevol altre organisme públic.\n' +
      'Només és un projecte open source per promocionar la bicicleta com a mitjà de transport.',
    mapMarker: 'Quan cliques a una estació de bicis del mapa (les icones verds amb una bici), pots veure la seva informació.',
    mapMarkerClicked: 'Pots veure la direcció exacta, a quina distància hi ets, o com arribar-hi a peu o en bici.',
    drawerActions: 'Aquests botons et re-dirigirán per a l\'aplicació de mapes per veure la ruta',
    menu: 'Fent click al botó lateral, pots obrir el menú per navegar entre pàgines o canviar d\'idioma.',
    closeInfoDrawer: 'Clicka a la icona de tancar per tornar al mapa',
    finish: 'Esperam que Carril Bici Palma et sigui útil per moure\'t per Palma de forma sana, segura, ecològica, barata y còmoda.'
  },
  en: {
    next: 'Next',
    complete: 'Complete',
    back: 'Back',
    exit: 'Exit',
    title: 'Palma Bike Lane',
    intro: 'Carril Bici Palma is a web app that shows where you can hire a bike and which is the path of the bike lane.\n' +
      'It\'s built to make the bike more accesible within Palma.\n' +
      'Carril Bici Palma has nothing to do with the city hall or any other public organism.\n' +
      'It\'s just an open source project aimed to promote the use of bikes as transport.',
    mapMarker: 'When you click in a bike station in the map (green icons with a bike in them), you can see its information',
    mapMarkerClicked: 'You can see the exact address of the bike station, how far you are from it, or how to get there by walking or cycling.',
    drawerActions: 'Those buttons will browse to the maps app to see the route by walking or cycling.',
    menu: 'Clicking at the side button, you can open the side menu to navigate between pages or change app language.',
    menuOpen: '',
    closeInfoDrawer: 'Click in the close icon to go back to the map',
    finish: 'We hope Carril Bici Palma is useful for you for moving within Palma in a healthy, safety, ecologic, cheap, and comfortable way.'
  },
  de: {}
};

@Injectable({
  providedIn: 'root'
})
export class AppTourService {
  constructor(private shepherdService: ShepherdService,
              private store: Store<AppState>,
              private router: Router,
              private translateService: TranslateService) {
  }

  public startAppTour(): void {
    const daysPassedToShowTourAgain = 7;
    const limitDate = new Date();
    limitDate.setDate(limitDate.getDate() - daysPassedToShowTourAgain);
    const tourTakenLocalStorageInformation = localStorage.getItem('app-tour');
    let shouldTakeTheTour = false;

    if (tourTakenLocalStorageInformation) {
      const tourTakenInformation = JSON.parse(tourTakenLocalStorageInformation);

      if (tourTakenInformation?.date && tourTakenInformation?.date < limitDate.getTime()) {
        shouldTakeTheTour = true;
        this.storeAppTourObject();
      }

    } else {
      shouldTakeTheTour = true;
      this.storeAppTourObject();
    }


    if (shouldTakeTheTour) {
      const translations = tourTexts[this.translateService.currentLang];
      const nextButton = {
        classes: 'shepherd-button-primary',
        text: translations.next,
        type: 'next'
      };
      const completeButton = {
        classes: 'shepherd-button-primary',
        text: translations.complete,
        type: 'cancel'
      };
      const backButton = {
        classes: 'shepherd-button-secondary',
        text: translations.back,
        type: 'back'
      };
      const cancelButton = {
        classes: 'shepherd-button-secondary',
        text: translations.exit,
        type: 'cancel'
      };

      const intro = {
        id: 'intro',
        buttons: [
          cancelButton,
          nextButton
        ],
        cancelIcon: {
          enabled: true
        },
        highlightClass: 'highlight',
        scrollTo: false,
        title: translations.title,
        text: [translations.intro],
      };
      const mapMarker = {
        id: 'map-marker',
        buttons: [
          nextButton
        ],
        cancelIcon: {
          enabled: true
        },
        highlightClass: 'highlight',
        scrollTo: false,
        title: translations.title,
        text: [translations.mapMarker],
      };
      const mapMarkerClicked = {
        id: 'map-marker-clicked',
        buttons: [
          nextButton
        ],
        cancelIcon: {
          enabled: true
        },
        highlightClass: 'highlight',
        scrollTo: false,
        title: translations.title,
        text: [translations.mapMarkerClicked],
        when: {
          show: () => {
            this.store.dispatch(showBikeStationInfo({
                selectedBikeStation: {
                  img: null,
                  id: '13',
                  name: 'PARC DE ESTACIONS',
                  lng: 2.655408382,
                  lat: 39.57602331,
                  fullAddress: 'Marquès de la Fontsanta, 3, 07005 Palma, Illes Balears',
                  street: 'Marquès de la Fontsanta',
                  streetNumber: 3,
                  cp: '07005',
                  town: 'Palma',
                  region: 'Illes Balears'
                }
              }
            ));
          }
        }
      };
      const drawerActions = {
        id: 'drawer-actions',
        attachTo: {
          element: '.drawer__actions',
          on: 'bottom'
        },
        buttons: [
          nextButton
        ],
        cancelIcon: {
          enabled: true
        },
        highlightClass: 'highlight',
        scrollTo: false,
        title: translations.title,
        text: [translations.drawerActions],
      };
      const menu = {
        id: 'menu',
        attachTo: {
          element: '#side-nav-toggler',
          on: 'bottom'
        },
        buttons: [
          nextButton
        ],
        cancelIcon: {
          enabled: true
        },
        highlightClass: 'highlight',
        scrollTo: false,
        title: translations.title,
        text: [translations.menu],
        when: {
          show: () => {
            this.store.dispatch(closeBikeStationInfo());
          }
        }
      };
      const closeInfoDrawer = {
        id: 'close-info-drawer',
        attachTo: {
          element: '.drawer__close-btn',
          on: 'bottom'
        },
        buttons: [
          nextButton
        ],
        cancelIcon: {
          enabled: true
        },
        highlightClass: 'highlight',
        scrollTo: false,
        title: translations.title,
        text: [translations.closeInfoDrawer],
      };
      const finish = {
        id: 'finish',
        buttons: [
          completeButton
        ],
        cancelIcon: {
          enabled: true
        },
        highlightClass: 'highlight',
        scrollTo: false,
        title: translations.title,
        text: [translations.finish],
        when: {
          show: () => {
            this.store.dispatch(closeBikeStationInfo());
            const sideMenuBtn = document.getElementById('close-side-menu-btn');

            if (sideMenuBtn) {
              sideMenuBtn.click();
            }
          }
        }
      };

      this.shepherdService.modal = true;
      this.shepherdService.confirmCancel = false;
      this.shepherdService.addSteps([
        intro,
        mapMarker,
        mapMarkerClicked,
        drawerActions,
        closeInfoDrawer,
        menu,
        finish
      ]);
      this.router.navigate(['/map']);
      this.shepherdService.start();
    }
  }

  private storeAppTourObject(): void {
    const appTourObject = {
      date: new Date().getTime()
    };
    localStorage.setItem('app-tour', JSON.stringify(appTourObject));
  }
}
