import { TrainingbookPage } from './app.po';

describe('trainingbook App', () => {
  let page: TrainingbookPage;

  beforeEach(() => {
    page = new TrainingbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
