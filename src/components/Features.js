export default function Features() {
  const features = [
    { title: "Cepat & Responsif", desc: "Website cepat di semua perangkat, dari desktop hingga ponsel." },
    { title: "Desain Modern", desc: "Dibangun dengan prinsip UI/UX modern untuk pengalaman terbaik." },
    { title: "Mudah Dikelola", desc: "Integrasi mudah dan siap dikembangkan sesuai kebutuhan Anda." },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Kenapa Memilih Kami?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
