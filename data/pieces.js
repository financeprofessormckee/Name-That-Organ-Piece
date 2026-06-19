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
  },

  /* --------------------------------------------------------------------------
   * TOURNEMIRE — L'Orgue mystique (Opp. 55-57, 1927-32)
   *
   * Tournemire's modal, harmonically dense writing can't be reliably encoded
   * "from memory" the way the tonal pieces above can. So for these entries the
   * notation shows the GREGORIAN CHANT that each office paraphrases — which is
   * accurate, and makes the game "name the office from its proper chant." The
   * `fact` names the office, opus, and the chant on screen.
   *
   * The chants are unmetered (M:none) white-note modes:
   *   Mode I (Dorian, final D) and Mode VII/VIII (final G) — no key signature.
   *
   * VERIFY (for the musician): the chant melodies below are best-effort drafts —
   * please check each against the Liber Usualis, and confirm which movement of
   * each office you'd rather feature. Office numbers are confirmed from IMSLP.
   * --------------------------------------------------------------------------
   */
  {
    id: "tournemire-paraphrase-carillon",
    title: "Paraphrase-Carillon (L'Orgue mystique)",
    composer: "Charles Tournemire",
    year: "1927-32",
    fact: "The dazzling final movement of Office No. 35, In Assumptione B.M.V. (Op. 57). It weaves four Assumption chants; shown here is the Marian hymn Ave maris stella. Tournemire was titulaire at Ste-Clotilde in Paris.",
    abc: "X:1\nM:none\nL:1/4\nK:C\nD F E D | C D F F | E G F E D | D2 |]"
  },
  {
    id: "tournemire-office-noel",
    title: "L'Orgue mystique — Office No. 3 (Noel)",
    composer: "Charles Tournemire",
    year: "Op. 55, 1927-32",
    fact: "From the Christmas office, Nativitas D.N. Jesu Christi (Op. 55). Like every office in the cycle it paraphrases that day's Gregorian propers; on screen is the Christmas introit Puer natus est nobis (Mode VII).",
    abc: "X:1\nM:none\nL:1/4\nK:C\nG c c d | c A c c | B c A G | G2 |]"
  },
  {
    id: "tournemire-office-paques",
    title: "L'Orgue mystique — Office No. 17 (Paques)",
    composer: "Charles Tournemire",
    year: "Op. 56, 1927-32",
    fact: "From the Easter office, Dominica Resurrectionis (Op. 56). Shown is the Easter sequence Victimae Paschali laudes (Mode I) — the chant Tournemire's Easter music grows out of.",
    abc: "X:1\nM:none\nL:1/4\nK:C\nF F G F E D | F G A G F | F2 |]"
  },
  {
    id: "tournemire-office-pentecote",
    title: "L'Orgue mystique — Office No. 25 (Pentecote)",
    composer: "Charles Tournemire",
    year: "Op. 56, 1927-32",
    fact: "From the Pentecost office, In Festo Pentecostes (Op. 56 — the Easter cycle closes at Pentecost). On screen is the hymn Veni Creator Spiritus (Mode VIII).",
    abc: "X:1\nM:none\nL:1/4\nK:C\nG A c c | c B c d | c A c B | G2 |]"
  },

  /* --- More organ warhorses (true opening incipits; verify the notes) --- */
  {
    id: "franck-prelude-fugue-variation",
    title: "Prelude, Fugue et Variation",
    composer: "Cesar Franck",
    year: "1862",
    fact: "Op. 18 — its tender, oboe-like cantabile in B minor is one of the most beloved melodies in the organ repertoire. Franck was titulaire at Ste-Clotilde, the post Tournemire would later hold.",
    abc: "X:1\nM:9/8\nL:1/8\nK:Bm\nB2 | f3 e2 d c2 B | A3 B2 c d3 |]"
  },
  {
    id: "vierne-carillon-westminster",
    title: "Carillon de Westminster",
    composer: "Louis Vierne",
    year: "1927",
    fact: "From the Pieces de fantaisie — a blazing toccata built entirely on the Westminster Quarters, the chime of Big Ben. Vierne, blind from birth, was organist of Notre-Dame de Paris.",
    abc: "X:1\nM:4/4\nL:1/4\nK:E\nG F E B, | E G F B, |]"
  },
  {
    id: "boellmann-toccata-gothique",
    title: "Toccata (Suite gothique)",
    composer: "Leon Boellmann",
    year: "1895",
    fact: "The driving C-minor finale of the Suite gothique, Op. 25 — a perpetual-motion recessional and one of the genre's great crowd-pleasers. Boellmann died at just 35.",
    abc: "X:1\nM:4/4\nL:1/16\nK:Cm\nc2G2 E2C2 G2E2 C2G,2 | C8 z8 |]"
  },
  {
    id: "bach-little-fugue-gm",
    title: "Fugue in G minor ('Little')",
    composer: "J. S. Bach",
    year: "c. 1709",
    fact: "BWV 578 — the 'Little' G minor (to distinguish it from the 'Great' BWV 542). Its singable, much-quoted subject makes it one of Bach's most recognizable fugues.",
    abc: "X:1\nM:4/4\nL:1/8\nK:Gm\nG2 D2 B A G ^F | G A B2 A2 G2 |]"
  },
  {
    id: "alain-litanies",
    title: "Litanies",
    composer: "Jehan Alain",
    year: "1937",
    fact: "JA 119 — a relentless, incantatory plea ('when the soul... can no longer find new words, prayer becomes litany'). Alain was killed in action in 1940 at age 29.",
    abc: "X:1\nM:4/4\nL:1/16\nK:Dm\nd2e2 f2e2 d2c2 d2A2 | d2e2 f2g2 f2e2 d4 |]"
  }
];
