/*
 * Repertoire for "Name That Organ Piece".
 *
 * Each entry is one famous, public-domain piece. The `abc` field holds the
 * opening bars in ABC notation (https://abcnotation.com/) — the tool renders it
 * as engraved staves and can play it back. Deliberately NO title (T:) or
 * composer (C:) line inside the abc, so the rendered score never gives away the
 * answer.
 *
 * --------------------------------------------------------------------------
 * NOTE TO THE MUSICIAN: the opening bars below are a FIRST-PASS DRAFT, encoded
 * from memory. Please check each one and fix any wrong notes — it's just text.
 * A quick ABC cheat sheet:
 *   - C D E F G A B = the octave from middle C up;  c d e f g a b = next octave up
 *   - C, = octave down;  c' = octave up again
 *   - ^ = sharp, _ = flat, = = natural   (e.g. ^c is C-sharp, _b is B-flat)
 *   - With "L:1/8" a bare letter is an eighth note; A2 = quarter, A4 = half, A/ = sixteenth
 *   - | is a barline,  z is a rest,  (3abc is a triplet
 * Add pieces by copying a block and filling it in. Four or more pieces are
 * needed so each question has wrong answers to choose from.
 * --------------------------------------------------------------------------
 */

window.ORGAN_PIECES = [
  {
    id: "bach-toccata-dm",
    title: "Toccata and Fugue in D minor",
    composer: "J. S. Bach",
    year: "c. 1704",
    fact: "BWV 565 — its dramatic opening flourish is probably the most famous organ gesture ever written, a staple of every spooky movie.",
    abc: "X:1\nM:4/4\nL:1/8\nK:Dm\n(3aga a4 | g/f/e/d/ ^c2 d2 |]"
  },
  {
    id: "bach-prelude-c",
    title: "Prelude in C major",
    composer: "J. S. Bach",
    year: "1722",
    fact: "BWV 846, the very first prelude of The Well-Tempered Clavier — gently rolling broken chords that later became the harmony of Gounod's 'Ave Maria'.",
    abc: "X:1\nM:4/4\nL:1/16\nK:C\nCEGce Gce CEGce Gce | CDAdf Adf CDAdf Adf |]"
  },
  {
    id: "pachelbel-canon",
    title: "Canon in D",
    composer: "Johann Pachelbel",
    year: "c. 1680",
    fact: "Its eight-note ground bass repeats 28 times; the soaring melody above it has made it the most-requested processional at weddings.",
    abc: "X:1\nM:4/4\nL:1/2\nK:D\nf e | d ^c | B A | B ^c |]"
  },
  {
    id: "wagner-bridal",
    title: "Bridal Chorus ('Here Comes the Bride')",
    composer: "Richard Wagner",
    year: "1850",
    fact: "From the opera Lohengrin — sung as the couple enters the bridal chamber. (In the opera the marriage promptly falls apart.)",
    abc: "X:1\nM:4/4\nL:1/4\nK:C\nG | c c c z | c d c B | c2 z2 |]"
  },
  {
    id: "bach-jesu-joy",
    title: "Jesu, Joy of Man's Desiring",
    composer: "J. S. Bach",
    year: "1723",
    fact: "From Cantata BWV 147 — the lilting triplet melody floats above a chorale and is a wedding and Christmas favorite.",
    abc: "X:1\nM:9/8\nL:1/8\nK:G\nG A B d c B G B d |]"
  },
  {
    id: "widor-toccata",
    title: "Toccata (Symphony No. 5)",
    composer: "Charles-Marie Widor",
    year: "1879",
    fact: "The thrilling perpetual-motion finale of his Fifth Organ Symphony — the recessional of choice for grand weddings and Easter mornings.",
    abc: "X:1\nM:4/4\nL:1/16\nK:F\ncfac cfac cfac cfac |]"
  }
];
