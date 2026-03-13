export default function TestimonialsSection() {
  const videos = [
    {
      id: "RxpvmgOmvdc",
      title: "Sistema Contable Perseo - Nuestros Clientes",
      client: "cliente",
    },
    {
      id: "IXywtTULosY",
      title: "Sistema Contable Perseo - Compufacil",
      client: "cliente",
    },
    {
      id: "jru-mrivVh0",
      title: "Sistema Contable Perseo - Conoce a Perseo",
      client: "cliente",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Nuestros clientes nos{" "}
            <span className="text-[#ff1493]">respaldan</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#ff1493]" />
        </div>

        {/* Videos Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group overflow-hidden rounded-2xl bg-gray-50 shadow-lg transition-all hover:shadow-2xl"
            >
              {/* Video Embed */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  {video.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{video.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
