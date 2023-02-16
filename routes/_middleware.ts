import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 525,
  site: "testsite1602",
  domains: ["testsite1602.deco.site"],
});