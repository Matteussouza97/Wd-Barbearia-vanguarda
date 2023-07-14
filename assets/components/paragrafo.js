import { LitElement, html, css } from "lit";

export class Paragrafo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: #665e57;
        font-family: var(--fonte-corpo);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 20px */
      }
      p {
        margin: 0;
      }
    `,
  ];

  render() {
    return html`
    <slot>
      <p>parágrafo</p>
    </slot>`;
  }
}
customElements.define("app-paragrafo", Paragrafo);
