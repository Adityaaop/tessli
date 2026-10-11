import { ProductHeroExample } from "./demo";

function PrimaryOnly() {
  return <ProductHeroExample />;
}

/** Extra states, keyed by the names in notes.md `states` (after the first). */
export const states = {
  "primary-only": PrimaryOnly,
};
