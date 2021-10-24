import {LanguageSelectorComponent} from './language-selector.component';

describe('LanguageSelectorComponent', () => {
  it('should set current language from local storage', () => {
    const getItemSpy = jest
      .spyOn(global.Storage.prototype, 'getItem')
      .mockImplementation((key) => 'en');

    const useMock = jest.fn();

    const translateServiceMock = {
      use: useMock
    };
    const component: LanguageSelectorComponent = new LanguageSelectorComponent(translateServiceMock as any);

    expect(useMock).toHaveBeenCalledWith('en');
  });

  it('should set current language to default language', () => {
    const getItemSpy = jest
      .spyOn(global.Storage.prototype, 'getItem')
      .mockImplementation((key) => null);

    const useMock = jest.fn();

    const translateServiceMock = {
      use: useMock
    };
    const component: LanguageSelectorComponent = new LanguageSelectorComponent(translateServiceMock as any);

    expect(useMock).toHaveBeenCalledWith('es');
  });

  it('should call localStorage.setItem', () => {
    const setItemMock = jest.fn();
    jest
      .spyOn(global.Storage.prototype, 'setItem')
      .mockImplementation(setItemMock);

    const useMock = jest.fn();

    const translateServiceMock = {
      use: useMock
    };
    const component: LanguageSelectorComponent = new LanguageSelectorComponent(translateServiceMock as any);

    component.languageSelectorControl.patchValue('ca');

    expect(setItemMock).toMatchSnapshot();
  });
});

