import React from "react";

type Props = {
  id: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function GlobalSvgSelector({ id, className, style }: Props) {
  let svgContent: React.ReactNode = null;
  switch (id) {
    case "overview":
      return (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.833333 8.83333H5.83333C6.29167 8.83333 6.66667 8.45833 6.66667 8V1.33333C6.66667 0.875 6.29167 0.5 5.83333 0.5H0.833333C0.375 0.5 0 0.875 0 1.33333V8C0 8.45833 0.375 8.83333 0.833333 8.83333ZM0.833333 15.5H5.83333C6.29167 15.5 6.66667 15.125 6.66667 14.6667V11.3333C6.66667 10.875 6.29167 10.5 5.83333 10.5H0.833333C0.375 10.5 0 10.875 0 11.3333V14.6667C0 15.125 0.375 15.5 0.833333 15.5ZM9.16667 15.5H14.1667C14.625 15.5 15 15.125 15 14.6667V8C15 7.54167 14.625 7.16667 14.1667 7.16667H9.16667C8.70833 7.16667 8.33333 7.54167 8.33333 8V14.6667C8.33333 15.125 8.70833 15.5 9.16667 15.5ZM8.33333 1.33333V4.66667C8.33333 5.125 8.70833 5.5 9.16667 5.5H14.1667C14.625 5.5 15 5.125 15 4.66667V1.33333C15 0.875 14.625 0.5 14.1667 0.5H9.16667C8.70833 0.5 8.33333 0.875 8.33333 1.33333Z"
            fill="#070D0A"
          />
        </svg>
      );
    case "depozit": {
      return (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.833333 8.83333H5.83333C6.29167 8.83333 6.66667 8.45833 6.66667 8V1.33333C6.66667 0.875 6.29167 0.5 5.83333 0.5H0.833333C0.375 0.5 0 0.875 0 1.33333V8C0 8.45833 0.375 8.83333 0.833333 8.83333ZM0.833333 15.5H5.83333C6.29167 15.5 6.66667 15.125 6.66667 14.6667V11.3333C6.66667 10.875 6.29167 10.5 5.83333 10.5H0.833333C0.375 10.5 0 10.875 0 11.3333V14.6667C0 15.125 0.375 15.5 0.833333 15.5ZM9.16667 15.5H14.1667C14.625 15.5 15 15.125 15 14.6667V8C15 7.54167 14.625 7.16667 14.1667 7.16667H9.16667C8.70833 7.16667 8.33333 7.54167 8.33333 8V14.6667C8.33333 15.125 8.70833 15.5 9.16667 15.5ZM8.33333 1.33333V4.66667C8.33333 5.125 8.70833 5.5 9.16667 5.5H14.1667C14.625 5.5 15 5.125 15 4.66667V1.33333C15 0.875 14.625 0.5 14.1667 0.5H9.16667C8.70833 0.5 8.33333 0.875 8.33333 1.33333Z"
            fill="#35E032"
          />
        </svg>
      );
    }
    case "Withdrawal":
      return (
        <svg
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1714_77044)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 2.3248C0 1.27546 0.850658 0.424805 1.9 0.424805H7.6V7.5498H2.09675L4.30876 5.33778C4.49426 5.1523 4.49426 4.85155 4.30876 4.66605C4.12326 4.48055 3.82251 4.48055 3.637 4.66605L0.614123 7.68893C0.428625 7.87442 0.428625 8.17519 0.614123 8.36068L3.637 11.3836C3.82251 11.5691 4.12326 11.5691 4.30876 11.3836C4.49426 11.198 4.49426 10.8973 4.30876 10.7118L2.09675 8.4998H7.6V15.6248H4.275C4.275 16.1495 3.84967 16.5748 3.325 16.5748C2.80033 16.5748 2.375 16.1495 2.375 15.6248H1.9C0.850658 15.6248 0 14.7741 0 13.7248V2.3248Z"
              fill="#070D0A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.1 0.424805H9.02502V15.6248H14.725C14.725 16.1495 15.1503 16.5748 15.675 16.5748C16.1997 16.5748 16.625 16.1495 16.625 15.6248H17.1C18.1493 15.6248 19 14.7741 19 13.7248V2.3248C19 1.27546 18.1493 0.424805 17.1 0.424805ZM14.3393 12.961C14.5958 13.0408 14.9293 13.095 15.3397 13.1235V14.1666H16.2289V13.0978C16.7647 13.018 17.1494 12.8413 17.3831 12.5677C17.6168 12.2941 17.7337 11.9692 17.7337 11.593C17.7337 11.3422 17.6881 11.1256 17.5969 10.9432C17.5114 10.7608 17.3917 10.6041 17.2378 10.473C17.0839 10.3362 16.9015 10.2193 16.6906 10.1224C16.4854 10.0198 16.2659 9.9229 16.0322 9.83171C15.8669 9.7747 15.7187 9.72055 15.5876 9.66925C15.4565 9.61225 15.3454 9.55525 15.2542 9.49825C15.163 9.43555 15.0946 9.36716 15.049 9.29305C15.0034 9.21325 14.9806 9.11635 14.9806 9.00235C14.9806 8.80855 15.0575 8.65751 15.2114 8.5492C15.3653 8.4352 15.5962 8.3782 15.904 8.3782C16.1947 8.3782 16.4512 8.4067 16.6735 8.4637C16.9015 8.5207 17.0981 8.58055 17.2634 8.64325L17.4772 7.7968C17.3518 7.7455 17.1808 7.6942 16.9642 7.6429C16.7476 7.5859 16.5025 7.546 16.2289 7.5232V6.5998H15.3397V7.5574C14.8552 7.6372 14.4961 7.81675 14.2624 8.09605C14.0287 8.36965 13.9118 8.7031 13.9118 9.09641C13.9118 9.3358 13.9546 9.53815 14.0401 9.70345C14.1256 9.86875 14.2367 10.0113 14.3735 10.131C14.516 10.245 14.6728 10.3419 14.8438 10.4217C15.0205 10.5015 15.1972 10.5727 15.3739 10.6354C15.562 10.7038 15.733 10.7694 15.8869 10.8321C16.0465 10.8948 16.1833 10.9632 16.2973 11.0373C16.4113 11.1114 16.4996 11.1969 16.5623 11.2938C16.625 11.3907 16.6564 11.5047 16.6564 11.6358C16.6564 11.8296 16.5794 11.9863 16.4255 12.106C16.2773 12.22 16.0066 12.277 15.6133 12.277C15.2827 12.277 14.9863 12.24 14.7241 12.1659C14.4676 12.0918 14.2481 12.0091 14.0657 11.9179L13.775 12.7302C13.9004 12.7986 14.0885 12.8755 14.3393 12.961ZM11.5397 8.37345C11.1293 8.34495 10.7958 8.2908 10.5393 8.211C10.2885 8.1255 10.1004 8.04855 9.97502 7.98015L10.2657 7.1679C10.4481 7.2591 10.6676 7.34175 10.9241 7.41585C11.1863 7.48995 11.4827 7.527 11.8133 7.527C12.2066 7.527 12.4773 7.47 12.6255 7.356C12.7794 7.2363 12.8564 7.07955 12.8564 6.88575C12.8564 6.75465 12.825 6.64065 12.7623 6.54375C12.6996 6.44685 12.6113 6.36135 12.4973 6.28725C12.3833 6.21315 12.2465 6.14475 12.0869 6.08205C11.933 6.01935 11.762 5.9538 11.5739 5.8854C11.3972 5.8227 11.2205 5.75145 11.0438 5.67165C10.8728 5.59185 10.716 5.49495 10.5735 5.38095C10.4367 5.26125 10.3256 5.11875 10.2401 4.95345C10.1546 4.78815 10.1118 4.5858 10.1118 4.3464C10.1118 3.9531 10.2287 3.61965 10.4624 3.34605C10.6961 3.06675 11.0552 2.8872 11.5397 2.8074V1.8498H12.4289V2.7732C12.7025 2.796 12.9476 2.8359 13.1642 2.8929C13.3808 2.9442 13.5518 2.9955 13.6772 3.0468L13.4634 3.89325C13.2981 3.83055 13.1015 3.7707 12.8735 3.7137C12.6512 3.6567 12.3947 3.6282 12.104 3.6282C11.7962 3.6282 11.5653 3.6852 11.4114 3.7992C11.2575 3.9075 11.1806 4.05855 11.1806 4.25235C11.1806 4.36635 11.2034 4.46325 11.249 4.54305C11.2946 4.61715 11.363 4.68555 11.4542 4.74825C11.5454 4.80525 11.6565 4.86225 11.7876 4.91925C11.9187 4.97055 12.0669 5.0247 12.2322 5.0817C12.4659 5.1729 12.6854 5.2698 12.8906 5.3724C13.1015 5.4693 13.2839 5.58615 13.4378 5.72295C13.5917 5.85405 13.7114 6.0108 13.7969 6.1932C13.8881 6.3756 13.9337 6.5922 13.9337 6.843C13.9337 7.2192 13.8168 7.5441 13.5831 7.8177C13.3494 8.0913 12.9647 8.268 12.4289 8.3478V9.41655H11.5397V8.37345Z"
              fill="#070D0A"
            />
          </g>
          <defs>
            <clipPath id="clip0_1714_77044">
              <rect
                width="19"
                height="16.15"
                fill="white"
                transform="translate(0 0.424805)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case "notifications":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99998 18.3332C9.54165 18.3332 9.14942 18.1701 8.82331 17.844C8.4972 17.5179 8.33387 17.1254 8.33331 16.6665H11.6666C11.6666 17.1248 11.5036 17.5173 11.1775 17.844C10.8514 18.1707 10.4589 18.3337 9.99998 18.3332ZM3.33331 15.8332V14.1665H4.99998V8.33317C4.99998 7.18039 5.3472 6.15623 6.04165 5.26067C6.73609 4.36512 7.63887 3.77817 8.74998 3.49984V2.91651C8.74998 2.56928 8.87165 2.27428 9.11498 2.03151C9.35831 1.78873 9.65331 1.66706 9.99998 1.66651C10.3466 1.66595 10.6419 1.78762 10.8858 2.03151C11.1297 2.27539 11.2511 2.57039 11.25 2.91651V3.18734C11.1111 3.46512 11.0069 3.75678 10.9375 4.06234C10.868 4.36789 10.8333 4.68039 10.8333 4.99984C10.8333 6.15262 11.2397 7.13539 12.0525 7.94817C12.8653 8.76095 13.8478 9.16706 15 9.16651V14.1665H16.6666V15.8332H3.33331ZM15 7.49984C14.3055 7.49984 13.7153 7.25678 13.2291 6.77067C12.743 6.28456 12.5 5.69428 12.5 4.99984C12.5 4.30539 12.743 3.71512 13.2291 3.22901C13.7153 2.74289 14.3055 2.49984 15 2.49984C15.6944 2.49984 16.2847 2.74289 16.7708 3.22901C17.2569 3.71512 17.5 4.30539 17.5 4.99984C17.5 5.69428 17.2569 6.28456 16.7708 6.77067C16.2847 7.25678 15.6944 7.49984 15 7.49984Z"
            fill="#070D0A"
          />
        </svg>
      );
    case "documents":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99998 18.3332C4.54165 18.3332 4.14942 18.1701 3.82331 17.844C3.4972 17.5179 3.33387 17.1254 3.33331 16.6665V3.33317C3.33331 2.87484 3.49665 2.48262 3.82331 2.1565C4.14998 1.83039 4.5422 1.66706 4.99998 1.6665H11.6666L16.6666 6.6665V9.1665C16.3472 9.23595 16.0486 9.34706 15.7708 9.49984C15.493 9.65261 15.2361 9.84706 15 10.0832L9.99998 15.0623V18.3332H4.99998ZM11.6666 18.3332V15.7707L16.2708 11.1873C16.3958 11.0623 16.5347 10.9721 16.6875 10.9165C16.8403 10.8609 16.993 10.8332 17.1458 10.8332C17.3125 10.8332 17.4722 10.8646 17.625 10.9273C17.7778 10.9901 17.9166 11.0837 18.0416 11.2082L18.8125 11.979C18.9236 12.104 19.0105 12.2429 19.0733 12.3957C19.1361 12.5484 19.1672 12.7012 19.1666 12.854C19.1661 13.0068 19.1383 13.1632 19.0833 13.3232C19.0283 13.4832 18.938 13.6254 18.8125 13.7498L14.2291 18.3332H11.6666ZM17.1458 13.6665L17.9166 12.854L17.1458 12.0832L16.3541 12.8748L17.1458 13.6665ZM10.8333 7.49984H15L10.8333 3.33317V7.49984Z"
            fill="#070D0A"
          />
        </svg>
      );
    case "contactUs":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.85419 18.3332C3.63196 18.3332 3.43058 18.2429 3.25002 18.0623C3.06946 17.8818 2.97919 17.6804 2.97919 17.4582V15.2707C2.97919 14.0207 3.36808 12.9165 4.14585 11.9582C4.92363 10.9998 5.92363 10.3887 7.14585 10.1248C6.5903 10.5137 6.15974 11.0032 5.85419 11.5932C5.54863 12.1832 5.39585 12.8187 5.39585 13.4998V17.4582C5.39585 17.6109 5.41669 17.7637 5.45835 17.9165C5.50002 18.0693 5.56946 18.2082 5.66669 18.3332H3.85419ZM6.91669 18.3332C6.68058 18.3332 6.47585 18.2465 6.30252 18.0732C6.12919 17.8998 6.04224 17.6948 6.04169 17.4582V13.4998C6.04169 12.5276 6.38558 11.7012 7.07335 11.0207C7.76113 10.3401 8.59085 9.99984 9.56252 9.99984H13.5C14.4722 9.99984 15.2986 10.3401 15.9792 11.0207C16.6597 11.7012 17 12.5276 17 13.4998V14.8332C17 15.8054 16.6597 16.6318 15.9792 17.3123C15.2986 17.9929 14.4722 18.3332 13.5 18.3332H6.91669ZM10 8.24984C9.08335 8.24984 8.30558 7.93039 7.66669 7.2915C7.0278 6.65262 6.70835 5.87484 6.70835 4.95817C6.70835 4.0415 7.0278 3.26373 7.66669 2.62484C8.30558 1.98595 9.08335 1.6665 10 1.6665C10.9167 1.6665 11.6945 1.98595 12.3334 2.62484C12.9722 3.26373 13.2917 4.0415 13.2917 4.95817C13.2917 5.87484 12.9722 6.65262 12.3334 7.2915C11.6945 7.93039 10.9167 8.24984 10 8.24984Z"
            fill="#070D0A"
          />
        </svg>
      );
    case "GreenVault":
      return (
        <svg
          width="150"
          height="38"
          viewBox="0 0 150 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6042 23.6514C14.6042 22.685 15.3776 21.8892 16.3169 21.8892L25.2488 21.8702C26.188 21.8702 26.9615 22.6661 26.9615 23.6324V31.7425C26.9615 32.5573 26.5748 33.3152 25.9486 33.789C24.3648 34.9448 22.7626 35.8544 21.1051 36.4986C19.0977 37.2755 17.0167 37.6734 14.8988 37.6734C12.0443 37.6734 9.42917 37.0481 7.09029 35.7786C4.75142 34.509 2.98345 32.6899 1.78638 30.3024C0.589322 27.9148 0 25.2431 0 22.306C0 19.3879 0.589322 16.6593 1.78638 14.1391C2.96503 11.6 4.67775 9.72408 6.90613 8.51136C9.13451 7.2797 11.6944 6.67334 14.6042 6.67334C16.7036 6.67334 18.6189 7.03336 20.3132 7.73447C22.0075 8.43557 23.3519 9.4209 24.328 10.6715C24.991 11.5242 25.5251 12.5474 25.967 13.7412C26.317 14.7076 25.7829 15.7877 24.8252 16.0719L24.6042 16.1287C23.7755 16.3561 22.8915 15.9203 22.5784 15.1055C22.2469 14.2528 21.8602 13.5328 21.4366 12.9643C20.7921 12.0927 19.8528 11.3916 18.6558 10.861C17.4403 10.3304 16.1143 10.0652 14.641 10.0652C12.873 10.0652 11.3445 10.3494 10.0737 10.8989C8.78459 11.4484 7.75328 12.1685 6.96138 13.078C6.16948 13.9875 5.56174 14.9729 5.11974 16.053C4.38309 17.9099 4.01476 19.9185 4.01476 22.0786C4.01476 24.7504 4.45676 26.9864 5.35916 28.7865C6.26156 30.5866 7.5507 31.932 9.26342 32.8036C10.9761 33.6753 12.7809 34.1111 14.7147 34.1111C16.3905 34.1111 18.0112 33.789 19.6134 33.1257C20.9762 32.5573 22.0628 31.9509 22.8731 31.3256C23.1125 31.1361 23.2414 30.8519 23.2414 30.5487V26.4368C23.2414 25.8873 22.7994 25.4326 22.2654 25.4326H16.3905C15.3776 25.4136 14.6042 24.6178 14.6042 23.6514Z"
            fill="#35E032"
          />
          <path
            d="M98.0933 30.6362C99.4192 31.6783 100.948 32.3984 102.532 32.7016C103.489 32.8911 104.447 32.91 105.386 32.7963C107.522 32.531 109.53 31.4699 111.261 29.7456C111.629 29.3666 111.979 28.9687 112.311 28.5518C117.117 22.3177 116.252 11.2137 115.865 7.95455C115.755 7.13975 115.092 6.5334 114.3 6.57129C111.906 6.72288 103.839 7.51873 98.5905 11.7443C96.933 6.66603 93.084 2.95208 91.2608 1.39829C90.8925 1.09511 90.4321 0.94352 89.9901 1.01932C89.5297 1.09511 89.1429 1.34144 88.8667 1.73937C87.0434 4.46798 82.8629 11.5927 83.4891 18.49C83.5259 18.9638 83.5996 19.4564 83.6917 19.9491C84.6677 25.1789 89.8611 27.6233 92.863 28.0023M92.8262 28.0402C93.8207 27.9075 94.2811 27.6423 95.0546 27.1307C95.6255 28.1539 98.0564 30.5983 98.8852 31.3941"
            stroke="#35E032"
            stroke-width="1.75"
            stroke-miterlimit="17.5781"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M98.5535 11.7632C98.5535 11.7632 101.942 19.968 95.0544 27.1306"
            stroke="#35E032"
            stroke-width="1.75"
            stroke-miterlimit="17.5781"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M93.9845 35.9964L93.9849 35.9982C94.1533 36.691 94.7298 37.2065 95.4426 37.3043L95.4426 37.3046L95.4566 37.306L96.7642 37.4386L96.7642 37.4388L96.7753 37.4396C97.456 37.4897 98.1035 37.1153 98.4139 36.5011L98.4139 36.5011L98.4164 36.496L108.159 16.5241L108.159 16.5235C108.676 15.4593 108.008 14.1613 106.826 14.0558L106.5 14.0185L106.492 14.0175L106.483 14.0169C105.795 13.9681 105.116 14.3331 104.82 14.9882L97.5655 30.5236L97.528 30.6041V30.6191C97.1559 31.3307 96.1238 31.2242 95.9222 30.4075L95.8962 30.3023L95.8895 30.2954L92.5379 13.3543C92.5379 13.354 92.5378 13.3538 92.5378 13.3536C92.3939 12.6152 91.7932 12.066 91.0635 11.9906L90.5301 11.9338L90.5301 11.9337L90.5227 11.9331C89.369 11.8321 88.4935 12.9131 88.7538 14.0328L88.7538 14.0328L88.7543 14.0349L93.9845 35.9964Z"
            fill="#35E032"
            stroke="#35E032"
            stroke-width="0.8"
          />
          <path
            d="M36.583 25.6529C36.7598 25.6529 36.9587 25.6681 37.1797 25.6984C37.4154 25.7135 37.6438 25.7439 37.8647 25.7893C38.0857 25.8196 38.2846 25.8575 38.4614 25.903C38.653 25.9333 38.7929 25.9637 38.8813 25.994L38.5277 27.8358C38.3657 27.7752 38.0931 27.7069 37.7101 27.6311C37.3417 27.5402 36.8629 27.4947 36.2736 27.4947C35.8905 27.4947 35.5075 27.5402 35.1244 27.6311C34.7561 27.7069 34.513 27.76 34.3951 27.7903V37.727H32.3398V26.4033C32.826 26.2214 33.4301 26.0546 34.152 25.903C34.8739 25.7363 35.6843 25.6529 36.583 25.6529Z"
            fill="#070D0A"
          />
          <path
            d="M41.3287 31.8378C41.3287 30.7918 41.476 29.8823 41.7707 29.1091C42.0653 28.3209 42.4558 27.669 42.942 27.1536C43.4282 26.6382 43.988 26.2517 44.6215 25.994C45.2551 25.7363 45.9033 25.6074 46.5663 25.6074C48.1133 25.6074 49.2993 26.1077 50.1243 27.1082C50.9494 28.0935 51.3619 29.6018 51.3619 31.6331C51.3619 31.7241 51.3619 31.8453 51.3619 31.9969C51.3619 32.1334 51.3545 32.2622 51.3398 32.3835H43.4724C43.5607 33.6114 43.907 34.5436 44.511 35.1803C45.1151 35.817 46.058 36.1353 47.3398 36.1353C48.0617 36.1353 48.6658 36.0747 49.152 35.9534C49.6529 35.817 50.0286 35.6881 50.279 35.5669L50.5663 37.3405C50.3159 37.4769 49.8739 37.6209 49.2404 37.7725C48.6216 37.9241 47.9144 37.9999 47.1188 37.9999C46.1169 37.9999 45.2477 37.8483 44.511 37.5451C43.7891 37.2268 43.1924 36.7947 42.721 36.249C42.2495 35.7033 41.8959 35.059 41.6602 34.3163C41.4392 33.5583 41.3287 32.7321 41.3287 31.8378ZM49.2183 30.6781C49.233 29.7231 48.9973 28.9424 48.5111 28.336C48.0396 27.7145 47.384 27.4038 46.5442 27.4038C46.0727 27.4038 45.6528 27.5023 45.2845 27.6994C44.9309 27.8813 44.6289 28.1238 44.3784 28.427C44.128 28.7302 43.9291 29.0788 43.7817 29.473C43.6491 29.8671 43.5608 30.2688 43.5166 30.6781H49.2183Z"
            fill="#070D0A"
          />
          <path
            d="M54.7784 31.8378C54.7784 30.7918 54.9257 29.8823 55.2204 29.1091C55.515 28.3209 55.9055 27.669 56.3916 27.1536C56.8778 26.6382 57.4377 26.2517 58.0712 25.994C58.7047 25.7363 59.353 25.6074 60.016 25.6074C61.563 25.6074 62.749 26.1077 63.574 27.1082C64.3991 28.0935 64.8116 29.6018 64.8116 31.6331C64.8116 31.7241 64.8116 31.8453 64.8116 31.9969C64.8116 32.1334 64.8042 32.2622 64.7895 32.3835H56.922C57.0104 33.6114 57.3567 34.5436 57.9607 35.1803C58.5648 35.817 59.5077 36.1353 60.7895 36.1353C61.5114 36.1353 62.1154 36.0747 62.6016 35.9534C63.1026 35.817 63.4783 35.6881 63.7287 35.5669L64.016 37.3405C63.7656 37.4769 63.3236 37.6209 62.69 37.7725C62.0712 37.9241 61.3641 37.9999 60.5685 37.9999C59.5666 37.9999 58.6974 37.8483 57.9607 37.5451C57.2388 37.2268 56.6421 36.7947 56.1707 36.249C55.6992 35.7033 55.3456 35.059 55.1099 34.3163C54.8889 33.5583 54.7784 32.7321 54.7784 31.8378ZM62.6679 30.6781C62.6827 29.7231 62.4469 28.9424 61.9607 28.336C61.4893 27.7145 60.8337 27.4038 59.9939 27.4038C59.5224 27.4038 59.1025 27.5023 58.7342 27.6994C58.3806 27.8813 58.0786 28.1238 57.8281 28.427C57.5777 28.7302 57.3788 29.0788 57.2314 29.473C57.0988 29.8671 57.0104 30.2688 56.9662 30.6781H62.6679Z"
            fill="#070D0A"
          />
          <path
            d="M68.8689 26.2441C69.3404 26.1228 69.9666 25.994 70.7474 25.8575C71.5283 25.7211 72.427 25.6529 73.4436 25.6529C74.357 25.6529 75.1158 25.7893 75.7198 26.0622C76.3239 26.3199 76.8027 26.6913 77.1563 27.1764C77.5246 27.6463 77.7825 28.2148 77.9298 28.8818C78.0771 29.5488 78.1508 30.284 78.1508 31.0874V37.727H76.0955V31.5422C76.0955 30.8145 76.044 30.193 75.9408 29.6776C75.8524 29.1622 75.6977 28.7453 75.4767 28.427C75.2557 28.1087 74.9611 27.8813 74.5928 27.7448C74.2244 27.5932 73.7677 27.5175 73.2226 27.5175C73.0016 27.5175 72.7732 27.525 72.5375 27.5402C72.3018 27.5554 72.0734 27.5781 71.8524 27.6084C71.6461 27.6236 71.4546 27.6463 71.2778 27.6766C71.1157 27.7069 70.9979 27.7297 70.9242 27.7448V37.727H68.8689V26.2441Z"
            fill="#070D0A"
          />
          <path
            d="M113.577 35.4902C114.064 35.4902 114.491 35.4826 114.859 35.4675C115.242 35.4372 115.559 35.3917 115.809 35.3311V31.8066C115.662 31.7308 115.419 31.6702 115.08 31.6247C114.756 31.564 114.358 31.5337 113.887 31.5337C113.577 31.5337 113.246 31.5565 112.892 31.6019C112.553 31.6474 112.237 31.746 111.942 31.8975C111.662 32.034 111.426 32.231 111.235 32.4887C111.043 32.7313 110.947 33.0572 110.947 33.4665C110.947 34.2244 111.183 34.755 111.655 35.0582C112.126 35.3462 112.767 35.4902 113.577 35.4902ZM113.401 24.8941C114.226 24.8941 114.918 25.0078 115.478 25.2352C116.052 25.4474 116.509 25.7582 116.848 26.1675C117.202 26.5616 117.452 27.0391 117.599 27.6C117.747 28.1457 117.82 28.7521 117.82 29.4191V36.8091C117.644 36.8394 117.393 36.8848 117.069 36.9455C116.76 36.991 116.406 37.0364 116.008 37.0819C115.61 37.1274 115.176 37.1653 114.704 37.1956C114.248 37.2411 113.791 37.2638 113.334 37.2638C112.686 37.2638 112.089 37.1956 111.544 37.0592C110.999 36.9227 110.528 36.7105 110.13 36.4225C109.732 36.1193 109.423 35.7252 109.202 35.2401C108.981 34.755 108.87 34.1714 108.87 33.4892C108.87 32.8374 108.995 32.2765 109.246 31.8066C109.511 31.3367 109.865 30.9577 110.307 30.6697C110.749 30.3816 111.264 30.1694 111.854 30.033C112.443 29.8966 113.062 29.8283 113.71 29.8283C113.916 29.8283 114.13 29.8435 114.351 29.8738C114.572 29.889 114.778 29.9193 114.97 29.9648C115.176 29.9951 115.353 30.0254 115.5 30.0557C115.647 30.086 115.75 30.1088 115.809 30.1239V29.5327C115.809 29.1841 115.773 28.843 115.699 28.5095C115.625 28.1609 115.493 27.8577 115.301 27.6C115.11 27.3271 114.844 27.1149 114.506 26.9633C114.181 26.7965 113.754 26.7132 113.224 26.7132C112.546 26.7132 111.949 26.7662 111.434 26.8723C110.933 26.9633 110.557 27.0618 110.307 27.1679L110.063 25.4171C110.329 25.2958 110.771 25.1821 111.389 25.076C112.008 24.9547 112.679 24.8941 113.401 24.8941Z"
            fill="#070D0A"
          />
          <path
            d="M131.488 36.6726C131.017 36.7939 130.391 36.9227 129.61 37.0592C128.844 37.1956 127.952 37.2638 126.936 37.2638C126.052 37.2638 125.308 37.135 124.704 36.8773C124.1 36.6044 123.613 36.2254 123.245 35.7403C122.877 35.2553 122.612 34.6868 122.449 34.035C122.287 33.368 122.206 32.6328 122.206 31.8293V25.1897H124.262V31.3746C124.262 32.8147 124.483 33.8455 124.925 34.467C125.367 35.0885 126.111 35.3993 127.157 35.3993C127.378 35.3993 127.606 35.3917 127.842 35.3765C128.077 35.3614 128.298 35.3462 128.505 35.3311C128.711 35.3007 128.895 35.278 129.057 35.2628C129.234 35.2325 129.359 35.2022 129.433 35.1719V25.1897H131.488V36.6726Z"
            fill="#070D0A"
          />
          <path
            d="M139.582 37.2411C138.314 37.2108 137.416 36.9303 136.885 36.3998C136.355 35.8692 136.09 35.043 136.09 33.9213V19.7325L138.145 19.3687V33.5802C138.145 33.9288 138.174 34.2169 138.233 34.4443C138.292 34.6716 138.388 34.8535 138.521 34.99C138.653 35.1264 138.83 35.2325 139.051 35.3083C139.272 35.3689 139.545 35.422 139.869 35.4675L139.582 37.2411Z"
            fill="#070D0A"
          />
          <path
            d="M145.204 25.1897H149.558V26.9633H145.204V32.4205C145.204 33.0117 145.249 33.5044 145.337 33.8985C145.425 34.2775 145.558 34.5807 145.735 34.8081C145.912 35.0203 146.133 35.1719 146.398 35.2628C146.663 35.3538 146.972 35.3993 147.326 35.3993C147.945 35.3993 148.438 35.3311 148.807 35.1946C149.19 35.043 149.455 34.9369 149.602 34.8763L150 36.6271C149.794 36.7333 149.433 36.8621 148.917 37.0137C148.402 37.1804 147.812 37.2638 147.149 37.2638C146.368 37.2638 145.72 37.1653 145.204 36.9682C144.704 36.756 144.298 36.4452 143.989 36.0359C143.68 35.6266 143.459 35.1264 143.326 34.5352C143.208 33.9288 143.149 33.2315 143.149 32.4433V21.8926L145.204 21.5288V25.1897Z"
            fill="#070D0A"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.6322 21.591L18.1915 16.1503C19.5014 14.4065 20.2085 12.284 20.2061 10.103C20.2061 4.53226 15.6738 0 10.103 0C4.53226 0 0 4.53226 0 10.103C0 15.6738 4.53226 20.2061 10.103 20.2061C12.284 20.2085 14.4065 19.5014 16.1503 18.1915L21.591 23.6322C21.8664 23.8783 22.2256 24.0098 22.5948 23.9994C22.9641 23.9891 23.3154 23.8378 23.5766 23.5766C23.8378 23.3154 23.9891 22.9641 23.9994 22.5948C24.0098 22.2256 23.8783 21.8664 23.6322 21.591ZM2.88658 10.103C2.88658 8.67576 3.30982 7.28053 4.10277 6.09379C4.89573 4.90705 6.02279 3.9821 7.34142 3.4359C8.66006 2.88971 10.111 2.7468 11.5109 3.02525C12.9108 3.30369 14.1966 3.99099 15.2058 5.00023C16.2151 6.00947 16.9024 7.29532 17.1808 8.69518C17.4593 10.095 17.3164 11.546 16.7702 12.8647C16.224 14.1833 15.299 15.3103 14.1123 16.1033C12.9255 16.8963 11.5303 17.3195 10.103 17.3195C8.18982 17.3172 6.35562 16.5562 5.00277 15.2033C3.64992 13.8505 2.88888 12.0163 2.88658 10.103Z"
            fill="#070D0A"
          />
        </svg>
      );
    case "download":
      return (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6515 10.7388V19.9507C19.6515 20.5528 19.4125 21.1303 18.9871 21.5561C18.5616 21.9819 17.9846 22.2211 17.3829 22.2211H6.79566C6.19397 22.2211 5.61692 21.9819 5.19146 21.5561C4.766 21.1303 4.52698 20.5528 4.52698 19.9507V4.81439C4.52698 4.21223 4.766 3.63473 5.19146 3.20894C5.61692 2.78315 6.19397 2.54395 6.79566 2.54395H11.463C11.864 2.54401 12.2486 2.70342 12.5321 2.98715L19.2087 9.66888C19.4922 9.95267 19.6515 10.3375 19.6515 10.7388Z"
            stroke="#14C285"
            stroke-width="1.21094"
            stroke-linejoin="round"
          />
          <path
            d="M12.0897 2.92236V8.59847C12.0897 8.99991 12.2491 9.38491 12.5327 9.66877C12.8164 9.95263 13.201 10.1121 13.6022 10.1121H19.2739"
            stroke="#14C285"
            stroke-width="1.21094"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
  return <div>GlobalSvgSelector</div>;
}
