import { LitElement, html, css } from "lit";
import { nav } from "../../main";

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
        font-family:var(--fonte-titulo);
        
        width:100%;
        height:2rem;
        font-size:.5rem;
        background-color:color-mix(in srgb, black 40%, var(--cor-tom-3, #664E38));
        
        
      }
      footer,button{
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

      a,button {
        color:white;
        font-size:.75rem;
        text-decoration:none;
        font-family:var(--fonte-titulo);
        opacity:0.9;
        cursor:poiter;
      transition:color 300ms;
      }
      button{
        padding:0;
        border:0;
        background: trasparent;
      }
      
      a:hover,button:hover {
        color:var(--tom-1);
      }

      a:active, button:active {
        color:var(--cor-primaria);
      }
      /* responsivo desktop */
      @media (min-width: 1024px){
        :host{
          border-radius:2rem 2rem 0 0 ;
          overflow:hidden;
        }
      }
    
    `,
  ];

    rolarContato() {
      return nav.rolarPara('#contato')
    }
    rolarUnidades() {
      return nav.rolarPara('#unidades')
    }

  render() {
    return html`
      <footer>
        <app-logo></app-logo>
        <nav>
          <button @click=${this.rolarUnidades}>Unidades</button>   
          <button @click=${this.rolarContato}>Contato</button> 
            <a href="services">Serviços</a>
          <a href="a-barbearia">A Barbearia</a>
          <a href="/">Home</a>
        </nav>
      </footer>
      <span>© Barbearia Vanguarda - Todos os direitos reservados desde 2023.</span>
    `;
  }
}
customElements.define("app-rodape", Rodape);
