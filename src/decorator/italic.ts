import { HtmlPlatform } from 'sezong-platform-html';
import { ItalicText } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const ItalicRenderer: Renderer<ItalicText, string> = {
  canRender: it => it instanceof ItalicText,
  platform: HtmlPlatform,
  render: it => `<i>${HtmlPlatform.render(it.data)}</i>`
};
