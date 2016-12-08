import { MangaPage } from './app.po';

describe('manga App', function() {
  let page: MangaPage;

  beforeEach(() => {
    page = new MangaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
