import { useRef, useState, FormEvent } from 'react';
import { Head } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';
import './styles.css';

interface AboutCard {
  title: string;
  text: string;
  detail?: string;
  image?: string;
}

interface ScheduleRow {
  sport: string;
  days: string;
  time: string;
}

interface CoachCard {
  name: string;
  role: string;
}

const ABOUT_CARDS: AboutCard[] = [
  {
    title: 'Instalaciones',
    text: 'Canchas y espacios equipados para un entrenamiento seguro y de calidad.',
    detail: 'Contamos con canchas de césped sintético techadas, iluminadas y equipadas con conos, balones y material de entrenamiento profesional. Nuestras instalaciones permiten entrenar sin importar el clima, con espacio suficiente para trabajar técnica, velocidad y coordinación en cada sesión.',
    image: '/images/instalaciones.jpg',
  },
  {
    title: 'Entrenadores certificados',
    text: 'Profesionales con experiencia dedicados al progreso de cada alumno.',
    detail: 'Nuestro cuerpo técnico está formado por entrenadores certificados con años de experiencia formando deportistas de todos los niveles. Cada programa se adapta al ritmo de aprendizaje del alumno, combinando técnica, disciplina y acompañamiento cercano en cada sesión.',
    image: '/images/entrenadores.jpg',
  },
  {
    title: 'Todas las edades',
    text: 'Programas para niños, jóvenes y adultos según su nivel y objetivos.',
    detail: 'Diseñamos programas específicos para cada etapa: desde iniciación infantil hasta entrenamiento competitivo para jóvenes y adultos. Cada grupo entrena con metodologías adaptadas a su edad y nivel, asegurando un progreso seguro y motivador en todas las categorías.',
    image: '/images/edades.jpg',
  },
];

interface SportInfo {
  name: string;
  text: string;
  image?: string;
}

const SPORT_INFO: Record<string, SportInfo> = {
  basquet: {
    name: 'Baloncesto',
    text: 'Desarrollo físico y estratégico para todas las edades, con entrenamientos enfocados en tiro, defensa y trabajo en equipo.',
    image: '/images/tipo_basquet.png',
  },
  futbol: {
    name: 'Fútbol',
    text: 'Técnica, táctica y trabajo en equipo desde nivel inicial hasta competitivo, en canchas de césped sintético profesional.',
    image: '/images/tipo_futbol.png',
  },
  volley: {
    name: 'Vóleibol',
    text: 'Coordinación, salto y estrategia de equipo en un deporte dinámico para todas las edades y niveles.',
    image: '/images/tipo_volley.png',
  },
  tennis: {
    name: 'Tenis',
    text: 'Precisión, resistencia y concentración con instructores especializados en técnica individual.',
    image: '/images/tipo_tenis.png',
  },
  gimnasia: {
    name: 'Gimnasia',
    text: 'Flexibilidad, fuerza y control corporal a través de rutinas progresivas guiadas por entrenadores especializados.',
    image: '/images/tipo_gimnasia.png',
  },
  karate: {
    name: 'Karate',
    text: 'Disciplina, defensa personal y control mental, con progresión por cinturones para todas las edades.',
    image: '/images/tipo_karate.png',
  },
  natacion: {
    name: 'Natación',
    text: 'Técnicas de nado y resistencia cardiovascular con instructores especializados en todos los niveles.',
    image: '/images/tipo_natacion.png',
  },
  atletismo: {
    name: 'Atletismo',
    text: 'Velocidad, resistencia y fuerza en un programa completo de pista y campo para todas las edades.',
    image: '/images/tipo_atletismo.png',
  },
};

const RIGHT_SPORTS = ['gimnasia', 'karate', 'natacion', 'atletismo'];

const SCHEDULE_ROWS: ScheduleRow[] = [
  { sport: 'Fútbol', days: 'Lunes - Miércoles - Viernes', time: '4:00 pm - 6:00 pm' },
  { sport: 'Baloncesto', days: 'Martes - Jueves', time: '5:00 pm - 7:00 pm' },
  { sport: 'Natación', days: 'Lunes - Miércoles', time: '6:00 am - 8:00 am' },
  { sport: 'Atletismo', days: 'Sábados', time: '8:00 am - 10:00 am' },
];

