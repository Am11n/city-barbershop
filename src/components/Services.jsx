import { services } from '../data/services';

export default function Services() {
    return (
        <section id="services" className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
                        Våre <span className="text-accent">Tjenester</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((service) => (
                        <article
                            key={service.id}
                            className="bg-primary p-8 rounded-sm border border-white/5 hover:border-accent/30 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                    {service.name}
                                </h3>
                                <span className="text-accent font-bold text-lg">
                                    {service.price}
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {service.duration}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
