import { LitElement, html, css } from 'lit';

export class HeroSection extends LitElement {
    static styles = [
        css`
            :host {
                width:100%;
                height:100%;
                display: block;
            }
        `
    ];

    render() {
        return html`
        
        <section></section>
        <app-paragrafo></app-paragrafo>
        
        
        
        
        
        
        
        
        
        
        
        
        `;
    }
}
customElements.define('hero-section', HeroSection);
