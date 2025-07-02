import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm">
            <Icon name="Flame" size={40} className="text-white" />
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Шашлычная
            <span className="block text-4xl md:text-6xl text-yellow-200 mt-2">
              «На углях»
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Настоящий кавказский шашлык на мангале. Свежие продукты,
            традиционные рецепты, домашняя атмосфера.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              className="bg-white text-brand-orange hover:bg-brand-peach transition-all duration-300 transform hover:scale-105 font-semibold text-lg px-8 py-6"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать стол
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-orange transition-all duration-300 font-semibold text-lg px-8 py-6"
            >
              <Icon name="Menu" size={20} className="mr-2" />
              Посмотреть меню
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
