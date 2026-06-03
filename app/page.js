"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const menu = [
  {
    name: "Strawberry Chocolate Oreo",
    price: "Rp 5.000",
    image: "/images/Strawberry.jpg",
  },
  {
    name: "Chocolate Oreo",
    price: "Rp 5.000",
    image: "/images/oreo.jpg",
  },
  {
    name: "Pandan Chocolate",
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
    <main className="bg-[#FFF8F5] min-h-screen overflow-x-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-pink-300/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-300/20 blur-[120px] rounded-full" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">

          <h1 className="font-black text-2xl sm:text-3xl bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            MOCHIONA
          </h1>

         <a
  href={`https://wa.me/6285210058856?text=${encodeURIComponent(
    "Halo Mochiona, saya ingin memesan Mochi. Mohon info menu dan stok yang tersedia."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-pink-500 hover:bg-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105"
>
  🍓 Order Now
</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              ✨ Premium Handmade Mochi
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mt-5 sm:mt-6 leading-none bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              MOCHIONA
            </h1>

            <p className="text-base sm:text-xl text-gray-600 mt-4 sm:mt-6">
              Lezat Tiada Tanding • Bikin Nagih • Sensasi Rasa Baru
            </p>

            <p className="mt-4 text-gray-500 max-w-xl text-sm sm:text-base">
              Mochi premium dengan berbagai varian rasa favorit yang dibuat fresh setiap hari menggunakan bahan berkualitas.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">

              <span className="bg-white/80 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm shadow">
                🍓 Fresh Everyday
              </span>

              <span className="bg-white/80 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm shadow">
                🚚 Fast Delivery
              </span>

              <span className="bg-white/80 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm shadow">
                ⭐ Best Seller
              </span>

            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">

              <a
                href="https://wa.me/6285210058856"
                target="_blank"
                className="bg-pink-500 text-white px-6 py-4 rounded-2xl font-semibold text-center hover:scale-105 transition"
              >
                Pesan Sekarang
              </a>

              <a
                href="#menu"
                className="bg-white px-6 py-4 rounded-2xl font-semibold text-center shadow hover:shadow-lg transition"
              >
                Lihat Menu
              </a>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/mix.jpg"
              alt="Mix Box"
              className="rounded-3xl sm:rounded-[35px] shadow-2xl w-full hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>
      </section>

{/* STATS */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

    {[
      ["6+", "Varian Rasa"],
      ["100+", "Pelanggan"],
      ["5K", "Harga Mulai"],
      ["Fresh", "Everyday"],
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -10 }}
        className="bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-3xl sm:text-4xl font-black text-pink-500">
          {item[0]}
        </h3>

        <p className="text-sm sm:text-base text-gray-500 mt-2">
          {item[1]}
        </p>
      </motion.div>
    ))}

  </div>
</section>

{/* MENU */}

<section
  id="menu"
  className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20"
>

  <h2 className="text-3xl md:text-5xl font-black text-center text-gray-800">
    Menu Favorit
  </h2>

  <p className="text-center text-gray-500 mt-3">
    Pilih rasa favoritmu
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mt-10">

```
{menu.map((item, index) => (
  <motion.div
    key={index}
    whileHover={{ y: -10 }}
    className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg"
  >

    <div className="relative overflow-hidden">

      <div className="absolute top-3 right-3 z-10 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
        Best Seller
      </div>

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 sm:h-64 lg:h-72 object-cover hover:scale-110 transition duration-700"
      />

    </div>

    <div className="p-5 sm:p-6">

      <h3 className="text-xl sm:text-2xl font-bold">
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
```

  </div>

</section>

{/* GALERI */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">

  <div className="text-center mb-12">
    <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
      📸 Galeri Mochiona
    </span>

    <h2 className="text-3xl md:text-5xl font-black text-gray-800 mt-4">
      Fresh • Manis • Bikin Nagih
    </h2>

    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
      Lihat berbagai varian Mochiona favorit yang dibuat fresh setiap hari.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

    {menu.map((item, index) => (
      <div
        key={index}
        className="group relative overflow-hidden rounded-3xl shadow-lg"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 md:h-72 object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="absolute bottom-0 left-0 p-5 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
          <h3 className="text-white text-xl font-bold">
            {item.name}
          </h3>

          <p className="text-pink-300 font-semibold">
            {item.price}
          </p>
        </div>

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-pink-500">
          ⭐ Favorit
        </div>
      </div>
    ))}

  </div>

</section>
{/* CTA */}

<section className="px-4 sm:px-6 py-16 lg:py-20">

  <div className="max-w-5xl mx-auto bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 rounded-3xl p-6 md:p-12 text-center text-white shadow-[0_20px_80px_rgba(236,72,153,0.35)]">

```
<h2 className="text-3xl md:text-5xl font-black">
  Yuk Pesan Mochiona!
</h2>

<p className="mt-4 text-base md:text-lg">
  Fresh, lembut, dan bikin nagih.
</p>

<a
  href="https://wa.me/6285210058856"
  target="_blank"
  className="inline-block mt-8 bg-white text-pink-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
>
  Order via WhatsApp
</a>
```

  </div>

</section>

{/* FOOTER */}

<footer className="bg-gray-950 text-white">

  <div className="max-w-7xl mx-auto px-6 py-14">

```
<div className="grid md:grid-cols-3 gap-10">

  {/* BRAND */}
  <div>

    <h3 className="text-4xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
      MOCHIONA
    </h3>

    <p className="text-gray-400 mt-4 leading-relaxed">
      Premium Handmade Mochi dengan berbagai varian rasa favorit.
      Dibuat fresh setiap hari menggunakan bahan berkualitas untuk
      menghadirkan rasa yang lembut dan bikin nagih.
    </p>

  </div>

  {/* MENU */}
  <div>

    <h4 className="font-bold text-lg mb-4">
      Menu Favorit
    </h4>

    <ul className="space-y-2 text-gray-400">

      <li>🍓 Strawberry</li>
      <li>🍫 Chocolate</li>
      <li>🍪 Chocolate Oreo</li>
      <li>🥭 Mangga Cream</li>
      <li>🎁 Mix Box</li>

    </ul>

  </div>

  {/* CONTACT */}
  <div>

    <h4 className="font-bold text-lg mb-4">
      Hubungi Kami
    </h4>

    <div className="space-y-3 text-gray-400">

      <p>
        📱 0852-1005-8856
      </p>

      <p>
        📸 @mochiona_solok
      </p>

      <p>
        📍 Solok, Sumatera Barat
      </p>

      <a
        href="https://wa.me/6285210058856"
        target="_blank"
        className="inline-block mt-2 bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-xl font-semibold transition"
      >
        Pesan Sekarang
      </a>

    </div>

  </div>

</div>

<div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">

  © 2026 Mochiona. Made with ❤️ for Mochi Lovers.

</div>


  </div>

</footer>


{/* FLOATING WA */}
<a
  href={`https://wa.me/6285210058856?text=${encodeURIComponent(
    "Halo Mochiona, saya ingin memesan Mochi. Mohon info menu dan stok yang tersedia."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-2xl hover:scale-105 transition z-50"
>
  <FaWhatsapp className="text-2xl" />
  <span className="font-semibold text-sm">
    Pesan Sekarang
  </span>
</a>
</main>
);
}
