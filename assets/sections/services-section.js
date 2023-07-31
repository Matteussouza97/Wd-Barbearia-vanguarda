import { LitElement, html, css } from "lit";
import { animate } from "../styles/animate-style";
import { section } from "../styles/Section-style";

export class SErvicesSection extends LitElement {
  static styles = [
    animate,
    section,
    css`
      :host {
        padding: 2rem 0;
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
        gap: 10px;
      }
      span {
        color: var(--cor-tom-3, #664e38);
        font-weight: 600;
      }

      .titulo {
        width: 270px;
      }

      section {
        display: flex;
        align-items: center;
        gap: 36px;
        align-self: stretch;
      }

      aside {
        display: flex;
        padding: 96px 0px 8px 0px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        z-index:-10;
      }

      article app-paragrafo:first-child {
        font-weight: 700;
        color: var(--cor-tom-3, #664e38);
      }
      .descricao {
        width: 108px;
        text-align: center;
        font-size: 0.875rem;
      }

      article {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
      }
      swiper-container {
        height: 100%;
        width: 100%;
      }
      swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      app-quadro {
        background: transparent;
      }

      img {
        height: 100%;
      }
      .primeira-imagen {
        height: 120%;
      }
      app-quadro {
        width: 165px;
        height: 320px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      /* Responsivo tablet */
      @media (min-width: 768px) {
        :host {
          padding: 3rem 0;
        }

        section {
          align-self: center;
        }
        app-quadro {
          border-radius: 8px;
          width: 265px;
          height: 520px;
        }

        .titulo {
          font-size: 1.25rem;
          width: 330px;
        }
        article app-paragrafo:first-child {
          font-size: 1.25rem;
        }
        .descricao {
          font-size: 1rem;
          width: 158px;
        }
        aside {
          padding: 176px 0px 16px 0px;
        }
      }

      /*Responsivo Desktop */
      @media (min-width: 1024px) {
        div {
          display: none;
        }
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo
        class="titulo animate__animated animate__delay-1s"
        data-toggle-class="animate__fadeIn"
        >Estilo, cuidado e excelência em cada <span>corte.</span></app-paragrafo
      >
      <section>
        <app-quadro
          class="titulo animate__animated"
          data-toggle-class="animate__fadeInLeft"
        >
          <swiper-container
            loop="true"
            autoplay="true"
            speed="750"
            disabled-on-interaction="false"
            effect="fade"
            simulate-touch="false"
          >
            <swiper-slide
              ><img
                class="primeira-imagen"
                loading="lazy"
                src="servicos-1.jpg"
                alt="Servicos"
            /></swiper-slide>
            <swiper-slide
              ><img loading="lazy" src="servicos-2.jpg" alt="Servicos"
            /></swiper-slide>
            <swiper-slide
              ><img loading="lazy" src="servicos-3.jpg" alt="Servicos"
            /></swiper-slide>
          </swiper-container>
        </app-quadro>
        <aside
          class="titulo animate__animated animate__delay-1s"
          data-toggle-class="animate__fadeInLeft"
        >
          <article>
            <app-paragrafo>Corte</app-paragrafo>
            <app-paragrafo class="descricao"
              >Social, degradê, surfista, militar, razor part,
              undercut</app-paragrafo
            >
          </article>
          <app-botao><a href="services">Ver mais</a></app-botao>
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
