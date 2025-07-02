import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Specialties = () => {
  const dishes = [
    {
      name: "Шашлык из баранины",
      description: "Нежнейшая баранина, маринованная в традиционных специях",
      price: "450₽",
      popular: true,
      spicy: false,
    },
    {
      name: "Люля-кебаб",
      description: "Сочный фарш из говядины и баранины с зеленью",
      price: "380₽",
      popular: true,
      spicy: true,
    },
    {
      name: "Шашлык из свинины",
      description: "Классический шашлык из отборной свинины",
      price: "400₽",
      popular: false,
      spicy: false,
    },
    {
      name: "Курица на мангале",
      description: "Цыпленок табака с хрустящей корочкой",
      price: "350₽",
      popular: false,
      spicy: false,
    },
    {
      name: "Овощи на гриле",
      description: "Ассорти из баклажанов, перца и помидоров",
      price: "280₽",
      popular: false,
      spicy: false,
    },
    {
      name: "Хачапури по-аджарски",
      description: "Лодочка из теста с сыром, маслом и яйцом",
      price: "320₽",
      popular: true,
      spicy: false,
    },
  ];

  return (
    <section className="py-20 bg-brand-peach/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
            Наши специальности
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Попробуйте наши фирменные блюда, приготовленные на открытом огне
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 overflow-hidden animate-slide-up"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-orange to-orange-600 h-48 flex items-center justify-center">
                  <Icon
                    name="UtensilsCrossed"
                    size={60}
                    className="text-white/80"
                  />
                </div>
                {dish.popular && (
                  <Badge className="absolute top-4 right-4 bg-yellow-500 text-white font-medium">
                    <Icon name="Star" size={14} className="mr-1" />
                    Хит
                  </Badge>
                )}
                {dish.spicy && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    <Icon name="Flame" size={14} className="mr-1" />
                    Острое
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-2xl font-bold text-brand-orange">
                    {dish.price}
                  </span>
                </div>
                <p className="text-brand-gray leading-relaxed">
                  {dish.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full">
            <Icon name="Clock" size={20} className="text-brand-orange" />
            <span className="text-brand-charcoal font-medium">
              Время приготовления: 15-20 минут
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
