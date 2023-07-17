import { LitElement, html, css } from "lit";
import { section } from "../styles/Section-style";

export class BaberSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        justify-content: space-between;
        align-items: flex-start;
      }

      article {
        display: flex;
        padding: 8px 12px 0px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        background: Var(--cor-tom-1);

        border: 3px solid;
        border-image-source: linear-gradient(
          42deg,
          rgba(102, 78, 56, 0) 50%,
          rgba(102, 78, 56, 1) 100%
        );
        border-image-slice: 1;

        border-left: 0;
        border-bottom: 0;
      }

      app-paragrafo {
        width: 270px;
        color: var(--cor-Secundaria);
        text-align: justify;
        font-family: var(--font-corpo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
        letter-spacing: -0.96px;
      }

      app-quadro {
        width: 335px;
        height: 335px;
        border-radius: 335px;
        position: absolute;
        right: -82px;
        top: 106px;
        z-index:-10;
        
        
      }

      img {
        width: 100%;
        height: auto;
      }

      app-bolinhas {
        display: flex;  
        width: 300px;
        height: 300px;
        justify-content: center;
        align-items: flex-start;
        position: absolute;
        left: -150px;
        top: 72px;
        z-index:-20;
      }


    `,
  ];

  render() {
    return html`
      <app-titulo>A Barbearia</app-titulo>
      <app-bolinhas></app-bolinhas>
      <app-quadro>
        <img src="abarbearia.png" alt= "A Barbearia"/>
      </app-quadro>
      <article>
        <app-paragrafo>
          Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se encontram
          para proporcionar cortes de cabelo e barbas impecáveis. Com uma equipe
          de barbeiros especializados, combinamos técnicas tradicionais com as
          últimas tendências, garantindo um atendimento personalizado em um
          ambiente acolhedor.
        </app-paragrafo>
        <app-botao>Leia mais</app-botao>
      </article>
    `;
  }
}
customElements.define("baber-section", BaberSection);
