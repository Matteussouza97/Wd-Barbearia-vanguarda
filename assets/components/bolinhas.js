import { LitElement, html, css } from "lit";

export class Bolinhas extends LitElement {

    static get properties() {
        return {
            formato: { type: String },
        };
    }


  static styles = [
    css`
      :host {
        width: 100px;
        height: 100px;

        display: block;
      }
      .inteira {
        -webkit-mask: url("bolinhas.svg") no-repeat center;
        mask: url("bolinhas.svg") no-repeat center;
      }


      .fila-preenchida {
        -webkit-mask: url("linha-preenchida.svg") no-repeat center;
        mask: url("linha-preenchida.svg") no-repeat center;
      }

      .fila-vazadas {
        -webkit-mask: url("linha-vazadas.svg") no-repeat center;
        mask: url("linha-vazadas.svg") no-repeat center;
      }

      .fila-metade {
        -webkit-mask: url("bolinhas-metade.svg") no-repeat center;
        mask: url("bolinhas-metade.svg") no-repeat center;
      }


      .bolinhas {
        width: 100%;
        height: 100%;
        
        -webkit-mask-size: 100%;
        mask-size: 100%;
        background-color: var(--cor-bolinhas,black);
      }
    `,
  ];

    /**
   * Define o formato das bolinhas
   * @returns Classe do formato
   */
     definirFormato() {
        if (this.formato === "fila-preenchida") {
          return "fila-preenchida";
        }
        if (this.formato === "fila-vazadas") {
          return "fila-vazadas";
        }
        if (this.formato === "fila-metade") {
          return "fila-metade";
        }
        return "inteira";
      }
  render() {
    return html` <div class=${`bolinhas ${this.definirFormato()}`}></div> `;
  }
}
customElements.define("app-bolinhas", Bolinhas);
