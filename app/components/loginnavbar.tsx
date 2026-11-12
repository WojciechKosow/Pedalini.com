type LoginNavbarProps = {
  name: string;
};

const loginnavbar = ({ name }: LoginNavbarProps) => {
  return (
    <div>
      <nav className="h-[52px] bg-[#08080f] border-b border-gray-800 font-sans">
        <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">
          {/*Logo */}
          <div>
            <a href="/" className="flex items-center">
              <img
                src="/pedalinilogo.png"
                alt="Pedalini"
                className="h-6 w-auto"
              />
            </a>
          </div>

          {/*Options (home, browse, help) */}
          <div>
            <ul className="flex items-center gap-1">
              <li>
                <a
                  href="/"
                  className="rounded-lg bg-[#101b1e] px-3 py-2 text-sm font-medium text-[#14b8a6]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/browsePage"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  Browse
                </a>
              </li>

              <li>
                <a
                  href="/library"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  My library
                </a>
              </li>

              <li>
                <a
                  href="/createPage"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  Create
                </a>
              </li>

              <li>
                <a
                  href="/help"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/*Buttons Profile and username*/}
          <div>
            <div className="flex items-center gap-5">
              <a
                href="/"
                className="text-sm font-medium text-white transition-colors hover:text-[#14b8a6]"
              >
                {name}
              </a>

              <form action="/api/auth/logout" method="POST">
                <button
                  type="submit"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white cursor-pointer"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default loginnavbar;
