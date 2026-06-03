"use client";

import { motion } from "framer-motion";

const menu = [
  {
    name: "Strawberry",
    price: "Rp 5.000",
    image: "/images/strawberry.jpg",
  },
  {
    name: "Chocolate Oreo",
    price: "Rp 5.000",
    image: "/images/oreo.jpg",
  },
  {
    name: "Chocolate",
    price: "Rp 5.000",
    image: "/images/chocolate.jpg",
  },
  {
    name: "Mangga Cream",
    price: "Rp 5.000",
    image: "/images/mangga.jpg",
  },
  {
    name: "Salju",
    price: "Rp 5.000",
    image: "/images/salju.jpg",
  },
  {
    name: "Mix Box",
    price: "Rp 25.000",
    image: "/images/mix.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-[#FFF8F5] min-h-screen overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 blur-[120px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="font-black text-3xl bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            MOCHIONA
          </h1>

          <a
            href="https://wa.me/6285210058856"
            target="_blank"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            Order Now
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Premium Handmade Mochi
            </span>

            <h1 className="text-7xl lg:text-8xl font-black mt-6 leading-none bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              MOCHIONA
            </h1>

            <p className="text-xl text-gray-600 mt-6">
              Lezat Tiada Tanding • Bikin Nagih • Sensasi Rasa Baru
            </p>

            <p className="mt-4 text-gray-500 max-w-xl">
              Mochi premium dengan berbagai varian rasa favorit yang
              dibuat fresh setiap hari menggunakan bahan berkualitas.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm shadow">
                🍓 Fresh Everyday
              </span>

              <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm shadow">
                🚚 Fast Delivery
              </span>

              <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm shadow">
                ⭐ Best Seller
              </span>
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="https://wa.me/6285210058856"
                target="_blank"
                className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Pesan Sekarang
              </a>

              <a
                href="#menu"
                className="bg-white px-8 py-4 rounded-2xl font-semibold shadow hover:shadow-lg transition"
              >
                Lihat Menu
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
          >
            <img
              src="/images/mix.jpg"
              alt="Mix Box"
              className="rounded-[35px] shadow-2xl w-full hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {[
            ["6+", "Varian Rasa"],
            ["100+", "Pelanggan"],
            ["5K", "Harga Mulai"],
            ["Fresh", "Everyday"],
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-6 text-center shadow-lg"
            >
              <h3 className="text-4xl font-black text-pink-500">
                {item[0]}
              </h3>

              <p className="text-gray-500">
                {item[1]}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* MENU */}
      <section id="menu" className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center text-gray-800">
          Menu Favorit
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Pilih rasa favoritmu
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {menu.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-md rounded-[30px] overflow-hidden shadow-lg"
            >

              <div className="relative overflow-hidden">

                <div className="absolute top-4 right-4 z-10 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
                  Best Seller
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-pink-500 font-bold mt-2">
                  {item.price}
                </p>

                <a
                  href={`https://wa.me/6285210058856?text=Halo Mochiona, saya ingin memesan ${item.name}`}
                  target="_blank"
                  className="block mt-5 bg-pink-500 hover:bg-pink-600 text-center text-white py-3 rounded-xl font-semibold transition"
                >
                  Pesan Sekarang
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* GALERI */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-5xl font-black text-center mb-12">
          Galeri Mochiona
        </h2>

        <div className="columns-1 md:columns-3 gap-5">

          {menu.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.name}
              className="rounded-3xl shadow-lg mb-5 hover:scale-[1.03] transition duration-500"
            />
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 rounded-[40px] p-12 text-center text-white shadow-[0_20px_80px_rgba(236,72,153,0.35)]">

          <h2 className="text-5xl font-black">
            Yuk Pesan Mochiona!
          </h2>

          <p className="mt-4 text-lg">
            Fresh, lembut, dan bikin nagih.
          </p>

          <a
            href="https://wa.me/6285210058856"
            target="_blank"
            className="inline-block mt-8 bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Order via WhatsApp
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 text-center">

        <h3 className="text-4xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
          MOCHIONA
        </h3>

        <p className="text-gray-400 mt-3">
          Premium Handmade Mochi
        </p>

        <p className="mt-5">
          📱 0852-1005-8856
        </p>

        <p>
          📸 @mochiona_solok
        </p>

        <p className="text-gray-500 mt-6 text-sm">
          © 2026 Mochiona. All Rights Reserved.
        </p>

      </footer>

      {/* FLOATING WA */}
      <a
        href="https://wa.me/6285210058856"
        target="_blank"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 transition z-50"
      >
        💬
      </a>

    </main>
  );
}