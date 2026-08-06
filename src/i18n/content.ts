import type { ImageMetadata } from 'astro';

import banoDucha from '../assets/images/bano-ducha.jpg';
import banoPrincipal from '../assets/images/bano-principal.jpg';
import barbacoaPiedra from '../assets/images/barbacoa-piedra.jpg';
import cocina from '../assets/images/cocina.jpg';
import comedorInterior from '../assets/images/comedor-interior.jpg';
import entradaPasillo from '../assets/images/entrada-pasillo.jpg';
import fachadaExteriorAtardecer from '../assets/images/fachada-exterior-atardecer.jpg';
import fachadaPiedraEscalera from '../assets/images/fachada-piedra-escalera.jpg';
import habitacionDoble1 from '../assets/images/habitacion-doble-1.jpg';
import habitacionDoble2 from '../assets/images/habitacion-doble-2.jpg';
import habitacionNinos from '../assets/images/habitacion-ninos.jpg';
import habitacionTriple from '../assets/images/habitacion-triple.jpg';
import lavanderia from '../assets/images/lavanderia.jpg';
import patioParkingExterior from '../assets/images/patio-parking-exterior.jpg';
import piscinaExterior from '../assets/images/piscina-exterior.jpg';
import salonComedorVista from '../assets/images/salon-comedor-vista.jpg';
import vistaAtardecerRiaArousa from '../assets/images/vista-atardecer-ria-arousa.jpg';

export type Locale = 'es' | 'en' | 'gl';

export const locales: Locale[] = ['es', 'en', 'gl'];

export const CONTACT = {
  phone: '+34 620 06 76 10',
  phoneHref: 'tel:+34620067610',
  whatsapp: '34620067610',
  capacity: 8,
  address: 'Rúa Pedroso, 46, 36618 Bamio, Pontevedra',
  mapsQuery: 'R%C3%BAa+Pedroso+46+36618+Bamio+Pontevedra',
  coords: { lat: 42.6161, lng: -8.7419 },
};

/** Hero and section images, shared across locales (alt text is localized in t[locale].a11y). */
export const heroImage = vistaAtardecerRiaArousa;
export const houseImage = fachadaExteriorAtardecer;

type GalleryItem = { image: ImageMetadata; es: string; en: string; gl: string };

export const gallery: GalleryItem[] = [
  { image: fachadaExteriorAtardecer, es: 'Fachada de la casa rural al atardecer', en: 'Rural house facade at sunset', gl: 'Fachada da casa rural ao solpor' },
  { image: fachadaPiedraEscalera, es: 'Exterior de piedra gallega con escalera', en: 'Galician stone exterior with staircase', gl: 'Exterior de pedra galega con escaleira' },
  { image: patioParkingExterior, es: 'Patio exterior y aparcamiento en la finca', en: 'Outdoor patio and on-site parking', gl: 'Patio exterior e aparcamento na finca' },
  { image: piscinaExterior, es: 'Piscina privada en el jardín de la casa', en: 'Private pool in the garden', gl: 'Piscina privada no xardín da casa' },
  { image: barbacoaPiedra, es: 'Barbacoa de piedra tradicional gallega', en: 'Traditional Galician stone barbecue', gl: 'Barbacoa de pedra tradicional galega' },
  { image: salonComedorVista, es: 'Salón-comedor con vistas a la Ría de Arousa', en: 'Living-dining room with views over the Ría de Arousa', gl: 'Salón-comedor con vistas á Ría de Arousa' },
  { image: entradaPasillo, es: 'Entrada y pasillo de la vivienda', en: 'Entrance hallway of the house', gl: 'Entrada e corredor da vivenda' },
  { image: comedorInterior, es: 'Comedor interior con mesa para el grupo', en: 'Indoor dining area with table for the group', gl: 'Comedor interior con mesa para o grupo' },
  { image: cocina, es: 'Cocina equipada de la casa rural', en: 'Fully equipped kitchen', gl: 'Cociña equipada da casa rural' },
  { image: habitacionDoble1, es: 'Primer dormitorio doble', en: 'First double bedroom', gl: 'Primeiro dormitorio dobre' },
  { image: habitacionDoble2, es: 'Segundo dormitorio doble', en: 'Second double bedroom', gl: 'Segundo dormitorio dobre' },
  { image: habitacionTriple, es: 'Dormitorio con tres camas individuales', en: 'Bedroom with three single beds', gl: 'Dormitorio con tres camas individuais' },
  { image: habitacionNinos, es: 'Espacio para familias con niños', en: 'Family-friendly space for children', gl: 'Espazo para familias con nenos' },
  { image: banoPrincipal, es: 'Baño principal de la casa', en: 'Main bathroom', gl: 'Baño principal da casa' },
  { image: banoDucha, es: 'Segundo baño con ducha', en: 'Second bathroom with shower', gl: 'Segundo baño con ducha' },
  { image: lavanderia, es: 'Zona de lavandería con lavadora', en: 'Laundry area with washing machine', gl: 'Zona de lavandaría con lavadora' },
];

