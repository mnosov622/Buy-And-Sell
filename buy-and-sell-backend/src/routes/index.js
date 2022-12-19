import { addViewToListing } from "./addViewToListing";
import { createNewListing } from "./createNewListing";
import { deleteListing } from "./deleteListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListings } from "./getUsetListings";
import { updateListing } from "./updateListing";

export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListing,
  getUserListings,
  createNewListing,
  updateListing,
  deleteListing,
];
