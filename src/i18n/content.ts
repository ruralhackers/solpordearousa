export type Locale = 'es' | 'en' | 'gl';

export const locales: Locale[] = ['es', 'en', 'gl'];

export const CONTACT = {
  phone: '+34 620 06 76 10',
  phoneHref: 'tel:+34620067610',
  whatsapp: '34620067610',
  price: 300,
  capacity: 8,
  address: 'Rúa Pedroso, 46, 36618 Bamio, Pontevedra',
  mapsQuery: 'R%C3%BAa+Pedroso+46+36618+Bamio+Pontevedra',
  coords: { lat: 42.6161, lng: -8.7419 },
};

type GalleryItem = { src: string; es: string; en: string; gl: string };

export const gallery: GalleryItem[] = [
  { src: '/images/fachada-exterior-atardecer.jpg', es: 'Fachada de la casa al atardecer', en: 'House facade at sunset', gl: 'Fachada da casa ao solpor' },
  { src: '/images/fachada-piedra-escalera.jpg', es: 'Exterior de piedra gallega', en: 'Galician stone exterior', gl: 'Exterior de pedra galega' },
  { src: '/images/patio-parking-exterior.jpg', es: 'Patio y aparcamiento', en: 'Patio and parking', gl: 'Patio e aparcamento' },
  { src: '/images/piscina-exterior.jpg', es: 'Piscina privada en el jardín', en: 'Private pool in the garden', gl: 'Piscina privada no xardín' },
  { src: '/images/barbacoa-piedra.jpg', es: 'Barbacoa de piedra tradicional', en: 'Traditional stone barbecue', gl: 'Barbacoa de pedra tradicional' },
  { src: '/images/salon-comedor-vista.jpg', es: 'Salón-comedor con vistas', en: 'Living-dining room with views', gl: 'Salón-comedor con vistas' },
  { src: '/images/comedor-interior.jpg', es: 'Comedor interior', en: 'Dining area', gl: 'Comedor interior' },
  { src: '/images/habitacion-doble-1.jpg', es: 'Dormitorio doble', en: 'Double bedroom', gl: 'Dormitorio dobre' },
  { src: '/images/habitacion-doble-2.jpg', es: 'Dormitorio doble', en: 'Double bedroom', gl: 'Dormitorio dobre' },
  { src: '/images/habitacion-triple.jpg', es: 'Habitación con tres camas', en: 'Triple bedroom', gl: 'Habitación con tres camas' },
  { src: '/images/habitacion-ninos.jpg', es: 'Espacio para familias', en: 'Family-friendly space', gl: 'Espazo para familias' },
  { src: '/images/bano-jacuzzi.jpg', es: 'Baño con jacuzzi', en: 'Bathroom with jacuzzi', gl: 'Baño con xacuzzi' },
  { src: '/images/bano-ducha.jpg', es: 'Segundo baño con ducha', en: 'Second bathroom with shower', gl: 'Segundo baño con ducha' },
  { src: '/images/lavanderia.jpg', es: 'Zona de lavandería', en: 'Laundry area', gl: 'Zona de lavandaría' },
];

