import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil, faGear, faUsers } from '@fortawesome/free-solid-svg-icons';

const Home = () => {


  return (
    <>
    <Navbar/>
    <div className="h-screen bg-gray-100">

        <section className="bg-black flex flex-col space-y-10  text-center items-center justify-center pt-36 pb-36">

            <h1 className="text-5xl text-white font-bold">
                ProVision: Aprende a Manejar <br />tu negocio
            </h1>

            <p className="text-lg text-white">
              Con ProVision podrás gestionar y automatizar tus procesos empresariales <br />
              de manera más sencilla y eficiente
            </p>

        </section>

        <section className="flex flex-col space-y-10  text-center items-center justify-center pt-16 pb-24">

          <h2 className='text-3xl'>¿Qué es ProVision?</h2>
          <p className='text-lg'>ProVision es una solución integral de gestión empresarial que optimiza las operaciones de ventas, compras, y almacenamiento,<br /> 
          mejorando la eficiencia y el control de tu negocio.</p>

          <div className="flex flex-row space-x-10">

            <div className="flex flex-col space-y-7 bg-cards-color rounded-lg px-3 py-3">
              <div className="flex flex-row items-center justify-center space-x-16">
                <FontAwesomeIcon icon={faPencil} className="fa-solid fa-pencil text-7xl text-principal-color" />
                <h1 className="text-8xl text-white">
                  01
                </h1>
              </div>
              <h2 className="text-xl font-bold">Un sistema integral<br />
              y de fácil uso.</h2>
              <p>Una interfaz amigable hará que te<br />
                familiarices rápidamente con esta <br />
                herramienta 100% intuitiva. Accede a <br />
                través de la web o la propia app.</p>
            </div>

            <div className="flex flex-col space-y-7 bg-cards-color rounded-lg  px-3 py-3">
              <div className="flex flex-row items-center justify-center space-x-16">
                <FontAwesomeIcon icon={faGear} className="fa-regular fa-gear text-7xl text-principal-color" />
                <h1 className="text-8xl text-white">
                  02
                </h1>
              </div>
              <h2 className="text-xl font-bold">Gestiona cualquier<br />
              tipo de negocio</h2>
              <p>Integra y gestiona las ventas y cuentas por <br />
              cobrar, las compras y cuentas por pagar, y la <br />
              logística e inventarios de tu empresa en un <br />
              único sistema.</p>
            </div>

            <div className="flex flex-col space-y-4 bg-cards-color rounded-lg  px-3 py-3">
            <div className="flex flex-row items-center justify-center space-x-16">
                <FontAwesomeIcon icon={faUsers} className="fa-solid fa-users text-7xl text-principal-color" />
                <h1 className="text-8xl text-white">
                  03
                </h1>
              </div>
              <h2 className="text-xl font-bold">Mejor orden y <br />colaboración</h2>
              <p>Obtén un trabajo más ordenado y <br />
              colaborativo entre todas las áreas de tu <br />
              organización al compartir información <br />
              en tiempo real.</p>
            </div>

          </div>


        </section>

        <section>


        </section>

        <section>

        </section>

        <section>

        </section>

        <Footer/>
      
    </div>
    
    </>
    
  );
};

export default Home;
