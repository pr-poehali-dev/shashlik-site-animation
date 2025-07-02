import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Александр К.",
      rating: 5,
      text: "Лучший шашлык в городе! Мясо тает во рту, а атмосфера просто потрясающая. Обязательно вернемся всей семьей.",
      date: "2 дня назад",
    },
    {
      name: "Марина Д.",
      rating: 5,
      text: "Потрясающее место! Люля-кебаб просто божественный, а персонал очень приветливый. Рекомендую всем!",
      date: "неделю назад",
    },
    {
      name: "Игорь М.",
      rating: 5,
      text: "Настоящий кавказский вкус! Уже третий раз приходим с друзьями. Хачапури - это что-то невероятное!",
      date: "2 недели назад",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
            Отзывы гостей
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Что говорят о нас наши посетители
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                <p className="text-brand-gray text-lg leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
                      <Icon
                        name="User"
                        size={20}
                        className="text-brand-orange"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-charcoal">
                        {review.name}
                      </p>
                      <p className="text-sm text-brand-gray">{review.date}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-brand-peach/50 rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <Icon name="Quote" size={48} className="text-brand-orange" />
            </div>

            <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-charcoal mb-4">
              Оставьте свой отзыв
            </h3>

            <p className="text-brand-gray text-lg mb-8">
              Поделитесь впечатлениями о посещении нашего ресторана. Ваше мнение
              очень важно для нас!
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center gap-2">
                <Icon
                  name="Star"
                  size={20}
                  className="text-yellow-400 fill-current"
                />
                <span className="font-semibold text-brand-charcoal">4.9/5</span>
                <span className="text-brand-gray">средний рейтинг</span>
              </div>

              <div className="flex items-center gap-2">
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-brand-orange"
                />
                <span className="font-semibold text-brand-charcoal">150+</span>
                <span className="text-brand-gray">отзывов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
