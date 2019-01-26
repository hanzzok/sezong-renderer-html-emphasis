import { HtmlPlatform } from 'sezong-platform-html';
import { UnderlineText } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const UnderlineRenderer: Renderer<UnderlineText, string> = {
  canRender: it => it instanceof UnderlineText,
  platform: HtmlPlatform,
  render: it => `<u>${HtmlPlatform.render(it.data)}</u>`
};
