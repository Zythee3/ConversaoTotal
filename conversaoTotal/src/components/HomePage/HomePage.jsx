import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="divNavBar">
      <div className="tituloLogo">
        <div className="siteLogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 5h-7L8 19l-3-6H3m11 0l6 6m-6 0l6-6"
            />
          </svg>
        </div>
        <span>Conversão Total</span>
      </div>

      <div className="selecaoConversao">
        <span>Seleção de conversão</span>

        <div className="buttonsSelecao">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M6 19h12L16.575 9h-9.15zm6-12q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m2.825 0h1.75q.75 0 1.3.5t.675 1.225l1.425 10q.125.9-.462 1.588T18 21H6q-.925 0-1.513-.687t-.462-1.588l1.425-10Q5.575 8 6.125 7.5t1.3-.5h1.75q-.075-.25-.125-.487T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .275-.05.513T14.825 7M6 19h12z"
              />
            </svg>
            Peso
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="m12 3.77l-.75.84S9.97 6.06 8.68 7.94S6 12.07 6 14.23a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-2.16-1.39-4.41-2.68-6.29s-2.57-3.33-2.57-3.33zm0 3.13c.44.52.84.95 1.68 2.17c1.21 1.76 2.32 4 2.32 5.16c0 2.22-1.78 4-4 4s-4-1.78-4-4c0-1.16 1.11-3.4 2.32-5.16c.84-1.22 1.24-1.65 1.68-2.17"
              />
            </svg>
            Volume
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5M12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75"
                clip-rule="evenodd"
              />
            </svg>
            Temperatura
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"
                />
              </g>
            </svg>
            Tempo
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M18.5 2.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M15.25 4.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m-5.198 1.43a4 4 0 0 1 .721-.043q.12.006.273.02c2.383.248 4.15 2.036 5.328 3.802l.063.094a3.25 3.25 0 0 0 2.704 1.447H21a.75.75 0 0 1 0 1.5h-1.86a4.75 4.75 0 0 1-3.952-2.115l-.062-.094a11 11 0 0 0-.877-1.152l-1.884 2.355c-.428.534-.714.894-.907 1.19c-.188.286-.241.445-.255.566c-.024.2.002.403.073.591c.044.114.135.256.386.487c.26.24.626.518 1.172.93l.095.073c.72.546 1.22.924 1.565 1.428c.197.287.352.6.463.93c.193.58.193 1.206.193 2.11V22a.75.75 0 0 1-1.5 0v-1.83c0-1.07-.01-1.435-.116-1.755a2.3 2.3 0 0 0-.277-.558c-.19-.278-.476-.505-1.33-1.152l-.028-.021c-.51-.386-.933-.707-1.252-1.001c-.334-.307-.611-.635-.772-1.056a2.75 2.75 0 0 1-.162-1.3c.052-.448.241-.835.49-1.214c.237-.362.57-.778.968-1.277l1.984-2.479c-.687-.523-1.444-.871-2.264-.956a3 3 0 0 0-.184-.014a2.5 2.5 0 0 0-.45.03c-1.065.148-2.132.74-4.45 2.057l-1.436.815a.75.75 0 1 1-.742-1.304l1.436-.815l.152-.087c2.12-1.204 3.449-1.96 4.835-2.151M9.48 16.425a.75.75 0 0 1 .096 1.056l-1 1.201l-.097.116c-.642.771-1.113 1.338-1.771 1.646s-1.395.308-2.4.307H3a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165c.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096"
                clip-rule="evenodd"
              />
            </svg>
            Velocidade
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="currentColor"
                d="M11 17.175V6.825l-.9.9Q9.825 8 9.413 8T8.7 7.7q-.275-.275-.275-.7t.275-.7l2.6-2.6q.15-.15.325-.213T12 3.426t.375.063t.325.212l2.6 2.6q.275.275.275.688T15.3 7.7q-.3.3-.712.3t-.713-.3L13 6.825v10.35l.9-.9q.275-.275.688-.275t.712.3q.275.275.275.7t-.275.7l-2.6 2.6q-.15.15-.325.213t-.375.062t-.375-.062t-.325-.213l-2.6-2.6q-.275-.275-.287-.687T8.7 16.3q.275-.275.7-.275t.7.275z"
              />
            </svg>
            Comprimento
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
