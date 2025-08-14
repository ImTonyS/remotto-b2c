export default function Testimonials() {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by developers from over 80 planets
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl grid grid-cols-2 space-x-12">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-600">
                  "I've been using this platform for a few months now, and it's
                  been a game-changer for my job search. The AI tools are
                  amazing!"
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-600">
                  "I've been using this platform for a few months now, and it's
                  been a game-changer for my job search. The AI tools are
                  amazing!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
