/**
 * KRATE — Game Database
 * ─────────────────────
 * Add or remove game entries here freely.
 * `img`  → filename inside the  images/  folder  (3:4 portrait cover, e.g. 600×900 px)
 * `fb`   → fallback gradient shown when the image file is missing
 */

const GAME_DB = [
  /* ── ACTION ──────────────────────────────────────────────────────────── */
  { id:  1, title: "Cyberpunk 2077",          img: "lib-cyberpunk2077.jpg",    price: "$29.99", genre: "action",   platforms: ["pc","ps","xbox"],       score: 86, fb: "linear-gradient(135deg,#0d0820,#1a0440)" },
  { id:  2, title: "God of War",              img: "lib-god-of-war.jpg",       price: "$39.99", genre: "action",   platforms: ["pc","ps"],              score: 94, fb: "linear-gradient(135deg,#1a0808,#2a0d0a)" },
  { id:  4, title: "Ratchet & Clank",         img: "lib-ratchet-clank.jpg",    price: "$39.99", genre: "action",   platforms: ["ps"],                   score: 88, fb: "linear-gradient(135deg,#100820,#1a0830)" },
  { id:  5, title: "Horizon Forbidden West",  img: "lib-horizon-fw.jpg",       price: "$49.99", genre: "action",   platforms: ["pc","ps"],              score: 88, fb: "linear-gradient(135deg,#0a1520,#102030)" },
  { id:  6, title: "Returnal",                img: "lib-returnal.jpg",         price: "$44.99", genre: "action",   platforms: ["pc","ps"],              score: 86, fb: "linear-gradient(135deg,#050820,#0a0830)" },
  { id: 13, title: "A Plague Tale: Requiem",  img: "lib-plague-tale.jpg",      price: "$49.99", genre: "action",   platforms: ["pc","ps","xbox"],       score: 85, fb: "linear-gradient(135deg,#100800,#180d00)" },
  { id: 15, title: "The Last of Us Part II",  img: "lib-tlouu2.jpg",           price: "$39.99", genre: "action",   platforms: ["pc","ps"],              score: 93, fb: "linear-gradient(135deg,#080808,#0d1008)" },
  { id: 18, title: "Street Fighter 6",        img: "lib-street-fighter6.jpg",  price: "$34.99", genre: "action",   platforms: ["pc","ps","xbox"],       score: 92, fb: "linear-gradient(135deg,#1a0000,#200808)" },
  { id: 19, title: "Mortal Kombat 1",         img: "lib-mortal-kombat1.jpg",   price: "$29.99", genre: "action",   platforms: ["pc","ps","xbox"],       score: 82, fb: "linear-gradient(135deg,#180000,#1a0800)" },
  { id: 20, title: "Tekken 8",                img: "lib-tekken8.jpg",          price: "$34.99", genre: "action",   platforms: ["pc","ps","xbox"],       score: 90, fb: "linear-gradient(135deg,#000818,#000d20)" },
  { id: 29, title: "Sekiro: SDT",             img: "lib-sekiro.jpg",           price: "$39.99", genre: "action",   platforms: ["pc","ps","xbox"],       score: 90, fb: "linear-gradient(135deg,#0a0808,#150808)" },
  { id: 31, title: "Ghost of Tsushima",       img: "lib-ghost-tsushima.jpg",   price: "$49.99", genre: "action",   platforms: ["pc","ps"],              score: 91, fb: "linear-gradient(135deg,#0a1208,#0a180a)" },
  { id: 32, title: "Death Stranding",         img: "lib-death-stranding2.jpg", price: "$19.99", genre: "action",   platforms: ["pc","ps"],              score: 82, badge: "sale", fb: "linear-gradient(135deg,#080818,#0d0d20)" },
  { id: 33, title: "Control",                 img: "lib-alan-wake2.jpg",       price: "$14.99", genre: "action",   platforms: ["pc","ps","xbox"],       score: 82, badge: "sale", fb: "linear-gradient(135deg,#050510,#0a0820)" },
  { id: 34, title: "Kena: Bridge of Spirits", img: "lib-stray.jpg",            price: "$29.99", genre: "action",   platforms: ["pc","ps"],              score: 80, fb: "linear-gradient(135deg,#080d08,#0d140d)" },
  { id: 36, title: "Hi-Fi Rush",              img: "lib-deathloop.jpg",        price: "$29.99", genre: "action",   platforms: ["pc","xbox","deck"],     score: 87, fb: "linear-gradient(135deg,#180800,#201000)" },
  { id: 40, title: "Palworld",                img: "lib-forza-horizon5.jpg",   price: "$29.99", genre: "action",   platforms: ["pc","xbox"],             score: 78, fb: "linear-gradient(135deg,#081508,#0a1e0a)" },

  /* ── RPG ──────────────────────────────────────────────────────────────── */
  { id:  3, title: "The Witcher 3",           img: "lib-the-witcher3.jpg",     price: "$9.99",  genre: "rpg",      platforms: ["pc","ps","xbox","deck"], score: 97, badge: "sale", fb: "linear-gradient(135deg,#0a1508,#0d1a0a)" },
  { id:  7, title: "Demon's Souls",           img: "lib-demon-souls.jpg",      price: "$34.99", genre: "rpg",      platforms: ["ps"],                   score: 92, fb: "linear-gradient(135deg,#080808,#181018)" },
  { id:  8, title: "Final Fantasy XVI",       img: "lib-ff16.jpg",             price: "$49.99", genre: "rpg",      platforms: ["pc","ps"],              score: 87, fb: "linear-gradient(135deg,#0d0820,#200d10)" },
  { id: 17, title: "Diablo IV",               img: "lib-diablo4.jpg",          price: "$39.99", genre: "rpg",      platforms: ["pc","ps","xbox"],       score: 86, fb: "linear-gradient(135deg,#180808,#200a08)" },
  { id: 30, title: "Nioh 2",                  img: "lib-nioh2.jpg",            price: "$19.99", genre: "rpg",      platforms: ["pc","ps"],              score: 85, badge: "sale", fb: "linear-gradient(135deg,#0d0808,#180a08)" },

  /* ── SHOOTER ──────────────────────────────────────────────────────────── */
  { id: 10, title: "Halo Infinite",           img: "lib-halo-infinite.jpg",    price: "$Free",  genre: "shooter",  platforms: ["pc","xbox","deck"],     score: 87, badge: "free", fb: "linear-gradient(135deg,#080e1a,#0a1228)" },
  { id: 11, title: "Deathloop",               img: "lib-deathloop.jpg",        price: "$14.99", genre: "shooter",  platforms: ["pc","ps"],              score: 88, badge: "sale", fb: "linear-gradient(135deg,#1a0a00,#200800)" },
  { id: 21, title: "Fortnite",                img: "lib-fortnite.jpg",         price: "$Free",  genre: "shooter",  platforms: ["pc","ps","xbox"],       score: 80, badge: "free", fb: "linear-gradient(135deg,#051525,#07203a)" },
  { id: 22, title: "Apex Legends",            img: "lib-apex-legends.jpg",     price: "$Free",  genre: "shooter",  platforms: ["pc","ps","xbox"],       score: 89, badge: "free", fb: "linear-gradient(135deg,#150500,#200700)" },
  { id: 23, title: "Overwatch 2",             img: "lib-overwatch2.jpg",       price: "$Free",  genre: "shooter",  platforms: ["pc","ps","xbox"],       score: 72, badge: "free", fb: "linear-gradient(135deg,#0a0820,#0d0a28)" },
  { id: 24, title: "Valorant",                img: "lib-valorant.jpg",         price: "$Free",  genre: "shooter",  platforms: ["pc"],                   score: 80, badge: "free", fb: "linear-gradient(135deg,#180a0a,#200808)" },

  /* ── SPORTS ───────────────────────────────────────────────────────────── */
  { id:  9, title: "Forza Horizon 5",         img: "lib-forza-horizon5.jpg",   price: "$29.99", genre: "sports",   platforms: ["pc","xbox","deck"],     score: 92, fb: "linear-gradient(135deg,#1a0a00,#2a1500)" },

  /* ── HORROR ───────────────────────────────────────────────────────────── */
  { id: 16, title: "Alan Wake 2",             img: "lib-alan-wake2.jpg",       price: "$44.99", genre: "horror",   platforms: ["pc","ps","xbox"],       score: 89, fb: "linear-gradient(135deg,#050510,#0a0a18)" },
  { id: 35, title: "Resident Evil 4",         img: "lib-returnal.jpg",         price: "$39.99", genre: "horror",   platforms: ["pc","ps","xbox"],       score: 95, fb: "linear-gradient(135deg,#0d0808,#180d0d)" },

  /* ── INDIE ────────────────────────────────────────────────────────────── */
  { id: 14, title: "Stray",                   img: "lib-stray.jpg",            price: "$24.99", genre: "indie",    platforms: ["pc","ps"],              score: 82, fb: "linear-gradient(135deg,#08100a,#0d150d)" },
  { id: 25, title: "Minecraft",               img: "lib-minecraft.jpg",        price: "$26.99", genre: "indie",    platforms: ["pc","ps","xbox","deck"], score: 93, fb: "linear-gradient(135deg,#0a1008,#0d150a)" },
  { id: 26, title: "Terraria",                img: "lib-terraria.jpg",         price: "$9.99",  genre: "indie",    platforms: ["pc","ps","xbox","deck"], score: 88, badge: "sale", fb: "linear-gradient(135deg,#080a18,#0a0d20)" },
  { id: 27, title: "Among Us",                img: "lib-among-us.jpg",         price: "$4.99",  genre: "indie",    platforms: ["pc","ps","xbox"],       score: 85, fb: "linear-gradient(135deg,#080a1a,#0a0c24)" },
  { id: 28, title: "Fall Guys",               img: "lib-fall-guys.jpg",        price: "$Free",  genre: "indie",    platforms: ["pc","ps","xbox"],       score: 79, badge: "free", fb: "linear-gradient(135deg,#1a0040,#0d0028)" },
  { id: 37, title: "Dave the Diver",          img: "lib-stray.jpg",            price: "$19.99", genre: "indie",    platforms: ["pc","deck"],             score: 89, fb: "linear-gradient(135deg,#000d18,#001828)" },
  { id: 38, title: "Celeste",                 img: "lib-terraria.jpg",         price: "$19.99", genre: "indie",    platforms: ["pc","ps","xbox","deck"], score: 94, badge: "sale", fb: "linear-gradient(135deg,#100018,#180028)" },
  { id: 39, title: "Hades II",                img: "lib-plague-tale.jpg",      price: "$24.99", genre: "indie",    platforms: ["pc","deck"],             score: 93, fb: "linear-gradient(135deg,#180008,#200010)" },

  /* ── STRATEGY ─────────────────────────────────────────────────────────── */
  { id: 41, title: "Civilization VII",        img: "lib-minecraft.jpg",        price: "$59.99", genre: "strategy", platforms: ["pc"],                   score: 82, fb: "linear-gradient(135deg,#0a1020,#0d1530)" },
  { id: 42, title: "Total War: Pharaoh",      img: "lib-the-witcher3.jpg",     price: "$49.99", genre: "strategy", platforms: ["pc"],                   score: 76, fb: "linear-gradient(135deg,#201400,#301e00)" },
  { id: 43, title: "Age of Empires IV",       img: "lib-forza-horizon5.jpg",   price: "$39.99", genre: "strategy", platforms: ["pc","xbox"],             score: 81, fb: "linear-gradient(135deg,#180c00,#241200)" },
  { id: 44, title: "Frostpunk 2",             img: "lib-demon-souls.jpg",      price: "$44.99", genre: "strategy", platforms: ["pc"],                   score: 85, fb: "linear-gradient(135deg,#080e18,#0a1220)" },

  /* ── GHOSTWIRE ────────────────────────────────────────────────────────── */
  { id: 12, title: "Ghostwire: Tokyo",        img: "lib-ghostwire.jpg",        price: "$19.99", genre: "action",   platforms: ["pc","ps"],              score: 76, fb: "linear-gradient(135deg,#080818,#100828)" },
];
