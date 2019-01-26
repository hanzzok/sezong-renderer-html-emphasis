import { HtmlPlatform } from 'sezong-platform-html';
import { Header2Block } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const Header2Renderer: Renderer<Header2Block, string> = {
  canRender: it => it instanceof Header2Block,
  platform: HtmlPlatform,
  render: it => `<h2>${it.text}</h2>`
};
