function Carta() {
  return (
    <div className="flex fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center min-h-screen ">
      <div className="relative max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-300">
        {/* Corazones decorativos */}
        <span className="absolute -top-4 -left-4 text-3xl">💖</span>
        <span className="absolute -top-4 -right-4 text-3xl">💘</span>
        <span className="absolute -bottom-4 -left-4 text-3xl">💞</span>
        <span className="absolute -bottom-4 -right-4 text-3xl">💝</span>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-4">
          Para ti, mi bebé 💕
        </h1>

        {/* Contenido */}
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          Desde que llegaste a mi vida, todo se siente diferente. Cada sonrisa
          tuya ilumina mis días y cada momento contigo se vuelve especial. 💫
        </p>

        <p className="text-gray-700 text-lg leading-relaxed text-center mt-4">
          Hoy quiero preguntarte algo muy importante para mí…
        </p>

        {/* Pregunta */}
        <p className="text-2xl font-medium text-pink-600 text-center mt-6">
          ¿Quieres ser mi San Valentín?
        </p>

        <div className="w-full flex gap-6 justify-center items-center pt-4">
          <button className="cursor-pointer rounded-lg bg-pink-200 border-3 border-pink-300 px-4 h-[30px]">
            Si.
          </button>
          <button className="cursor-pointer rounded-lg bg-pink-200 border-3 border-pink-300 px-4 h-[30px]">
            Obvio que si. 😍
          </button>
        </div>

        {/* Firma */}
        <div className="mt-8 text-right">
          <p className="text-gray-600">Con todo mi corazón,</p>
          <p className="text-pink-600 font-bold text-lg">Jean 💖</p>
        </div>
      </div>
    </div>
  );
}

export default Carta;
