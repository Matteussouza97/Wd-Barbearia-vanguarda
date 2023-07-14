import { LitElement, html, css } from "lit";

export class HeroSection extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.375rem;
      }

      section {
        display: flex;
        width: 334px;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      span {
        color: var(--tom-3, #664e38);
        font-weight: 900;
      }

      app-titulo {
        display: flex;
        align-items: center;
        align-self: stretch;

        position:relative;
      }

      app-logo {
        width: 8rem;
        height: 8rem;

        position: absolute;
        right: -3.25rem;
        top: -1.375rem;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>Barbearia <span>Vanguarda</span></h1>
          <app-logo></app-logo>
        </app-titulo>
        <app-quadro></app-quadro>
      </section>
      <app-paragrafo>
        Obtenha um estilo impecável, do cabelo à barba.
      </app-paragrafo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
