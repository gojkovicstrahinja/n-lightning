import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { InteractiveCard } from "@/components/interactive-card";

const heroMetrics = [
  {
    value: "15+",
    label: "godina iskustva",
    copy: "Licencirani elektricari na domacim i poslovnim objektima.",
  },
  {
    value: "24/7",
    label: "hitne intervencije",
    copy: "Brza reakcija za kvarove, pregorele osigurace i prekide napajanja.",
  },
  {
    value: "100%",
    label: "garancija",
    copy: "Svaki rad je dokumentovan i pokriven garancijom na izvedbu.",
  },
];

const usluge = [
  {
    title: "Elektro instalacije",
    description:
      "Izrada instalacija za nove objekte ili renoviranje postojecih prostora.",
    items: [
      "Projektovanje i razvod kablova",
      "Ugradnja osiguraca i zastitnih prekidaca",
      "Montaza rasvete i uticnica",
    ],
  },
  {
    title: "Servis i popravke",
    description:
      "Pouzdano otklanjanje kvarova i vracanje instalacija u siguran rad.",
    items: [
      "Detekcija kratkih spojeva i preopterecenja",
      "Zamena dotrajalih vodova i sklopki",
      "Hitne intervencije na terenu",
    ],
  },
  {
    title: "Razvodne table",
    description:
      "Uredjene, pregledne i obelezene table koje omogucavaju lako odrzavanje.",
    items: [
      "Projektovanje i organizacija polja",
      "Ugradnja fid i prenaponskih zastita",
      "Testiranje i balansiranje faza",
    ],
  },
  {
    title: "Odrzavanje objekata",
    description:
      "Periodicne provere koje sprecavaju kvarove i produzavaju vek instalacija.",
    items: [
      "Merenje potrosnje i analiza opterecenja",
      "Pregled rasvete i sigurnosnih sistema",
      "Azuriranje dokumentacije i planova",
    ],
  },
];

const vrednosti = [
  {
    title: "Pouzdanost",
    copy: "Dogovoreni rokovi i jasne faze rada bez iznenadjenja.",
  },
  {
    title: "Bezbednost",
    copy: "Rad po vazecim standardima i upotreba sertifikovane opreme.",
  },
  {
    title: "Preciznost",
    copy: "Uredno vodjenje kablova i obelezavanje svakog kruga u tabli.",
  },
  {
    title: "Partnerstvo",
    copy: "Otvorena komunikacija, saveti i podrska nakon zavrsetka posla.",
  },
];

const projekti = [
  {
    name: "Porodicna kuca - Novi Sad",
    description:
      "Kompletna zamena instalacija, nova razvodna tabla i diskretna LED rasveta.",
    image: "/projekti/1.png",
  },
  {
    name: "Stan - Beograd",
    description:
      "Renoviranje kupatila i kuhinje, ugradnja novih automat osiguraca i uticnica.",
    image: "/projekti/2.png",
  },
  {
    name: "Dupleks - Zemun",
    description:
      "Raspored novih strujnih krugova, dodatna zastita i fino nivelisanje rasvete.",
    image: "/projekti/3.png",
  },
];

const proces = [
  {
    title: "Uvidjaj na licu mesta",
    time: "Dan 1",
    description:
      "Dolazimo, proveravamo postojece stanje i belezimo potrebe prostora.",
  },
  {
    title: "Plan i ponuda",
    time: "Dan 2",
    description:
      "Pripremamo predlog instalacije, materijal i dinamiku radova uz jasne cene.",
  },
  {
    title: "Izvodjenje i kontrola",
    time: "Dan 3+",
    description:
      "Realizujemo dogovorene radove, testiramo svaku fazu i obelezavamo razvodnu tablu.",
  },
  {
    title: "Zavrsna dokumentacija",
    time: "Zavrsetak",
    description:
      "Predajemo izvestaj, fotografije izvedbe i smernice za dalje odrzavanje.",
  },
];

