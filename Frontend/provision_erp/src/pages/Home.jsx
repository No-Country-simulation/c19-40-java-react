
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faGear, faUsers } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import { Link} from 'react-router-dom';

const Home = () => {
  return (
    <>

    <div className="min-h-screen bg-gray-100">

    <section
      className="bg-black flex flex-col space-y-6 text-center items-center justify-center py-36 px-4"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/36/40/f7/3640f7baf3f68a3d526efd4491b3ebd5.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl md:text-5xl text-white font-bold">
        ProVision: Aprende a Manejar <br />tu negocio
      </h1>
      <p className="text-lg text-white">
        Con ProVision podrás gestionar y automatizar tus procesos empresariales <br />
        de manera más sencilla y eficiente
      </p>
    </section>

        <section className="flex flex-col space-y-10 text-center items-center justify-center pt-16 pb-24 px-4">
          <h2 className='text-3xl'>¿Qué es ProVision?</h2>
          <p className='text-lg'>ProVision es una solución integral de gestión empresarial que optimiza las operaciones de ventas, compras, y almacenamiento, <br />
            mejorando la eficiencia y el control de tu negocio.</p>

          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">

            <div className="flex flex-col space-y-7 bg-cards-color rounded-lg px-6 py-6 md:px-3 md:py-3">
              <div className="flex flex-row items-center justify-center space-x-4 md:space-x-16">
                <FontAwesomeIcon icon={faPencil} className="fa-solid fa-pencil text-5xl md:text-7xl text-principal-color" />
                <h1 className="text-6xl md:text-8xl text-white">
                  01
                </h1>
              </div>
              <h2 className="text-lg md:text-xl font-bold">Un sistema integral<br />
                y de fácil uso.</h2>
              <p>Una interfaz amigable hará que te<br />
                familiarices rápidamente con esta <br />
                herramienta 100% intuitiva. Accede a <br />
                través de la web o la propia app.</p>
            </div>

            <div className="flex flex-col space-y-7 bg-cards-color rounded-lg px-6 py-6 md:px-3 md:py-3">
              <div className="flex flex-row items-center justify-center space-x-4 md:space-x-16">
                <FontAwesomeIcon icon={faGear} className="fa-regular fa-gear text-5xl md:text-7xl text-principal-color" />
                <h1 className="text-6xl md:text-8xl text-white">
                  02
                </h1>
              </div>
              <h2 className="text-lg md:text-xl font-bold">Gestiona cualquier<br />
                tipo de negocio</h2>
              <p>Integra y gestiona las ventas y cuentas por <br />
                cobrar, las compras y cuentas por pagar, y la <br />
                logística e inventarios de tu empresa en un <br />
                único sistema.</p>
            </div>

            <div className="flex flex-col space-y-7 bg-cards-color rounded-lg px-6 py-6 md:px-3 md:py-3">
              <div className="flex flex-row items-center justify-center space-x-4 md:space-x-16">
                <FontAwesomeIcon icon={faUsers} className="fa-solid fa-users text-5xl md:text-7xl text-principal-color" />
                <h1 className="text-6xl md:text-8xl text-white">
                  03
                </h1>
              </div>
              <h2 className="text-lg md:text-xl font-bold">Mejor orden y <br />colaboración</h2>
              <p>Obtén un trabajo más ordenado y <br />
                colaborativo entre todas las áreas de tu <br />
                organización al compartir información <br />
                en tiempo real.</p>
            </div>

          </div>
        </section>

        <section className="flex flex-col text-center items-center space-y-10 px-4">
          <h2 className="text-3xl md:text-5xl">Descubre la genialidad de ProVision</h2>
          <iframe
            width="80%"
            height="415"
            src="https://www.youtube.com/embed/I6v4QMIlkRo?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
            title="Video Promocional"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section className="mt-20 flex flex-col items-center space-y-10 px-4">

          <div className="flex flex-col md:flex-row items-start md:items-center text-left space-y-10 md:space-y-0 md:space-x-20">

            <div className="flex flex-col space-y-10 md:items-start">
              <h2 className="text-2xl md:text-3xl font-bold">
                Gestión De Ventas
              </h2>

              <p className="text-lg">
                Nuestra solución ERP incluye una gestión de ventas integral <br />que te permite supervisar y optimizar cada aspecto del proceso <br />de ventas.
                Desde la generación de cotizaciones hasta <br />el cierre de ventas y la facturación, nuestro sistema te proporciona <br />las herramientas necesarias para maximizar tus resultados.
              </p>

            </div>

            <img className="w-full max-w-sm h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgBdlVP01nAKKmnOg1PfjZg_doUA5-Yih5w&s" alt="Gestión de Ventas" />
          </div>


          <div className="flex flex-col md:flex-row items-start md:items-center text-left space-y-10 md:space-y-0 md:space-x-20">

            <img className="w-full max-w-sm h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqifEgo22eETRilQkjuSxrbo2ERklcFVGHQ&s" alt="Gestión de Compras" />

            <div className="flex flex-col space-y-10 md:items-start">
              <h2 className="text-2xl md:text-3xl font-bold">
                Gestión De Compras
              </h2>

              <p className="text-lg">
                Nuestra solución ERP incluye una robusta gestión <br />de compras diseñada para simplificar y optimizar <br />todo el ciclo de adquisiciones.
                Desde la solicitud de compra <br />hasta la recepción de mercancías,
                nuestro sistema <br />te ofrece las herramientas necesarias para manejar tus compras <br />de manera eficiente y efectiva.
              </p>

            </div>

          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center text-left space-y-10 md:space-y-0 md:space-x-20">

            <div className="flex flex-col space-y-10 ">
              <h2 className="text-2xl md:text-3xl font-bold">
                Gestión De Inventario
              </h2>

              <p className="text-lg">
                Incluimos una potente gestión de inventario <br />diseñada para brindarte el control total sobre tus existencias.<br />
                Desde el seguimiento en tiempo real hasta la optimización <br />de niveles de stock,
                nuestro sistema te ofrece las herramientas <br />necesarias para gestionar tu inventario de manera <br />eficaz y precisa.
              </p>

            </div>

            <img className="w-full max-w-sm h-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgBdlVP01nAKKmnOg1PfjZg_doUA5-Yih5w&s" alt="Gestión de Inventario" />
          </div>

        </section>

        <section className="mt-20 flex flex-col items-center text-center space-y-10 mb-20 px-4">

          <h1 className="text-center text-4xl md:text-7xl font-serif">
            MEJORA TU NEGOCIO <br />ÚNETE AHORA
          </h1>

          <Link to='/register' className="bg-principal-color px-10 md:px-16 py-6 md:py-12 rounded-lg text-2xl md:text-4xl font-bold text-white hover:bg-blue-600">
            Empezar
          </Link>

        </section>

      </div>
      
      <Footer />
      </>
  );
};

export default Home;
