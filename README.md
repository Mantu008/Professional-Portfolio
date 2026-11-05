# Meadowbell · Hollyoak’s Plucky Sprout Squad

A single-file landing hero for an animated kids’ farming series from the fictional studio Meadowbell.

- Plain HTML, CSS and vanilla JS in `index.html`. No framework, no build step.
- Fonts are self-hosted latin woff2 files in `fonts/` (Grandstander 900 and Inter 400/500).
- The scene is one 9:8 plate image with a looping video of the same plate laid over it. Nothing in the scene is drawn or animated in code.
- The hero is a 1440×1280 frame that scales with the viewport width (`--u = 100vw / 1440`). At 820px and below it switches to a stacked phone layout with a swipeable chapters row.
- `prefers-reduced-motion` turns off the video, the entrance timeline and all transitions.

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
npx serve .
```

## Deploy

Any static host works. Point it at the repo root with no build command and no output directory.
