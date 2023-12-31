import { BsJournalCode, BsFillDiagram3Fill } from 'react-icons/bs';
import Joacoimg from '@/public/images/JA.jpg';
import Lautiimg from '@/public/images/LC.jpg';
import LBimg from '@/public/images/LB.jpg';
import Logo from '@/public/images/logoambaco.png'

const data = {
 nav: [
  // { href: 'home', name: 'Home', button: false }, 
  { href: 'servicios', name: 'Servicios', button: false },
  { href: 'nosotros', name: 'Nosotros', button: false },
  { href: 'contacto', name: 'Contacto', button: true }
 ],
 hero: {
  titulo: 'Bienvenidos a',
  span: Logo,
  texto: 'Tu socio estratégico para impulsar el crecimiento y la excelencia en tu empresa. Sabemos que cada decisión cuenta y estamos aquí para ofrecerte soluciones personalizadas y orientadas a resultados que llevan tu negocio al siguiente nivel.'
 },
 services: {
  titulo: 'Nuestro Servicios',
  subtitulo: 'Nos dedicamos a relevar y optimizar procesos claves de su negocio para mejorar la eficiencia de los mismos aplicando metodologías Lean. A su vez contamos con experiencia en analítica de datos para visualizar indicadores claves para la toma de decisiones.',
  titulo2: 'El poder de las herramientas',
  subtitulo2: 'Diseñada para catalizar el éxito de tu empresa. Con un enfoque integral en la consultoría empresarial, ofrecemos una amplia gama de herramientas poderosas diseñadas para impulsar la eficiencia, la innovación y el crecimiento sostenible.',
 },
 servicesTab: [
  { n: 1, titulo: 'Inteligencia de Negocios', texto: 'Relevamiento de indicadores claves de negocio y procesos para la eficientización de flujos de información y generación de herramientas que permitan visualizar los KPIs de su empresa, facilitando la toma de decisiones y el seguimiento de las actividades.' },
  { n: 2, titulo: 'Mejora Continua', texto: 'Aplicación de metodologías Lean para la organización, reestructuración y eliminación de procesos con la búsqueda de la optimización y de obtener resultados medibles.' },
 ],
 solutions: {
  titulo: 'Explora las soluciones',
  subtitulo: 'Te invitamos a sumergirte en un universo de soluciones empresariales diseñadas para impulsar tu organización hacia nuevos horizontes de éxito.',
 },
 solutionCards: [
  { titulo: 'Proyectos a la Medida', icono: BsJournalCode, texto: 'Relevamiento en profundidad de las necesidades y planificación estratégica.' },
  { titulo: 'Diversidad de Herramientas Tecnológicas', icono: BsFillDiagram3Fill, texto: 'Aplicación de herramientas de visualización, programación y organización.' },
  { titulo: 'Innovación en Procesos', icono: BsFillDiagram3Fill, texto: 'Análisis exhaustivo y propuesta de soluciones sobre procesos.' },
  { titulo: 'Enfoque en Satisfacción al Cliente', icono: BsFillDiagram3Fill, texto: 'Soluciones diseñadas con el cliente en el centro buscando maximizar el valor agregado.' },
 ],
 nosotros: [
  { texto: '', nombre: 'Joaquín Amodio', cargo: 'Ingeniero Industrial', empresa: '', imagen: Joacoimg, red: 'https://www.linkedin.com/in/joaqu%C3%ADn-amodio-aa93271ba/' },
  { texto: '', nombre: 'Lorenzo Barrantes', cargo: 'Ingeniero Industrial', empresa: '', imagen: LBimg, red: 'https://www.linkedin.com/in/lorenzo-barrantes/' },
  { texto: '', nombre: 'Carlos Lautaro Colli', cargo: 'Ingeniero Industrial', empresa: '', imagen: Lautiimg, red: 'https://www.linkedin.com/in/carloslautarocolli/' }, 
 ]
};

export default data