// Affiliate Links Helper
// Centralizes all affiliate URL generation. Update tags here when needed.

const AMAZON_TAG = "travelboa-21";

/**
 * Generate Amazon India affiliate search URL for a product name.
 * Uses a search query so any product in the result page earns commission
 * via Amazon's 24-hour cookie window.
 *
 * To upgrade to a specific ASIN later, replace the call with amazonProductUrl(asin).
 */
export function amazonSearchUrl(productName: string): string {
  const query = encodeURIComponent(productName);
  return `https://www.amazon.in/s?k=${query}&tag=${AMAZON_TAG}`;
}

/**
 * Generate Amazon India affiliate product URL using a specific ASIN.
 * Higher conversion than search URLs - use when you have the exact ASIN.
 */
export function amazonProductUrl(asin: string): string {
  return `https://www.amazon.in/dp/${asin}?tag=${AMAZON_TAG}`;
}

/**
 * Decathlon does not have a direct affiliate program in India.
 * Their program runs through Cuelinks / EarnKaro / similar aggregators.
 * For now, return plain product search URL. Wire through aggregator once registered.
 *
 * TODO: Cuelinks integration - wrap URLs with cuelinks.com tracking once account is set up.
 */
export function decathlonSearchUrl(productName: string): string {
  const query = encodeURIComponent(productName);
  return `https://www.decathlon.in/search?Ntt=${query}`;
}

/**
 * Royal Enfield direct store - no affiliate program. Plain link.
 */
export function royalEnfieldUrl(path: string = ""): string {
  return `https://store.royalenfield.com${path}`;
}

/**
 * Rynox riding gear - no affiliate program. Plain link.
 */
export function rynoxUrl(path: string = ""): string {
  return `https://www.rynox.in${path}`;
}