export const t = {
  es: {
    lang: 'es',
    langName: 'Español',
    nav: { house: 'La casa', amenities: 'Comodidades', gallery: 'Galería', nearby: 'Entorno', book: 'Reservar' },
    meta: {
      title: 'Solpor de Arousa · Casa rural en Bamio, Vilagarcía',
      description: 'Casa rural para 8 personas en Bamio con piscina, jacuzzi y vistas a la Ría de Arousa. 300 €/día, casa completa. Reserva directa.',
    },
    hero: {
      eyebrow: 'Casa rural · Bamio, Ría de Arousa',
      title: 'Solpor de Arousa',
      subtitle: 'Atardeceres sobre la ría, piedra gallega y calma en Bamio. Casa completa para hasta 8 personas.',
      price: 'Desde 300 €/día · Casa completa',
      bookWhatsapp: 'Reservar por WhatsApp',
      call: 'Llamar',
    },
    house: {
      heading: 'La casa',
      body: 'Casa rural de piedra en Bamio, parroquia de Vilagarcía de Arousa, con vistas a la Ría de Arousa. Alquiler íntegro de la vivienda: salón-comedor amplio, tres dormitorios, dos baños (uno con jacuzzi), piscina privada, barbacoa de piedra y aparcamiento. Ideal para familias o grupos de amigos que busquen tranquilidad sin renunciar al mar, la gastronomía y el senderismo.',
    },
    amenities: {
      heading: 'Comodidades',
      items: [
        'Hasta 8 personas', 'Casa completa', '3 habitaciones', '2 baños + jacuzzi',
        'Piscina privada', 'Vistas al mar', 'Barbacoa de piedra', 'Aparcamiento', 'Lavadora',
      ],
    },
    gallery: { heading: 'Galería' },
    nearby: {
      heading: 'Qué hay cerca',
      intro: 'Estás en pleno corazón de las Rías Baixas, entre el monte y el mar.',
      items: [
        { name: 'Playa O Campanario', desc: 'Playa con bandera azul en la desembocadura del río Ulla.', dist: 'Bamio' },
        { name: 'Carril', desc: 'Puerto marinero, viveros de almeja y paseo marítimo. Famoso por las almejas de Carril.', dist: '~2 km' },
        { name: 'Isla de Cortegada', desc: 'Parque Nacional con el mayor bosque de laurel de Europa. En barco o a pie con marea baja.', dist: 'desde Carril' },
        { name: 'Mirador de Bamio', desc: 'Sendero corto con vistas panorámicas a la ría y al puerto de Vilagarcía.', dist: 'Bamio' },
        { name: 'Monte Xiabre', desc: 'Senderismo, castros y el área recreativa de Fontefría.', dist: 'Bamio' },
        { name: 'Piedra de los Ballotes', desc: 'Petroglifos prehistóricos grabados en roca.', dist: 'Bamio' },
        { name: 'Cambados', desc: 'Capital del vino Albariño, con bodegas y casco histórico.', dist: '~23 km' },
        { name: 'Santiago de Compostela', desc: 'Ciudad Patrimonio de la Humanidad y su Catedral.', dist: '~51 km' },
      ],
    },
    book: {
      heading: 'Reserva directa',
      body: 'Sin comisiones de plataformas. Escríbenos por WhatsApp o llámanos para consultar disponibilidad y fechas.',
      price: '300 € / día',
      priceNote: 'Casa completa · hasta 8 personas',
      whatsapp: 'Reservar por WhatsApp',
      call: 'Llamar al +34 620 06 76 10',
      whatsappMsg: 'Hola, me interesa reservar Solpor de Arousa. ¿Tenéis disponibilidad para ',
    },
    footer: {
      tagline: 'Casa rural en Bamio, Vilagarcía de Arousa.',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    lang: 'en',
    langName: 'English',
    nav: { house: 'The house', amenities: 'Amenities', gallery: 'Gallery', nearby: 'Nearby', book: 'Book' },
    meta: {
      title: 'Solpor de Arousa · Rural house in Bamio, Vilagarcía',
      description: 'Rural house for 8 in Bamio with pool, jacuzzi and Ría de Arousa views. €300/day, whole house. Direct booking.',
    },
    hero: {
      eyebrow: 'Rural house · Bamio, Ría de Arousa',
      title: 'Solpor de Arousa',
      subtitle: 'Sunsets over the estuary, Galician stone and peace in Bamio. Whole house for up to 8 guests.',
      price: 'From €300/day · Entire house',
      bookWhatsapp: 'Book via WhatsApp',
      call: 'Call',
    },
    house: {
      heading: 'The house',
      body: 'A stone rural house in Bamio, Vilagarcía de Arousa, with views over the Ría de Arousa estuary. Entire property rental: spacious living-dining area, three bedrooms, two bathrooms (one with jacuzzi), private pool, stone barbecue and parking. Perfect for families or groups who want peace and quiet without giving up the sea, local food and hiking.',
    },
    amenities: {
      heading: 'Amenities',
      items: [
        'Up to 8 guests', 'Entire house', '3 bedrooms', '2 bathrooms + jacuzzi',
        'Private pool', 'Sea views', 'Stone barbecue', 'Parking', 'Washing machine',
      ],
    },
    gallery: { heading: 'Gallery' },
    nearby: {
      heading: 'What\u2019s nearby',
      intro: 'You\u2019re in the heart of the Rías Baixas, between the hills and the sea.',
      items: [
        { name: 'O Campanario beach', desc: 'Blue Flag beach at the mouth of the river Ulla.', dist: 'Bamio' },
        { name: 'Carril', desc: 'Fishing harbour, clam beds and seafront promenade. Famous for Carril clams.', dist: '~2 km' },
        { name: 'Cortegada Island', desc: 'National Park with Europe\u2019s largest laurel forest. By boat or on foot at low tide.', dist: 'from Carril' },
        { name: 'Bamio viewpoint', desc: 'Short trail with panoramic views over the estuary and Vilagarcía harbour.', dist: 'Bamio' },
        { name: 'Monte Xiabre', desc: 'Hiking, hillforts and the Fontefría recreation area.', dist: 'Bamio' },
        { name: 'Piedra de los Ballotes', desc: 'Prehistoric petroglyphs carved into rock.', dist: 'Bamio' },
        { name: 'Cambados', desc: 'Capital of Albariño wine, with wineries and a historic quarter.', dist: '~23 km' },
        { name: 'Santiago de Compostela', desc: 'World Heritage city and its Cathedral.', dist: '~51 km' },
      ],
    },
    book: {
      heading: 'Direct booking',
      body: 'No platform fees. Message us on WhatsApp or call to check availability and dates.',
      price: '€300 / day',
      priceNote: 'Entire house · up to 8 guests',
      whatsapp: 'Book via WhatsApp',
      call: 'Call +34 620 06 76 10',
      whatsappMsg: 'Hi, I\u2019m interested in booking Solpor de Arousa. Do you have availability for ',
    },
    footer: {
      tagline: 'Rural house in Bamio, Vilagarcía de Arousa.',
      rights: 'All rights reserved.',
    },
  },
  gl: {
    lang: 'gl',
    langName: 'Galego',
    nav: { house: 'A casa', amenities: 'Comodidades', gallery: 'Galería', nearby: 'Contorna', book: 'Reservar' },
    meta: {
      title: 'Solpor de Arousa · Casa rural en Bamio, Vilagarcía',
      description: 'Casa rural para 8 persoas en Bamio con piscina, xacuzzi e vistas á Ría de Arousa. 300 €/día, casa completa. Reserva directa.',
    },
    hero: {
      eyebrow: 'Casa rural · Bamio, Ría de Arousa',
      title: 'Solpor de Arousa',
      subtitle: 'Solpores sobre a ría, pedra galega e calma en Bamio. Casa completa para ata 8 persoas.',
      price: 'Desde 300 €/día · Casa completa',
      bookWhatsapp: 'Reservar por WhatsApp',
      call: 'Chamar',
    },
    house: {
      heading: 'A casa',
      body: 'Casa rural de pedra en Bamio, parroquia de Vilagarcía de Arousa, con vistas á Ría de Arousa. Alugueiro íntegro da vivenda: salón-comedor amplo, tres dormitorios, dous baños (un con xacuzzi), piscina privada, barbacoa de pedra e aparcamento. Ideal para familias ou grupos que busquen tranquilidade sen renunciar ao mar, á gastronomía e ao sendeirismo.',
    },
    amenities: {
      heading: 'Comodidades',
      items: [
        'Ata 8 persoas', 'Casa completa', '3 dormitorios', '2 baños + xacuzzi',
        'Piscina privada', 'Vistas ao mar', 'Barbacoa de pedra', 'Aparcamento', 'Lavadora',
      ],
    },
    gallery: { heading: 'Galería' },
    nearby: {
      heading: 'Que hai preto',
      intro: 'Estás no corazón das Rías Baixas, entre o monte e o mar.',
      items: [
        { name: 'Praia O Campanario', desc: 'Praia con bandeira azul na desembocadura do río Ulla.', dist: 'Bamio' },
        { name: 'Carril', desc: 'Porto mariñeiro, viveiros de ameixa e paseo marítimo. Famoso polas ameixas de Carril.', dist: '~2 km' },
        { name: 'Illa de Cortegada', desc: 'Parque Nacional co maior bosque de loureiro de Europa. En barco ou a pé coa marea baixa.', dist: 'desde Carril' },
        { name: 'Miradoiro de Bamio', desc: 'Sendeiro curto con vistas panorámicas á ría e ao porto de Vilagarcía.', dist: 'Bamio' },
        { name: 'Monte Xiabre', desc: 'Sendeirismo, castros e a área recreativa de Fontefría.', dist: 'Bamio' },
        { name: 'Pedra dos Ballotes', desc: 'Petroglifos prehistóricos gravados na rocha.', dist: 'Bamio' },
        { name: 'Cambados', desc: 'Capital do viño Albariño, con adegas e casco histórico.', dist: '~23 km' },
        { name: 'Santiago de Compostela', desc: 'Cidade Patrimonio da Humanidade e a súa Catedral.', dist: '~51 km' },
      ],
    },
    book: {
      heading: 'Reserva directa',
      body: 'Sen comisións de plataformas. Escríbenos por WhatsApp ou chámanos para consultar dispoñibilidade e datas.',
      price: '300 € / día',
      priceNote: 'Casa completa · ata 8 persoas',
      whatsapp: 'Reservar por WhatsApp',
      call: 'Chamar ao +34 620 06 76 10',
      whatsappMsg: 'Ola, interésame reservar Solpor de Arousa. Tedes dispoñibilidade para ',
    },
    footer: {
      tagline: 'Casa rural en Bamio, Vilagarcía de Arousa.',
      rights: 'Todos os dereitos reservados.',
    },
  },
} as const;

export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (locale === 'es') return `/${clean}`;
  return `/${locale}/${clean}`;
}
