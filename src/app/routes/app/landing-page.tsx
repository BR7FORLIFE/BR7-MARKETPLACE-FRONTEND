import ContentLayout from "@components/layouts/content-layout";

import shoes from "@assets/landing/shoes.jpg";

import ButtonVariant from "@components/UI/button/button-variant";
import { Herobanner } from "@components/blocks/Hero";
import { JoinCard } from "@components/blocks/PromoCard";

function LandingRoute() {
  return (
    <ContentLayout title="Home">
      <section className="mx-12 my-6">
        {/*diferentes card de la presentacion */}
        <article className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-3">
          <section className="col-span-2 animate-slide-in-left animate-duration-300">
            <Herobanner
              img={shoes}
              title="ESSENTIAL MONOLITH"
              paragraph="The definitive collective if arquitectural silhouttes and
                brutalist design for the modern wardrobe"
              component={
                <ButtonVariant
                  onclick={() => null}
                  title="DISCOVER COLECCTION"
                  width={250}
                  height={60}
                  backgroundColor="white"
                  color="black"
                  className="mt-2 rounded-xl font-inter cursor-pointer"
                />
              }
            />
          </section>

          <section className="animate-slide-in-top animate-duration-300">
            <JoinCard
              title="JOIN THE COLLECTIVE"
              description="BY JOINING YOU AGREE TO OUR PRIVATE TERMS AND EDITORIAL PROTOCOLS."
              component={[
                <ButtonVariant
                  onclick={() => null}
                  className="px-4 py-2 font-inter font-semibold cursor-pointer bg-white transition-colors duration-300 ease-in-out hover:bg-neutral-300"
                  title="LOGIN TO PROFILE"
                  color="black"
                />,
                <ButtonVariant
                  onclick={() => null}
                  className="border border-white px-4 py-2 font-medium cursor-pointer bg-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
                  title="CREATE ACCOUNT"
                />,
              ]}
              styles={{
                width: 400,
                height: 250,
              }}
            />
          </section>
        </article>
      </section>
    </ContentLayout>
  );
}

export default LandingRoute;
