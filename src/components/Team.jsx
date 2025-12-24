import { team } from '../data/team';
import { Instagram } from 'lucide-react';

export default function Team() {
    return (
        <section id="team" className="py-24 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
                        Møt <span className="text-accent">Teamet</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {team.map((member) => (
                        <article key={member.id} className="group">
                            <div className="relative overflow-hidden mb-6 rounded-sm aspect-[3/4]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <a
                                        href={member.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-accent transition-colors"
                                        aria-label={`Follow ${member.name} on Instagram`}
                                    >
                                        <Instagram size={24} />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-3">{member.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                    {member.bio}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