const COACH_CARDS: CoachCard[] = [
  { name: 'Carlos Pérez', role: 'Entrenador de Fútbol' },
  { name: 'Ana Gómez', role: 'Entrenadora de Natación' },
  { name: 'Luis Torres', role: 'Entrenador de Baloncesto' },
];

export default function Inicio(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [hoveredSport, setHoveredSport] = useState<string | null>(null);
  const activeSport = hoveredSport ? SPORT_INFO[hoveredSport] : null;
  const isRightActive = Boolean(hoveredSport && RIGHT_SPORTS.includes(hoveredSport));
  const isLeftActive = Boolean(activeSport && !isRightActive);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <>
      <Head title="Academia DP - Deportes" />

      <Header />

      {/* Hero */}
      <section id="inicio" className="hero">
        <div className="hero__diagonal"></div>
        <div className="hero__stripes"></div>
        <div className="container hero__content">
          <div className="hero__rule"></div>
          <h1>SUPERA TUS LÍMITES CON <span>ACADEMIA DP</span></h1>
          <p>Formamos deportistas con disciplina, pasión y trabajo en equipo. Únete a nuestras clases y entrena con los mejores.</p>
          <a href="#contacto" className="btn btn--primary">Inscríbete ahora</a>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section id="nosotros" className="section">
        <div className="container">
          <h2 className="section__title">Sobre Nosotros</h2>
          <div className="section__bar"></div>
          <p className="section__subtitle">
            En Academia DP contamos con más de 10 años de experiencia formando atletas
            de todas las edades. Nuestro objetivo es impulsar el desarrollo físico,
            mental y social de cada estudiante a través del deporte.
          </p>

          <div className="grid grid--3">
            {ABOUT_CARDS.map((card) => {
              const expandable = Boolean(card.detail);

              return (
                <div
                  className={`card${expandable ? ' card--hoverable' : ''}`}
                  key={card.title}
                >
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>

                  {expandable && (
                    <div className="card__extra-wrapper">
                      <div className="card__extra">
                        {card.image && (
                          <img className="card__extra-image" src={card.image} alt={card.title} />
                        )}
                        <p className="card__extra-text">{card.detail}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deportes / Clases */}
      <section id="deportes" className="section section--alt">
        <div className="deportes-banner">
          {/* Zonas de hover fijas: no se mueven cuando el panel abre, evitando que el balón
              se desplace fuera del cursor y dispare mouseleave en bucle. */}
          <div className="deportes-banner__hit-zones">
            <div
              className="deportes-banner__hit-zone deportes-banner__hit-zone--basquet"
              onMouseEnter={() => setHoveredSport('basquet')}
              onMouseLeave={() => setHoveredSport(null)}
            />
            <div
              className="deportes-banner__hit-zone deportes-banner__hit-zone--futbol"
              onMouseEnter={() => setHoveredSport('futbol')}
              onMouseLeave={() => setHoveredSport(null)}
            />
            <div
              className="deportes-banner__hit-zone deportes-banner__hit-zone--volley"
              onMouseEnter={() => setHoveredSport('volley')}
              onMouseLeave={() => setHoveredSport(null)}
            />
            <div
              className="deportes-banner__hit-zone deportes-banner__hit-zone--tennis"
              onMouseEnter={() => setHoveredSport('tennis')}
              onMouseLeave={() => setHoveredSport(null)}
            />
            <div
              className="deportes-banner__hit-zone deportes-banner__hit-zone--gimnasia"
              onMouseEnter={() => setHoveredSport('gimnasia')}
              onMouseLeave={() => setHoveredSport(null)}
            />
            <div
              className="deportes-banner__hit-zone deportes-banner__hit-zone--karate"
              onMouseEnter={() => setHoveredSport('karate')}
              onMouseLeave={() => setHoveredSport(null)}
            />
            <div
              className="deportes-banner__hit-zone deportes-banner__hit-zone--natacion"
              onMouseEnter={() => setHoveredSport('natacion')}
              onMouseLeave={() => setHoveredSport(null)}
            />
            <div
              className="deportes-banner__hit-zone deportes-banner__hit-zone--atletismo"
              onMouseEnter={() => setHoveredSport('atletismo')}
              onMouseLeave={() => setHoveredSport(null)}
            />
          </div>

          <div className="deportes-banner__layout">
            <div
              className={`deportes-banner__panel${isLeftActive ? ' is-open' : ''}`}
              style={isLeftActive && activeSport?.image ? { backgroundImage: `url('${activeSport.image}')` } : undefined}
            >
              <div className="deportes-banner__panel-content">
                {isLeftActive && activeSport && (
                  <>
                    <h3>{activeSport.name}</h3>
                    <p>{activeSport.text}</p>
                  </>
                )}
              </div>
            </div>

            <div className="deportes-banner__stage">
              <img
                className={`deportes-banner__ball deportes-banner__ball--basquet${hoveredSport === 'basquet' ? ' is-spinning' : ''}`}
                src="/images/basquet.png"
                alt="Baloncesto"
              />
              <img
                className={`deportes-banner__ball deportes-banner__ball--futbol${hoveredSport === 'futbol' ? ' is-spinning' : ''}`}
                src="/images/futbol.png"
                alt="Fútbol"
              />
              <img
                className={`deportes-banner__ball deportes-banner__ball--volley${hoveredSport === 'volley' ? ' is-spinning' : ''}`}
                src="/images/volley.png"
                alt="Vóleibol"
              />
              <img
                className={`deportes-banner__ball deportes-banner__ball--tennis${hoveredSport === 'tennis' ? ' is-spinning' : ''}`}
                src="/images/tennis.png"
                alt="Tenis"
              />
              <img
                className={`deportes-banner__ball deportes-banner__ball--gimnasia${hoveredSport === 'gimnasia' ? ' is-spinning' : ''}`}
                src="/images/gimnasia.png"
                alt="Gimnasia"
              />
              <img
                className={`deportes-banner__ball deportes-banner__ball--karate${hoveredSport === 'karate' ? ' is-spinning' : ''}`}
                src="/images/karate.png"
                alt="Karate"
              />
              <img
                className={`deportes-banner__ball deportes-banner__ball--natacion${hoveredSport === 'natacion' ? ' is-spinning' : ''}`}
                src="/images/natacion.png"
                alt="Natación"
              />
              <img
                className={`deportes-banner__ball deportes-banner__ball--atletismo${hoveredSport === 'atletismo' ? ' is-spinning' : ''}`}
                src="/images/atletismo.png"
                alt="Atletismo"
              />
              <div className="deportes-banner__circle">
                <h2>DEPORTES</h2>
                <p className="deportes-banner__subtitle">Elige la disciplina que más te apasione.</p>
              </div>
            </div>

            <div
              className={`deportes-banner__panel deportes-banner__panel--right${isRightActive ? ' is-open' : ''}`}
              style={isRightActive && activeSport?.image ? { backgroundImage: `url('${activeSport.image}')` } : undefined}
            >
              <div className="deportes-banner__panel-content">
                {isRightActive && activeSport && (
                  <>
                    <h3>{activeSport.name}</h3>
                    <p>{activeSport.text}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section id="horarios" className="section">
        <div className="container">
          <h2 className="section__title">Horarios</h2>
          <div className="section__bar"></div>
          <p className="section__subtitle">Consulta los horarios disponibles para cada disciplina.</p>

          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Deporte</th>
                  <th>Días</th>
                  <th>Horario</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE_ROWS.map((row) => (
                  <tr key={row.sport}>
                    <td>{row.sport}</td>
                    <td>{row.days}</td>
                    <td>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Entrenadores */}
      <section id="entrenadores" className="section section--alt">
        <div className="container">
          <h2 className="section__title">Nuestros Entrenadores</h2>
          <div className="section__bar"></div>
          <p className="section__subtitle">Un equipo comprometido con tu desarrollo deportivo.</p>

          <div className="grid grid--3">
            {COACH_CARDS.map((coach) => (
              <div className="card card--coach" key={coach.name}>
                <div className="card__avatar">
                  <span>FOTO</span>
                </div>
                <h3>{coach.name}</h3>
                <p>{coach.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section">
        <div className="container">
          <h2 className="section__title">Contáctanos</h2>
          <div className="section__bar"></div>
          <p className="section__subtitle">¿Tienes preguntas? Escríbenos y te responderemos pronto.</p>

          {submitted && (
            <p style={{ textAlign: 'center', color: '#2F80FF', marginBottom: 24 }}>
              ¡Gracias por tu mensaje! Te responderemos pronto.
            </p>
          )}

          <form className="form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>

            <div className="form__group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required />
            </div>

            <div className="form__group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={5} placeholder="Escribe tu mensaje..." required></textarea>
            </div>

            <button type="submit" className="btn btn--primary">Enviar mensaje</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
