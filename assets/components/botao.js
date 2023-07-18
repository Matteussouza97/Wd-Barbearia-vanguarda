import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
      }

      button {
        display: block;
        display: flex;
        width: 133px;
        height: 32px;
        padding: 5px 24px;
        border:0;
        justify-content: center;
        align-items: center;
        gap: 10px;
        
       
        border-radius: 8px;
        background-color:  color-mix(in srgb, white 20%, var(--tom-2, #b38962));
        box-shadow: 0px 2px 4px 0px #665e57;

        /* tipografia */
        color: var(--tom-3, #664e38);
        text-align: justify;
        font-family:var(--font-titulo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space:nowrap;

        transition:all 200ms;
        cursor:pointer;
      }

      /* seletor, pseudo classe do botão pra quando passar o mause. */
      /* efeito */

      button:hover, button:active {
        background-color:var(--tom-2);
      }




    `,
  ];

  render() {
    return html`<button><slot>Pressione</slot></button> `;
  }
}
customElements.define("app-botao", Botao);
