import { HtmlPlatform } from 'sezong-platform-html';
import { Header5Block } from 'sezong-rule-emphasis';
import { Renderer } from 'sezong/api';

export const Header5Renderer: Renderer<Header5Block, string> = {
  canRender: it => it instanceof Header5Block,
  platform: HtmlPlatform,
  render: it => `<h5>${it.text}</h5>`
};
