import { CodekulPage } from './app.po';

describe('codekul App', () => {
  let page: CodekulPage;

  beforeEach(() => {
    page = new CodekulPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
