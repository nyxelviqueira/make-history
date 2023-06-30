const events = [
  {
    id: "1",
    title: "Invención de la imprenta",
    category: "Ciencia y tecnología",
    date: "1450",
    description:
      "La imprenta fue inventada por Johannes Gutenberg, lo que permitió una producción más rápida y económica de libros y documentos.",
  },
  {
    id: "2",
    title: "Llegada de Cristóbal Colón a América",
    category: "Política y guerra",
    date: "1492",
    description:
      "Cristóbal Colón llega a América en su primer viaje y abre un nuevo mundo para la exploración y el comercio.",
  },
  {
    id: "3",
    title: "Revolución Francesa",
    category: "Política y guerra",
    date: "1789",
    description:
      "La Revolución Francesa marcó el fin del régimen monárquico y el surgimiento de la democracia moderna.",
  },
  {
    id: "4",
    title: "Declaración de Independencia de Estados Unidos",
    category: "Política y guerra",
    date: "1776",
    description:
      "La Declaración de Independencia de Estados Unidos fue un documento histórico que estableció la separación de las trece colonias americanas del Imperio Británico.",
  },
  {
    id: "5",
    title: "Descubrimiento de la penicilina",
    category: "Ciencia y tecnología",
    date: "1928",
    description:
      "Alexander Fleming descubre la penicilina, lo que revoluciona la medicina moderna y salva millones de vidas.",
  },

  {
    id: "6",
    title: "Maracanazo",
    category: "Deporte",
    date: "1950",
    description:
      "El gol de Ghiggia en el partido decisivo de Brasil-Uruguay en el Mundial 1950 le el campeonato al equipo charrúa. Todavía se sigue utilizando la palabra 'Maracanazo' para definir una victoria de un equipo, preferentemente en una final, en campo ajeno y teniendo todos los factores en contra.",
  },
  {
    id: "7",
    title: "Eliminatoria Celta - Manchester Europa League",
    category: "Deporte",
    date: "2017",
    description: "Tenías que haber tirado...",
  },
  {
    id: "8",
    title: "Finalización de La Gioconda (Mona Lisa)",
    category: "Arte y literatura",
    date: "1519",
    description:
      "La Gioconda es una obra maestra del arte renacentista creada por Leonardo da Vinci. Es una de las pinturas más famosas y valiosas del mundo.",
  },
  {
    id: "9",
    title: "Concierto para piano No. 5 de Beethoven",
    category: "Música y cine",
    date: "1809",
    description:
      "El Concierto para piano No. 5 de Beethoven, también conocido como el Emperador, es una de las obras más conocidas y apreciadas del compositor alemán Ludwig van Beethoven.",
  },
  {
    id: "10",
    title: "Inicio del programa Apollo",
    category: "Ciencia y tecnología",
    date: "1961",
    description:
      "El Programa Apollo fue un programa espacial estadounidense que tuvo como objetivo enviar humanos a la Luna y traerlos de regreso a la Tierra. La misión Apolo 11 en 1969 fue la primera en lograr este objetivo.",
  },
  {
    id: "11",
    title: "Final de la Guerra de los Cien Años",
    category: "Política y guerra",
    date: "1453",
    description:
      "La Guerra de los Cien Años fue una serie de conflictos entre Inglaterra y Francia que duró 116 años. La guerra tuvo un impacto significativo en la historia europea y mundial.",
  },
  {
    id: "12",
    title: "La llegada del hombre a la Luna",
    category: "Ciencia y tecnología",
    date: "1969",
    description:
      "La llegada del hombre a la Luna fue un hito histórico en la exploración espacial. El 20 de julio de 1969, el astronauta Neil Armstrong se convirtió en la primera persona en pisar la superficie lunar.",
  },
  {
    id: "13",
    title: "La caída del Muro de Berlín",
    category: "Política y guerra",
    date: "1989",
    description:
      "La caída del Muro de Berlín marcó el final de la Guerra Fría y la reunificación de Alemania",
  },
  {
    id: "14",
    title: "Creación del Imperio romano",
    category: "Política y guerra",
    date: "-27",
    description:
      "El Imperio romano fue un estado que duró más de cinco siglos y cuyo legado se puede encontrar en la cultura occidental actual.",
  },
  {
    id: "15",
    title: "Aparición de la World Wide Web",
    category: "Ciencia y tecnología",
    date: "1989",
    description:
      "La World Wide Web, también conocida como Web o WWW, es un sistema de distribución de información en línea que ha transformado la forma en que las personas acceden y comparten información.",
  },
  {
    id: "16",
    title: "Descubrimiento de la ley de la gravedad por Isaac Newton",
    category: "Ciencia y tecnología",
    date: "1687",
    description:
      "La ley de la gravedad de Newton es una ley física que describe la atracción gravitatoria entre los objetos y se utiliza para explicar los movimientos de los cuerpos celestes.",
  },
  {
    id: "17",
    title: "Publicación de 'El origen de las especies' de Charles Darwin",
    category: "Ciencia y tecnología",
    date: "1859",
    description:
      "El origen de las especies es un libro de Charles Darwin que propone la teoría de la evolución por selección natural, que ha sido una de las ideas más influyentes en la biología y la ciencia en general.",
  },
  {
    id: "18",
    title: "Descubrimiento de la electricidad por Benjamin Franklin",
    category: "Ciencia y tecnología",
    date: "1752",
    description:
      "Benjamin Franklin es conocido por su experimento con la cometa y la llave, que demostró que los rayos eran una forma de electricidad.",
  },
  {
    id: "19",
    title: "Inauguración del Canal de Panamá",
    category: "Ciencia y tecnología",
    date: "1914",
    description:
      "El Canal de Panamá es una de las obras de ingeniería más importantes del mundo y conecta los océanos Atlántico y Pacífico a través del istmo de Panamá.",
  },
  {
    id: "20",
    title: "Descubrimiento de la ley de conservación de la energía",
    category: "Ciencia y tecnología",
    date: "1847",
    description:
      "En 1847, el físico alemán Hermann von Helmholtz descubrió la ley de conservación de la energía, que establece que la energía no se puede crear ni destruir, solo se puede transformar de una forma a otra. Este descubrimiento fue fundamental para el desarrollo de la física y la comprensión de la energía y sus propiedades.",
  },
  {
    id: "21",
    title: "Descubrimiento de la circulación sanguínea por William Harvey",
    category: "Ciencia y tecnología",
    date: "1628",
    description:
      "William Harvey fue un médico inglés que descubrió cómo funciona el sistema circulatorio del cuerpo humano y cómo la sangre es bombeada por el corazón.",
  },
  {
    id: "22",
    title: "Publicación de la teoría de la relatividad por Albert Einstein",
    category: "Ciencia y tecnología",
    date: "1915",
    description:
      "La teoría de la relatividad es una teoría física propuesta por Albert Einstein que cambió la forma en que entendemos el tiempo, el espacio y la gravedad.",
  },
  {
    id: "23",
    title: "Descubrimiento de la radioactividad por Marie y Pierre Curie",
    category: "Ciencia y tecnología",
    date: "1898",
    description:
      "La radioactividad es un fenómeno físico descubierto por Marie y Pierre Curie que ha tenido aplicaciones en la medicina, la energía nuclear y otros campos.",
  },
  {
    id: "24",
    title: "Fundación de la ciudad de Roma",
    category: "Política y guerra",
    date: "-753",
    description:
      "La ciudad de Roma fue fundada por Rómulo y Remo y se convirtió en la capital del Imperio romano, uno de los estados más influyentes de la historia.",
  },
  {
    id: "25",
    title: "Caída del Imperio romano de Occidente",
    category: "Política y guerra",
    date: "476",
    description:
      "El Imperio romano de Occidente fue uno de los estados más grandes y poderosos de la antigüedad, pero su caída marcó el fin de la Edad Antigua y el inicio de la Edad Media.",
  },
  {
    id: "26",
    title: "Revolución rusa",
    category: "Política y guerra",
    date: "1917",
    description:
      "La Revolución rusa fue un proceso político que llevó a la creación de la Unión Soviética y tuvo un gran impacto en el mundo durante el siglo XX.",
  },
  {
    id: "27",
    title: "Fundación de la ciudad de Constantinopla",
    category: "Política y guerra",
    date: "330",
    description:
      "Constantinopla fue una de las ciudades más importantes del mundo antiguo y se convirtió en la capital del Imperio romano de Oriente, también conocido como Imperio bizantino.",
  },
  {
    id: "28",
    title: "Descubrimiento de la ley de la termodinámica por Clausius",
    category: "Ciencia y tecnología",
    date: "1865",
    description:
      "La ley de la termodinámica es una ley física que establece que la energía siempre fluye de un objeto de mayor temperatura a uno de menor temperatura.",
  },
  {
    id: "29",
    title: "Descubrimiento del ADN por Watson y Crick",
    category: "Ciencia y tecnología",
    date: "1953",
    description:
      "La estructura del ADN fue descubierta por James Watson y Francis Crick, lo que ha llevado a avances significativos en la biología y la medicina.",
  },
  {
    id: "30",
    title: "Invención del teléfono por Alexander Graham Bell",
    category: "Ciencia y tecnología",
    date: "1876",
    description:
      "La invención del teléfono por Alexander Graham Bell revolucionó las comunicaciones y permitió que las personas hablaran a larga distancia sin tener que estar físicamente presentes.",
  },
  {
    id: "31",
    title: "Primeros Juegos Olímpicos modernos",
    category: "Deporte",
    date: "1896",
    description:
      "Los primeros Juegos Olímpicos modernos se llevaron a cabo en Atenas, Grecia, del 6 al 15 de abril de 1896. Estos juegos marcaron el renacimiento del movimiento olímpico y contaron con la participación de 241 atletas de 14 países, compitiendo en 43 eventos.",
  },
  {
    id: "32",
    title: "Primer Mundial de Fútbol en México",
    category: "Deporte",
    date: "1970",
    description:
      "El Mundial de Fútbol en México fue la novena edición del torneo y se considera una de las mejores ediciones en la historia del fútbol, con jugadores como Pelé, Beckenbauer y Cruyff.",
  },
  {
    id: "33",
    title: "Juegos Olímpicos de Barcelona",
    category: "Deporte",
    date: "1992",
    description:
      "Los Juegos Olímpicos de Barcelona fueron una de las ediciones más exitosas y memorables de los Juegos Olímpicos, con la participación de deportistas de todo el mundo y la creación de instalaciones deportivas impresionantes.",
  },
  {
    id: "34",
    title: "Mundial de Fútbol en Alemania",
    category: "Deporte",
    date: "2006",
    description:
      "El Mundial de Fútbol de Alemania fue la decimoctava edición del torneo y se considera una de las mejores en la historia del fútbol, con partidos emocionantes y equipos de gran calidad.",
  },
  {
    id: "35",
    title: "Juegos Olímpicos de Londres",
    category: "Deporte",
    date: "2012",
    description:
      "Los Juegos Olímpicos de Londres fueron una de las ediciones más exitosas y espectaculares de los Juegos Olímpicos, con la participación de deportistas de todo el mundo y una ceremonia de apertura impresionante.",
  },
  {
    id: "36",
    title: "Último Mundial de Fútbol en Brasil",
    category: "Deporte",
    date: "2014",
    description:
      "El Mundial de Fútbol de Brasil fue la vigésima edición del torneo y se considera una de las más emocionantes en la historia del fútbol, con partidos llenos de acción y equipos de gran calidad.",
  },
  {
    id: "37",
    title: "Juegos Olímpicos de Río de Janeiro",
    category: "Deporte",
    date: "2016",
    description:
      "Los Juegos Olímpicos de Río de Janeiro fueron la primera edición de los Juegos Olímpicos en Sudamérica y se destacaron por la belleza de las instalaciones deportivas y la participación de deportistas de todo el mundo.",
  },
  {
    id: "38",
    title: "La mano de Dios",
    category: "Deporte",
    date: "1986",
    description:
      "Fue la tarde en que Diego Armando Maradona brilló ante Inglaterra, por los cuartos de final del Mundial de México.",
  },
  {
    id: "39",
    title: "Juegos Olímpicos de Tokio",
    category: "Deporte",
    date: "2021",
    description:
      "Los Juegos Olímpicos de Tokio fueron pospuestos en 2020 debido a la pandemia de COVID-19, pero finalmente se llevaron a cabo en 2021 con la participación de deportistas de todo el mundo y medidas de seguridad especiales.",
  },
  {
    id: "40",
    title: "Primer gol de Leo Messi como profesional",
    category: "Deporte",
    date: "2005",
    description: "Messi anota su primer gol ante el Albacete",
  },

  {
    id: "41",
    title: "Invención del piano por Bartolomeo Cristofori",
    category: "Música y cine",
    date: "1709",
    description:
      "El piano es uno de los instrumentos más populares en la música clásica y popular. Fue inventado por Bartolomeo Cristofori en Italia a principios del siglo XVIII.",
  },
  {
    id: "42",
    title: "Estreno de la Novena Sinfonía de Beethoven",
    category: "Música y cine",
    date: "1824",
    description:
      "La Novena Sinfonía de Beethoven es una de las obras más importantes de la música clásica y es conocida por su famoso coro final 'Oda a la alegría'.",
  },
  {
    id: "43",
    title: "Publicación del 'Canon en Re mayor' de Johann Pachelbel",
    category: "Música y cine",
    date: "1694",
    description:
      "El 'Canon en Re mayor' de Johann Pachelbel es una de las obras más famosas de la música clásica y ha sido utilizada en numerosas películas y anuncios.",
  },
  {
    id: "44",
    title: "Creación de la Opera de París",
    category: "Música y cine",
    date: "1669",
    description:
      "La Opera de París es una de las instituciones operísticas más importantes del mundo y ha sido escenario de algunas de las óperas más famosas de la historia.",
  },
  {
    id: "45",
    title: "Creación de la Guitarra Eléctrica",
    category: "Música y cine",
    date: "1931",
    description:
      "La guitarra eléctrica es uno de los instrumentos más populares en la música popular y fue inventada por Adolph Rickenbacker y George Beauchamp en Estados Unidos.",
  },
  {
    id: "46",
    title: "Estreno de la ópera 'Carmen' de Georges Bizet",
    category: "Música y cine",
    date: "1875",
    description:
      "La ópera 'Carmen' de Georges Bizet es una de las óperas más famosas de la historia y ha sido interpretada en todo el mundo.",
  },
  {
    id: "47",
    title: "Creación del primer disco de vinilo",
    category: "Música y cine",
    date: "1948",
    description:
      "El disco de vinilo es un formato de grabación de música que fue creado por la compañía discográfica Columbia Records en 1948 y se convirtió en el formato más popular durante varias décadas.",
  },
  {
    id: "48",
    title: "Publicación del álbum 'Thriller' de Michael Jackson",
    category: "Música y cine",
    date: "1982",
    description:
      "'Thriller' es el sexto álbum de estudio de Michael Jackson y es uno de los álbumes más vendidos de la historia de la música, con más de 66 millones de copias vendidas en todoel mundo.",
  },
  {
    id: "49",
    title: "Creación del festival de música de Woodstock",
    category: "Música y cine",
    date: "1969",
    description:
      "El festival de música de Woodstock fue uno de los festivales de música más importantes de la historia y reunió a más de 400,000 personas en un fin de semana de música y paz.",
  },
  {
    id: "50",
    title: "Estreno de la ópera 'La traviata' de Giuseppe Verdi",
    category: "Música y cine",
    date: "1853",
    description:
      "La ópera 'La traviata' de Giuseppe Verdi es una de las óperas más populares del repertorio y ha sido interpretada en todo el mundo desde su estreno en 1853.",
  },
  {
    id: "51",
    title: "Fin de la Reconquista Española",
    category: "Política y guerra",
    date: "1492",
    description:
      "El Reino nazarí de Granada se rinde ante el ejército de Fernando e Isabel, posteriormente los Reyes Católicos",
  },
  {
    id: "52",
    title: "Revolución de los Claveles",
    category: "Política y guerra",
    date: "1974",
    description:
      "Movimiento popular y militar en Portugal que derrocó la dictadura de Marcelo Caetano.",
  },
  {
    id: "53",
    title: "Invención de la fregona",
    category: "Ciencia y tecnología",
    date: "1956",
    description:
      "El ingeniero español Manuel Jalón Corominas patentó la fregona, revolucionando la limpieza doméstica.",
  },
  {
    id: "54",
    title: "Fin de la Guerra Civil Española",
    category: "Política y guerra",
    date: "1939",
    description: "Victoria del bando franquista en la Guerra Civil Española.",
  },
  {
    id: "55",
    title: "Inicio de la Guerra Civil Española",
    category: "Política y guerra",
    date: "1936",
    description:
      "Conflicto bélico entre las fuerzas republicanas y los sublevados encabezados por Francisco Franco.",
  },
  {
    id: "56",
    title: "Inicio de la I Guerra Mundial",
    category: "Política y guerra",
    date: "1914",
    description:
      "Conflicto bélico mundial que involucró a las principales potencias de Europa y que se extendió hasta 1918.",
  },
  {
    id: "57",
    title: "Inicio de la II Guerra Mundial",
    category: "Política y guerra",
    date: "1939",
    description:
      "Conflicto bélico mundial que involucró a las principales potencias de Europa y que se extendió hasta 1945.",
  },
  {
    id: "58",
    title: "Fin de la I Guerra Mundial",
    category: "Política y guerra",
    date: "1918",
    description:
      "Firma del Tratado de Versalles, que puso fin a la Primera Guerra Mundial.",
  },
  {
    id: "59",
    title: "Fin de la II Guerra Mundial",
    category: "Política y guerra",
    date: "1945",
    description:
      "Rendición incondicional de Alemania ante las fuerzas Aliadas, poniendo fin a la Segunda Guerra Mundial.",
  },
  {
    id: "60",
    title: "Primer gol de Cristiano Ronaldo como profesional",
    category: "Deporte",
    date: "2002",
    description:
      "Cristiano Ronaldo marcó su primer gol como profesional con el Sporting de Lisboa ante el Moreirense.",
  },
  {
    id: "61",
    title: "Campeonato de Liga del Deportivo de la Coruña",
    category: "Deporte",
    date: "2000",
    description:
      "El Deportivo de la Coruña se proclamó campeón de la Liga española de fútbol en la temporada 1999/2000.",
  },
  {
    id: "62",
    title: "España campeona mundial de Baloncesto por segunda vez",
    category: "Deporte",
    date: "2019",
    description:
      "La selección española de baloncesto ganó el campeonato mundial disputado en China en el año 2019.",
  },
  {
    id: "63",
    title: "España campeona mundial de Baloncesto por primera vez",
    category: "Deporte",
    date: "2006",
    description:
      "La selección española de baloncesto ganó el campeonato mundial disputado en Japón en el año 2006.",
  },
  {
    id: "64",
    title:
      "Lewis Hamilton iguala el récord de Michael Schumacher de 7 campeonatos de Fórmula 1",
    category: "Deporte",
    date: "2020",
    description:
      "El piloto británico Lewis Hamilton ganó su séptimo campeonato mundial de Fórmula 1, igualando el récord del alemán Michael Schumacher.",
  },
  {
    id: "65",
    title: "Fernando Alonso gana las 24 Horas de Le Mans",
    category: "Deporte",
    date: "2018",
    description:
      "El piloto español Fernando Alonso ganó las 24 Horas de Le Mans junto a sus compañeros de equipo Sébastien Buemi y Kazuki Nakajima, logrando así uno de los mayores hitos en el automovilismo mundial.",
  },
  {
    id: "66",
    title: "Valentino Rossi gana su noveno título mundial de motociclismo",
    category: "Deporte",
    date: "2009",
    description:
      "El piloto italiano Valentino Rossi ganó su noveno campeonato mundial de motociclismo en la categoría reina, MotoGP, consolidándose como uno de los más grandes pilotos de la historia del motociclismo.",
  },
  {
    id: "67",
    title: "Ayrton Senna gana el Gran Premio de Mónaco bajo la lluvia",
    category: "Deporte",
    date: "1984",
    description:
      "El piloto brasileño Ayrton Senna consiguió su primera victoria en el Gran Premio de Mónaco en una carrera disputada bajo condiciones de lluvia torrencial, demostrando su habilidad y talento al volante.",
  },
  {
    id: "68",
    title: "Michael Schumacher gana su séptimo campeonato mundial de Fórmula 1",
    category: "Deporte",
    date: "2004",
    description:
      "El piloto alemán Michael Schumacher ganó su séptimo campeonato mundial de Fórmula 1, consolidándose como uno de los más grandes pilotos de la historia de este deporte.",
  },
  {
    id: "69",
    title: "Sebastian Vettel gana su cuarto campeonato mundial de Fórmula 1",
    category: "Deporte",
    date: "2013",
    description:
      "El piloto alemán Sebastian Vettel ganó su cuarto campeonato mundial de Fórmula 1 consecutivo, demostrando su dominio absoluto en la máxima categoría del automovilismo mundial.",
  },
  {
    id: "70",
    title: "Marc Márquez gana su primer campeonato mundial de MotoGP",
    category: "Deporte",
    date: "2013",
    description:
      "El piloto español Marc Márquez ganó su primer campeonato mundial de MotoGP en su temporada de debut en la categoría, convirtiéndose en el campeón más joven de la historia de este deporte.",
  },
  {
    id: "71",
    title: "Niki Lauda gana su tercer campeonato mundial de Fórmula 1",
    category: "Deporte",
    date: "1984",
    description:
      "El piloto austriaco Niki Lauda ganó su tercer campeonato mundial de Fórmula 1, tras una temporada de intensa rivalidad con su compañero de equipo, Alain Prost.",
  },
  {
    id: "72",
    title: "Michael Schumacher gana el Gran Premio de San Marino con Ferrari",
    category: "Deporte",
    date: "2003",
    description:
      "El piloto alemán Michael Schumacher ganó el Gran Premio de San Marino en el circuito de Imola, logrando una victoria histórica con la Scuderia Ferrari.",
  },
  {
    id: "73",
    title: "Ayrton Senna y Alain Prost chocan en el Gran Premio de Japón",
    category: "Deporte",
    date: "1989",
    description:
      "Los pilotos Ayrton Senna y Alain Prost chocaron en la primera curva del Gran Premio de Japón, en un incidente que definió el campeonato mundial de Fórmula 1 de ese año.",
  },
  {
    id: "74",
    title: "Sebastian Vettel gana el Gran Premio de Alemania con Red Bull",
    category: "Deporte",
    date: "2013",
    description:
      "El piloto alemán Sebastian Vettel ganó el Gran Premio de Alemania en el circuito de Nürburgring, logrando una victoria emotiva en su país con su equipo, Red Bull Racing.",
  },
  {
    id: "75",
    title: "Lewis Hamilton gana el Gran Premio de Gran Bretaña con Mercedes",
    category: "Deporte",
    date: "2014",
    description:
      "El piloto británico Lewis Hamilton ganó el Gran Premio de Gran Bretaña en el circuito de Silverstone, logrando una victoria memorable con su equipo, Mercedes-AMG Petronas.",
  },
  {
    id: "76",
    title: "Valentino Rossi y Marc Márquez chocan en el Gran Premio de Malasia",
    category: "Deporte",
    date: "2015",
    description:
      "Los pilotos Valentino Rossi y Marc Márquez chocaron en el Gran Premio de Malasia de MotoGP, en un incidente que generó mucha controversia y tensiones entre ambos pilotos y sus equipos.",
  },
  {
    id: "77",
    title: "Fernando Alonso gana el Gran Premio de Europa con Renault",
    category: "Deporte",
    date: "2005",
    description:
      "El piloto español Fernando Alonso ganó el Gran Premio de Europa en el circuito de Nürburgring, logrando una victoria memorable con su equipo, Renault F1 Team, en su camino hacia su primer título mundial de Fórmula 1.",
  },
  {
    id: "78",
    title: "Inauguración del Museo Guggenheim Bilbao",
    category: "Arte y literatura",
    date: "1997",
    description:
      "El Museo Guggenheim Bilbao fue inaugurado en la ciudad española de Bilbao, convirtiéndose en uno de los museos de arte contemporáneo más importantes del mundo y uno de los hitos arquitectónicos más emblemáticos del siglo XX.",
  },
  {
    id: "79",
    title: "Publicación de la novela Cien años de soledad",
    category: "Arte y literatura",
    date: "1967",
    description:
      "La novela Cien años de soledad, del escritor colombiano Gabriel García Márquez, fue publicada en 1967, convirtiéndose en un hito de la literatura hispanoamericana y una de las obras más importantes del llamado 'realismo mágico'.",
  },
  {
    id: "80",
    title: "Estreno de la película El Padrino",
    category: "Música y cine",
    date: "1972",
    description:
      "La película El Padrino, dirigida por Francis Ford Coppola y basada en la novela homónima de Mario Puzo, se estrenó en 1972, convirtiéndose en un clásico del cine y una de las películas más influyentes de la historia.",
  },
  {
    id: "81",
    title:
      "Exposición de Pablo Picasso en el Museo de Arte Moderno de Nueva York",
    category: "Arte y literatura",
    date: "1939",
    description:
      "El Museo de Arte Moderno de Nueva York organizó una exposición retrospectiva del trabajo de Pablo Picasso en 1939, convirtiéndose en la primera gran retrospectiva del artista en los Estados Unidos y en un evento decisivo para la comprensión del arte moderno en el país.",
  },
  {
    id: "82",
    title:
      "Publicación de la novela Don Quijote de la Mancha de Miguel de Cervantes",
    category: "Arte y literatura",
    date: "1605",
    description:
      "La novela Don Quijote de la Mancha, escrita por Miguel de Cervantes, fue publicada por primera vez en 1605, convirtiéndose en una obra fundamental de la literatura española y universal, y en una de las más influyentes y célebres de la historia.",
  },
  {
    id: "83",
    title: "Exposición de arte contemporáneo Documenta de Kassel",
    category: "Arte y literatura",
    date: "1955",
    description:
      "La exposición Documenta de Kassel se inauguró en la ciudad alemana de Kassel en 1955, convirtiéndose en uno de los eventos más importantes del mundo del arte contemporáneo y una plataforma fundamental para la promoción y el reconocimiento de los artistas contemporáneos más destacados.",
  },
  {
    id: "84",
    title: "Publicación de la obra de teatro Hamlet",
    category: "Arte y literatura",
    date: "1603",
    description:
      "La publicación de la obra de teatro 'Hamlet', escrita por William Shakespeare, tuvo lugar aproximadamente en 1603, aunque la fecha exacta es incierta. La obra es una de las tragedias más famosas de Shakespeare y sigue la historia del príncipe Hamlet de Dinamarca mientras busca vengar la muerte de su padre. La obra aborda temas de traición, venganza, incesto, corrupción y mortalidad y es conocida por sus diálogos profundos y memorables, incluyendo el famoso soliloquio 'Ser o no ser'. 'Hamlet' ha sido interpretado en numerosas ocasiones a lo largo de los siglos y ha influido en la literatura, el teatro y el cine en todo el mundo.",
  },
  {
    id: "85",
    title: "Muerte del Cid Campeador",
    category: "Política y guerra",
    date: "1099",
    description:
      "El Cid Campeador, un legendario héroe de la Reconquista española, murió en Valencia en 1099.",
  },
  {
    id: "86",
    title: "Décima Liga de Campeones del Real Madrid",
    category: "Deporte",
    date: "2014",
    description:
      "El Real Madrid ganó su décima Liga de Campeones de la UEFA en 2014, venciendo al Atlético de Madrid en una final épica que se decidió en la prórroga. Esta victoria es considerada una de las más importantes en la historia del club y del fútbol español y europeo.",
  },
  {
    id: "87",
    title: "Inauguración del Museo del Prado",
    category: "Arte y literatura",
    date: "1819",
    description:
      "El Museo del Prado, uno de los museos de arte más importantes del mundo, fue inaugurado en Madrid en 1819, convirtiéndose en un hito de la cultura española.",
  },
  {
    id: "88",
    title: "Tercera Liga de Campeones del FC Barcelona",
    category: "Deporte",
    date: "2009",
    description:
      "El FC Barcelona ganó su tercera Liga de Campeones de la UEFA en 2009, venciendo al Manchester United en la final disputada en Roma. Esta victoria es considerada una de las más importantes en la historia del club y del fútbol español y europeo, y sirvió para consagrar a un equipo liderado por la figura de Lionel Messi.",
  },
  {
    id: "89",
    title: "Gol de Iniesta en la final del Mundial de Fútbol en Sudáfrica",
    category: "Deporte",
    date: "2010",
    description:
      "El futbolista español Andrés Iniesta marcó el gol de la victoria en la final del Mundial de Fútbol de Sudáfrica en 2010, dando a España su primer título mundial de fútbol.",
  },
  {
    id: "90",
    title: "Fusilamiento de Federico García Lorca",
    category: "Arte y literatura",
    date: "1936",
    description:
      "El poeta y dramaturgo español Federico García Lorca fue fusilado por las fuerzas franquistas durante la Guerra Civil Española en 1936.",
  },
  {
    id: "91",
    title: "Premio Nobel de Literatura para Camilo José Cela",
    category: "Arte y literatura",
    date: "1989",
    description:
      "El escritor español Camilo José Cela recibió el Premio Nobel de Literatura en 1989, en reconocimiento a su obra literaria y su contribución a la cultura española.",
  },
  {
    id: "92",
    title: "Fallecimiento de Francisco Franco",
    category: "Política y guerra",
    date: "1975",
    description:
      "El dictador español Francisco Franco murió en 1975, poniendo fin a una de las épocas más oscuras y controvertidas de la historia española.",
  },
  {
    id: "93",
    title: "Creación del Parque Nacional de los Picos de Europa",
    category: "Ciencia y tecnología",
    date: "1918",
    description:
      "El Parque Nacional de los Picos de Europa fue creado en 1918, convirtiéndose en el primer parque nacional de España y uno de los primeros de Europa.",
  },
  {
    id: "94",
    title: "Atentados del 11-M en Madrid",
    category: "Política y guerra",
    date: "2004",
    description:
      "Una serie de atentados terroristas en los trenes de cercanías de Madrid el 11 de marzo de 2004 dejó más de 190 muertos y 2000 heridos, convirtiéndose en el peor ataque terrorista en la historia de España.",
  },
  {
    id: "95",
    title: "Creación del Parque Nacional de Doñana",
    category: "Ciencia y tecnología",
    date: "1969",
    description:
      "El Parque Nacional de Doñana, situado en Andalucía, fue creado en 1969 como reserva natural y hábitat de numerosas especies de aves migratorias y otros animales en peligro de extinción.",
  },
  {
    id: "96",
    title: "Inauguración del Museo Reina Sofía",
    category: "Arte y literatura",
    date: "1992",
    description:
      "El Museo Reina Sofía, dedicado al arte contemporáneo y moderno, fue inaugurado en Madrid en 1992, convirtiéndose en uno de los museos más importantes de España y del mundo.",
  },
  {
    id: "97",
    title: "Proclamación de la Segunda República",
    category: "Política y guerra",
    date: "1931",
    description:
      "La Segunda República española fue proclamada en 1931, tras la abdicación del rey Alfonso XIII, dando lugar a un periodo de profundos cambios políticos, sociales y culturales en España.",
  },
  {
    id: "98",
    title: "Fallecimiento de Pablo Picasso",
    category: "Arte y literatura",
    date: "1973",
    description:
      "El famoso artista español Pablo Picasso falleció en Francia en 1973, dejando un legado artístico que influyó profundamente en la cultura y el arte del siglo XX.",
  },
  {
    id: "99",
    title: "Creación del parque nacional Illas Atlánticas",
    category: "Ciencia y tecnología",
    date: "2002",
    description:
      "El Parque Nacional de las Islas Atlánticas fue creado en España con el objetivo de proteger y preservar cuatro islas atlánticas: Cíes, Ons, Sálvora y Cortegada. Fue establecido el 1 de octubre de 2002 y se encuentra en la comunidad autónoma de Galicia, en la costa noroeste de la península ibérica. Este parque nacional es conocido por su impresionante biodiversidad y belleza paisajística, con playas de arena blanca, aguas cristalinas y una gran variedad de flora y fauna. El parque es un refugio para numerosas especies de aves, así como para focas y delfines que habitan en sus aguas. La creación del Parque Nacional de las Islas Atlánticas ha contribuido a la conservación de este valioso ecosistema y al fomento del turismo sostenible en la región.",
  },
  {
    id: "100",
    title: "Fundación del Real Club Celta de Vigo",
    category: "Deporte",
    date: "1923",
    description:
      "El Real Club Celta de Vigo fue fundado en 1923 por un grupo de estudiantes y aficionados al fútbol en la ciudad de Vigo, convirtiéndose en uno de los equipos más importantes de Galicia y de España. Ha sido reconocido por su estilo de juego ofensivo y atractivo para el espectador.",
  },
  {
    id: "101",
    title: "Creación de la Universidad de Santiago de Compostela",
    category: "Ciencia y tecnología",
    date: "1495",
    description:
      "La Universidad de Santiago de Compostela fue creada en 1495 por el rey Fernando el Católico, convirtiéndose en una de las primeras universidades de España y una de las más importantes del mundo hispano.",
  },
  {
    id: "102",
    title: "Nacimiento de Isaac Albéniz",
    category: "Música y cine",
    date: "1860",
    description:
      "Isaac Albéniz, uno de los compositores más importantes de la música española, nació en Camprodón (Girona) en 1860. Albéniz es conocido por sus obras para piano, como la suite Iberia, y por ser uno de los primeros compositores en incorporar elementos de la música popular y folklórica en sus composiciones.",
  },
  {
    id: "103",
    title: "Nacimiento de David Bowie",
    category: "Música y cine",
    date: "1947",
    description:
      "El músico británico David Bowie, uno de los artistas más influyentes y vanguardistas de la música pop y del rock, nació en Brixton (Londres) en 1947. Bowie fue reconocido por su estilo extravagante y su capacidad para reinventarse a sí mismo a lo largo de su carrera, y ha sido influencia para numerosos músicos y artistas de todo el mundo.",
  },
  {
    id: "104",
    title:
      "Publicación del álbum 'Sgt. Pepper's Lonely Hearts Club Band' de The Beatles",
    category: "Música y cine",
    date: "1967",
    description:
      "El álbum 'Sgt. Pepper's Lonely Hearts Club Band', lanzado por la banda británica The Beatles en 1967, es considerado uno de los discos más importantes e influyentes de la historia de la música. Este álbum, que presenta una variedad de estilos y experimentos musicales, marcó un punto de inflexión en la carrera de la banda y en la música pop en general.",
  },
  {
    id: "105",
    title: "Nacimiento de Freddie Mercury",
    category: "Música y cine",
    date: "1946",
    description:
      "El cantante británico Freddie Mercury, líder de la banda Queen y uno de los músicos más importantes y carismáticos de la historia del rock, nació en Zanzíbar (actual Tanzania) en 1946. Mercury fue reconocido por su talento vocal y su capacidad para conectar con el público, y su legado musical sigue siendo relevante y popular en todo el mundo.",
  },
  {
    id: "106",
    title: "Nacimiento de Paco de Lucía",
    category: "Música y cine",
    date: "1947",
    description:
      "El guitarrista Paco de Lucía, uno de los artistas más importantes de la historia del flamenco y de la música española en general, nació en Algeciras (Cádiz) en 1947. De Lucía fue reconocido por su innovación en el mundo del flamenco y por su habilidad técnica en la guitarra, y colaboró con numerosos artistas a lo largo de su carrera.",
  },
  {
    id: "107",
    title: "Muerte de Jimi Hendrix",
    category: "Música y cine",
    date: "1970",
    description:
      "El músico estadounidense Jimi Hendrix, considerado uno de los guitarristas más influyentes de la historia del rock, falleció en Londres en 1970 a los 27 años. Hendrix dejó un legado musical importante, y su habilidad para tocar la guitarra y experimentar con los efectos de sonido han inspirado a numerosos músicos desde entonces.",
  },
  {
    id: "108",
    title: "Muerte de Elvis Presley",
    category: "Música y cine",
    date: "1977",
    description:
      "Elvis Presley, conocido como 'El Rey del Rock and Roll', murió en Memphis en 1977 a los 42 años. Presley fue uno de los artistas más exitosos y populares de la historia de la música, y su estilo musical y su imagen han sido imitados y homenajeados por muchos músicos y artistas desde entonces.",
  },
  {
    id: "109",
    title: "Publicación del álbum 'Nevermind' de Nirvana",
    category: "Música y cine",
    date: "1991",
    description:
      "El álbum 'Nevermind' de la banda estadounidense Nirvana, lanzado en 1991, fue un gran éxito comercial y crítico, y es considerado uno de los discos más importantes e influyentes de la historia del rock. El sonido grunge y la actitud anti-establishment de Nirvana tuvieron un gran impacto en la música de los años 90 y en la cultura popular en general.",
  },
  {
    id: "110",
    title: "Publicación del álbum 'Appetite for Destruction' de Guns N' Roses",
    category: "Música y cine",
    date: "1987",
    description:
      "El álbum debut de la banda estadounidense Guns N' Roses, 'Appetite for Destruction', lanzado en 1987, fue un gran éxito comercial y catapultó a la banda a la fama mundial. Con su estilo de rock duro y su actitud rebelde, Guns N' Roses se convirtió en uno de los grupos más importantes y reconocidos de la década de 1980 y principios de los 90.",
  },
  {
    id: "111",
    title: "Publicación del álbum 'Born to Run' de Bruce Springsteen",
    category: "Música y cine",
    date: "1975",
    description:
      "El álbum 'Born to Run', lanzado por el músico estadounidense Bruce Springsteen en 1975, fue un gran éxito y es considerado uno de los discos más influyentes y significativos de la música rock. El estilo musical y las letras de Springsteen, que reflejan la vida de los trabajadores y los marginados, han sido admirados y estudiados por muchos músicos y críticos desde entonces.",
  },
  {
    id: "112",
    title: "Nacimiento de Ludwig van Beethoven",
    category: "Música y cine",
    date: "1770",
    description:
      "Ludwig van Beethoven fue un compositor y pianista alemán, considerado uno de los músicos más importantes e influyentes de la historia de la música clásica. Nació en Bonn en 1770 y su obra, que incluye numerosas sinfonías, conciertos, óperas y música de cámara, ha sido estudiada, interpretada y admirada por generaciones de músicos y aficionados.",
  },
  {
    id: "113",
    title: "Invención del sistema de corriente alterna",
    category: "Ciencia y tecnología",
    date: "1888",
    description:
      "El sistema de corriente alterna (AC) fue inventado por Nikola Tesla en 1888. Este sistema de distribución de energía eléctrica es más eficiente que el sistema de corriente continua (DC) y permite la transmisión de energía eléctrica a largas distancias. El sistema AC es utilizado hoy en día en la mayoría de las redes eléctricas del mundo.",
  },
  {
    id: "114",
    title: "Nacimiento de Miguel de Cervantes",
    category: "Arte y literatura",
    date: "1547",
    description:
      "Miguel de Cervantes fue un escritor español, autor de la obra cumbre de la literatura española y una de las más importantes de la literatura mundial, 'El Quijote'. Nació en Alcalá de Henares en 1547 y su obra ha sido estudiada, traducida y adaptada en todo el mundo, convirtiéndose en una referencia de la literatura universal.",
  },
  {
    id: "115",
    title:
      "Coronación de Carlomagno como emperador del Sacro Imperio Romano Germánico",
    category: "Política y guerra",
    date: "800",
    description:
      "El rey franco Carlomagno fue coronado como emperador del Sacro Imperio Romano Germánico por el papa León III en el año 800. La coronación de Carlomagno como emperador unificó gran parte de Europa Occidental bajo un solo gobierno y sentó las bases para el desarrollo de la Europa medieval.",
  },
  {
    id: "116",
    title: "Nacimiento de William Shakespeare",
    category: "Arte y literatura",
    date: "1564",
    description:
      "William Shakespeare fue un dramaturgo y poeta inglés, considerado uno de los más grandes escritores de la literatura universal. Nació en Stratford-upon-Avon en 1564 y su obra, que incluye numerosas obras teatrales y sonetos, ha sido estudiada, representada y admirada por generaciones de artistas y amantes de la literatura en todo el mundo.",
  },
  {
    id: "117",
    title: "Muerte de Ragnar Lodbrok",
    category: "Política y guerra",
    date: "865",
    description:
      "Ragnar Lodbrok, un legendario rey vikingo, murió en el año 865 mientras estaba prisionero del rey anglosajón Aella de Northumbria. La muerte de Ragnar Lodbrok fue uno de los eventos más importantes de la era vikinga y ha sido inmortalizada en la saga nórdica Ragnars saga Loðbrókar.",
  },
  {
    id: "118",
    title: "Fundación de la ciudad de Dublín",
    category: "Política y guerra",
    date: "841",
    description:
      "La ciudad de Dublín fue fundada por los vikingos en el año 841, en la desembocadura del río Liffey. La ciudad se convirtió en un importante centro comercial y cultural durante la Edad Media y es hoy la capital de Irlanda.",
  },
  {
    id: "119",
    title: "Primera incursión vikinga en Inglaterra",
    category: "Política y guerra",
    date: "793",
    description:
      "En el año 793, los vikingos realizaron su primera incursión en Inglaterra, saqueando el monasterio de Lindisfarne en la costa noreste de Inglaterra. Este evento marcó el inicio de la era vikinga en Europa Occidental.",
  },
  {
    id: "120",
    title: "Batalla de Stamford Bridge",
    category: "Política y guerra",
    date: "1066",
    description:
      "La Batalla de Stamford Bridge tuvo lugar en el año 1066 y enfrentó a los vikingos liderados por Harald Hardrada contra el rey inglés Harold Godwinson. La victoria de Harold Godwinson en Stamford Bridge marcó el fin de la era vikinga en Inglaterra.",
  },
  {
    id: "121",
    title: "Descubrimiento de América por los vikingos",
    category: "Política y guerra",
    date: "1000",
    description:
      "Los vikingos, liderados por Leif Erikson, llegaron a las costas de América del Norte alrededor del año 1000, varios siglos antes de que Cristóbal Colón descubriera el continente. Este descubrimiento es conocido como el viaje de Leif Erikson a Vinland, y fue registrado en las sagas nórdicas.",
  },
  {
    id: "122",
    title: "Invención de la máquina de vapor",
    category: "Ciencia y tecnología",
    date: "1712",
    description:
      "La máquina de vapor, inventada por Thomas Newcomen en 1712, fue uno de los primeros avances tecnológicos significativos de la Revolución Industrial. La máquina de vapor permitió la mecanización de la producción y el transporte, y sentó las bases para el desarrollo de las fábricas y la producción en masa.",
  },
  {
    id: "123",
    title: "Primer vuelo del avión de los hermanos Wright",
    category: "Ciencia y tecnología",
    date: "1903",
    description:
      "Los hermanos Wright realizan el primer vuelo en avión controlado de la historia, en Kitty Hawk, Carolina del Norte, Estados Unidos.",
  },
  {
    id: "124",
    title: "Muerte de Vladimir Lenin",
    category: "Política y guerra",
    date: "1924",
    description:
      "El 21 de enero de 1924 falleció Vladimir Lenin, líder de la Revolución Rusa y primer presidente del gobierno soviético. Lenin fue una figura clave en la historia de la Unión Soviética, sentando las bases del comunismo en el país y liderando la lucha contra el gobierno zarista y las fuerzas imperialistas en la Primera Guerra Mundial.",
  },
  {
    id: "125",
    title: "Invención del microscopio",
    category: "Ciencia y tecnología",
    date: "1590",
    description:
      "Zacharias Janssen y su padre Hans inventan el primer microscopio compuesto, un instrumento que permitiría a los científicos observar el mundo invisible a simple vista.",
  },
  {
    id: "126",
    title: "Lanzamiento del primer iPhone",
    category: "Ciencia y tecnología",
    date: "2007",
    description:
      "Apple presenta el primer iPhone, un dispositivo que revolucionaría la industria de los teléfonos móviles y cambiaría la forma en que interactuamos con la tecnología.",
  },
  {
    id: "127",
    title: "Fallecimiento de Stalin",
    category: "Política y guerra",
    date: "1953",
    description:
      "El líder soviético Iósif Stalin falleció el 5 de marzo de 1953, después de 29 años en el poder. Su muerte provocó un período de incertidumbre y cambios en la Unión Soviética.",
  },

  {
    id: "128",
    title: "Lanzamiento del primer satélite artificial, el Sputnik 1",
    category: "Ciencia y tecnología",
    date: "1957",
    description:
      "El 4 de octubre de 1957, la Unión Soviética lanzó el primer satélite artificial, el Sputnik 1, que orbitó la Tierra durante tres meses. Este logro científico desató la llamada 'carrera espacial' entre Estados Unidos y la URSS.",
  },

  {
    id: "129",
    title: "Medalla de oro olímpica para la URSS en baloncesto",
    category: "Deporte",
    date: "1972",
    description:
      "En los Juegos Olímpicos de Múnich de 1972, la selección de baloncesto de la URSS ganó la medalla de oro en una final polémica contra Estados Unidos. El resultado final de 51-50 fue muy discutido debido a una serie de decisiones controvertidas de los árbitros.",
  },

  {
    id: "130",
    title: "Premio Nobel de Literatura para Mijaíl Shólojov",
    category: "Arte y literatura",
    date: "1965",
    description:
      "El escritor soviético Mijaíl Shólojov ganó el Premio Nobel de Literatura en 1965 por su obra 'El Don apacible', una novela épica sobre la vida en el Cáucaso durante la Revolución Rusa y la Guerra Civil.",
  },

  {
    id: "131",
    title: "Disolución de la Unión Soviética",
    category: "Política y guerra",
    date: "1991",
    description:
      "El 26 de diciembre de 1991, tras varios años de crisis económica y política, la Unión Soviética se disolvió oficialmente, poniendo fin a más de siete décadas de gobierno comunista y dando paso a una nueva era en la historia de Rusia y sus antiguas repúblicas soviéticas.",
  },
  {
    id: "132",
    title: "Publicación del poema 'Os Eidos' de Eduardo Pondal",
    category: "Arte y literatura",
    date: "1880",
    description:
      "El poema 'Os Eidos', escrito en gallego por Eduardo Pondal, se publica por primera vez en el periódico La Zarpa de Madrid. Este poema se convirtió en uno de los símbolos de la literatura gallega y del movimiento literario del Rexurdimento.",
  },
  {
    id: "133",
    title: "Fin de la Guerra de Vietnam",
    category: "Política y guerra",
    date: "1975",
    description:
      "La Guerra de Vietnam terminó el 30 de abril de 1975 con la caída de Saigón, la capital del Vietnam del Sur, ante el Ejército Popular de Vietnam y las fuerzas del Frente Nacional de Liberación de Vietnam.",
  },
  {
    id: "134",
    title: "Atentados del 11 de septiembre en Nueva York y Washington D.C.",
    category: "Política y guerra",
    date: "2001",
    description:
      "El grupo terrorista Al Qaeda perpetró un ataque contra el World Trade Center en Nueva York y el Pentágono en Washington D.C. el 11 de septiembre de 2001, dejando un saldo de más de 3000 personas fallecidas. Este acontecimiento tuvo un gran impacto en la política y las relaciones internacionales en todo el mundo.",
  },
  {
    id: "135",
    title: "Publicación de 'Follas Novas' de Rosalía de Castro",
    category: "Arte y literatura",
    date: "1880",
    description:
      "'Follas Novas' es una de las obras más importantes de la literatura gallega y una de las obras más representativas de la poesía del siglo XIX en España. Escrita en gallego por Rosalía de Castro, esta obra se convirtió en un símbolo del movimiento literario del Rexurdimento y en un referente de la poesía romántica en Galicia.",
  },
  {
    id: "136",
    title: "Independencia de Ghana",
    category: "Política y guerra",
    date: "1957",
    description:
      "Ghana se convirtió en el primer país africano en lograr la independencia del dominio colonial europeo en 1957, liderado por el activista y primer presidente Kwame Nkrumah.",
  },
  {
    id: "137",
    title: "Nacimiento de Nelson Mandela",
    category: "Política y guerra",
    date: "1918",
    description:
      "Nelson Mandela fue un líder político sudafricano que luchó contra el apartheid en su país y se convirtió en el primer presidente negro de Sudáfrica. También fue un defensor de los derechos humanos y de la reconciliación entre las razas.",
  },

  {
    id: "138",
    title: "Primer sugrafio universal en Sudáfrica",
    category: "Política y guerra",
    date: "1994",
    description:
      "El primer sufragio universal en Sudáfrica se llevó a cabo en 1994. Después del fin del apartheid y la celebración de las primeras elecciones democráticas en el país, todos los ciudadanos sudafricanos mayores de 18 años, sin importar su raza o género, tuvieron el derecho de votar por primera vez. Este hito histórico marcó un importante avance hacia la igualdad y la inclusión en Sudáfrica, permitiendo que todos los ciudadanos participaran activamente en el proceso democrático y contribuyeran a la formación de un gobierno representativo y diverso.",
  },
  {
    id: "139",
    title: "Primera medalla de oro olímpica para un atleta africano",
    category: "Deporte",
    date: "1960",
    description:
      "Abebe Bikila de Etiopía ganó la maratón masculina en los Juegos Olímpicos de Roma de 1960. Fue la primera medalla de oro olímpica para un atleta africano.",
  },
  {
    id: "140",
    title: "Publicación de la novela 'Things Fall Apart'",
    category: "Arte y literatura",
    date: "1958",
    description:
      "'Things Fall Apart' es una novela del escritor nigeriano Chinua Achebe que se ha convertido en una obra clásica de la literatura africana. La novela explora la vida de los igbo, un grupo étnico de Nigeria, antes y después de la llegada de los colonizadores europeos.",
  },
  {
    id: "141",
    title: "Muerte de Cleopatra",
    category: "Política y guerra",
    date: "-30",
    description:
      "Cleopatra fue la última reina del antiguo Egipto y se la recuerda por su alianza con Julio César y su relación con Marco Antonio. Tras la derrota en la Batalla de Actium, Cleopatra se suicidó en el año 30 a.C. para evitar ser capturada por las fuerzas de Octavio, que más tarde se convertiría en el emperador Augusto.",
  },
  {
    id: "142",
    title: "Descubrimiento del fósil de 'Lucy'",
    category: "Ciencia y tecnología",
    date: "1974",
    description:
      "El fósil de 'Lucy' es uno de los hallazgos arqueológicos más importantes en la historia de la paleoantropología. Fue descubierto en 1974 por el equipo liderado por el antropólogo estadounidense Donald Johanson en Etiopía y se cree que perteneció a una especie de homínido de hace más de 3 millones de años.",
  },
  {
    id: "143",
    title: "Lanzamiento del primer satélite en órbita alrededor de Marte",
    category: "Ciencia y tecnología",
    date: "1965",
    description:
      "El 14 de noviembre de 1965, la NASA lanzó el satélite 'Mariner 4', convirtiéndose en el primer satélite en órbita alrededor de Marte. Esta misión histórica proporcionó las primeras imágenes cercanas del planeta rojo y cambió nuestra comprensión del sistema solar.",
  },
  {
    id: "144",
    title: "Desarrollo de la tecnología OLED",
    category: "Ciencia y tecnología",
    date: "1987",
    description:
      "El desarrollo de la tecnología OLED (Diodos Orgánicos Emisores de Luz) en 1987 permitió la creación de pantallas más delgadas, ligeras y energéticamente eficientes. Desde entonces, la tecnología OLED se ha utilizado en una amplia gama de dispositivos electrónicos, como televisores, smartphones y relojes inteligentes.",
  },
  {
    id: "145",
    title: "Descubrimiento del bosón de Higgs",
    category: "Ciencia y tecnología",
    date: "2012",
    description:
      "El Centro Europeo de Investigación Nuclear (CERN) se fundó en 1954 en Suiza para investigar la física de partículas. En 2012, el CERN anunció el descubrimiento del bosón de Higgs, una partícula subatómica que ayuda a explicar cómo se crean las masas de las partículas elementales.",
  },
  {
    id: "146",
    title: "Lanzamiento del telescopio espacial Hubble",
    category: "Ciencia y tecnología",
    date: "1990",
    description:
      "El telescopio espacial Hubble, lanzado en 1990, ha sido uno de los proyectos científicos más exitosos de la historia. Ha proporcionado imágenes espectaculares del universo, incluyendo galaxias distantes, nebulosas y planetas en nuestro propio sistema solar.",
  },
  {
    id: "147",
    title: "Desarrollo del primer microprocesador",
    category: "Ciencia y tecnología",
    date: "1971",
    description:
      "El 15 de noviembre de 1971, la empresa Intel Corporation lanzó el primer microprocesador comercial, el Intel 4004. Con solo 2.3 mm de ancho, el chip fue diseñado para calcular las tablas de impuestos de las compañías de electrónica, pero sentó las bases para el desarrollo de la informática personal.",
  },
  {
    id: "148",
    title: "Invención del telégrafo eléctrico",
    category: "Ciencia y tecnología",
    date: "1837",
    description:
      "El telégrafo eléctrico fue inventado por Samuel Morse en 1837 y revolucionó la forma en que se transmitía la información a larga distancia. El telégrafo permitió la comunicación rápida entre ciudades y países y sentó las bases para el desarrollo de las redes de comunicación modernas.",
  },
  {
    id: "149",
    title: "Presentación de la tabla periódica de los elementos",
    category: "Ciencia y tecnología",
    date: "1869",
    description:
      "Dmitri Mendeléyev presenta la primera versión de su tabla periódica de los elementos.",
  },
  {
    id: "150",
    title: "Invención de la fotografía",
    category: "Ciencia y tecnología",
    date: "1839",
    description:
      "La fotografía, una técnica para capturar y fijar imágenes en una superficie sensible a la luz, fue inventada por Louis Daguerre en 1839. La invención de la fotografía revolucionó la forma en que se capturaban y se compartían las imágenes y sentó las bases para el desarrollo de la fotografía y el cine.",
  },
  {
    id: "151",
    title: "Invención del telescopio",
    category: "Ciencia y tecnología",
    date: "1608",
    description:
      "El telescopio, un instrumento óptico que permite ver objetos distantes con mayor detalle, fue inventado en 1608 por el científico holandés Hans Lippershey. La invención del telescopio fue fundamental para el desarrollo de la astronomía moderna y cambió la forma en que se entendía el universo.",
  },
  {
    id: "152",
    title: "Invención del termómetro",
    category: "Ciencia y tecnología",
    date: "1592",
    description:
      "El termómetro, un instrumento utilizado para medir la temperatura, fue inventado por el físico italiano Galileo Galilei en 1592. La invención del termómetro fue fundamental para el desarrollo de la física y la comprensión de las propiedades de los materiales y el calor.",
  },
  {
    id: "153",
    title: "Descubrimiento de la inducción electromagnética",
    category: "Ciencia y tecnología",
    date: "1851",
    description:
      "Michael Faraday descubre la inducción electromagnética, lo que permitió el desarrollo de generadores eléctricos.",
  },
  {
    id: "154",
    title: "Publicación de la teoría electromagnética",
    category: "Ciencia y tecnología",
    date: "1864",
    description:
      "James Clerk Maxwell publica su teoría electromagnética, unificando las leyes de la electricidad y el magnetismo.",
  },
  {
    id: "155",
    title: "Establecimiento del primer cable transatlántico telegráfico",
    category: "Ciencia y tecnología",
    date: "1866",
    description:
      "Se establece el primer cable transatlántico telegráfico entre Europa y América del Norte.",
  },
  {
    id: "156",
    title: "Nacimiento de Nikola Tesla",
    category: "Ciencia y tecnología",
    date: "1856",
    description:
      "Nikola Tesla nació el 10 de julio de 1856 en Smiljan, Croacia. Fue un inventor e ingeniero eléctrico que realizó numerosas contribuciones a la ciencia y la tecnología, incluyendo el desarrollo de la corriente alterna (AC), la bobina de Tesla y el campo magnético rotativo. Sus invenciones han tenido un gran impacto en el mundo moderno y han sentado las bases para la tecnología eléctrica actual.",
  },
  {
    id: "157",
    title: "Descubrimiento de los rayos cósmicos",
    category: "Ciencia y tecnología",
    date: "1912",
    description:
      "Nikola Tesla fue uno de los primeros científicos en estudiar los rayos cósmicos, descubriendo que los rayos cósmicos pueden ser detectados y medidos mediante la ionización del aire. Sus estudios en esta área ayudaron a establecer la base para la física de partículas.",
  },
  {
    id: "158",
    title: "Invento del control remoto",
    category: "Ciencia y tecnología",
    date: "1898",
    description:
      "Nikola Tesla es acreditado por haber inventado el primer control remoto, que fue utilizado para controlar un barco de forma inalámbrica en una demostración pública en 1898. Su invento allanó el camino para el desarrollo de los controles remotos modernos.",
  },
  {
    id: "159",
    title: "Teoría cuántica de Max Planck",
    category: "Ciencia y tecnología",
    date: "1900",
    description:
      "Max Planck formula la teoría cuántica, sentando las bases para la física cuántica moderna.",
  },
  {
    id: "160",
    title: "Transmisión de la primera señal de radio transatlántica",
    category: "Ciencia y tecnología",
    date: "1901",
    description:
      "Guglielmo Marconi transmite la primera señal de radio a través del Océano Atlántico.",
  },
  {
    id: "161",
    title: "Introducción del teléfono en España",
    category: "Ciencia y tecnología",
    date: "1877",
    description:
      "La primera llamada telefónica en España se realizó el 13 de diciembre de 1877. Fue una llamada experimental entre el ingeniero y científico catalán Pere Molina y el presidente del Gobierno español, Antonio Cánovas del Castillo. La llamada se realizó desde el laboratorio de Molina en Barcelona hasta el despacho de Cánovas del Castillo en Madrid. Este hito marcó el comienzo de la telefonía en España y sentó las bases para el desarrollo de las comunicaciones telefónicas en el país.",
  },

  {
    id: "162",
    title: "Medición de la carga del electrón por Robert Millikan",
    category: "Ciencia y tecnología",
    date: "1909",
    description:
      "Robert Millikan mide la carga eléctrica del electrón, demostrando su existencia.",
  },
  {
    id: "163",
    title: "Descubrimiento de la estructura del átomo por Ernest Rutherford",
    category: "Ciencia y tecnología",
    date: "1911",
    description:
      "Ernest Rutherford descubre la estructura del átomo y propone el modelo atómico actual.",
  },
  {
    id: "164",
    title: "El primer vuelo tripulado al espacio",
    category: "Ciencia y tecnología",
    date: "1961",
    description:
      "El 12 de abril de 1961, el cosmonauta soviético Yuri Gagarin se convirtió en el primer ser humano en viajar al espacio en el Vostok 1.",
  },
  {
    id: "165",
    title: "El lanzamiento del primer ordenador personal por IBM",
    category: "Ciencia y tecnología",
    date: "1981",
    description:
      "El 12 de agosto de 1981, IBM lanzó el primer ordenador personal, el IBM PC. Este lanzamiento tuvo un gran impacto en la industria informática y en la forma en que la gente trabaja y se comunica.",
  },
  {
    id: "166",
    title: "El primer vuelo del Concorde",
    category: "Ciencia y tecnología",
    date: "1969",
    description:
      "El 2 de marzo de 1969, el Concorde realizó su primer vuelo de prueba. Este avión supersonico revolucionó los viajes aéreos y redujo significativamente el tiempo de vuelo en ciertas rutas.",
  },
  {
    id: "167",
    title: "El primer trasplante de corazón exitoso",
    category: "Ciencia y tecnología",
    date: "1967",
    description:
      "El 3 de diciembre de 1967, el cirujano sudafricano Christiaan Barnard realizó el primer trasplante de corazón exitoso en Ciudad del Cabo, Sudáfrica.",
  },
  {
    id: "168",
    title: "Premio Nobel de Ramón y Cajal",
    category: "Ciencia y tecnología",
    date: "1899",
    description:
      "Ramón y Cajal recibe el Premio Nobel de Fisiología o Medicina, junto con Camillo Golgi, por sus trabajos en la estructura del sistema nervioso.",
  },
  {
    id: "169",
    title: "Vacuna contra la gripe A (H1N1)",
    category: "Ciencia y tecnología",
    date: "2009",
    description:
      "La vacuna contra la gripe A (H1N1), también conocida como 'gripe porcina', fue desarrollada en respuesta a la pandemia de 2009. Se distribuyó a nivel mundial y se administró a millones de personas para prevenir la propagación de la enfermedad.",
  },
  {
    id: "170",
    title: "Cronómetro marino por John Harrison",
    category: "Ciencia y tecnología",
    date: "1761",
    description:
      "John Harrison construye un cronómetro marino preciso, que permite a los navegantes determinar la longitud en alta mar.",
  },
  {
    id: "171",
    title: "Primer vuelo en globo tripulado por los hermanos Montgolfier",
    category: "Ciencia y tecnología",
    date: "1783",
    description:
      "Los hermanos Montgolfier realizan el primer vuelo en globo tripulado, abriendo la puerta a la aviación moderna.",
  },
  {
    id: "172",
    title:
      "Desarrollo de la primera vacuna contra la viruela por Edward Jenner",
    category: "Ciencia y tecnología",
    date: "1798",
    description:
      "Edward Jenner desarrolla la primera vacuna contra la viruela, una enfermedad que anteriormente había sido mortal.",
  },
  {
    id: "173",
    title: "Invento de la pila eléctrica por Alessandro Volta",
    category: "Ciencia y tecnología",
    date: "1800",
    description:
      "Alessandro Volta inventa la pila eléctrica, lo que abre la puerta a la creación de circuitos eléctricos y la electrónica moderna.",
  },
  {
    id: "174",
    title: "El lanzamiento del primer videojuego comercial",
    category: "Ciencia y tecnología",
    date: "1972",
    description:
      "En 1972, se lanzó el primer videojuego comercial, llamado Pong. Esto marcó el comienzo de una industria multimillonaria que ha tenido un impacto significativo en la cultura popular y la tecnología.",
  },
  {
    id: "175",
    title: "El lanzamiento del primer robot explorador en Marte",
    category: "Ciencia y tecnología",
    date: "1997",
    description:
      "El 4 de julio de 1997, se lanzó el robot explorador Pathfinder a Marte, lo que permitió a los científicos recopilar datos sobre el planeta rojo y mejorar nuestra comprensión del sistema solar.",
  },
  {
    id: "176",
    title: "El lanzamiento del primer teléfono inteligente",
    category: "Ciencia y tecnología",
    date: "1993",
    description:
      "En 1993, IBM lanzó el primer teléfono inteligente, llamado Simon. Esto sentó las bases para los dispositivos móviles modernos y cambió la forma en que nos comunicamos y usamos la tecnología.",
  },
  {
    id: "177",
    title: "El descubrimiento del virus VIH",
    category: "Ciencia y tecnología",
    date: "1983",
    description:
      "En 1983, se descubrió el virus de la inmunodeficiencia humana (VIH), el virus responsable del síndrome de inmunodeficiencia adquirida (SIDA). Esto ha llevado a una mayor comprensión y tratamiento de la enfermedad.",
  },
  {
    id: "178",
    title: "El lanzamiento del primer satélite GPS",
    category: "Ciencia y tecnología",
    date: "1978",
    description:
      "El 22 de febrero de 1978, se lanzó el primer satélite GPS, llamado Navstar 1. Esto ha mejorado nuestra capacidad para navegar y ha permitido el desarrollo de tecnologías como los sistemas de navegación GPS en nuestros teléfonos móviles.",
  },
  {
    id: "179",
    title: "El lanzamiento del primer satélite de televisión",
    category: "Ciencia y tecnología",
    date: "1962",
    description:
      "El 14 de julio de 1962, se lanzó el primer satélite de televisión, llamado Telstar 1. Esto permitió la transmisión de televisión en vivo a nivel mundial y mejoró la capacidad de las empresas para conectarse globalmente.",
  },
  {
    id: "180",
    title: "La primera imagen de un agujero negro",
    category: "Ciencia y tecnología",
    date: "2019",
    description:
      "El 10 de abril de 2019, se publicó la primera imagen de un agujero negro, capturada por el Telescopio del Horizonte de Sucesos. Esto ha mejorado nuestra comprensión de la física y ha proporcionado datos valiosos sobre el universo.",
  },
  {
    id: "181",
    title: "El primer clon de un animal",
    category: "Ciencia y tecnología",
    date: "1996",
    description:
      "El 5 de julio de 1996, se anunció el nacimiento de la oveja Dolly, el primer mamífero clonado a partir de una célula adulta. Este hito marcó un avance importante en la clonación y la genética.",
  },
  {
    id: "182",
    title: "La aprobación de la primera vacuna contra COVID-19",
    category: "Ciencia y tecnología",
    date: "2020",
    description:
      "El 11 de diciembre de 2020, se aprobó la primera vacuna contra COVID-19, desarrollada por Pfizer y BioNTech. Esto marcó un hito importante en la lucha contra la pandemia global.",
  },
  {
    id: "183",
    title: "La primera misión tripulada de SpaceX",
    category: "Ciencia y tecnología",
    date: "2020",
    description:
      "El 30 de mayo de 2020, SpaceX realizó su primera misión tripulada al espacio, llevando a dos astronautas de la NASA a la Estación Espacial Internacional. Esto marcó un hito importante en la exploración espacial privada y la carrera espacial moderna.",
  },
  {
    id: "184",
    title: "El lanzamiento del álbum '21' de Adele",
    category: "Música y cine",
    date: "2011",
    description:
      "El 24 de enero de 2011, Adele lanzó su segundo álbum de estudio, '21'. Este álbum fue un gran éxito comercial y crítico, convirtiéndose en uno de los álbumes más vendidos de todos los tiempos y ganando numerosos premios Grammy.",
  },

  {
    id: "185",
    title: "El lanzamiento del álbum 'Random Access Memories' de Daft Punk",
    category: "Música y cine",
    date: "2013",
    description:
      "El 17 de mayo de 2013, Daft Punk lanzó su cuarto álbum de estudio, 'Random Access Memories'. Este álbum fue un gran éxito, ganando numerosos premios Grammy, incluyendo Álbum del Año, y estableciendo a Daft Punk como uno de los actos más influyentes de la música electrónica.",
  },

  {
    id: "186",
    title: "La muerte de David Bowie",
    category: "Música y cine",
    date: "2016",
    description:
      "El 10 de enero de 2016, el icónico músico y artista David Bowie falleció después de una larga batalla contra el cáncer. Bowie fue un influyente pionero del rock y la música pop, y su legado ha influido en generaciones de músicos y artistas.",
  },

  {
    id: "187",
    title: "El lanzamiento del álbum 'Lemonade' de Beyoncé",
    category: "Música y cine",
    date: "2016",
    description:
      "El 23 de abril de 2016, Beyoncé lanzó su sexto álbum de estudio, 'Lemonade'. Este álbum fue un gran éxito comercial y crítico, abordando temas importantes como la raza, la feminidad y la identidad cultural, y estableciendo a Beyoncé como una de las artistas más influyentes de la música pop contemporánea.",
  },

  {
    id: "188",
    title: "El debut de LeBron James en la NBA",
    category: "Deporte",
    date: "2003",
    description:
      "En 2003, LeBron James hizo su debut en la NBA con los Cleveland Cavaliers. James ha tenido una carrera exitosa en la NBA, ganando cuatro títulos de la NBA y convirtiéndose en uno de los mejores jugadores de todos los tiempos.",
  },
  {
    id: "189",
    title: "Fundación de la FIFA",
    category: "Deporte",
    date: "1904",
    description:
      "El 21 de mayo de 1904, la Federación Internacional de Fútbol Asociación (FIFA) fue fundada en París, Francia. La FIFA es la organización que rige el fútbol a nivel mundial y es responsable de organizar eventos como la Copa del Mundo de la FIFA.",
  },
  {
    id: "190",
    title: "Primer Mundial de Fútbol",
    category: "Deporte",
    date: "1930",
    description:
      "El 13 de julio de 1930, comenzó el primer Mundial de Fútbol en Uruguay. El torneo, organizado por la FIFA, contó con la participación de 13 equipos y culminó con Uruguay como campeón, tras vencer a Argentina en la final el 30 de julio de 1930.",
  },
  {
    id: "191",
    title: "Gol del Siglo de Maradona",
    category: "Deporte",
    date: "1986",
    description:
      "El 22 de junio de 1986, durante el Mundial de Fútbol en México, Diego Maradona anotó el llamado 'Gol del Siglo' en el partido entre Argentina e Inglaterra. Maradona recorrió más de la mitad del campo, eludiendo a cinco jugadores ingleses, antes de vencer al portero y marcar un gol histórico.",
  },
  {
    id: "192",
    title: "El récord de 73 victorias de los Golden State Warriors",
    category: "Deporte",
    date: "2016",
    description:
      "En 2016, los Golden State Warriors establecieron un récord de 73 victorias en una temporada regular de la NBA, superando el récord anterior de los Chicago Bulls de 1995-1996.",
  },
  {
    id: "193",
    title: "Primer campeonato de los Cleveland Cavaliers",
    category: "Deporte",
    date: "2016",
    description:
      "En 2016, los Cleveland Cavaliers ganaron su primer campeonato de la NBA en la historia de la franquicia, liderados por LeBron James y Kyrie Irving. Derrotaron a los Golden State Warriors en las Finales de la NBA en un emocionante séptimo juego.",
  },
  {
    id: "194",
    title: "El récord de triples-dobles de Russell Westbrook",
    category: "Deporte",
    date: "2017",
    description:
      "En 2017, Russell Westbrook promedió un triple-doble durante toda la temporada, lo que significa que promedió al menos 10 puntos, 10 rebotes y 10 asistencias por juego. Este logro fue muy impresionante y lo llevó a ganar el premio al Jugador Más Valioso de la NBA esa temporada.",
  },

  {
    id: "195",
    title: "Retiro definitivo de Michael Jordan",
    category: "Deporte",
    date: "2003",
    description:
      "El 16 de abril de 2003, Michael Jordan, considerado uno de los mejores jugadores de baloncesto de todos los tiempos, se retiró definitivamente de la NBA. Durante su carrera, Jordan jugó principalmente para los Chicago Bulls, con los que ganó seis campeonatos y fue nombrado MVP de las finales en cada uno de ellos. También jugó brevemente para los Washington Wizards antes de su retiro final.",
  },
  {
    id: "196",
    title: "Muerte de Kobe Bryant",
    category: "Deporte",
    date: "2020",
    description:
      "El 26 de enero de 2020, el exjugador de baloncesto de la NBA Kobe Bryant falleció trágicamente en un accidente de helicóptero en Calabasas, California. Bryant, considerado uno de los mejores jugadores de baloncesto de todos los tiempos, ganó cinco campeonatos de la NBA con Los Angeles Lakers y dos medallas de oro olímpicas con el equipo de baloncesto de Estados Unidos. Su muerte conmocionó al mundo del deporte y a sus seguidores, y su legado en el baloncesto y su impacto fuera de la cancha continúan siendo recordados y celebrados.",
  },
  {
    id: "197",
    title: "Primer Tour de Francia",
    category: "Deporte",
    date: "1903",
    description:
      "El primer Tour de Francia, la carrera de ciclismo más prestigiosa del mundo, comenzó el 1 de julio de 1903. La competición fue creada por Henri Desgrange, y en su primera edición contó con la participación de 60 ciclistas, que recorrieron un total de 2.428 kilómetros en 19 días.",
  },
  {
    id: "198",
    title: "Récord mundial de Usain Bolt en 100 metros",
    category: "Deporte",
    date: "2009",
    description:
      "El 16 de agosto de 2009, Usain Bolt estableció el récord mundial de los 100 metros en 9,58 segundos durante el Campeonato Mundial de Atletismo en Berlín, Alemania. Bolt rompió su propio récord anterior de 9,69 segundos, consolidándose como el hombre más rápido del mundo.",
  },
  {
    id: "199",
    title: "Primera mujer en completar la maratón de Boston",
    category: "Deporte",
    date: "1967",
    description:
      "El 19 de abril de 1967, Kathrine Switzer se convirtió en la primera mujer en completar oficialmente la maratón de Boston. Switzer desafió las normas de la época al inscribirse en la carrera con sus iniciales, K.V. Switzer, y completó el recorrido de 42,195 km en 4 horas y 20 minutos.",
  },
  {
    id: "200",
    title: "Roger Federer gana su 20° título de Grand Slam",
    category: "Deporte",
    date: "2018",
    description:
      "El 28 de enero de 2018, Roger Federer ganó su vigésimo título de Grand Slam al derrotar a Marin Čilić en la final del Abierto de Australia. Con este triunfo, Federer se convirtió en el primer hombre en la historia en alcanzar dicha marca, consolidando aún más su posición como uno de los mejores tenistas de todos los tiempos.",
  },
  {
    id: "201",
    title:
      "Simone Biles se convierte en la gimnasta con más medallas en Campeonatos del Mundo",
    category: "Deporte",
    date: "2019",
    description:
      "El 13 de octubre de 2019, Simone Biles ganó su 25ª medalla en Campeonatos del Mundo de Gimnasia Artística, superando al gimnasta bielorruso Vitaly Scherbo y convirtiéndose en la atleta con más medallas en la historia de este evento. Hasta su retiro en 2021, Biles acumuló un total de 32 medallas en campeonatos mundiales y olímpicos, siendo una de las gimnastas más exitosas y admiradas de todos los tiempos.",
  },
  {
    id: "202",
    title: "Récord de puntos de Wilt Chamberlain",
    category: "Deporte",
    date: "1962",
    description:
      "El 2 de marzo de 1962, Wilt Chamberlain, jugador de los Philadelphia Warriors en la NBA, estableció un récord histórico al anotar 100 puntos en un solo partido contra los New York Knicks. Esta hazaña sigue siendo el récord de la mayor cantidad de puntos anotados en un solo juego de la NBA.",
  },
  {
    id: "203",
    title: "Primer Campeonato Mundial de Fórmula 1",
    category: "Deporte",
    date: "1950",
    description:
      "El 13 de mayo de 1950, comenzó el primer Campeonato Mundial de Fórmula 1 en Silverstone, Reino Unido. El campeonato fue ganado por Giuseppe Farina, piloto italiano de Alfa Romeo. Desde entonces, la Fórmula 1 se ha convertido en una de las competiciones de automovilismo más prestigiosas y seguidas del mundo.",
  },
  {
    id: "204",
    title: "Primer Ironman en Hawái",
    category: "Deporte",
    date: "1978",
    description:
      "El 18 de febrero de 1978, se llevó a cabo el primer Ironman de Hawái, una de las pruebas más duras y prestigiosas de triatlón a nivel mundial. El evento fue creado por John Collins y su esposa, Judy Collins, y consiste en 3,86 km de natación, 180,25 km de ciclismo y 42,20 km de carrera a pie.",
  },
  {
    id: "205",
    title: "Primer título de Serena Williams en un Grand Slam",
    category: "Deporte",
    date: "1999",
    description:
      "El 11 de septiembre de 1999, Serena Williams ganó su primer título de Grand Slam al vencer a Martina Hingis en la final del Abierto de Estados Unidos. A lo largo de su carrera, Williams se convirtió en una de las tenistas más exitosas de la historia, ganando 23 títulos de Grand Slam en individuales.",
  },
  {
    id: "206",
    title:
      "Lindsey Vonn rompe récord de victorias en la Copa del Mundo de esquí alpino",
    category: "Deporte",
    date: "2015",
    description:
      "El 18 de enero de 2015, Lindsey Vonn ganó su 63ª carrera en la Copa del Mundo de esquí alpino, superando a Annemarie Moser-Pröll y estableciendo un nuevo récord de victorias para una mujer. Vonn es considerada una de las mejores esquiadoras de todos los tiempos y se retiró en 2019 con 82 victorias en la Copa del Mundo.",
  },
  {
    id: "207",
    title: "Inauguración del Camp Nou",
    category: "Deporte",
    date: "1957",
    description:
      "El 24 de septiembre de 1957, se inauguró el Camp Nou, el estadio del FC Barcelona, en Barcelona, España. Con una capacidad actual de 99.354 espectadores, es el estadio de fútbol más grande de Europa y ha sido el hogar de algunos de los mejores jugadores de la historia, como Lionel Messi y Johan Cruyff.",
  },
  {
    id: "208",
    title: "Michael Phelps gana 8 medallas de oro en Beijing",
    category: "Deporte",
    date: "2008",
    description:
      "En los Juegos Olímpicos de Beijing 2008, el nadador estadounidense Michael Phelps ganó 8 medallas de oro, estableciendo un récord para la mayor cantidad de medallas de oro ganadas por un atleta en una sola edición de los Juegos Olímpicos. Phelps es considerado uno de los mejores deportistas de todos los tiempos, con un total de 28 medallas olímpicas.",
  },
  {
    id: "209",
    title: "Nacimiento de LeBron James",
    category: "Deporte",
    date: "1984",
    description:
      "El 30 de diciembre de 1984, nació LeBron James en Akron, Ohio, Estados Unidos. James es considerado uno de los mejores jugadores de baloncesto de todos los tiempos, habiendo ganado cuatro campeonatos de la NBA y dos medallas de oro olímpicas a lo largo de su carrera.",
  },
  {
    id: "210",
    title: "Rafael Nadal gana su 13º título de Roland Garros",
    category: "Deporte",
    date: "2020",
    description:
      "El 11 de octubre de 2020, Rafael Nadal ganó su decimotercer título de Roland Garros, derrotando a Novak Djokovic en la final. Nadal estableció un récord en la historia del tenis al ganar tantos títulos en un mismo torneo de Grand Slam, lo que contribuyó a consolidar su reputación como el 'Rey de la Tierra Batida'.",
  },
  {
    id: "211",
    title: "Ayrton Senna gana su primer campeonato de Fórmula 1",
    category: "Deporte",
    date: "1988",
    description:
      "El 30 de octubre de 1988, Ayrton Senna, piloto brasileño de Fórmula 1, ganó su primer campeonato mundial al asegurar su victoria en el Gran Premio de Japón. Senna es considerado uno de los mejores pilotos en la historia de la Fórmula 1, habiendo ganado tres campeonatos mundiales antes de su trágica muerte en un accidente durante el Gran Premio de San Marino en 1994.",
  },
  {
    id: "212",
    title: "Fundación del Deportivo de La Coruña",
    category: "Deporte",
    date: "1906",
    description:
      "El 2 de marzo de 1906 se fundó el Real Club Deportivo de La Coruña, un equipo de fútbol gallego que ha jugado en la Primera División de España y ha obtenido títulos como la Liga, la Copa del Rey y la Supercopa de España.",
  },
  {
    id: "213",
    title:
      "David Cal se convierte en el deportista español con más medallas olímpicas",
    category: "Deporte",
    date: "2012",
    description:
      "El 8 de agosto de 2012, el piragüista gallego David Cal obtuvo su quinta medalla olímpica en los Juegos Olímpicos de Londres, convirtiéndose en el deportista español con más medallas en la historia de los Juegos Olímpicos.",
  },
  {
    id: "214",
    title: "Fundación del Real Madrid C.F.",
    category: "Deporte",
    date: "1902",
    description:
      "El 6 de marzo de 1902 se fundó el Real Madrid Club de Fútbol en Madrid, España. A lo largo de su historia, el equipo ha sido uno de los más exitosos a nivel nacional e internacional, ganando múltiples títulos de LaLiga, Copas del Rey y Ligas de Campeones de la UEFA.",
  },
  {
    id: "215",
    title: "El milagro de Berna",
    category: "Deporte",
    date: "1954",
    description:
      "El 4 de julio de 1954, la selección de fútbol de Alemania Occidental ganó sorpresivamente la Copa del Mundo de la FIFA en Suiza, derrotando al equipo húngaro, considerado entonces el mejor del mundo. El evento, conocido como 'El milagro de Berna', marcó un punto de inflexión en la historia del fútbol alemán y se convirtió en un símbolo de esperanza y renacimiento para la nación en la posguerra.",
  },
  {
    id: "216",
    title: "Sevilla F.C. gana su primer título de la UEFA Europa League",
    category: "Deporte",
    date: "2006",
    description:
      "El 10 de mayo de 2006, el Sevilla Fútbol Club ganó su primer título de la UEFA Europa League (anteriormente conocida como Copa de la UEFA) al derrotar al Middlesbrough F.C. en la final. Desde entonces, el Sevilla ha ganado el torneo en otras cinco ocasiones, convirtiéndose en el equipo más exitoso en la historia de la competición.",
  },
  {
    id: "217",
    title: "Primer doblete del Atlético de Madrid",
    category: "Deporte",
    date: "1996",
    description:
      "El equipo logró ganar tanto la Liga española como la Copa del Rey. Fue un hito histórico para el club, demostrando su dominio en el fútbol español. Bajo la dirección del entrenador Radomir Antic, el Atlético de Madrid desplegó un juego sólido y determinación en todas sus competiciones. El equipo contaba con talentosos jugadores como Kiko, Pantic, Caminero y el portero Molina, quienes desempeñaron roles clave en la conquista del doblete. La conquista de ambos títulos permitió al Atlético de Madrid dejar una marca imborrable en su historia y celebrar una temporada llena de éxitos.",
  },
  {
    id: "218",
    title: "Fundación del F.C. Barcelona",
    category: "Deporte",
    date: "1899",
    description:
      "El 29 de noviembre de 1899 se fundó el Futbol Club Barcelona en Barcelona, España. El equipo es conocido por su histórica rivalidad con el Real Madrid y por su exitoso palmarés, incluyendo numerosos títulos de LaLiga, Copas del Rey y Ligas de Campeones de la UEFA.",
  },
  {
    id: "219",
    title: "Valencia C.F. gana su última Copa del Rey",
    category: "Deporte",
    date: "2019",
    description:
      "El 25 de mayo de 2019, el Valencia Club de Fútbol ganó su última Copa del Rey al derrotar al F.C. Barcelona en la final. Este título fue el octavo en la historia del club en esta competición y un logro significativo en su historia reciente.",
  },
  {
    id: "220",
    title:
      "El Celta de Vigo clasifica por primera vez para la Liga de Campeones de la UEFA",
    category: "Deporte",
    date: "2003",
    description:
      "En la temporada 2002-2003, el Real Club Celta de Vigo alcanzó por primera vez en su historia la clasificación para la Liga de Campeones de la UEFA al finalizar cuarto en LaLiga. Durante la temporada 2003-2004, el Celta compitió en la fase de grupos del prestigioso torneo europeo.",
  },
  {
    id: "221",
    title: "Primera edición de la Vuelta a España",
    category: "Deporte",
    date: "1935",
    description:
      "La primera edición de la Vuelta a España, una de las tres Grandes Vueltas del ciclismo profesional junto con el Tour de Francia y el Giro de Italia, comenzó el 29 de abril de 1935. La carrera fue organizada por el periódico Informaciones y contó con 14 etapas que cubrían un total de 3.425 km. El ciclista belga Gustaaf Deloor fue el ganador de esta primera edición, y repetiría su victoria en la edición de 1936.",
  },
  {
    id: "222",
    title: "Ataque a Pearl Harbor",
    category: "Política y guerra",
    date: "1941",
    description:
      "El 7 de diciembre de 1941, las fuerzas militares japonesas llevaron a cabo un sorpresivo ataque aéreo contra la base naval de Pearl Harbor en Hawái. El ataque resultó en la destrucción de gran parte de la flota del Pacífico de los Estados Unidos y llevó a su entrada en la Segunda Guerra Mundial.",
  },
  {
    id: "223",
    title: "Asesinato de Mahatma Gandhi",
    category: "Política y guerra",
    date: "1948",
    description:
      "El 30 de enero de 1948, Mahatma Gandhi, líder del movimiento de independencia de la India, fue asesinado por Nathuram Godse, un radical hindú. La muerte de Gandhi fue un evento trágico que tuvo un profundo impacto en la política y la sociedad de la India, así como en el movimiento por la paz y la no violencia en todo el mundo.",
  },
  {
    id: "224",
    title: "Creación de la OTAN",
    category: "Política y guerra",
    date: "1949",
    description:
      "El 4 de abril de 1949, la Organización del Tratado del Atlántico Norte (OTAN) fue creada con la firma del Tratado de Washington por 12 países de América del Norte y Europa. La OTAN es una alianza militar y política que busca garantizar la seguridad y la estabilidad en el Atlántico Norte y promover la cooperación entre sus miembros.",
  },
  {
    id: "225",
    title: "Inicio de la guerra de Corea",
    category: "Política y guerra",
    date: "1950",
    description:
      "La Guerra de Corea comenzó el 25 de junio de 1950, cuando Corea del Norte invadió Corea del Sur. El conflicto involucró a las fuerzas de las Naciones Unidas, lideradas por Estados Unidos, en apoyo de Corea del Sur y a China y la Unión Soviética en apoyo de Corea del Norte. La guerra terminó con la firma del armisticio el 27 de julio de 1953, aunque técnicamente los dos países siguen en guerra, ya que nunca se firmó un tratado de paz.",
  },
  {
    id: "226",
    title: "Exposición de Vincent van Gogh en París",
    category: "Arte y literatura",
    date: "1886",
    description:
      "La exposición de Vincent van Gogh en París de 1886 fue una de las primeras ocasiones en que el público tuvo la oportunidad de conocer la obra de este famoso pintor postimpresionista. La exposición incluyó varias de sus obras más conocidas, como 'Los comedores de patatas', y tuvo un impacto significativo en la percepción del arte moderno en la época.",
  },
  {
    id: "227",
    title: "Declaración Universal de Derechos Humanos",
    category: "Política y guerra",
    date: "1948",
    description:
      "El 10 de diciembre de 1948, la Asamblea General de las Naciones Unidas adoptó la Declaración Universal de Derechos Humanos en París, Francia. Este documento histórico establece los derechos fundamentales que deben protegerse para todos los seres humanos, independientemente de su raza, color, religión, sexo, idioma, opinión política u origen.",
  },
  {
    id: "228",
    title: "Fundación de la Unión Europea",
    category: "Política y guerra",
    date: "1993",
    description:
      "El 1 de noviembre de 1993, la Unión Europea (UE) fue oficialmente fundada con la entrada en vigor del Tratado de Maastricht. La UE es una organización política y económica compuesta por países europeos que trabajan juntos para promover la paz, la estabilidad y la prosperidad en la región.",
  },
  {
    id: "229",
    title: "Aprobación de la constitución de Cádiz",
    category: "Política y guerra",
    date: "1812",
    description:
      "La Constitución de Cádiz, aprobada el 19 de marzo de 1812, festividad de San José, conocida por eso como la Pepa, es la primera Constitución propiamente española, ya que el Estatuto de Bayona de 1808 no dejó de ser una “Carta otorgada” marcada por el sello napoleónico.",
  },
  {
    id: "230",
    title: "Premio Nobel de Literatura para Gabriel García Márquez",
    category: "Arte y literatura",
    date: "1982",
    description:
      "El premio Nobel de Literatura para Gabriel García Márquez en 1982 fue un reconocimiento a su obra literaria y su impacto en la cultura latinoamericana y mundial. García Márquez es conocido por obras como 'Cien años de soledad' y 'El amor en los tiempos del cólera', que se caracterizan por su estilo único, su realismo mágico y su exploración de temas como la identidad, la política y la historia.",
  },
  {
    id: "231",
    title: "Elección de Barack Obama como presidente de los Estados Unidos",
    category: "Política y guerra",
    date: "2008",
    description:
      "El 4 de noviembre de 2008, Barack Obama fue elegido presidente de los Estados Unidos, convirtiéndose en el primer afroamericano en ocupar el cargo. Su elección marcó un momento histórico en la política de los Estados Unidos y fue un hito en la lucha por la igualdad racial en el país.",
  },
  {
    id: "232",
    title: "Inicio de la primera Guerra del Golfo",
    category: "Política y guerra",
    date: "1990",
    description:
      "La Primera Guerra del Golfo comenzó el 2 de agosto de 1990, cuando Irak, liderado por Saddam Hussein, invadió Kuwait. La coalición liderada por Estados Unidos lanzó la Operación Tormenta del Desierto el 17 de enero de 1991 para liberar Kuwait. La guerra terminó el 28 de febrero de 1991 con la expulsión de las fuerzas iraquíes de Kuwait y la imposición de sanciones económicas a Irak.",
  },
  {
    id: "233",
    title: "Inicio de la Revolución Cubana",
    category: "Política y guerra",
    date: "1953",
    description:
      "El 26 de julio de 1953, un grupo de rebeldes liderados por Fidel Castro lanzó un fallido ataque al cuartel Moncada en Santiago de Cuba, marcando el inicio de la Revolución Cubana. La revolución culminó con la caída del dictador Fulgencio Batista el 1 de enero de 1959 y la posterior instauración de un gobierno socialista liderado por Fidel Castro. La Revolución Cubana tuvo un impacto significativo en la política y la sociedad de América Latina y el Caribe, así como en las relaciones entre Estados Unidos y la región.",
  },
  {
    id: "234",
    title: "Firma del Tratado de Tordesillas",
    category: "Política y guerra",
    date: "1494",
    description:
      "El Tratado de Tordesillas fue firmado el 7 de junio de 1494 entre España y Portugal. El tratado, mediado por el Papa Alejandro VI, estableció una línea imaginaria a 370 leguas al oeste de las islas de Cabo Verde, dividiendo las tierras recién descubiertas y por descubrir entre las dos potencias. Este acuerdo tuvo un impacto duradero en la exploración, colonización y dominio de América y África por parte de España y Portugal.",
  },
  {
    id: "235",
    title: "Asesinato del Archiduque Francisco Fernando",
    category: "Política y guerra",
    date: "1914",
    description:
      "El 28 de junio de 1914, el Archiduque Francisco Fernando de Austria, heredero del trono austrohúngaro, fue asesinado en Sarajevo por el nacionalista serbio Gavrilo Princip. Este evento fue el catalizador de la Primera Guerra Mundial, ya que las tensiones entre las potencias europeas llevaron a una serie de movilizaciones militares y al estallido del conflicto el 28 de julio de 1914.",
  },
  {
    id: "236",
    title: "Asesinato de John F. Kennedy",
    category: "Política y guerra",
    date: "1963",
    description:
      "El 22 de noviembre de 1963, el presidente de Estados Unidos, John F. Kennedy, fue asesinado en Dallas, Texas, por Lee Harvey Oswald. El asesinato de Kennedy fue un evento impactante que marcó a la generación de la época y ha generado numerosas teorías de conspiración. Su muerte llevó a la asunción de Lyndon B. Johnson como presidente y a un cambio en las políticas nacionales e internacionales de Estados Unidos.",
  },
  {
    id: "237",
    title: "Independencia de Mozambique",
    category: "Política y guerra",
    date: "1975",
    description:
      "El 25 de junio de 1975, Mozambique logró su independencia de Portugal después de una larga lucha por la liberación liderada por el Frente de Liberación de Mozambique (FRELIMO). La independencia de Mozambique fue parte de un proceso de descolonización en África que llevó al fin del dominio colonial europeo en el continente. Mozambique se convirtió en una república socialista y enfrentó desafíos económicos y políticos en las décadas siguientes.",
  },
  {
    id: "238",
    title: "Fundación del Reino Suevo",
    category: "Política y guerra",
    date: "409",
    description:
      "El Reino Suevo fue un reino germánico establecido en la península ibérica en el año 409. Los suevos, un pueblo germánico, cruzaron el río Rin y ocuparon la provincia romana de Gallaecia, en la actual Galicia y el norte de Portugal. El Reino Suevo se convirtió en uno de los primeros reinos germánicos en la península ibérica y duró hasta su conquista por los visigodos en 585.",
  },
  {
    id: "239",
    title: "Primeras elecciones democráticas modernas en España",
    category: "Política y guerra",
    date: "1977",
    description:
      "Las primeras elecciones democráticas modernas en España después de la dictadura de Francisco Franco se llevaron a cabo el 15 de junio de 1977. Estas elecciones marcaron el inicio de la Transición Española hacia la democracia y la adopción de la Constitución de 1978. La Unión de Centro Democrático (UCD), liderada por Adolfo Suárez, ganó las elecciones y formó un gobierno de coalición, estableciendo las bases para un sistema político democrático y multipartidista en España.",
  },
  {
    id: "240",
    title: "Primer país con sufragio femenino",
    category: "Política y guerra",
    date: "1893",
    description:
      "Nueva Zelanda fue el primer país en otorgar el sufragio femenino, en 1893. Este logro fue el resultado de una intensa campaña liderada por mujeres y defensores de los derechos de las mujeres, como Kate Sheppard. La aprobación del sufragio femenino en Nueva Zelanda allanó el camino para que otros países siguieran su ejemplo y ampliaran los derechos políticos de las mujeres en todo el mundo.",
  },
  {
    id: "241",
    title: "Muerte de Diana de Gales",
    category: "Política y guerra",
    date: "1997",
    description:
      "El 31 de agosto de 1997, Diana, Princesa de Gales, falleció en un trágico accidente automovilístico en París, Francia. La muerte de la Princesa Diana fue un evento impactante y generó un gran duelo en el Reino Unido y en todo el mundo. Diana fue conocida por su trabajo humanitario y su estilo icónico, y su legado continúa siendo recordado y celebrado.",
  },
  {
    id: "242",
    title: "Tratado de Lisboa",
    category: "Política y guerra",
    date: "1668",
    description:
      "La Guerra de Restauración portuguesa fue un conflicto entre Portugal y España que duró desde 1640 hasta 1668. La guerra comenzó con la revuelta de los portugueses contra el dominio español y resultó en la restauración de la independencia de Portugal. Después de casi 30 años de enfrentamientos, el Tratado de Lisboa de 1668 puso fin a la guerra y reconoció a Portugal como un estado independiente.",
  },
  {
    id: "243",
    title: "Incendio en la fábrica Triangle Shirtwaist",
    category: "Política y guerra",
    date: "1911",
    description:
      "El 25 de marzo de 1911, un incendio en la fábrica Triangle Shirtwaist en Nueva York dejó 146 trabajadores, en su mayoría mujeres jóvenes e inmigrantes, muertos. Este trágico evento resaltó las condiciones laborales peligrosas y la explotación a la que estaban sometidas las mujeres trabajadoras en ese momento. La tragedia impulsó la lucha por leyes laborales más seguras y justas, así como el movimiento feminista y laboral en Estados Unidos.",
  },
  {
    id: "244",
    title: "Ley de violencia de género en España",
    category: "Política y guerra",
    date: "2004",
    description:
      "La ley aborda la violencia de género en sus diversas formas, incluyendo la violencia física, sexual, psicológica y económica. Además, establece medidas de protección para las víctimas, programas de sensibilización y educación, y recursos para la prevención y atención a las mujeres afectadas por la violencia de género. La ley es considerada un hito en la lucha por los derechos de las mujeres en España y ha servido de modelo para otros países.",
  },
  {
    id: "245",
    title: "Ley de matrimonio homosexual en España",
    category: "Política y guerra",
    date: "2005",
    description:
      "En 2005, España aprobó la ley que permite el matrimonio entre personas del mismo sexo, convirtiéndose en el tercer país del mundo en reconocer el matrimonio homosexual a nivel nacional. La ley otorga a las parejas del mismo sexo los mismos derechos y responsabilidades que las parejas heterosexuales, incluyendo la adopción de niños y el acceso a beneficios de seguridad social y pensiones. La legalización del matrimonio homosexual en España fue un paso significativo en la lucha por la igualdad de derechos para la comunidad LGBTQ+ y ha sido seguida por la aprobación de leyes similares en otros países.",
  },
  {
    id: "246",
    title: "Constitución Española posterior a la dictadura",
    category: "Política y guerra",
    date: "1978",
    description:
      "La Constitución Española de 1978 fue aprobada el 6 de diciembre de 1978, marcando un hito en la transición a la democracia en España. La Constitución establece un sistema político parlamentario, garantiza los derechos y libertades fundamentales de los ciudadanos, y consagra la soberanía nacional en el pueblo español. La promulgación de la Constitución de 1978 fue un paso esencial en la consolidación de la democracia y la reconciliación nacional después de décadas de dictadura.",
  },
  {
    id: "247",
    title: "Pacto de los Toros de Guisando",
    category: "Política y guerra",
    date: "1468",
    description:
      "El Pacto de los Toros de Guisando fue un acuerdo firmado en septiembre de 1468 entre el rey Enrique IV de Castilla y su hermana, la futura reina Isabel I de Castilla. El pacto puso fin a la lucha por el poder entre ambos y confirmó a Isabel como la heredera al trono. Este acuerdo fue crucial para el establecimiento de la futura unión de los reinos de Castilla y Aragón bajo los Reyes Católicos, Isabel y Fernando, y sentó las bases para la formación del estado moderno de España.",
  },
  {
    id: "248",
    title: "Desastre del Annual",
    category: "Política y guerra",
    date: "1921",
    description:
      "El Desastre del Annual fue una derrota militar española en la Guerra del Rif en Marruecos, que tuvo lugar en julio de 1921. La derrota resultó en la muerte o captura de miles de soldados españoles y un retroceso significativo en las posiciones españolas en Marruecos. El desastre llevó a una crisis política en España, desencadenando el descrédito de la monarquía y del ejército, y contribuyendo al establecimiento de la Segunda República Española en 1931.",
  },
  {
    id: "249",
    title: "Pronunciamiento de Riego",
    category: "Política y guerra",
    date: "1820",
    description:
      "El pronunciamiento de Riego fue un levantamiento militar liderado por el teniente coronel Rafael del Riego el 1 de enero de 1820, en protesta por el absolutismo del rey Fernando VII de España. Riego y sus seguidores exigían la restauración de la Constitución de 1812 y el fin del absolutismo. El levantamiento tuvo éxito y condujo a un breve período de gobierno constitucional, conocido como el Trienio Liberal, que duró hasta 1823, cuando Fernando VII fue restaurado al poder absoluto con la ayuda de la intervención militar francesa.",
  },
  {
    id: "250",
    title: "Asesinato de Carrero Blanco",
    category: "Política y guerra",
    date: "1973",
    description:
      "El asesinato de Luis Carrero Blanco fue llevado a cabo por ETA (Euskadi Ta Askatasuna) el 20 de diciembre de 1973 en Madrid. Carrero Blanco, quien ocupaba el cargo de Presidente del Gobierno y era considerado el sucesor del dictador Francisco Franco, murió como resultado de la explosión de una bomba colocada por ETA debajo de la calle en la que circulaba el coche oficial en el que viajaba. Este atentado tuvo un gran impacto político en España y aceleró el proceso de transición a la democracia después de la muerte de Franco en 1975.",
  },
  {
    id: "251",
    title: "Intento de golpe de Estado del 23-F",
    category: "Política y guerra",
    date: "1981",
    description:
      "El 23 de febrero de 1981, un grupo de guardias civiles liderados por el teniente coronel Antonio Tejero intentó llevar a cabo un golpe de Estado en España. Los golpistas entraron en el Congreso de los Diputados durante la votación para la investidura del nuevo presidente del Gobierno y mantuvieron a los diputados y al Gobierno retenidos durante 18 horas. El golpe fracasó gracias a la movilización ciudadana y el rechazo de los líderes políticos y militares a la sublevación, lo que llevó a la consolidación de la democracia en España tras la Transición.",
  },
  {
    id: "252",
    title: "La Reconquista de Vigo",
    category: "Política y guerra",
    date: "1809",
    description:
      "La Reconquista de Vigo fue un episodio de la Guerra de la Independencia en el que las fuerzas españolas, lideradas por el general Francisco Javier Castaños, lograron expulsar a las tropas francesas de la ciudad gallega de Vigo en 1809. El éxito de la operación permitió a las fuerzas españolas recuperar una posición estratégica en el norte de España y cortar las líneas de suministro de las fuerzas francesas.",
  },
  {
    id: "253",
    title: "Fin de la Guerra de Cuba con España",
    category: "Política y guerra",
    date: "1898",
    description:
      "La Guerra de Cuba fue un conflicto bélico que enfrentó a España con las fuerzas independentistas cubanas durante el siglo XIX. En 1898, tras la pérdida de sus principales posiciones militares en Cuba, Puerto Rico y Filipinas, España firmó el Tratado de París con Estados Unidos, poniendo fin a la guerra y cediendo el control de sus últimas colonias en América y Asia. La guerra tuvo importantes consecuencias políticas y sociales en España, incluyendo la pérdida de su imperio colonial y el inicio de un período de crisis y decadencia del sistema político español.",
  },
  {
    id: "254",
    title: "Inicio de la Primera Guerra Carlista",
    category: "Política y guerra",
    date: "1833",
    description:
      "La Primera Guerra Carlista fue un conflicto bélico que tuvo lugar en España durante el reinado de Isabel II. La guerra se originó a raíz de la disputa por la sucesión al trono de España tras la muerte de Fernando VII, y enfrentó a los partidarios de Carlos María Isidro de Borbón, hermano del rey fallecido, contra las fuerzas gubernamentales de Isabel II, apoyadas por los liberales. La guerra tuvo importantes consecuencias políticas y sociales en España, incluyendo el aumento del poder del ejército y la Iglesia católica, y la consolidación del sistema político liberal.",
  },
  {
    id: "255",
    title: "Golpe de Estado en Chile",
    category: "Política y guerra",
    date: "1973",
    description:
      "El 11 de septiembre de 1973, el presidente chileno Salvador Allende fue derrocado en un Golpe de Estado liderado por el general Augusto Pinochet. La toma del poder por parte de Pinochet significó el fin del socialismo liderado por Allende, y la instauración de una dictadura militar que duraría hasta 1990. El golpe tuvo importantes consecuencias políticas y sociales en Chile, incluyendo la represión de la disidencia política y la instauración de políticas neoliberales en la economía chilena.",
  },
  {
    id: "256",
    title: "Nacimiento de Simón Bolívar",
    category: "Política y guerra",
    date: "1783",
    description:
      "Simón Bolívar nació el 24 de julio de 1783 en Caracas, Venezuela. Bolívar fue uno de los líderes más importantes en la lucha por la independencia de América Latina durante el siglo XIX, y su legado político y militar tuvo importantes consecuencias en la historia de América Latina. Bolívar lideró varios ejércitos y desempeñó un papel fundamental en la independencia de países como Venezuela, Colombia, Ecuador, Perú y Bolivia. Su visión de un continente unido e independiente ha sido un tema recurrente en la política y la cultura latinoamericanas.",
  },
  {
    id: "257",
    title: "Muerte de Pablo Escobar",
    category: "Política y guerra",
    date: "1993",
    description:
      "Pablo Escobar fue uno de los narcotraficantes más famosos y poderosos de la historia, y su carrera criminal estuvo marcada por la violencia y la corrupción en Colombia y otros países de América Latina. En 1993, después de una larga lucha contra las autoridades colombianas y estadounidenses, Escobar fue abatido por las fuerzas de seguridad colombianas. Su muerte tuvo importantes consecuencias políticas y sociales en Colombia, incluyendo la disminución del poder del cartel de Medellín y la implementación de políticas más rigurosas para combatir el narcotráfico en el país.",
  },
  {
    id: "258",
    title: "Inauguración del Museo de Arte Moderno de Nueva York",
    category: "Arte y literatura",
    date: "1929",
    description:
      "La inauguración del Museo de Arte Moderno de Nueva York en 1929 fue un hito en la historia del arte moderno y la cultura estadounidense. El museo ha sido uno de los más importantes en la promoción del arte moderno y contemporáneo, y su colección incluye obras de artistas como Pablo Picasso, Salvador Dalí, Jackson Pollock y Andy Warhol, entre muchos otros.",
  },
  {
    id: "259",
    title: "Concierto de The Beatles en el Shea Stadium",
    category: "Música y cine",
    date: "1965",
    description:
      "El concierto de The Beatles en el Shea Stadium en 1965 fue un hito en la historia de la música popular y se considera uno de los eventos más importantes en la cultura popular de la década de 1960. El concierto estableció a The Beatles como una fuerza dominante en la música y la cultura juvenil, y fue un ejemplo de la influencia de la música en la sociedad y la política de la época.",
  },
  {
    id: "260",
    title: "Estreno del libro Harry Potter y la Piedra Filosofal",
    category: "Arte y literatura",
    date: "1997",
    description:
      "El estreno de 'Harry Potter y la Piedra Filosofal' el 26 de junio de 1997 fue un evento histórico en la literatura infantil y juvenil. El libro, escrito por J.K. Rowling, cuenta la historia de un joven mago llamado Harry Potter y su lucha contra el malvado Lord Voldemort. La serie de Harry Potter se convirtió en un fenómeno mundial y ha vendido más de 500 millones de copias en todo el mundo, siendo traducida a más de 80 idiomas. La serie ha tenido un impacto significativo en la cultura popular y ha inspirado películas, parques temáticos y muchas otras formas de entretenimiento y merchandising.",
  },

  {
    id: "261",
    title: "Estreno de la película Titanic",
    category: "Música y cine",
    date: "1997",
    description:
      "El estreno de la película 'Titanic' el 19 de diciembre de 1997 fue un hito en la historia del cine. Dirigida por James Cameron, la película cuenta la historia de amor entre Jack y Rose a bordo del Titanic, el barco que se hundió en su viaje inaugural en 1912. La película fue un éxito de taquilla mundial y ganó 11 premios Oscar, incluyendo Mejor Película y Mejor Director. La banda sonora de la película, compuesta por James Horner, también fue un éxito, con la canción 'My Heart Will Go On' de Celine Dion convirtiéndose en un himno icónico.",
  },

  {
    id: "262",
    title: "Estreno de la película La Naranja Mecánica",
    category: "Música y cine",
    date: "1971",
    description:
      "El estreno de la película 'La Naranja Mecánica' el 19 de diciembre de 1971 fue un evento significativo en la historia del cine. Dirigida por Stanley Kubrick y basada en la novela de Anthony Burgess, la película cuenta la historia de Alex DeLarge, un joven delincuente que es sometido a un experimento de rehabilitación llamado 'Tratamiento Ludovico'. La película aborda temas de violencia, control gubernamental y libre albedrío y es conocida por su estilo visual distintivo y su banda sonora, que combina música clásica con sintetizadores electrónicos. 'La Naranja Mecánica' ha sido aclamada como una obra maestra del cine y sigue siendo objeto de debate y análisis.",
  },

  {
    id: "263",
    title: "Estreno de la serie Friends",
    category: "Música y cine",
    date: "1994",
    description:
      "El estreno de la serie 'Friends' el 22 de septiembre de 1994 fue un hito en la historia de la televisión. La comedia, creada por David Crane y Marta Kauffman, sigue las vidas de seis amigos en Nueva York y sus aventuras a lo largo de 10 temporadas. 'Friends' fue un éxito tanto en audiencia como en crítica, convirtiéndose en una de las series de televisión más icónicas y populares de todos los tiempos. La serie también lanzó las carreras de Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry y David Schwimmer.",
  },

  {
    id: "264",
    title: "Lanzamiento del álbum The Dark Side of the Moon de Pink Floyd",
    category: "Música y cine",
    date: "1973",
    description:
      "El lanzamiento del álbum 'The Dark Side of the Moon' de Pink Floyd el 1 de marzo de 1973 fue un evento importante en la historia del rock progresivo. El álbum, que contiene temas como 'Money', 'Time' y 'Us and Them', es considerado uno de los más influyentes en la música y la cultura popular. El álbum permaneció en las listas de éxitos durante 741 semanas consecutivas y ha vendido más de 45 millones de copias en todo el mundo, convirtiéndose en uno de los álbumes más exitosos de todos los tiempos.",
  },
  {
    id: "265",
    title: "Cuadro de Matrimonio Arnolfini",
    category: "Arte y literatura",
    date: "1434",
    description:
      "El 'Matrimonio Arnolfini' es un cuadro pintado por Jan van Eyck en 1434. Representa a una pareja adinerada y contiene detalles simbólicos y realistas. Es un ejemplo destacado de la pintura del Renacimiento flamenco.",
  },

  {
    id: "266",
    title: "Finalización de El nacimiento de Venus",
    category: "Arte y literatura",
    date: "1486",
    description:
      "'El nacimiento de Venus' es una pintura de Sandro Botticelli creada entre 1484 y 1486. Muestra a Venus, la diosa romana del amor, emergiendo del mar. Es una obra icónica del Renacimiento italiano.",
  },

  {
    id: "267",
    title: "Finalización del fresco de la Capilla Sixtina",
    category: "Arte y literatura",
    date: "1512",
    description:
      "Los frescos de la Capilla Sixtina, pintados por Miguel Ángel entre 1508 y 1512, son algunas de las obras de arte más famosas del Renacimiento. Incluyen 'La creación de Adán' y 'El juicio final'.",
  },

  {
    id: "268",
    title: "Finalización de la catedral de Florencia",
    category: "Arte y literatura",
    date: "1436",
    description:
      "La Catedral de Florencia, también conocida como Santa Maria del Fiore, es una obra maestra del Renacimiento italiano. Su cúpula, diseñada por Filippo Brunelleschi, es un hito en la arquitectura.",
  },

  {
    id: "269",
    title: "Finalización de la catedral de Venecia",
    category: "Arte y literatura",
    date: "1094",
    description:
      "La Catedral de Venecia, también conocida como la Basílica de San Marcos, es un ejemplo impresionante de arquitectura bizantina. Sus mosaicos dorados y su diseño opulento la convierten en un símbolo icónico de Venecia.",
  },
  {
    id: "270",
    title: "Publicación de 1984",
    category: "Arte y literatura",
    date: "1949",
    description:
      "La publicación de '1984' en 1949, escrita por George Orwell, es una de las novelas distópicas más influyentes de todos los tiempos. Ambientada en un futuro totalitario, la novela sigue la vida de Winston Smith, un empleado del Ministerio de la Verdad, cuyo trabajo es reescribir la historia para cumplir con la propaganda del gobierno. La novela explora temas como la vigilancia masiva, la censura y la manipulación de la realidad, y ha influido en la literatura, el cine y la política desde su publicación.",
  },

  {
    id: "271",
    title: "Publicación de Matar a un ruiseñor",
    category: "Arte y literatura",
    date: "1960",
    description:
      "La publicación de 'Matar a un ruiseñor' en 1960, escrita por Harper Lee, es una novela clásica de la literatura estadounidense. Ambientada en la década de 1930 en el sur de Estados Unidos, la novela cuenta la historia de Scout Finch, una niña que observa cómo su padre, el abogado Atticus Finch, defiende a un hombre negro acusado injustamente de violación. 'Matar a un ruiseñor' aborda temas como la injusticia racial, la moral y la educación, y ha sido elogiada por su tratamiento compasivo y conmovedor de estos temas. La novela ganó el Premio Pulitzer en 1961 y fue adaptada a una película aclamada en 1962.",
  },
  {
    id: "272",
    title: "Finalización de la catedral de Santiago de Compostela",
    category: "Arte y literatura",
    date: "1211",
    description:
      "La Catedral de Santiago de Compostela es un importante centro de peregrinación y una obra maestra del estilo románico y gótico. Alberga el supuesto sepulcro del apóstol Santiago el Mayor.",
  },

  {
    id: "273",
    title: "Nacimiento de Platón",
    category: "Arte y literatura",
    date: "-427",
    description:
      "Platón, uno de los filósofos más importantes de la antigua Grecia, nació en Atenas en el año 427 a.C. Fue discípulo de Sócrates y más tarde fundó la Academia, donde enseñó a su discípulo más famoso, Aristóteles. Sus diálogos filosóficos han influido profundamente en la filosofía occidental a lo largo de los siglos.",
  },

  {
    id: "274",
    title: "Cuadro de El Grito",
    category: "Arte y literatura",
    date: "1893",
    description:
      "'El Grito', pintado por Edvard Munch en 1893, es una obra icónica del expresionismo. Representa una figura angustiada en un paisaje tormentoso, simbolizando el terror y la desesperación humanos.",
  },

  {
    id: "275",
    title: "Torre de Hércules Patrimonio de la Humanidad",
    category: "Arte y literatura",
    date: "2009",
    description:
      "La Torre de Hércules es un antiguo faro romano situado en A Coruña, España. Es el faro romano en funcionamiento más antiguo del mundo y ha sido declarado Patrimonio de la Humanidad por la UNESCO.",
  },

  {
    id: "276",
    title: "Finalización de la escultura de David en Roma",
    category: "Arte y literatura",
    date: "1504",
    description:
      "El 'David' de Miguel Ángel, esculpido entre 1501 y 1504, es una obra maestra del Renacimiento italiano. La escultura de mármol representa al rey David bíblico y simboliza la fuerza y la belleza humanas.",
  },

  {
    id: "277",
    title: "Finalización de la Fontana di Trevi",
    category: "Arte y literatura",
    date: "1762",
    description:
      "La Fontana di Trevi es una fuente barroca en Roma, diseñada por Nicola Salvi. Es famosa por su grandiosidad y por la tradición de lanzar monedas para asegurar un retorno a la ciudad.",
  },

  {
    id: "278",
    title: "Finalización de la Torre de Santa Maria del Fiore",
    category: "Arte y literatura",
    date: "1359",
    description:
      "La Torre de Santa Maria del Fiore, también conocida como Campanile di Giotto, es una torre campanario en Florencia. Diseñada por Giotto, es un ejemplo destacado de la arquitectura gótica florentina.",
  },

  {
    id: "279",
    title: "Escultura de la Victoria de Samotracia",
    category: "Arte y literatura",
    date: "-190",
    description:
      "La Victoria de Samotracia es una escultura helenística que representa a la diosa de la victoria, Nike. Descubierta en la isla de Samotracia en 1863, es conocida por su realismo y dinamismo. Actualmente, se encuentra en el Museo del Louvre en París.",
  },

  {
    id: "280",
    title: "Descubrimiento de la escultura de la Venus de Milo",
    category: "Arte y literatura",
    date: "1820",
    description:
      "La Venus de Milo es una escultura helenística de la diosa del amor, Afrodita. Descubierta en 1820 en la isla de Milo, es famosa por su belleza y la falta de brazos. Fue creada en algún momento entre los años 130 A.C. y 100 A.C., y se cree que representa a Afrodita, diosa del amor y la belleza. Mide, aproximadamente, 211 cm de alto y se exhibe en el Museo del Louvre.",
  },

  {
    id: "281",
    title: "Creación del Museo del Louvre",
    category: "Arte y literatura",
    date: "1793",
    description:
      "El Museo del Louvre, creado en 1793, es uno de los museos de arte más grandes e importantes del mundo. Está ubicado en París, Francia, y alberga una colección excepcional, incluida la Mona Lisa y la Venus de Milo.",
  },

  {
    id: "282",
    title: "Creación de la Galería de los Uffizi",
    category: "Arte y literatura",
    date: "1581",
    description:
      "La Galería de los Uffizi, fundada en 1581 en Florencia, Italia, es uno de los museos de arte más antiguos y famosos del mundo. Alberga una impresionante colección de arte del Renacimiento italiano, incluidas obras de Botticelli, Leonardo da Vinci y Miguel Ángel.",
  },
  {
    id: "283",
    title: "Nacimiento de Aristóteles",
    category: "Arte y literatura",
    date: "-384",
    description:
      "Aristóteles, uno de los filósofos más influyentes de la antigua Grecia, nació en Estagira en el año 384 a.C. Fue discípulo de Platón en la Academia y más tarde fundó su propia escuela, el Liceo. Sus escritos abarcan diversas disciplinas, incluyendo lógica, biología, ética y política.",
  },

  {
    id: "284",
    title: "Fundación de la Academia por Platón",
    category: "Arte y literatura",
    date: "-387",
    description:
      "En el año 387 a.C., Platón fundó la Academia en Atenas, que se convirtió en el primer centro de enseñanza superior en el mundo occidental. Fue aquí donde enseñó a su discípulo más famoso, Aristóteles.",
  },

  {
    id: "285",
    title: "Muerte de Sócrates",
    category: "Arte y literatura",
    date: "-399",
    description:
      "Sócrates, el maestro de Platón y uno de los filósofos más importantes de la antigua Grecia, fue condenado a muerte en 399 a.C. por cargos de impiedad y corrupción de la juventud ateniense. Su ejecución impactó profundamente a Platón y lo impulsó a dedicar su vida a la filosofía.",
  },

  {
    id: "286",
    title: "Muerte de Platón",
    category: "Arte y literatura",
    date: "-347",
    description:
      "Platón falleció en el año 347 a.C., dejando un legado duradero en la filosofía occidental. Sus diálogos filosóficos, que a menudo presentan a Sócrates como personaje principal, siguen siendo estudiados y debatidos en la actualidad.",
  },

  {
    id: "287",
    title: "Aristóteles se une a la Academia",
    category: "Arte y literatura",
    date: "-367",
    description:
      "En el año 367 a.C., Aristóteles ingresó a la Academia de Platón en Atenas, donde estudió y fue discípulo de Platón durante aproximadamente 20 años antes de fundar su propia escuela, el Liceo.",
  },

  {
    id: "288",
    title: "Fundación del Liceo por Aristóteles",
    category: "Arte y literatura",
    date: "-335",
    description:
      "Aristóteles fundó su propia escuela, el Liceo, en Atenas en el año 335 a.C. El Liceo se centró en la investigación empírica y práctica en lugar del enfoque especulativo de la Academia de Platón. Fue aquí donde Aristóteles escribió la mayoría de sus obras filosóficas.",
  },

  {
    id: "289",
    title: "Muerte de Aristóteles",
    category: "Arte y literatura",
    date: "-322",
    description:
      "Aristóteles falleció en el año 322 a.C., dejando un impacto duradero en la filosofía y la ciencia occidentales. Sus escritos abarcaban una amplia gama de temas, desde biología y ética hasta política y retórica, y siguen siendo estudiados y debatidos en la actualidad.",
  },
];

export default events;