export const t = {
  es: {
    lang: 'es',
    langName: 'Español',
    nav: { house: 'La casa', amenities: 'Comodidades', gallery: 'Galería', nearby: 'Entorno', faq: 'Preguntas', book: 'Reservar' },
    meta: {
      title: 'Casa rural con piscina en Vilagarcía · Solpor de Arousa',
      description:
        'Casa completa para 8 personas en Bamio, Vilagarcía de Arousa: piscina privada, barbacoa de piedra y vistas a la ría. Reserva directa sin comisiones.',
    },
    a11y: {
      skipToContent: 'Ir al contenido',
      mainNav: 'Navegación principal',
      langNav: 'Cambiar de idioma',
      heroAlt: 'Atardecer sobre la Ría de Arousa desde la casa rural Solpor de Arousa en Bamio',
      houseAlt: 'Fachada de piedra de la casa rural Solpor de Arousa al atardecer',
    },
    hero: {
      eyebrow: 'Casa rural · Bamio, Ría de Arousa',
      title: 'Solpor de Arousa',
      subtitle: 'Atardeceres sobre la ría, piedra gallega y calma en Bamio. Casa completa para hasta 8 personas.',
      bookWhatsapp: 'Reservar por WhatsApp',
      call: 'Llamar',
    },
    house: {
      heading: 'La casa',
      body: 'Casa rural de piedra en Bamio, parroquia de Vilagarcía de Arousa, con vistas a la Ría de Arousa. Alquiler íntegro de la vivienda: salón-comedor amplio, tres dormitorios, dos baños, piscina privada, barbacoa de piedra y aparcamiento. Ideal para familias o grupos de amigos que busquen tranquilidad sin renunciar al mar, la gastronomía y la montaña.',
      body2:
        'Estás en el corazón de las Rías Baixas: a un par de kilómetros del puerto marinero de Carril y sus viveros de almeja, con la playa de O Campanario y el Monte Xiabre a un paso, y con Santiago de Compostela a menos de una hora en coche. La casa se alquila completa, para que el grupo tenga toda la vivienda, el jardín y la piscina para él solo.',
    },
    amenities: {
      heading: 'Comodidades',
      items: [
        'Hasta 8 personas', 'Casa completa', '3 habitaciones', '2 baños',
        'Piscina privada', 'Vistas al mar', 'Barbacoa de piedra', 'Aparcamiento', 'Lavadora',
      ],
    },
    gallery: { heading: 'Galería', openLabel: 'Ampliar foto' },
    lightbox: { close: 'Cerrar', prev: 'Foto anterior', next: 'Foto siguiente' },
    nearby: {
      heading: 'Qué hay cerca',
      intro: 'Estás en pleno corazón de las Rías Baixas, entre el monte y el mar.',
      items: [
        { name: 'Playa O Campanario', desc: 'Playa con bandera azul en la desembocadura del río Ulla.', dist: 'Bamio' },
        { name: 'Carril', desc: 'Puerto marinero, viveros de almeja y paseo marítimo. Famoso por las almejas de Carril.', dist: '~2 km' },
        { name: 'Isla de Cortegada', desc: 'Parque Nacional con el mayor bosque de laurel de Europa. En barco o a pie con marea baja.', dist: 'desde Carril' },
        { name: 'Mirador de Bamio', desc: 'Sendero corto con vistas panorámicas a la ría y al puerto de Vilagarcía.', dist: 'Bamio' },
        { name: 'Monte Xiabre', desc: 'Montaña, castros y el área recreativa de Fontefría.', dist: 'Bamio' },
        { name: 'Piedra de los Ballotes', desc: 'Petroglifos prehistóricos grabados en roca.', dist: 'Bamio' },
        { name: 'Cambados', desc: 'Capital del vino Albariño, con bodegas y casco histórico.', dist: '~23 km' },
        { name: 'Santiago de Compostela', desc: 'Ciudad Patrimonio de la Humanidad y su Catedral.', dist: '~51 km' },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Para cuántas personas es la casa?',
          a: 'La casa acoge hasta 8 personas. Se alquila siempre completa, así que la vivienda entera, el jardín y la piscina son de uso exclusivo del grupo.',
        },
        {
          q: '¿Se pueden alquilar habitaciones por separado?',
          a: 'No. Solpor de Arousa se alquila únicamente como casa completa, en alquiler íntegro de la vivienda. No compartirás la casa con otros huéspedes.',
        },
        {
          q: '¿Cuántas habitaciones y baños tiene?',
          a: 'Tres dormitorios (dos dobles y uno con tres camas individuales) y dos baños, uno de ellos con ducha. Además hay un salón-comedor amplio, cocina y zona de lavandería con lavadora.',
        },
        {
          q: '¿La piscina es privada?',
          a: 'Sí. La piscina está en el jardín de la casa y es de uso privado y exclusivo para quienes se alojan, sin compartirla con nadie más.',
        },
        {
          q: '¿Hay aparcamiento en la casa?',
          a: 'Sí, se puede aparcar en la propia finca, en el patio exterior de la casa. No necesitas buscar sitio en la calle.',
        },
        {
          q: '¿Se admiten mascotas?',
          a: 'No, la casa no admite mascotas.',
        },
        {
          q: '¿Dónde está exactamente la casa?',
          a: 'En la Rúa Pedroso, 46, en Bamio, parroquia de Vilagarcía de Arousa (Pontevedra). Está a unos 2 km de Carril, a 23 km de Cambados y a unos 51 km de Santiago de Compostela.',
        },
        {
          q: '¿Cómo se reserva?',
          a: 'La reserva es directa con los propietarios, por WhatsApp o por teléfono al +34 620 06 76 10. Al no pasar por plataformas de alquiler, no hay comisiones de intermediarios.',
        },
        {
          q: '¿Es una casa adecuada para familias con niños?',
          a: 'Sí. Al alquilarse la casa completa con jardín y piscina privada, es una opción cómoda para familias y grupos, con espacio suficiente para hasta 8 personas.',
        },
      ],
    },
    book: {
      heading: 'Reserva directa',
      body: 'Sin comisiones de plataformas. Escríbenos por WhatsApp o llámanos para consultar disponibilidad y fechas.',
      note: 'Casa completa · hasta 8 personas',
      whatsapp: 'Reservar por WhatsApp',
      call: 'Llamar al +34 620 06 76 10',
      whatsappMsg: 'Hola, me interesa reservar Solpor de Arousa. ¿Tenéis disponibilidad para ',
    },
    footer: {
      tagline: 'Casa rural en Bamio, Vilagarcía de Arousa.',
      rights: 'Todos los derechos reservados.',
    },
    notFound: {
      title: 'Página no encontrada · Solpor de Arousa',
      heading: 'Esta página no existe',
      body: 'La dirección que buscas no está en la web. Puedes volver al inicio para ver la casa, la galería y cómo reservar.',
      cta: 'Volver al inicio',
    },
  },
  en: {
    lang: 'en',
    langName: 'English',
    nav: { house: 'The house', amenities: 'Amenities', gallery: 'Gallery', nearby: 'Nearby', faq: 'FAQ', book: 'Book' },
    meta: {
      title: 'Rural house with pool in Vilagarcía · Solpor de Arousa',
      description:
        'Whole rural house for 8 in Bamio, Vilagarcía de Arousa: private pool, stone barbecue and views over the Ría de Arousa. Book direct, no platform fees.',
    },
    a11y: {
      skipToContent: 'Skip to content',
      mainNav: 'Main navigation',
      langNav: 'Change language',
      heroAlt: 'Sunset over the Ría de Arousa from the Solpor de Arousa rural house in Bamio',
      houseAlt: 'Stone facade of the Solpor de Arousa rural house at sunset',
    },
    hero: {
      eyebrow: 'Rural house · Bamio, Ría de Arousa',
      title: 'Solpor de Arousa',
      subtitle: 'Sunsets over the estuary, Galician stone and peace in Bamio. Whole house for up to 8 guests.',
      bookWhatsapp: 'Book via WhatsApp',
      call: 'Call',
    },
    house: {
      heading: 'The house',
      body: 'A stone rural house in Bamio, Vilagarcía de Arousa, with views over the Ría de Arousa estuary. Entire property rental: spacious living-dining area, three bedrooms, two bathrooms, private pool, stone barbecue and parking. Perfect for families or groups who want peace and quiet without giving up the sea, local food and the mountains.',
      body2:
        'You are in the heart of the Rías Baixas: a couple of kilometres from the fishing harbour of Carril and its clam beds, with O Campanario beach and Monte Xiabre close by, and Santiago de Compostela less than an hour away by car. The house is rented as a whole, so your group has the entire property, the garden and the pool to itself.',
    },
    amenities: {
      heading: 'Amenities',
      items: [
        'Up to 8 guests', 'Entire house', '3 bedrooms', '2 bathrooms',
        'Private pool', 'Sea views', 'Stone barbecue', 'Parking', 'Washing machine',
      ],
    },
    gallery: { heading: 'Gallery', openLabel: 'Enlarge photo' },
    lightbox: { close: 'Close', prev: 'Previous photo', next: 'Next photo' },
    nearby: {
      heading: 'What’s nearby',
      intro: 'You’re in the heart of the Rías Baixas, between the hills and the sea.',
      items: [
        { name: 'O Campanario beach', desc: 'Blue Flag beach at the mouth of the river Ulla.', dist: 'Bamio' },
        { name: 'Carril', desc: 'Fishing harbour, clam beds and seafront promenade. Famous for Carril clams.', dist: '~2 km' },
        { name: 'Cortegada Island', desc: 'National Park with Europe’s largest laurel forest. By boat or on foot at low tide.', dist: 'from Carril' },
        { name: 'Bamio viewpoint', desc: 'Short trail with panoramic views over the estuary and Vilagarcía harbour.', dist: 'Bamio' },
        { name: 'Monte Xiabre', desc: 'Mountain trails, hillforts and the Fontefría recreation area.', dist: 'Bamio' },
        { name: 'Piedra de los Ballotes', desc: 'Prehistoric petroglyphs carved into rock.', dist: 'Bamio' },
        { name: 'Cambados', desc: 'Capital of Albariño wine, with wineries and a historic quarter.', dist: '~23 km' },
        { name: 'Santiago de Compostela', desc: 'World Heritage city and its Cathedral.', dist: '~51 km' },
      ],
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'How many people does the house sleep?',
          a: 'The house sleeps up to 8 guests. It is always rented as a whole, so the entire property, the garden and the pool are for your group only.',
        },
        {
          q: 'Can individual rooms be booked?',
          a: 'No. Solpor de Arousa is only rented as an entire house. You will not share the property with other guests.',
        },
        {
          q: 'How many bedrooms and bathrooms are there?',
          a: 'Three bedrooms (two doubles and one with three single beds) and two bathrooms, one of them with a shower. There is also a spacious living-dining area, a kitchen and a laundry area with a washing machine.',
        },
        {
          q: 'Is the pool private?',
          a: 'Yes. The pool is in the garden and is for the exclusive use of the guests staying at the house, shared with no one else.',
        },
        {
          q: 'Is there parking at the house?',
          a: 'Yes, you can park on the property itself, in the outdoor patio area. There is no need to look for street parking.',
        },
        {
          q: 'Are pets allowed?',
          a: 'No, the house does not accept pets.',
        },
        {
          q: 'Where exactly is the house?',
          a: 'At Rúa Pedroso, 46, in Bamio, part of Vilagarcía de Arousa (Pontevedra, Galicia). It is about 2 km from Carril, 23 km from Cambados and around 51 km from Santiago de Compostela.',
        },
        {
          q: 'How do I book?',
          a: 'You book directly with the owners, via WhatsApp or by phone on +34 620 06 76 10. Because there is no rental platform in between, there are no intermediary fees.',
        },
        {
          q: 'Is the house suitable for families with children?',
          a: 'Yes. As the whole house is rented with its garden and private pool, it is a comfortable option for families and groups, with room for up to 8 people.',
        },
      ],
    },
    book: {
      heading: 'Direct booking',
      body: 'No platform fees. Message us on WhatsApp or call to check availability and dates.',
      note: 'Entire house · up to 8 guests',
      whatsapp: 'Book via WhatsApp',
      call: 'Call +34 620 06 76 10',
      whatsappMsg: 'Hi, I’m interested in booking Solpor de Arousa. Do you have availability for ',
    },
    footer: {
      tagline: 'Rural house in Bamio, Vilagarcía de Arousa.',
      rights: 'All rights reserved.',
    },
    notFound: {
      title: 'Page not found · Solpor de Arousa',
      heading: 'This page does not exist',
      body: 'The address you are looking for is not on this site. Head back to the homepage to see the house, the gallery and how to book.',
      cta: 'Back to homepage',
    },
  },
  gl: {
    lang: 'gl',
    langName: 'Galego',
    nav: { house: 'A casa', amenities: 'Comodidades', gallery: 'Galería', nearby: 'Contorna', faq: 'Preguntas', book: 'Reservar' },
    meta: {
      // Deliberately not identical to the Spanish title: duplicate titles across
      // locales are a weak signal even with hreflang in place.
      title: 'Casa rural con piscina en Vilagarcía de Arousa · Solpor',
      description:
        'Casa completa para 8 persoas en Bamio, Vilagarcía de Arousa: piscina privada, barbacoa de pedra e vistas á ría. Reserva directa sen comisións.',
    },
    a11y: {
      skipToContent: 'Ir ao contido',
      mainNav: 'Navegación principal',
      langNav: 'Cambiar de idioma',
      heroAlt: 'Solpor sobre a Ría de Arousa desde a casa rural Solpor de Arousa en Bamio',
      houseAlt: 'Fachada de pedra da casa rural Solpor de Arousa ao solpor',
    },
    hero: {
      eyebrow: 'Casa rural · Bamio, Ría de Arousa',
      title: 'Solpor de Arousa',
      subtitle: 'Solpores sobre a ría, pedra galega e calma en Bamio. Casa completa para ata 8 persoas.',
      bookWhatsapp: 'Reservar por WhatsApp',
      call: 'Chamar',
    },
    house: {
      heading: 'A casa',
      body: 'Casa rural de pedra en Bamio, parroquia de Vilagarcía de Arousa, con vistas á Ría de Arousa. Alugueiro íntegro da vivenda: salón-comedor amplo, tres dormitorios, dous baños, piscina privada, barbacoa de pedra e aparcamento. Ideal para familias ou grupos que busquen tranquilidade sen renunciar ao mar, á gastronomía e á montaña.',
      body2:
        'Estás no corazón das Rías Baixas: a un par de quilómetros do porto mariñeiro de Carril e dos seus viveiros de ameixa, coa praia de O Campanario e o Monte Xiabre a un paso, e con Santiago de Compostela a menos dunha hora en coche. A casa alúgase completa, para que o grupo teña toda a vivenda, o xardín e a piscina só para el.',
    },
    amenities: {
      heading: 'Comodidades',
      items: [
        'Ata 8 persoas', 'Casa completa', '3 dormitorios', '2 baños',
        'Piscina privada', 'Vistas ao mar', 'Barbacoa de pedra', 'Aparcamento', 'Lavadora',
      ],
    },
    gallery: { heading: 'Galería', openLabel: 'Ampliar foto' },
    lightbox: { close: 'Pechar', prev: 'Foto anterior', next: 'Foto seguinte' },
    nearby: {
      heading: 'Que hai preto',
      intro: 'Estás no corazón das Rías Baixas, entre o monte e o mar.',
      items: [
        { name: 'Praia O Campanario', desc: 'Praia con bandeira azul na desembocadura do río Ulla.', dist: 'Bamio' },
        { name: 'Carril', desc: 'Porto mariñeiro, viveiros de ameixa e paseo marítimo. Famoso polas ameixas de Carril.', dist: '~2 km' },
        { name: 'Illa de Cortegada', desc: 'Parque Nacional co maior bosque de loureiro de Europa. En barco ou a pé coa marea baixa.', dist: 'desde Carril' },
        { name: 'Miradoiro de Bamio', desc: 'Sendeiro curto con vistas panorámicas á ría e ao porto de Vilagarcía.', dist: 'Bamio' },
        { name: 'Monte Xiabre', desc: 'Montaña, castros e a área recreativa de Fontefría.', dist: 'Bamio' },
        { name: 'Pedra dos Ballotes', desc: 'Petroglifos prehistóricos gravados na rocha.', dist: 'Bamio' },
        { name: 'Cambados', desc: 'Capital do viño Albariño, con adegas e casco histórico.', dist: '~23 km' },
        { name: 'Santiago de Compostela', desc: 'Cidade Patrimonio da Humanidade e a súa Catedral.', dist: '~51 km' },
      ],
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Para cantas persoas é a casa?',
          a: 'A casa acolle ata 8 persoas. Alúgase sempre completa, así que a vivenda enteira, o xardín e a piscina son de uso exclusivo do grupo.',
        },
        {
          q: '¿Pódense alugar habitacións por separado?',
          a: 'Non. Solpor de Arousa alúgase unicamente como casa completa, en alugueiro íntegro da vivenda. Non compartirás a casa con outros hóspedes.',
        },
        {
          q: '¿Cantos dormitorios e baños ten?',
          a: 'Tres dormitorios (dous dobres e un con tres camas individuais) e dous baños, un deles con ducha. Ademais hai un salón-comedor amplo, cociña e zona de lavandaría con lavadora.',
        },
        {
          q: '¿A piscina é privada?',
          a: 'Si. A piscina está no xardín da casa e é de uso privado e exclusivo para quen se aloxa, sen compartila con ninguén máis.',
        },
        {
          q: '¿Hai aparcamento na casa?',
          a: 'Si, pódese aparcar na propia finca, no patio exterior da casa. Non precisas buscar sitio na rúa.',
        },
        {
          q: '¿Admítense mascotas?',
          a: 'Non, a casa non admite mascotas.',
        },
        {
          q: '¿Onde está exactamente a casa?',
          a: 'Na Rúa Pedroso, 46, en Bamio, parroquia de Vilagarcía de Arousa (Pontevedra). Está a uns 2 km de Carril, a 23 km de Cambados e a uns 51 km de Santiago de Compostela.',
        },
        {
          q: '¿Como se reserva?',
          a: 'A reserva é directa cos propietarios, por WhatsApp ou por teléfono no +34 620 06 76 10. Ao non pasar por plataformas de alugueiro, non hai comisións de intermediarios.',
        },
        {
          q: '¿É unha casa axeitada para familias con nenos?',
          a: 'Si. Ao alugarse a casa completa con xardín e piscina privada, é unha opción cómoda para familias e grupos, con espazo dabondo para ata 8 persoas.',
        },
      ],
    },
    book: {
      heading: 'Reserva directa',
      body: 'Sen comisións de plataformas. Escríbenos por WhatsApp ou chámanos para consultar dispoñibilidade e datas.',
      note: 'Casa completa · ata 8 persoas',
      whatsapp: 'Reservar por WhatsApp',
      call: 'Chamar ao +34 620 06 76 10',
      whatsappMsg: 'Ola, interésame reservar Solpor de Arousa. Tedes dispoñibilidade para ',
    },
    footer: {
      tagline: 'Casa rural en Bamio, Vilagarcía de Arousa.',
      rights: 'Todos os dereitos reservados.',
    },
    notFound: {
      title: 'Páxina non encontrada · Solpor de Arousa',
      heading: 'Esta páxina non existe',
      body: 'O enderezo que buscas non está na web. Podes volver ao inicio para ver a casa, a galería e como reservar.',
      cta: 'Volver ao inicio',
    },
  },
} as const;

/** Amenity names for schema.org amenityFeature, localized per locale. */
export const schemaAmenities: Record<Locale, string[]> = {
  es: ['Piscina privada', 'Vistas al mar', 'Barbacoa de piedra', 'Aparcamiento gratuito', 'Lavadora', 'Jardín'],
  en: ['Private pool', 'Sea view', 'Stone barbecue', 'Free parking', 'Washing machine', 'Garden'],
  gl: ['Piscina privada', 'Vistas ao mar', 'Barbacoa de pedra', 'Aparcamento gratuíto', 'Lavadora', 'Xardín'],
};

export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  if (locale === 'es') return `/${clean}`;
  return `/${locale}/${clean}`;
}
