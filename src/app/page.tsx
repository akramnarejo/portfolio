import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";


export default function Home() {
  return (
    <main>
      <section>
        <h1 className="[font-size:_clamp(4rem,6vw,10rem)] font-bold mt-3">
          G&apos;day, I&apos;m Akram 👋
        </h1>
        <p className="w-full [font-size:_clamp(2.5rem,4vw,6rem)] mt-1  text-[#666]">
          <span className="bg-[#111] rounded-lg border border-[#333] text-blue-800">A Frontend Engineer 👨‍💻 </span>crafting visuals and user experience.
          Web3 enthusiast and <span className="text-blue-800">#Photographer</span> 📸. Based in Dubai 🇦🇪.
        </p>
        <p className="w-full mt-2 tracking-wide text-[#666] italic [font-size:_clamp(1.2rem,1.5vw,2rem)]">
          For contact send me an email
          <Link
            href="mailto:makramnarejo@gmail.com"
            className="hover:underline text-blue-600"
          >
            &nbsp;here
          </Link>
          .
        </p>
      </section>
      <div className="flex gap-4 box-border mt-4">
        <Link href='https://linkedin.com/in/akramnarejo' target="_blank" className="text-2xl md:text-3xl hover:text-blue-500">
          <FaLinkedin />
        </Link>
        <Link href='https://github.com/akramnarejo' target="_blank" className="text-2xl md:text-3xl hover:text-gray-500">
          <FaGithub />
        </Link>
        <Link href='https://instagram.com/akramnarejo' target="_blank" className="text-2xl md:text-3xl hover:text-pink-600">
          <FaInstagram />
        </Link>
      </div>
    </main>
  );
}
