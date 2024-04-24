import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListngs from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import Main from "./components/Main";
import Categories from "./components/Categories";

export default async function Home() {
  const listings=await getListngs();
  const currentUser = await getCurrentUser();
  if(listings.length === 0) {
    return(
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <Container>
      <div className="mt-[80px] mb-[130px]">
          <Main />
        </div>
        <Categories />
        <div className="pt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8" id="listings">
          {listings.map((listing: any) =>{
            return(
              <ListingCard
                currentUser= {currentUser}
                key={listing.id}
                data={listing}
              />
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
