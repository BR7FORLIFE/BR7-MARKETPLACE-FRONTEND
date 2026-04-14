import { HeaderTitle } from "./header-nav"
import { type Link as LinkType } from "@customtypes/Link"

import { MdOutlineWeb } from 'react-icons/md'
import { FaShareAlt } from 'react-icons/fa'
import { Link } from "react-router"
import { Fragment } from "react/jsx-runtime";


const policies: LinkType[] = [
    {
        name: 'PRIVACY POLICY',
        path: ''
    },
    {
        name: 'TERMS OF SERVICE',
        path: ''
    },
    {
        name: 'CONTACT',
        path: ''
    }
]

const LINK_STYLE = 'text-white font-inter text-sm hover:underline px-2 py-1 transition'

const Footer = () => {
    return (
        <article className="w-full h-72 md:h-36 flex flex-col md:flex-row justify-center md:justify-around items-center bg-black">
            <HeaderTitle style="text-white text-lg"/>
            <section className="flex flex-col md:flex-row md:gap-8 justify-center items-center gap-1 mt-4">
                {
                    policies.map(({ name, path }, index) => {
                        return (
                            <Fragment key={name}>
                            {index === 1 ? (
                                <div className="flex justify-center items-center">
                                <Link className={LINK_STYLE} to={path}>
                                    {name}
                                </Link>
                                </div>
                            ) : (
                                <Link className={LINK_STYLE} to={path}>
                                {name}
                                </Link>
                            )}
                            </Fragment>
                        );
                    })
                }
            </section>

            <section>
                <div className="hidden md:flex md:gap-3 justify-center items-center">
                    <FaShareAlt color="white" className="size-6"/>
                    <MdOutlineWeb color="white" className="size-8"/>
                </div>
                <div className="block md:hidden">

                </div>
            </section>
        </article>
    )
}

export default Footer