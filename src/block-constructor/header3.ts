import { HtmlPlatform } from 'sezong-platform-html';
import { Header3Block } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const Header3Renderer: Renderer<Header3Block, string> = {
  canRender: it => it instanceof Header3Block,
  platform: HtmlPlatform,
  render: it => `<h3>${it.text}</h3>`
};
