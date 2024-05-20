import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    // Outer Container
    <div className="h-full max-w-5xl m-auto">
      <Header />

      {/* Body */}

      {/* NavBar Container */}
      <div className="sticky top-0 bg-gray-100 p-1 lg:fixed lg:top-1/4 lg:m-auto">
        <NavBar />
      </div>

      {/* Content Container */}
      <div className="bg-white flex-grow rounded-xl shadow-lg mx-4 p-4 mb-4 md:mx-24 lg:mx-36">
        {/* Content */}
        <div className="flex-col px-4">
          <h1 className="text-4xl font-bold text-center my-8">My Projects</h1>
          <p className="text-center my-16">
            This website is a project I have been working on in order to develop
            my skills as a full stack web developer.
          </p>
          <p className="text-center my-16">
            Through this project I have primarily been interested in practicing
            UI/UX. By designing the website through the free prototyping tool
            <a
              href="https://www.figma.com/"
              target="_blank"
              className="text-blue-600 font-bold hover:text-blue-700 mx-1"
            >
              Figma
            </a>
            and teaching myself
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-blue-600 font-bold hover:text-blue-700 mx-1"
            >
              Tailwind CSS
            </a>
            I can create a fully customised design without relying on component
            libraries.
          </p>
          <p className="text-center my-16">
            I also intend to work with some public APIs to pull GitHub, Spotify
            and Steam profile data, creating a showcase of some of my interests
            and what I’ve been up to lately.
          </p>
        </div>
      </div>
    </div>
  );
}
