import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">
                            Besøk <span className="text-accent">Oss</span>
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Vi holder til sentralt i Drammen. Kom innom for en kaffe og en prat, eller book time direkte på nett.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="text-accent w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h3 className="text-white font-bold mb-1">Adresse</h3>
                                    <address className="text-gray-400 not-italic">
                                        Tollbugata 14<br />
                                        3044 Drammen
                                    </address>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Phone className="text-accent w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h3 className="text-white font-bold mb-1">Telefon</h3>
                                    <a href="tel:+4746865541" className="text-gray-400 hover:text-white transition-colors">
                                        46 86 55 41
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Clock className="text-accent w-6 h-6 mr-4 mt-1" />
                                <div>
                                    <h3 className="text-white font-bold mb-1">Åpningstider</h3>
                                    <ul className="text-gray-400 space-y-1">
                                        <li className="flex justify-between w-40"><span>Man - Fre:</span> <span>10 - 19</span></li>
                                        <li className="flex justify-between w-40"><span>Lør:</span> <span>10 - 16</span></li>
                                        <li className="flex justify-between w-40"><span>Søn:</span> <span>Stengt</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-96 bg-gray-800 rounded-sm overflow-hidden relative border border-white/10">
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Tollbugata%2014%2C%203044%20Drammen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            title="Map showing City Barbershop location"
                            className="transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
