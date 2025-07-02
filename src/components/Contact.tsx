import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      content: "ул. Кавказская, 25",
      subtitle: "рядом с центральным парком",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (999) 123-45-67",
      subtitle: "ежедневно с 11:00 до 23:00",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      content: "11:00 - 23:00",
      subtitle: "без выходных",
    },
    {
      icon: "Car",
      title: "Парковка",
      content: "Бесплатная",
      subtitle: "20 мест для гостей",
    },
  ];

  return (
    <section className="py-20 bg-brand-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Контакты
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Приходите к нам или заказывайте доставку
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-white/10 border-0 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-slide-up"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-brand-orange/20 rounded-full">
                  <Icon
                    name={info.icon}
                    size={28}
                    className="text-brand-orange"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {info.title}
                </h3>
                <p className="text-white font-semibold mb-1">{info.content}</p>
                <p className="text-gray-300 text-sm">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="font-heading text-3xl font-bold mb-6">
              Забронировать стол
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Позвоните нам или приходите без предварительной записи. Мы всегда
              рады видеть наших гостей!
            </p>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-brand-orange hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg py-6"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-brand-charcoal transition-all duration-300 font-semibold text-lg py-6"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>

          <div className="animate-slide-up">
            <Card className="bg-white/10 border-0 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="aspect-video bg-brand-orange/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Icon
                      name="MapPin"
                      size={48}
                      className="text-brand-orange mx-auto mb-2"
                    />
                    <p className="text-white font-medium">Карта расположения</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon
                      name="Navigation"
                      size={20}
                      className="text-brand-orange"
                    />
                    <span className="text-white">5 минут от метро "Парк"</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon name="Bus" size={20} className="text-brand-orange" />
                    <span className="text-white">Остановка "Центральная"</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon
                      name="Utensils"
                      size={20}
                      className="text-brand-orange"
                    />
                    <span className="text-white">
                      Летняя веранда на 40 мест
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
