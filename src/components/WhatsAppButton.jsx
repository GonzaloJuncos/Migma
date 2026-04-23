import "../styles/whatsappButton.css";

function WhatsAppButton() {
  const phoneNumber = "5493814655003"; // reemplazar por su número real
  const message = "Hola, quiero consultar por sus servicios.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Escribinos por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="whatsapp-icon"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M19.11 17.34c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.91 1.11-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.29-1.39-.85-.76-1.43-1.69-1.59-1.98-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.46.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.04 2.81 1.19 3 .14.19 2.04 3.12 5.03 4.26.71.31 1.26.5 1.69.64.71.22 1.36.19 1.87.12.57-.09 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33Z"
        />
        <path
          fill="currentColor"
          d="M16.03 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.71 6.41L3.2 28.8l6.56-1.71a12.75 12.75 0 0 0 6.27 1.64h.01c7.06 0 12.8-5.74 12.8-12.8S23.09 3.2 16.03 3.2Zm0 23.42h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-3.89 1.01 1.04-3.79-.25-.39a10.63 10.63 0 1 1 8.91 4.88Z"
        />
      </svg>
    </a>
  );
}

export default WhatsAppButton;