export function buildPrismBackground(seed: string) {
  const n1 = seeded(seed, 1);
  const n2 = seeded(seed, 2);
  const n3 = seeded(seed, 3);
  const n4 = seeded(seed, 4);
  const n5 = seeded(seed, 5);
  const n6 = seeded(seed, 6);

  const x1 = Math.round(10 + n1 * 70);
  const y1 = Math.round(5 + n2 * 60);
  const x2 = Math.round(20 + n3 * 65);
  const y2 = Math.round(10 + n4 * 70);
  const x3 = Math.round(15 + n5 * 70);
  const y3 = Math.round(20 + n6 * 70);

  return [
    `radial-gradient(80% 70% at ${x1}% ${y1}%, rgb(var(--brand-2) / 0.30), transparent 62%)`,
    `radial-gradient(75% 65% at ${x2}% ${y2}%, rgb(var(--brand) / 0.28), transparent 60%)`,
    `radial-gradient(70% 60% at ${x3}% ${y3}%, rgb(var(--brand-3) / 0.22), transparent 62%)`,
    "linear-gradient(180deg, rgb(var(--surface) / 0.65), rgb(var(--surface) / 0.25))"
  ].join(", ");
}

function seeded(input: string, salt: number) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  hash = (hash + salt * 1013904223) >>> 0;

  // Robert Jenkins' 32 bit integer hash function
  hash = (hash + 0x7ed55d16 + (hash << 12)) >>> 0;
  hash = (hash ^ 0xc761c23c ^ (hash >>> 19)) >>> 0;
  hash = (hash + 0x165667b1 + (hash << 5)) >>> 0;
  hash = (hash + 0xd3a2646c ^ (hash << 9)) >>> 0;
  hash = (hash + 0xfd7046c5 + (hash << 3)) >>> 0;
  hash = (hash ^ 0xb55a4f09 ^ (hash >>> 16)) >>> 0;

  return hash / 0xffffffff;
}
