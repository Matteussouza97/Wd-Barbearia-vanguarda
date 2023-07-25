import { LitElement, html, css } from "lit";
import { section } from "../styles/Section-style";

export class COntatoSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        gap: 0;
        justify-content: space-between;
      }
      img {
        height: 100%;
      }

      app-botao,
      div {
        width: 100%;
      }

      div {
        gap: 8px;
        display: flex;
        flex-direction: column;
      }

      .whatsapp {
        --color: color-mix(in srgb, white 40%, var(--cor-tom-1));
        --button-background: color-mix(in srgb, white 20%, #128c7e 100%);
      }

      feather-icon,
      svg {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 5px 8px 5px 0;
      }
    `,
  ];

  mensagemWhatsapp() {
    const mensagem ="Olá! Eu olhei o site da barbearia e gostaria de mais informações. Com quem posso falar?"
    return encodeURIComponent(mensagem)
  }
  render() {
    const numeroWhatsapp = "5511982865226";
    return html`
      <app-titulo>Entre em contato conosco</app-titulo>
      <app-quadro
        ><img loading="lazy" src="thumb.png" alt="funcionarios recebendo clientes"
      /></app-quadro>

      <div>
        <app-botao>
          <a href="mailto:contato@barbeariavanguarda.com.br">
            <feather-icon icon="mail"></feather-icon>Nos envie um E-mail
          </a>
        </app-botao>

        <app-botao class="whatsapp">
          <a
            href=${`https://wa.me/${numeroWhatsapp}?text=${this.mensagemWhatsapp()}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 23 24"
              fill="currentcolor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.5715 3.82902C18.5124 2.76952 17.2544 1.92994 15.8696 1.35861C14.4848 0.787281 13.0006 0.495497 11.5027 0.500053C5.21591 0.500053 0.0981818 5.59221 0.0956248 11.8524C0.092844 13.8457 0.618284 15.8042 1.61846 17.5285L0 23.4091L6.04688 21.8306C7.72068 22.7374 9.59437 23.2119 11.498 23.2113H11.5027C17.7888 23.2113 22.906 18.1186 22.9091 11.8589C22.9129 10.3661 22.6198 8.88733 22.0467 7.50877C21.4738 6.13021 20.6324 4.87937 19.5715 3.82902ZM11.5027 21.2952H11.4985C9.8015 21.2956 8.13533 20.8415 6.6733 19.98L6.3271 19.7754L2.73886 20.7122L3.69664 17.2303L3.47113 16.8724C2.52225 15.3701 2.0195 13.6292 2.02142 11.8524C2.02142 6.65022 6.27648 2.41766 11.5061 2.41766C14.0149 2.41319 16.4228 3.40538 18.2 5.17603C19.9773 6.94667 20.9784 9.35074 20.9833 11.8595C20.9812 17.0621 16.7282 21.2952 11.5027 21.2952ZM16.7027 14.2286C16.4179 14.0865 15.0152 13.4003 14.7554 13.3056C14.4957 13.211 14.3039 13.1634 14.1142 13.4478C13.9245 13.7321 13.3778 14.3682 13.2116 14.56C13.0454 14.7518 12.8792 14.7727 12.5943 14.6306C12.3096 14.4885 11.3906 14.1892 10.3019 13.2228C9.4546 12.4706 8.8829 11.5419 8.7167 11.2582C8.55051 10.9743 8.69881 10.8204 8.84148 10.6793C8.96983 10.5519 9.12631 10.3479 9.26898 10.1822C9.41164 10.0165 9.45921 9.89789 9.55381 9.70869C9.6484 9.51948 9.60136 9.3538 9.53028 9.21215C9.45921 9.07051 8.88903 7.67398 8.65176 7.10584C8.42012 6.55256 8.1854 6.62772 8.01051 6.61902C7.84431 6.61084 7.65255 6.6088 7.46387 6.6088C7.31962 6.61256 7.17769 6.64601 7.04695 6.70707C6.9162 6.76813 6.79945 6.85549 6.70397 6.96369C6.44267 7.24801 5.70631 7.93528 5.70631 9.33028C5.70631 10.7253 6.72903 12.0752 6.87017 12.2645C7.01131 12.4537 8.87983 15.3189 11.7388 16.5477C12.2698 16.775 12.8122 16.9744 13.364 17.1449C14.0467 17.3607 14.6679 17.3306 15.1588 17.2574C15.7066 17.1761 16.8464 16.5712 17.0831 15.9085C17.3199 15.2458 17.3204 14.6782 17.2493 14.56C17.1782 14.4419 16.988 14.3703 16.7027 14.2286Z"
                fill="currentcolor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.5715 3.82902C18.5124 2.76952 17.2544 1.92994 15.8696 1.35861C14.4848 0.787281 13.0006 0.495497 11.5027 0.500053C5.21591 0.500053 0.0981818 5.59221 0.0956248 11.8524C0.092844 13.8457 0.618284 15.8042 1.61846 17.5285L0 23.4091L6.04688 21.8306C7.72068 22.7374 9.59437 23.2119 11.498 23.2113H11.5027C17.7888 23.2113 22.906 18.1186 22.9091 11.8589C22.9129 10.3661 22.6198 8.88733 22.0467 7.50877C21.4738 6.13021 20.6324 4.87937 19.5715 3.82902ZM11.5027 21.2952H11.4985C9.8015 21.2956 8.13533 20.8415 6.6733 19.98L6.3271 19.7754L2.73886 20.7122L3.69664 17.2303L3.47113 16.8724C2.52225 15.3701 2.0195 13.6292 2.02142 11.8524C2.02142 6.65022 6.27648 2.41766 11.5061 2.41766C14.0149 2.41319 16.4228 3.40538 18.2 5.17603C19.9773 6.94667 20.9784 9.35074 20.9833 11.8595C20.9812 17.0621 16.7282 21.2952 11.5027 21.2952ZM16.7027 14.2286C16.4179 14.0865 15.0152 13.4003 14.7554 13.3056C14.4957 13.211 14.3039 13.1634 14.1142 13.4478C13.9245 13.7321 13.3778 14.3682 13.2116 14.56C13.0454 14.7518 12.8792 14.7727 12.5943 14.6306C12.3096 14.4885 11.3906 14.1892 10.3019 13.2228C9.4546 12.4706 8.8829 11.5419 8.7167 11.2582C8.55051 10.9743 8.69881 10.8204 8.84148 10.6793C8.96983 10.5519 9.12631 10.3479 9.26898 10.1822C9.41164 10.0165 9.45921 9.89789 9.55381 9.70869C9.6484 9.51948 9.60136 9.3538 9.53028 9.21215C9.45921 9.07051 8.88903 7.67398 8.65176 7.10584C8.42012 6.55256 8.1854 6.62772 8.01051 6.61902C7.84431 6.61084 7.65255 6.6088 7.46387 6.6088C7.31962 6.61256 7.17769 6.64601 7.04695 6.70707C6.9162 6.76813 6.79945 6.85549 6.70397 6.96369C6.44267 7.24801 5.70631 7.93528 5.70631 9.33028C5.70631 10.7253 6.72903 12.0752 6.87017 12.2645C7.01131 12.4537 8.87983 15.3189 11.7388 16.5477C12.2698 16.775 12.8122 16.9744 13.364 17.1449C14.0467 17.3607 14.6679 17.3306 15.1588 17.2574C15.7066 17.1761 16.8464 16.5712 17.0831 15.9085C17.3199 15.2458 17.3204 14.6782 17.2493 14.56C17.1782 14.4419 16.988 14.3703 16.7027 14.2286Z"
                fill="currentcolor"
                fill-opacity="0.4"
              />
            </svg>
            Fale conosco
          </a>
        </app-botao>
      </div>
    `;
  }
}
customElements.define("contato-section", COntatoSection);
