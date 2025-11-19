import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
    route("detail/:carId", "routes/detail.tsx"),
] satisfies RouteConfig;
