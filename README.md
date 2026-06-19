# Name That Organ Piece

A musical trivia drill: the opening bars of a famous organ/classical work appear
as engraved notation, and you name the piece and composer from four choices. You
can also hear the snippet played back.

**Play it:** https://financeprofessormckee.github.io/Name-That-Organ-Piece/

**Scoring:** one point per correct identification; tracks streak, best streak
(saved in your browser), and accuracy.

## How to use it

- A short passage of notation appears at the top. Pick the matching work from the
  four options (mouse, or number keys **1–4**).
- **▶ Hear it** plays the passage (a church-organ voicing via the bundled synth —
  needs an internet connection the first time, to fetch the instrument sounds).
- After answering, the correct title, composer, and a fun fact are revealed.
- **Enter** or **N** deals the next piece.

No accounts, no sign-in, nothing leaves your browser.

## Editing the repertoire

All content lives in [`data/pieces.js`](data/pieces.js) — one block per piece,
each with its title, composer, a fun fact, and the opening bars in **ABC
notation**. There's a cheat sheet at the top of that file. To add a piece, copy a
block and fill it in; to fix a wrong note, just edit the `abc` string.

> The opening bars shipped here are a **first-pass draft encoded from memory** —
> please verify the notes and correct anything off. The notation never shows the
> title or composer, so it doesn't give the answer away.

## What's bundled

- `vendor/abcjs-basic-min.js` — the [abcjs](https://abcjs.net) library (v6.4.4)
  that renders the notation and synthesizes playback. It's a single vendored
  file, so the page is fully self-contained (no build step, no backend).
- `vendor/abcjs.LICENSE` — abcjs is **MIT-licensed** (© 2009–2024 Paul Rosen and
  Gregory Dyke). MIT only requires that this copyright and permission notice ship
  alongside the code, which this file satisfies; you're free to use, deploy, and
  modify it, including for class. No attribution is required in the page UI.

## Run it locally

Either double-click `index.html`, or serve the folder and open the address it
prints:

```
python -m http.server 8000
```

## Deploying (GitHub Pages)

Ready to deploy as-is: the files live at the repo root and a `.nojekyll` marker
tells Pages to serve them without Jekyll processing. In **Settings → Pages**, set
the source to the `main` branch (root); the site publishes at the URL above.

## License

This activity's own code is **MIT-licensed** — see [`LICENSE`](LICENSE). The
bundled abcjs library is separately MIT-licensed; its notice ships in
[`vendor/abcjs.LICENSE`](vendor/abcjs.LICENSE).

## Possible future additions

- A "type the answer" mode with forgiving text matching.
- Separate the question into title and composer for two points.
- A "harder" mode that shows fewer bars.
