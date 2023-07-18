import { LitElement, html, css } from 'lit';
import { section } from '../styles/Section-style';

export class SErvicesSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('services-section', SErvicesSection);
