import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {

  render() {
    return html`
      <hero-section></hero-section>
      <baber-section></baber-section>
      <services-section></services-section>
      <contato-section></contato-section>
      <unidades-section></unidades-section>
    `;
  }
}
customElements.define("home-page", HomePage);
