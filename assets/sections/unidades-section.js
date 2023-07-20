import { LitElement, html, css } from 'lit';
import { section } from '../styles/Section-style';

export class UnidadesSection extends LitElement {
    static styles = [
       section,
       css`
            :host {
                display: flex;
            }
        `
    ];

    render() {
        return html`
        
        <app-mapa>
            <img slot="imagem" src="mapa1.png" alt="" />
            <h2 slot="titulo">Oi eu sou o goku</h2>
            <h3 slot="subtitulo">Seu verme maldito</h3>
        </app-mapa>
        <app-mapa></app-mapa>

        `;
    }
}
customElements.define('unidades-section', UnidadesSection);
