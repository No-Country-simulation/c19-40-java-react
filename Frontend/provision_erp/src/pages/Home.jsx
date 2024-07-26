import React from "react";
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="bg-black h-96 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-4xl font-bold">ProVision: Aprende a Manejar <br /> tu Negocio</h1>
        <p className="text-white text-md mt-8">Con ProVision podrás gestionar y automatizar tus procesos empresariales <br />
        de manera más sencilla y eficiente</p>
      </section>

      <section className="h-auto mt-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl">¿Qué es ProVision?</h1>
        <p className="text-md mt-4">ProVision es una solución integral de gestión empresarial que optimiza las operaciones de ventas, compras, y <br /> almacenamiento, 
        mejorando la eficiencia y el control de tu negocio.</p>

        <div className="flex flex-row space-x-16 mt-16">
          <div className="bg-cards-color p-4 rounded flex flex flex-col space-y-3 items-center justify-center">
            <div className="flex flex-row items-center space-x-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
                <path d="M9.65661 17L6.99975 17L6.99975 14M6.10235 14.8974L17.4107 3.58902C18.1918 2.80797 19.4581 2.80797 20.2392 3.58902C21.0202 4.37007 21.0202 5.6364 20.2392 6.41745L8.764 
                17.8926C8.22794 18.4287 7.95992 18.6967 7.6632 18.9271C7.39965 19.1318 7.11947 19.3142 6.8256 19.4723C6.49475 19.6503 6.14115 19.7868 5.43395 20.0599L3 20.9998L3.78312 18.6501C4.05039 17.8483
                4.18403 17.4473 4.3699 17.0729C4.53497 16.7404 4.73054 16.424 4.95409 16.1276C5.20582 15.7939 5.50466 
                15.4951 6.10235 14.8974Z" stroke="#585EF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <p className="text-white text-6xl">01</p>
            </div>

            <h2 className="font-bold">Un sistema integral <br />y de fácil uso.</h2>
            <p className="text-xs">Una interfaz amigable hará que te <br /> familiarices rápidamente con esta <br />herramienta 100% intuitiva. Accede a <br />través de la web o la propia app.</p>
          </div>
          <div className="bg-cards-color p-4 rounded flex flex flex-col space-y-3 items-center justify-center">
            <div className="flex flex-row items-center space-x-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7848 0.449982C13.8239 0.449982 14.7167 1.16546 14.9122 2.15495L14.9991 2.59495C15.3408 4.32442 17.1859 5.35722 18.9016 4.7794L19.3383 4.63233C20.3199 4.30175 21.4054 4.69358 21.9249 5.56605L22.7097 6.88386C23.2293 7.75636 23.0365 8.86366 22.2504 9.52253L21.9008 9.81555C20.5267 10.9672 20.5267 13.0328 21.9008 14.1844L22.2504 14.4774C23.0365 15.1363 23.2293 16.2436 22.7097 17.1161L21.925 18.4339C21.4054 19.3064 20.3199 19.6982 19.3382 19.3676L18.9017 19.2205C17.1859 18.6426 15.3408 19.6754 14.9991 21.405L14.9122 21.845C14.7167 22.8345 13.8239 23.55 12.7848 23.55H11.2152C10.1761 23.55 9.28331 22.8345 9.08781 21.8451L9.00082 21.4048C8.65909 19.6754 6.81395 18.6426 5.09822 19.2205L4.66179 19.3675C3.68016 19.6982 2.59465 19.3063 2.07505 18.4338L1.2903 17.1161C0.770719 16.2436 0.963446 15.1363 1.74956 14.4774L2.09922 14.1844C3.47324 13.0327 3.47324 10.9672 2.09922 9.8156L1.74956 9.52254C0.963446 8.86366 0.77072 7.75638 1.2903 6.8839L2.07508 5.56608C2.59466 4.69359 3.68014 4.30176 4.66176 4.63236L5.09831 4.77939C6.81401 5.35722 8.65909 4.32449 9.00082 2.59506L9.0878 2.15487C9.28331 1.16542 10.176 0.449982 11.2152 0.449982H12.7848ZM12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1774 13.8225 8.69998 12 8.69998C10.1774 8.69998 8.69997 10.1774 8.69997 12C8.69997 13.8225 10.1774 15.3 12 15.3Z" fill="#585EF2"></path>
              </svg>
              <p className="text-white text-6xl">02</p>
            </div>

            <h2 className="font-bold">Gestiona cualquier <br />tipo de negocio</h2>
            <p className="text-xs">Integra y gestiona las ventas y cuentas por <br />cobrar, las compras y cuentas por pagar, y la <br />logística e inventarios de tu empresa en un <br />único sistema.</p>
          </div>
          <div className="bg-cards-color p-4 rounded flex flex-col space-y-3 items-center justify-center text-center">
            <div className="flex flex-row items-center space-x-4">
              <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
                <path fillRule="evenodd" clipRule="evenodd" d="M147.57 14.03c5.56 0 10.9 2.19 14.86 6.14l89.77 89.77c3.95 3.95 6.14 9.3 6.14 14.86v51.43h56.87c8.06 0 14.57 6.5 14.57 14.57v57.13h48.32c8.06 0 14.57 6.5 14.57 14.57v105.95c0 8.06-6.5 14.57-14.57 14.57h-80.68c-8.06 0-14.57-6.5-14.57-14.57v-44.13H206.97v44.13c0 8.06-6.5 14.57-14.57 14.57h-80.68c-8.06 0-14.57-6.5-14.57-14.57V260.46c0-8.06 6.5-14.57 14.57-14.57h48.32v-57.13c0-8.06 6.5-14.57 14.57-14.57h56.87v-36.36l-67.71-67.71v37.67c0 8.06-6.5 14.57-14.57 14.57h-73.43v378.86c0 8.06 6.5 14.57 14.57 14.57h303.43c8.06 0 14.57-6.5 14.57-14.57V14.57C462.86 6.5 456.35 0 448.29 0H162.43c-8.06 0-14.57 6.5-14.57 14.57v29.14h-51.43c-8.06 0-14.57 6.5-14.57 14.57v77.71c0 8.06 6.5 14.57 14.57 14.57h51.43v57.13H91.43c-8.06 0-14.57-6.5-14.57-14.57V14.57C76.86 6.5 83.36 0 91.43 0H147.57Zm171.02 198.26v42.56c0 8.06 6.5 14.57 14.57 14.57h65.06v75.43H312c-8.06 0-14.57-6.5-14.57-14.57V260.46c0-8.06 6.5-14.57 14.57-14.57h6.59v-33.03h-6.59c-8.06 0-14.57-6.5-14.57-14.57Zm94.2 109.12h-50.48v14.57h50.48v-14.57Z" fill="#585EF2"></path>
              </svg>
              <p className="text-white text-6xl">03</p>
            </div>

            <h2 className="font-bold">Automatiza los <br /> procesos de venta</h2>
            <p className="text-xs">Simplifica la toma de decisiones a través de la <br />analítica de datos. ProVision ofrece reportes <br />en tiempo real para maximizar la eficiencia <br />operativa de tu empresa.</p>
          </div>
        </div>
      </section>
      
      <section className="mt-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Descubre la genialidad de ProVision</h2>
        <div className="border border-gray-300 p-4 rounded mt-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&mute=1&showinfo=0&modestbranding=1&iv_load_policy=3&loop=1&playlist=dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="ProVision Introduction Video"
          ></iframe>
        </div>
    </section>


      <section className="mt-24 flex flex-col items-center justify-center space-y-20">

          <div className="flex flex-row items-center space-x-20">

            <div className="flex flex-col items-center justify-center space-y-6 text-center">

                <h2 className="text-3xl font-bold">Gestión De Ventas</h2>

                <p>Podrás crear cotizaciones rápidas de tus <br /> productos o servicios, <br />
                con las condiciones comerciales de tu <br />negocio para darle agilidad a las negociones <br /> con tus clientes.</p>

            </div>

            <img className="h-48 w-54" src="https://www.esic.edu/sites/default/files/styles/full/public/rethink/ff01cba7-marketing-y-ventas-roi.jpg?itok=Qzqm7jiU" alt="" />

          </div>

          <div className="flex flex-row items-center space-x-20">

          <img className="h-48 w-54" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqifEgo22eETRilQkjuSxrbo2ERklcFVGHQ&s" alt="" />

            <div className="flex flex-col items-center justify-center space-y-6 text-center">

                <h2 className="text-3xl font-bold">Gestión De Compras</h2>

                <p>Podrás crear cotizaciones rápidas de tus <br />productos o servicios,<br /> 
                con las condiciones comerciales de tu <br />negocio para darle agilidad a las negociones <br />con tus clientes.</p>

            </div>

          </div>

          <div className="flex flex-row items-center space-x-20">

            <div className="flex flex-col items-center justify-center space-y-6 text-center">

                <h2 className="text-3xl font-bold">Gestión De Inventario</h2>

                <p>Podrás crear cotizaciones rápidas de tus <br />productos o servicios,<br /> 
                con las condiciones comerciales de tu <br />negocio para darle agilidad a las negociones <br />con tus clientes.</p>

            </div>

            <img className="h-48 w-54" src="https://abarrotero.com/wp-content/uploads/2017/04/inventario_tienda_abarrotero.png" alt="" />

          </div>

      </section>

      <section className="mt-24 flex  flex-col items-center text-center  space-y-20 mb-24">

        <h2 className="text-5xl font-just">
            MEJORA TU NECOGIO Y PONME  5 ESTRELLAS
        </h2>

        <button className="rounded-lg bg-principal-color px-24 py-6 text-white text-3xl hover: bg-blue-600">BEGIN</button>

      </section>


    </>
  );
}

export default Home;
