import { MeannotePage } from './app.po';

describe('meannote App', () => {
  let page: MeannotePage;

  beforeEach(() => {
    page = new MeannotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
