import { HtmlPlatform } from 'sezong-platform-html';
import { Header4Block } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const Header4Renderer: Renderer<Header4Block, string> = {
  canRender: it => it instanceof Header4Block,
  platform: HtmlPlatform,
  render: it => `<h4>${it.text}</h4>`
};
