import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  public languageSelectorControl: FormControl = new FormControl('es');
  public languages: any[] = [
    {
      value: 'es',
      title: 'spanish'
    },
    {
      value: 'ca',
      title: 'catalan'
    },
    {
      value: 'en',
      title: 'english'
    },
    {
      value: 'de',
      title: 'deutsch'
    }
  ];

  constructor(private translateService: TranslateService) {
    const currentLanguage = localStorage.getItem('lang') || 'es';
    this.translateService.use(currentLanguage);
    this.languageSelectorControl.setValue(currentLanguage);

    this.languageSelectorControl.valueChanges.subscribe((selectedLanguage: string) => {
      this.changeLanguage(selectedLanguage);
    });
  }

  private changeLanguage(language: string): void {
    this.translateService.use(language);
    localStorage.setItem('lang', language);
  }
}
