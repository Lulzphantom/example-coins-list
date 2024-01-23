import CircularButton from "./CircularButton";
import {
  FaGithub
} from "react-icons/fa";

const Footer = () => {

  const credits = [
    {
      image: '/vercel.ico',
      title: 'Vercel',
      url: 'https://vercel.com/'
    },
    {
      image: '/vite.svg',
      title: 'Vite',
      url: 'https://vitejs.dev/'
    },
    {
      image: '/react.png',
      title: 'React',
      url: 'https://es.react.dev/'
    },
    {
      image: '/tanstack.ico',
      title: 'TanStack',
      url: 'https://tanstack.com/'
    },
    {
      image: '/framer.png',
      title: 'Framer Motion',
      url: 'https://www.framer.com/motion/'
    },

  ]

  return (
    <footer
      className="py-10 mt-10 w-full flex-grow-0 flex-shrink-0 text-center flex justify-center flex-wrap items-center gap-5"
    >
      <span className="text-sm text-neutral-700">
        Desarrollado por:
      </span>
      <section className="flex justify-center items-center gap-4">
        <CircularButton
          onClick={() => window.open('https://github.com/Lulzphantom/example-coins-list', '_blank')}
          title={'CoinsList Github'}
        >
          <FaGithub />
        </CircularButton>
        <span className="text-sm text-neutral-700">
          Lulzphantom
        </span>
      </section>

      <div className="border-l border-neutral-200 h-full hidden md:block" />
      <section
        className="flex justify-center items-center gap-4"
      >
        {
          credits.map(({ title, image, url }, i) => (
            <CircularButton
              onClick={() => window.open(url, '_blank')}
              key={i}
              title={title}
            >
              <img src={image} alt="Vercel" width={16} height={16} />
            </CircularButton>
          ))
        }
      </section>
    </footer>
  )
}

export default Footer;