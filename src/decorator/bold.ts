import { HtmlPlatform } from 'sezong-platform-html';
import { BoldText } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const BoldRenderer: Renderer<BoldText, string> = {
  canRender: it => it instanceof BoldText,
  platform: HtmlPlatform,
  render: it => `<b>${HtmlPlatform.render(it.data)}</b>`
};
