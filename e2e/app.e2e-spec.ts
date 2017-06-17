import { TodosTutorialPage } from './app.po';

describe('todos-tutorial App', () => {
  let page: TodosTutorialPage;

  beforeEach(() => {
    page = new TodosTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
