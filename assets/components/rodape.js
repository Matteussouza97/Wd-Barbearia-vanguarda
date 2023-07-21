import { LitElement, html, css } from "lit";

export class Rodape extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        font-family:var(--fonte-titulo);
        font-size:.75rem;
        color:white;
      }
      span{
        display:flex;
        justify-content:center;
        align-items:center;
        
        width:100%;
        height:2rem;
        font-size:.5rem;
        background-color:color-mix(in srgb, black 40%, var(--cor-tom-3, #664E38));
        
        
      }
      footer{
        display:flex;
        justify-content:space-between;
        padding:2rem;
        background-color:color-mix(in srgb, black 20%, var(--cor-tom-3, #664E38));
        align-items:center;
        
      }

      nav{
        display:flex;
        flex-direction:column-reverse;
        align-items:flex-end;
        gap:16px;
        opacity:0.9;
      }
      app-logo{
        background-color:white;
        width:4rem;
        height:4rem;
        opacity:0.9;
      }

      a {
        color:white;
        text-decoration:none;
      }

    
    `,
  ];

  render() {
    return html`
      <footer>
        <app-logo></app-logo>
        <nav>
          <a href="">Unidades</a>
          <a href="">Contato</a>
          <a href="services">Serviços</a>
          <a href="baber">A Barbearia</a>
          <a href="/">Home</a>
        </nav>
      </footer>
      <span>© Barbearia Vanguarda - Todos os direitos reservados desde 2023.</span>
    `;
  }
}
customElements.define("app-rodape", Rodape);
