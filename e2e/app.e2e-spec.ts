import { Pas3Page } from './app.po';

describe('pas3 App', () => {
  let page: Pas3Page;

  beforeEach(() => {
    page = new Pas3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
