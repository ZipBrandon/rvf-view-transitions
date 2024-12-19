import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
  layout("routes/norvf.vt.tsx", [
    route("norvf/vt/1", "routes/norvf.vt.1.tsx"),
    route("norvf/vt/2", "routes/norvf.vt.2.tsx"),
    route("norvf/vt/3", "routes/norvf.vt.3.tsx"),
  ]),
    layout("routes/rvf.vt.tsx", [
    route("rvf/vt/1", "routes/rvf.vt.1.tsx"),
    route("rvf/vt/2", "routes/rvf.vt.2.tsx"),
    route("rvf/vt/3", "routes/rvf.vt.3.tsx"),
  ]),
] satisfies RouteConfig;
