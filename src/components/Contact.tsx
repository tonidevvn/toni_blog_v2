import TelegramIcon from "@mui/icons-material/Telegram";
import "../assets/styles/Contact.scss";
// import emailjs from '@emailjs/browser';

function Contact() {
  return (
    <div
      id="contact"
      className="text-white mt-20 flex justify-between items-center mx-auto px-6 md:px-6 lg:px-6 w-full"
    >
      <div className="container mx-auto px-6">
        <div style={{ animationDelay: "0ms" }}>
          <header className="flex flex-col items-center text-center">
            <h2 className="font-bold text-4xl mb-12 text-transform: uppercase after:mx-auto after:mb-0 after:block after:mt-9 after:rounded-full after:h-1 after:w-24 after:-translate-y-1 after:bg-indigo-600 after:content-['']">
              Get In Touch
            </h2>
          </header>
        </div>
        <div style={{ animationDelay: "0ms" }}>
          <div className="font-normal text-xl leading-loose items-center text-center mb-12">
            <h3 className="text-gray-400 ">
              Please feel free to contact me if you have any question!{" "}
            </h3>
            <h4 className="text-gray-400 ">
              Or just wanna chat, please do not hesitate to reach out to me!
            </h4>
          </div>
        </div>
        <div style={{ animationDelay: "500ms" }}>
          <div className="items-center text-center">
            <a href="mailto:tonidevvn@gmail.com" rel="noreferrer">
              <button className="transition-all duration-300 hover:bg-indigo-600 text-indigo-300 hover:text-white border-2 border-indigo-600 text-2xl font-medium py-2 px-4 rounded inline-flex items-center tracking-widest">
                <TelegramIcon />
                <span className="ml-4">Contact Me</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
