import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import CharList from "../pages/CharList";
import CharDetails from "../pages/CharDetails";

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  
  component: CharList,
   validateSearch: (search: { page?: number }) => ({
    page: Number(search.page) || 1,
  }),
});

const charDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/character/$id",
  component: CharDetails,
});


const routeTree = rootRoute.addChildren([indexRoute, charDetailsRoute]);


export const router = createRouter({ routeTree });
