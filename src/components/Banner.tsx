import CommonWrapper from "../common/CommonWrapper";

const Banner = () => {
  return (
    <CommonWrapper className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">
        Experience the Next Generation of <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">3D Web</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-400">
        Build stunning, interactive, and high-performance Three.js applications with ease. 
        Start your journey into the spatial web today.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95">
          Get Started
        </button>
        <button className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
          Learn More
        </button>
      </div>
      
      {/* Feature Cards */}
      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm">
            <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              ✨
            </div>
            <h3 className="text-xl font-bold">Feature {i}</h3>
            <p className="mt-2 text-sm text-gray-400">
              High-performance rendering with full support for modern shaders and lighting.
            </p>
          </div>
        ))}
      </div>
    </CommonWrapper>
  )
}

export default Banner;