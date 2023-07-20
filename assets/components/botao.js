import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      ::slotted(button),
      button,
      ::slotted(a) {
        width: inherit;

        display: inline-flex;
        padding: 5px 24px;
        border: 0;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;

        border-radius: 8px;
        background-color: var(
          --button-background,
          color-mix(in srgb, white 20%, var(--cor-tom-2, #b38962))
        );
        box-shadow: 0px 2px 4px 0px #665e57;

        /* tipografia */
        color: var(
          --color,
          color-mix(in srgb, black 20%, var(--cor-tom-3, #664e38))
        );
        text-align: justify;
        font-family: var(--fonte-titulo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;
        text-decoration:none;

        transition: all 200ms;
        cursor: pointer;
      }

      /* seletor, pseudo classe do botão pra quando passar o mause. */
      /* efeito */
    `,
  ];

  render() {
    return html`<slot><button>Pressione</button></slot> `;
  }
}
customElements.define("app-botao", Botao);
