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
        
        <app-mapa></app-mapa>
        `;
    }
}
customElements.define('unidades-section', UnidadesSection);