const marqueeItems = [
  "Elektro instalacije",
  "Razvodne table",
  "Servis i popravke",
  "Hitne intervencije",
  "Preventivni pregledi",
  "Licencirani majstori",
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(248,216,108,0.12),_transparent_70%)]" />
      <header className="relative">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-10 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 p-1">
              <Image
                src="/n-lightning.png"
                alt="N-Lightning logo"
                fill
                className="object-contain"
                sizes="56px"
                priority
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-zinc-400">
                N-Lightning
              </p>
              <p className="text-xl font-medium text-zinc-50">
                Elektro resenja za siguran dom.
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-9 text-sm font-medium text-zinc-300 lg:flex">
            <a className="transition hover:text-white" href="#usluge">
              Usluge
            </a>
            <a className="transition hover:text-white" href="#vrednosti">
              Zasto mi
            </a>
            <a className="transition hover:text-white" href="#projekti">
              Reference
            </a>
            <a className="transition hover:text-white" href="#proces">
              Proces
            </a>
            <a className="transition hover:text-white" href="#kontakt">
              Kontakt
            </a>
            <a
              className="rounded-full bg-yellow-400 px-6 py-2 text-sm text-black shadow-[0_18px_34px_-18px_rgba(248,216,108,0.85)] transition hover:bg-yellow-300"
              href="#kontakt"
            >
              Brza ponuda
            </a>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-24 lg:px-10">
        <section className="relative overflow-hidden rounded-[48px] border border-white/10 bg-[linear-gradient(135deg,#0b1118,55%,#090d15)] px-8 py-20 shadow-[0_70px_170px_-110px_rgba(244,200,97,0.6)] sm:px-12 lg:px-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-24 top-1/3 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(244,200,97,0.18),transparent_70%)] blur-3xl" />
            <div className="absolute right-4 top-6 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(244,200,97,0.2),transparent_65%)] blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
          </div>
          <div className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-10">
              <Reveal>
                <span className="inline-flex items-center gap-3 rounded-full border border-yellow-300/25 bg-yellow-300/10 px-5 py-2 text-[11px] uppercase tracking-[0.55em] text-yellow-100">
                  Snaga i svetlo za tvoj prostor
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-balance text-4xl font-semibold leading-tight text-zinc-50 sm:text-[56px] lg:text-[64px]">
                  Obezbedjujemo stabilnu struju, urednu tablu i miran san.
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="max-w-2xl text-lg text-zinc-300">
                  N-Lightning je tim elektricara koji kombinuje ciste instalacije
                  i preciznu kontrolu. Od prve uticnice do glavne table sve
                  ostaje uredno dokumentovano i spremno za dug rad.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_30px_60px_-40px_rgba(244,200,97,0.85)] transition hover:bg-yellow-300"
                  >
                    Zatrazi ponudu
                  </a>
                  <a
                    href="#usluge"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:border-yellow-200/70 hover:text-white"
                  >
                    Pogledaj usluge
                  </a>
                </div>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-3">
                {heroMetrics.map((metric, index) => (
                  <Reveal key={metric.label} delay={360 + index * 120}>
                    <div className="space-y-3 rounded-3xl border border-white/12 bg-white/5 p-6 text-sm text-zinc-300 backdrop-blur-lg">
                      <p className="text-4xl font-semibold text-yellow-200">
                        {metric.value}
                      </p>
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                        {metric.label}
                        </p>
                      <p>{metric.copy}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={240}>
              <InteractiveCard className="relative h-full min-h-[420px] overflow-hidden border border-white/12 bg-neutral-900/60 p-0 backdrop-blur-xl">
                <Image
                  src="/projekti/1.png"
                  alt="Rad na razvodnoj tabli"
                  fill
                  className="object-cover brightness-[0.95] contrast-[1.05]"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(210deg,rgba(7,9,13,0.1) 0%,rgba(7,10,15,0.85) 55%,rgba(7,10,15,0.95) 100%)]" />
                <div className="relative flex h-full flex-col justify-between p-8 text-sm text-zinc-200">
                  <div className="space-y-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200/40 bg-black/30 px-4 py-1 text-[10px] uppercase tracking-[0.5em] text-yellow-100">
                      Novi Sad
                    </span>
                    <h3 className="text-2xl font-semibold text-white">
                      Razvodna tabla spremna za servis
                    </h3>
                    <p className="text-sm text-zinc-300">
                      Premestanje starih vodova u uredne staze, dodavanje fid i
                      prenaponske zastite i jasno obelezavanje svake zone.
                    </p>
                  </div>
                  <div className="grid gap-3 rounded-2xl border border-white/15 bg-black/35 p-5 text-xs text-zinc-200">
                    {[
                      "Test izolacije faza 0.28 ohm",
                      "Balansirano opterecenje 3x16A",
                      "Predaja PDF sheme i nalepnica",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-200" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </InteractiveCard>
            </Reveal>
          </div>
          <div className="relative mt-14 flex justify-center">
            <Reveal delay={520}>
              <div className="scroll-indicator" aria-hidden />
            </Reveal>
          </div>
        </section>

        <section className="marquee-mask rounded-[2.5rem] border border-white/10 bg-white/[0.02] px-6 py-4 backdrop-blur">
          <div className="marquee-track text-xs uppercase tracking-[0.8em] text-zinc-500">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="text-zinc-400">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="usluge" className="space-y-14">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl space-y-4">
                <p className="text-xs uppercase tracking-[0.6em] text-yellow-300">
                  Usluge
                </p>
                <h2 className="text-4xl font-semibold text-zinc-50 lg:text-5xl">
                  Sve sto je potrebno da struja radi pouzdano i bezbedno.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-zinc-400">
                Radimo male i velike radove, od pojedinacne prostorije do celog
                objekta. Svaki projekat pocinje pregledom, nastavlja se
                urednom izvedbom i zavrsava jasnim predajnim zapisnikom.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {usluge.map((usluga, index) => (
              <Reveal key={usluga.title} delay={index * 140}>
                <article className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 transition duration-500 hover:border-white/25 hover:bg-white/[0.05]">
                  <div className="pointer-events-none absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  <h3 className="text-2xl font-semibold text-zinc-50">
                    {usluga.title}
                  </h3>
                  <p className="mt-4 text-sm text-zinc-400">
                    {usluga.description}
                  </p>
                  <ul className="mt-7 space-y-3 text-sm text-zinc-300">
                    {usluga.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-200/90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="vrednosti"
          className="grid gap-12 rounded-[2.75rem] border border-white/5 bg-white/[0.04] p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-16"
        >
          <Reveal>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.6em] text-yellow-200">
                Zasto biraju nas
              </p>
              <h2 className="text-4xl font-semibold text-zinc-50">
                Sigurnost, urednost i komunikacija kroz ceo projekat.
              </h2>
              <p className="text-sm text-zinc-400">
                Od prvog razgovora znate gde ste. Dogovaramo faze, radimo
                uredno i ostavljamo prostor spreman za koriscenje bez dodatnih
                iznenadjenja.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {vrednosti.map((vrednost, index) => (
              <Reveal key={vrednost.title} delay={index * 140}>
                <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-sm text-zinc-300 backdrop-blur transition duration-500 hover:border-white/25 hover:bg-white/[0.06]">
                  <p className="text-xs uppercase tracking-[0.5em] text-yellow-200">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-zinc-50">
                    {vrednost.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400">{vrednost.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projekti" className="space-y-14">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.6em] text-yellow-300">
                  Reference
                </p>
                <h2 className="text-4xl font-semibold text-zinc-50 lg:text-5xl">
                  Privatni radovi na kucnim projektima.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-zinc-400">
                Fokusirani smo na domove, stanove i male biznise. Svaki projekat
                dokumentujemo slikama razvodnih tabli, instalacija i zavrsnog
                izgleda kako biste imali jasnu evidenciju.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {projekti.map((projekat, index) => (
              <Reveal key={projekat.name} delay={index * 140}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] text-zinc-300 backdrop-blur transition duration-500 hover:border-white/25 hover:bg-white/[0.06]">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={projekat.image}
                      alt={projekat.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 text-sm">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-zinc-50">
                        {projekat.name}
                      </h3>
                      <p>{projekat.description}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-3 text-xs text-zinc-500">
                      <span className="h-2 w-2 rounded-full bg-yellow-200" />
                      Dokumentacija, izvodjenje, zavrsna kontrola
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="proces"
          className="space-y-10 rounded-[3rem] border border-white/6 bg-white/[0.05] p-10 text-sm text-zinc-200 backdrop-blur lg:p-16"
        >
          <Reveal>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.6em] text-yellow-300">
                  Proces rada
                </p>
                <h2 className="text-4xl font-semibold text-zinc-50 lg:text-5xl">
                  Jasne faze od prvog telefona do predaje kljuceva.
                </h2>
              </div>
              <p className="max-w-xl text-sm text-zinc-400">
                Svaka etapa ima zapisnik i kontakt osobu. Budite mirni znajuci
                da znate sta je uradjeno i sta sledi.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {proces.map((korak, index) => (
              <Reveal key={korak.title} delay={index * 120}>
                <div className="h-full rounded-[2.5rem] border border-white/10 bg-[linear-gradient(140deg,#11161e,#0c1118)] p-8 text-zinc-200 shadow-[0_0_40px_-24px_rgba(244,200,97,0.45)] transition duration-500 hover:border-white/25 hover:shadow-[0_0_50px_-20px_rgba(244,200,97,0.6)]">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-zinc-500">
                    <span>{korak.time}</span>
                    <span>Korak {index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-zinc-50">
                    {korak.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-300">
                    {korak.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="kontakt"
          className="grid gap-10 rounded-[3rem] border border-white/6 bg-white/[0.05] p-10 text-sm text-zinc-200 backdrop-blur lg:grid-cols-[1fr_0.85fr] lg:p-16"
        >
          <Reveal>
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-[0.6em] text-yellow-300">
                Kontakt
              </p>
              <h2 className="text-4xl font-semibold text-zinc-50 lg:text-5xl">
                Spremni da krenemo?
              </h2>
              <p>
                Posaljite nam par slika prostora ili plana, kratko objasnite
                sta je potrebno i dogovaramo termin obilaska. Odgovaramo u
                roku od jednog radnog dana.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-zinc-100">
                <a
                  href="mailto:nidzasijalica@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-3 text-black shadow-[0_30px_60px_-40px_rgba(248,216,108,0.9)] transition hover:bg-yellow-300"
                >
                  nidzasijalica@gmail.com
                </a>
                <a
                  href="tel:+381653001234"
                  className="inline-flex items-center gap-2 rounded-full border border-yellow-300/60 px-7 py-3 text-yellow-200 transition hover:border-yellow-200"
                >
                  +381612021016
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(150deg,#11161e,#0c1118)] p-8 text-zinc-200 shadow-[0_0_40px_-24px_rgba(244,200,97,0.45)] transition duration-500 hover:border-white/25">
              <h3 className="text-lg font-semibold text-yellow-200">
                Sta dobijate
              </h3>
              <ul className="space-y-5 text-sm text-zinc-300">
                {[
                  "Pisanu ponudu sa svim stavkama i rokovima.",
                  "Precizno obelezene razvodne table i sheme.",
                  "Garanciju na izvedene radove i dostupnu podrsku.",
                ].map((stavka) => (
                  <li key={stavka} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-yellow-200" />
                    <span>{stavka}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Pouzdanost - Preciznost - Podrska
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-neutral-950/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 text-xs text-zinc-500 sm:flex-row lg:px-10">
          <p>(c) {new Date().getFullYear()} N-Lightning. Sva prava zadrzana.</p>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-zinc-600">
            <span>Sigurne instalacije</span>
            <span>Profesionalna elektro podrska</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
