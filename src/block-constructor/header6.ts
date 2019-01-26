import { HtmlPlatform } from 'sezong-platform-html';
import { Header6Block } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const Header6Renderer: Renderer<Header6Block, string> = {
  canRender: it => it instanceof Header6Block,
  platform: HtmlPlatform,
  render: it => `<h6>${it.text}</h6>`
};
