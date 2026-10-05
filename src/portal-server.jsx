import React from "react";
import { renderToString } from "react-dom/server";
import { PortalHome, PortalDetail, detailTitles } from "./portal-multipage";
export { detailTitles };
export function renderPortalHome(config) {
  return renderToString(<PortalHome config={config} />, {
    identifierPrefix: "boxanh-home-",
  });
}
export function renderPortalDetail(route, config) {
  return renderToString(<PortalDetail route={route} config={config} />, { identifierPrefix: "boxanh-detail-" });
}
