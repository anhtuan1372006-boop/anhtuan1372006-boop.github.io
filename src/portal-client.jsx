import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { PortalHome, PortalDetail, detailTitles } from "./portal-multipage";
import { AIHomeInvite } from "./assistant";
export { detailTitles };
import "./portal.css";

let mounted, assistantMounted;
export function disposePortalHome() {
  mounted?.unmount();
  mounted = undefined;
  if (assistantMounted) {
    assistantMounted.unmount();
    assistantMounted = undefined;
    document.getElementById("home-assistant-entry").hidden = true;
  }
}
export function mountPortalHome(container, props) {
  const entry = document.getElementById("home-assistant-entry");
  if (entry) {
    entry.hidden = false;
    const entryOptions = { identifierPrefix: "boxanh-invite-" };
    if (entry.querySelector("[data-ai-invite]"))
      assistantMounted = hydrateRoot(entry, <AIHomeInvite />, entryOptions);
    else {
      assistantMounted = createRoot(entry, entryOptions);
      flushSync(() => assistantMounted.render(<AIHomeInvite />));
    }
  }
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
