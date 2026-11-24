# newsimage23 — The World in One Day

One image summing up the world's news of **Monday, 23 November 2026**,
built for the make.fun bounty
[`news-image-20261123`](https://make.fun/bounty/news-image-20261123).

The image is a newspaper front page — masthead **"THE WORLD IN ONE DAY"**,
the date in large type, and six stories that defined the day:

1. **HUANG IS BACK** — Nvidia's board restores Jensen Huang as CEO;
   shares jump about 31.5% in one day; short sellers lose about $11.3 billion.
2. **UKRAINE SINKS RUSSIAN WARSHIP** — Kyiv says sea drones sank a Russian
   warship in a Libyan port; a second cargo ship was hit in the Baltic.
3. **COP31 COLLAPSES — NO DEAL** — UN climate talks in Antalya end with no
   deal after 2+ weeks; the draft drops fossil-fuel phase-out language.
4. **TRUMP SANCTIONS IRAN** — the US imposes sweeping sanctions to cut what
   Treasury calls Iran's "last financial lifeline".
5. **EU–INDONESIA TRADE DEAL** — the EU signs a deal with Indonesia
   scrapping most tariffs on each other's goods.
6. **THAI–CAMBODIA CEASEFIRE HOLDS** — the ceasefire holds after both sides
   reach a deal on Monday.

## How it works

`entry.png` (1024×1024, drawn programmatically with Python/PIL so every
word is exact) is copied byte-for-byte to `/output/entry.png` by `main.ts`
(Node 22, standard library only). No network, no randomness — two runs
write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

[![bounty](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/freddy354/newsimage23/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/freddy354/newsimage23/reward.svg)](https://make.fun/bounty/news-image-20261123)
