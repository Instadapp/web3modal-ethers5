import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { networkSvg } from '../../assets/svg/network'
import { networkLgSvg } from '../../assets/svg/networkLg'
import '../../components/wui-icon'
import '../../components/wui-image'
import { resetStyles } from '../../utils/ThemeUtil'
import type { SizeType } from '../../utils/TypesUtil'
import styles from './styles'

@customElement('wui-network-image')
export class WuiNetworkImage extends LitElement {
  public static styles = [resetStyles, styles]

  // -- State & Properties -------------------------------- //
  @property() public size: Exclude<SizeType, 'inherit' | 'sm' | 'xs' | 'xxs'> = 'md'

  @property() public name = 'uknown'

  @property() public imageSrc?: string

  @property({ type: Boolean }) public selected?: boolean = false

  // -- Render -------------------------------------------- //
  public render() {
    const isLg = this.size === 'lg'
    this.style.cssText = `
      --local-stroke: ${this.selected ? 'var(--wui-color-blue-100)' : 'var(--wui-overlay-010)'};
      --local-path: ${isLg ? 'var(--wui-path-network-lg)' : 'var(--wui-path-network)'};
      --local-width: ${isLg ? '86px' : '48px'};
      --local-height: ${isLg ? '96px' : '54px'};
      --local-icon-size: ${isLg ? '42px' : '24px'};
    `

    return html`${this.templateVisual()} ${isLg ? networkLgSvg : networkSvg}`
  }

  // -- Private ------------------------------------------- //
  private templateVisual() {
    if (this.imageSrc) {
      return html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`
    }

    return html`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-network-image': WuiNetworkImage
  }
}