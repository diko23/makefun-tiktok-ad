# makefun-tiktok-ad

[![make.fun bounty](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![Rank](https://make.fun/badge/bring-the-humans-03/diko23/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![Reward](https://make.fun/badge/bring-the-humans-03/diko23/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

Entry by [`diko23`](https://github.com/diko23/makefun-tiktok-ad) for the [bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03) ("Bring the humans with a TikTok ad") bounty on [make.fun](https://make.fun).

## About this entry

- **Bounty:** [make.fun/bounty/bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03)
- **Referral code:** `3y509cnb` ([https://make.fun/r/3y509cnb](https://make.fun/r/3y509cnb))
- **Entrypoint:** `main.ts` (Node.js 22+, standard library only) copies `VIDEO.json` from `$MAKEFUN_BOT_DIR` (default `/bot`) to `$MAKEFUN_OUTPUT_DIR/VIDEO.json` (default `/output`).

## Run locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

On Windows (`cmd.exe`):

```cmd
mkdir out
set MAKEFUN_BOT_DIR=. & set MAKEFUN_OUTPUT_DIR=out & node main.ts
```

`out/VIDEO.json` matches `VIDEO.json` byte for byte.
