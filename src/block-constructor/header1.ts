import { HtmlPlatform } from 'sezong-platform-html';
import { Header1Block } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const Header1Renderer: Renderer<Header1Block, string> = {
  canRender: it => it instanceof Header1Block,
  platform: HtmlPlatform,
  render: it => `<h1>${it.text}</h1>`
};
