import React from "react";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getFavoriteListings from "../actions/getFavouriteListings";
import getCurrentUser from "../actions/getCurrentUser";
import FavouritesClient from "./FavouritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
    }
    
    return (
        <ClientOnly>
            <FavouritesClient
                listings={listings}
                currentUser= {currentUser}
            />
      </ClientOnly>
    );
};

export default ListingPage;