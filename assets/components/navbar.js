import { LitElement, html, css } from 'lit';

export class Navbar extends LitElement {
    static styles = [
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
customElements.define('app-navbar', Navbar);
