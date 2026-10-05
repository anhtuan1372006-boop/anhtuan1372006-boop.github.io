import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { PortalHome, PortalDetail, detailTitles } from "./portal-multipage";
export { detailTitles };
import "./portal.css";

let mounted;
export function disposePortalHome() {
  mounted?.unmount();
  mounted = undefined;
}
export function mountPortalHome(container, props) {
  const app = <PortalHome {...props} />;
  const options = { identifierPrefix: "boxanh-home-" };
  if (container.querySelector("[data-portal-home]"))
    mounted = hydrateRoot(container, app, options);
  else {
    container.replaceChildren();
    mounted = createRoot(container, options);
    flushSync(() => mounted.render(app));
  }
}
export function mountPortalDetail(container, props) {
  const app = <PortalDetail {...props} />;
  const options = { identifierPrefix: "boxanh-detail-" };
  if (container.querySelector("[data-portal-detail]")) mounted = hydrateRoot(container, app, options);
  else { container.replaceChildren(); mounted = createRoot(container, options); flushSync(() => mounted.render(app)); }
}
