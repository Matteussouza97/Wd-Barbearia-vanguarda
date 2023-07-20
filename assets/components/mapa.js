import { LitElement, html, css } from "lit";

export class Mapa extends LitElement {
  static styles = [
    css`
      * {
        margin: 0;
      }

      :host {
        /* layout */
        display: flex;
        width: 270px;
        height: 200px;
        flex-direction: column;
        align-items: flex-start;

        /* estilo-tipografia */
        color: #fff;
        font-family: Var(--fonte-titulo);
        line-height: 100%;
      }

      address {
        display: flex;
        padding: 10px 12px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 6px;
        align-self: stretch;

        /* Estilos */
        border-radius: 0px 0px 8px 8px;
        background: var(--cor-secundaria, #665e57);
      }
      .titulo {
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.64px;
      }
      .subtitulo {
        font-size: 0.5rem;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0.32px;
      }
      figure {
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 8px 8px 0px 0px;
        border: 4px solid var(--cor-secundaria, #665e57);
      }
    `,
  ];

  render() {
    return html`
      <figure>
        <!-- <img src="mapa1.png" alt= "Matrix da Babearia" /> -->
      </figure>
      <address>
        <h2 class="titulo">Av. Marechal Tito, 2960</h2>
        <h3 class="subtitulo">São Miguel Paulista, São Paulo</h3>
      </address>
    `;
  }
}
customElements.define("app-mapa", Mapa);
