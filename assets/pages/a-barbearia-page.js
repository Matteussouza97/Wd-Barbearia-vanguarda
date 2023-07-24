import { LitElement, html, css } from 'lit';

export class ABarbeariaPage extends LitElement {
    static styles = [
        css`
            :host {
            baber-section{
                --display-botao:none;
            }
            
        `
    ];

    render() {
        return html`
        <baber-section></baber-section>
        
        `;
    }
}
customElements.define('a-barbearia-page', ABarbeariaPage);
