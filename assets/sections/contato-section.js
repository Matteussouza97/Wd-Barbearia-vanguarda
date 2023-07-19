import { LitElement, html, css } from "lit";
import { section } from "../styles/Section-style";

export class COntatoSection extends LitElement {
  static styles = [
    section,
    css`
     
      
      img {
        height: 100%;
        
      }

      app-botao, div {
        width:100%;

      }
    `,
  ];

  render() {
    return html`
      <app-titulo>Entre em contato conosco</app-titulo>
      <app-quadro
        ><img src="thumb.png" alt="funcionarios recebendo clientes"
      /></app-quadro>

      <div>
        <app-botao
          ><feather-icon slot="icone" icon="figma"></feather-icon>Nos envie um
          E-mail</app-botao
        >
        <app-botao
          ><feather-icon slot="icone" icon="figma"></feather-icon> Fale
          conosco</app-botao
        >
      </div>
    `;
  }
}
customElements.define("contato-section", COntatoSection);
