import { LitElement, html, css } from "lit";
import { section } from "../styles/Section-style";

export class SErvicesSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: block;
      }
      app-bolinhas {
        --cor-bolinhas: var(--cor-tom-3);
        width: 270px;
        height: 23px;
      }

      app-bolinhas:first-child {
        transform: rotate(180deg);
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:10px;
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo
        >Estilo, cuidado e excelência em cada <span>corte</span>.</app-paragrafo
      >
      <section>
        <app-quadro></app-quadro>
        <aside>
          <article>
            <app-paragrafo>Corte</app-paragrafo>
            <app-paragrafo
              >Social, degradê, surfista, militar, razor part,
              undercut</app-paragrafo
            >
          </article>
          <app-botao>Ver mais</app-botao>
        </aside>
      </section>
      <div>
        <app-bolinhas formato="fila-vazadas"></app-bolinhas>
        <app-bolinhas formato="fila-preenchida"></app-bolinhas>
      </div>
    `;
  }
}
customElements.define("services-section", SErvicesSection);
