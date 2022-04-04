import Image from "next/image";
function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
        <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        {/* Search */}
        <div className="">
          <input type="text" />
        </div>
      </div>
      {/* Bottom nav */}
      <div className=""></div>
    </header>
  );
}

export default Header;
