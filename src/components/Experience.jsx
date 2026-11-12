import { Coffee, MessageCircle, Droplets, Scissors, Flame, Sparkles } from 'lucide-react';

const steps = [
    { icon: Coffee, title: 'Velkommen', text: 'Kaffe, te eller vann mens du venter. Du blir tatt imot, ikke bare ropt opp.' },
    { icon: MessageCircle, title: 'Konsultasjon', text: 'Vi ser på hodeform, hårvekst og hverdag før saksen kommer fram.' },
    { icon: Droplets, title: 'Vask', text: 'Grundig hårvask og hodebunnsmassasje med profesjonelle produkter.' },
    { icon: Scissors, title: 'Klipp', text: 'Presisjonsarbeid med saks, maskin og kniv. Ingen hastverk.' },
    { icon: Flame, title: 'Hot towel', text: 'Varmt håndkle åpner porene før skjegg og konturer.' },
    { icon: Sparkles, title: 'Finish', text: 'Styling, råd om produkter, og du går ut klar for helgen.' },
];

export default function Experience() {
    return (
        <section id="opplevelsen" className="relative overflow-hidden py-24 sm:py-32">
            <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div className="reveal lg:sticky lg:top-28 lg:self-start">
                    <span className="eyebrow"><span className="h-px w-8 bg-pole" /> Opplevelsen</span>
                    <h2 className="mt-5 font-display text-5xl uppercase leading-[0.9] sm:text-7xl">
                        Mer enn <br />
                        <span className="font-serif normal-case italic text-pole">en klipp.</span>
                    </h2>
                    <p className="mt-6 max-w-md text-bone/65">
                        Hver time følger det samme ritualet. Det er derfor kundene kommer tilbake, og derfor tar vi oss betalt for det.
                    </p>
                    <div className="relative mt-10 hidden aspect-[4/5] max-w-sm overflow-hidden rounded-[2rem] lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1717089256239-dc2ed4d9dfc6?w=900&auto=format&fit=crop&q=70"
                            alt="Barber som former skjegg med kniv"
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                    </div>
                </div>

                <ol className="relative">
                    <span className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-pole via-white/15 to-navy" aria-hidden="true" />
                    {steps.map(({ icon: Icon, title, text }, i) => (
                        <li key={title} className="reveal relative flex gap-6 pb-12 last:pb-0" style={{ transitionDelay: `${i * 70}ms` }}>
                            <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/10 bg-coal">
                                <Icon className="h-5 w-5 text-pole" />
                            </span>
                            <div className="pt-2">
                                <p className="font-display text-sm text-mute">{String(i + 1).padStart(2, '0')}</p>
                                <h3 className="font-display text-3xl uppercase sm:text-4xl">{title}</h3>
                                <p className="mt-2 max-w-md text-bone/60">{text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
