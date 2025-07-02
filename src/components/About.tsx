import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Crown",
      title: "20 лет опыта",
      description:
        "Готовим по традиционным кавказским рецептам уже два десятилетия",
    },
    {
      icon: "Flame",
      title: "Мангал на углях",
      description: "Используем только натуральные угли для неповторимого вкуса",
    },
    {
      icon: "Heart",
      title: "Семейная атмосфера",
      description: "Уютное место, где каждый гость чувствует себя как дома",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
            О ресторане
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Мы — семейная шашлычная, где каждое блюдо готовится с душой. Наши
            повара знают секреты настоящего кавказского шашлыка, передаваемые из
            поколения в поколение.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <div className="bg-brand-peach rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="ChefHat"
                  size={80}
                  className="text-brand-orange mx-auto mb-4"
                />
                <p className="text-brand-charcoal font-medium text-lg">
                  Фото нашей кухни
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <h3 className="font-heading text-3xl font-bold text-brand-charcoal">
              Наша история
            </h3>
            <p className="text-brand-gray text-lg leading-relaxed">
              Всё началось в 2004 году, когда наш шеф-повар Магомед решил
              поделиться семейными рецептами с жителями города. Сегодня «На
              углях» — это место, где встречаются друзья и семьи, чтобы
              насладиться настоящим вкусом Кавказа.
            </p>
            <p className="text-brand-gray text-lg leading-relaxed">
              Мы тщательно отбираем продукты, маринуем мясо по старинным
              рецептам и готовим каждый шашлык с особым вниманием к деталям.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-full">
                  <Icon
                    name={feature.icon}
                    size={32}
                    className="text-brand-orange"
                  />
                </div>
                <h4 className="font-heading text-xl font-bold text-brand-charcoal mb-4">
                  {feature.title}
                </h4>
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
