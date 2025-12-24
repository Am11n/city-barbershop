export default function Footer() {
    return (
        <footer className="bg-primary py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center">
                    <img src="/logo.png" alt="City Barbershop Logo" className="h-10 w-auto" />
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} City Barbershop. Alle rettigheter reservert.
                </div>

                <div className="flex space-x-6">
                    <a href="https://www.instagram.com/citybarbershopdrammen/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">Instagram</a>
                    <a href="https://www.facebook.com/CityBarbershopDrammen" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
}
