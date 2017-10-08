import { EngtecWebsitePage } from './app.po';

describe('engtec-website App', () => {
  let page: EngtecWebsitePage;

  beforeEach(() => {
    page = new EngtecWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
