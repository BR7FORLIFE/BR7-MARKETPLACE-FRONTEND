import { MdOutlineTranslate, MdMenu } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import ButtonVariant from "@components/UI/button/button-variant.tsx";
import type { Link as LinkType } from "src/custom-types/Link";

import { Link } from "react-router";

const links: LinkType[] = [
  {
    name: "SHOP",
    path: "",
  },
  {
    name: "CATEGORIES",
    path: "",
  },
  {
    name: "NEW ARRIVALS",
    path: "",
  },
  {
    name: "ABOUT",
    path: "",
  },
];
const LINK_STYLE =
  "relative text-sm tracking-wide after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";

const HeaderTitle = ({ style }: { style: string }) => (
  <Link to="/">
    <h1 className={`text-sm md:text-xl font-saira font-bold ${style}`}>
      BR7-MARKETPLACE
    </h1>
  </Link>
);

function Header() {
  let isAuthenticated = true;
  const BUTTON_SIZE = "size-5 md:size-7";

  return (
    <header className="relative w-full h-12 flex justify-around items-center text-black">
      <div className="flex gap-2 justify-center items-center">
        <ButtonVariant
          onclick={() => null}
          iconParams={{
            icon: <MdMenu className="size-6" />,
          }}
          className="block md:hidden"
        />
        <HeaderTitle style="text-black" />
      </div>
      {isAuthenticated && (
        <nav className="hidden md:block">
          <ul className="font-inter font-medium flex gap-12">
            {links.map(({ name, path }) => {
              return (
                <Link key={name} className={LINK_STYLE} to={path}>
                  {name}
                </Link>
              );
            })}
          </ul>
        </nav>
      )}
      <div className="flex gap-4">
        <ButtonVariant
          onclick={() => null}
          iconParams={{
            icon: <MdOutlineTranslate className={BUTTON_SIZE} />,
          }}
          className="cursor-pointer"
        />
        <ButtonVariant
          onclick={() => null}
          iconParams={{
            icon: <AiFillShopping className={BUTTON_SIZE} />,
          }}
          className="cursor-pointer"
        />
        <ButtonVariant
          onclick={() => null}
          iconParams={{
            icon: <CgProfile className={BUTTON_SIZE} />,
          }}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}

export { Header, HeaderTitle };
