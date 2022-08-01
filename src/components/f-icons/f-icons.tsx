import { Component, State, Watch, Prop, h } from '@stencil/core';
import { getSvgContent, iconContent } from '../../utils/request';
@Component({
  tag: 'f-icons',
  styleUrl: 'f-icons.css',
  shadow: true,
})
export class FIcons {
  @Prop() name: string;
  @Prop() group: string = 'default';
  @Prop() size: string = '20';
  @Prop() color: string;
  @State() svgContent: any;
  @State() iconClass: string;
  @State() icon: any;
  @State() baseURL: string;
  @State() sym: symbol;
  @Watch('name')
  @Watch('icon')
  async componentWillLoad() {
    this.sym = Symbol.for('@facilio/icons/config');

    await this.loadIcon();
  }
  async loadIcon() {
    // give the cdn url or url based on the init function
    let cdnUrl = 'https://static.facilio.com/icons/svg/';
    let baseUrl = window[this.sym]?.baseUrl ? window[this.sym].baseURL : cdnUrl;
    const url = `${baseUrl}${this.group}/${this.name}.svg`;
    if (iconContent.has(url)) {
      this.svgContent = iconContent.get(url);
    } else {
      await getSvgContent(url).then(() => (this.svgContent = iconContent.get(url)));
    }

    let styledSvg = `<svg class="${this.iconClass ? this.iconClass : 'icon'}" style="height:${this.size}px; width: ${this.size}px; fill: ${this.color}"`;
    styledSvg = this.svgContent.replace(/<svg/, styledSvg);
    this.icon = styledSvg;
  }

  render() {
    return <div class="svg-container" innerHTML={this.icon} />;
  }
}
