import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

import React from 'react';

export default async function getFavoriteListings () {
  
    try {
        
        const currentUser = await getCurrentUser()

        if (!currentUser) {
            return []
        }

        const favourites = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        })

        const safeFavourites = favourites.map((favourite) => ({
            ...favourite,
            createdAt: favourite.createdAt.toISOString()
        }))

        return safeFavourites
        
    } catch (error: any) {
        throw new Error(error)
    }
}
