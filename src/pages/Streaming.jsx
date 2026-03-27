import { useState, useEffect } from "react";
import NetflixLogo from "../assets/Netflix-Logo.png";
import MaxLogo from "../assets/Max-logo.png";
import PrimeVideoLogo from "../assets/PrimeVideo-logo.png";
import DisneyPlusLogo from "../assets/DisneyPlus-logo.png";
import AppleTVLogo from "../assets/AppleTV-logo.png";
import SpotifyLogo from "../assets/Spotify-Logo.png";
import AppleMusicLogo from "../assets/AppleMusic-logo.png";
import PSPlusLogo from "../assets/PS-plus-logo.png";
import XboxGamePassLogo from "../assets/XboxGamePass-logo.png";
import YoutubeMusicLogo from "../assets/YoutubeMusic-logo.png";

const Streaming = () => {
  const [prices, setPrices] = useState({
    netflix: { basico: "-", estandar: "-", premium: "-", cuentaExtra: "-" },
    max: { basico: "-", estandar: "-", platino: "-" },
    prime: { estandar: "-" },
    disney: { estandar: "-", premium: "-" },
    appleTv: { estandar: "-" },
    spotify: { individual: "-", duo: "-", familiar: "-", estudiantes: "-" },
    appleMusic: { individual: "-", estudiante: "-", familiar: "-" },
    psPlus: { essential: "-", extra: "-", deluxe: "-" },
    gamePass: { ultimate: "-", standard: "-", pc: "-", core: "-" },
    youtubeMusic: { estandar: "-", familiar: "-" },
  });

  const [filter, setFilter] = useState("todo");

  useEffect(() => {
    fetch("/precios.json?v=" + new Date().getTime())
      .then((res) => res.json())
      .then((data) => {
        const ag = data.suscripciones_digitales_argentina;

        // Helper to find platform and plan
        const getPrice = (platformName, planName) => {
          const platform = ag.find((p) => p.plataforma === platformName);
          const plan = platform?.planes.find((p) => p.plan === planName);
          return plan?.precio_base || "-";
        };

        setPrices({
          netflix: {
            basico: getPrice("Netflix", "Básico"),
            estandar: getPrice("Netflix", "Estándar"),
            premium: getPrice("Netflix", "Premium"),
            cuentaExtra: getPrice("Netflix", "Cuenta extra"),
          },
          max: {
            basico: getPrice("Max", "Básico"),
            estandar: getPrice("Max", "Estándar"),
            platino: getPrice("Max", "Platino"),
          },
          prime: {
            estandar: getPrice("Prime Video", "Estándar"),
          },
          disney: {
            estandar: getPrice("Disney+", "Estándar"),
            premium: getPrice("Disney+", "Premium"),
          },
          appleTv: {
            estandar: getPrice("Apple TV+", "Plan Único"),
          },
          spotify: {
            individual: getPrice("Spotify", "Individual"),
            duo: getPrice("Spotify", "Duo"),
            familiar: getPrice("Spotify", "Familiar"),
            estudiantes: getPrice("Spotify", "Estudiantes"),
          },
          appleMusic: {
            individual: getPrice("Apple Music", "Individual"),
            estudiante: getPrice("Apple Music", "Estudiante"),
            familiar: getPrice("Apple Music", "Familiar"),
          },
          psPlus: {
            essential: getPrice("PlayStation Plus", "Essential"),
            extra: getPrice("PlayStation Plus", "Extra"),
            deluxe: getPrice("PlayStation Plus", "Deluxe"),
          },
          gamePass: {
            ultimate: getPrice("Xbox Game Pass", "Ultimate"),
            standard: getPrice("Xbox Game Pass", "Standard"),
            pc: getPrice("Xbox Game Pass", "PC Game Pass"),
            core: getPrice("Xbox Game Pass", "Core"),
          },
          youtubeMusic: {
            estandar: getPrice("Youtube Music", "Estándar"),
            familiar: getPrice("Youtube Music", "Familiar"),
          },
        });
      })
      .catch((err) => console.error("Error al cargar precios:", err));
  }, []);

  const handleFilter = (category) => {
    setFilter(category);
  };

  const isVisible = (category) => {
    return filter === "todo" || filter === category;
  };

  return (
    <main className="p-4 max-w-6xl mx-auto flex-1">
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8 max-w-5xl mx-auto mb-4 shadow-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-[#CEA855] text-center">
          Precios de las principales Plataformas de Streaming
        </h1>
        <p className="text-slate-200 text-center max-w-200 mx-auto">
          En esta sección encontrarás los precios sin impuestos de las
          principales Plataformas de Streaming disponibles en el mercado.
        </p>
      </div>

      <div className="flex justify-center mt-7 gap-7 flex-wrap">
        {["Todo", "Streaming", "Musica", "Game"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat.toLowerCase())}
            className={`btn-cat border border-[#CEA855] rounded-full p-2 w-30 text-white bg-transparent hover:bg-[#CEA855] hover:border-[#141B2B] hover:text-[#232b2b] hover:shadow-[0_0_10px_2px_#CEA855] transition-all duration-300 font-semibold cursor-pointer ${
              filter === cat.toLowerCase()
                ? "active bg-[#CEA855] text-[#232b2b]"
                : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6 pt-6 max-w-5xl mx-auto justify-center w-full">
        {/* Netflix */}
        {isVisible("streaming") && (
          <div className="cat-streaming flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img className="w-45" src={NetflixLogo} alt="Logo de Netflix" />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Básico</span>
                <span className="text-xl font-semibold">
                  $ {prices.netflix.basico}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Estandar</span>
                <span className="text-xl font-semibold">
                  $ {prices.netflix.estandar}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Premium</span>
                <span className="text-xl font-semibold">
                  $ {prices.netflix.premium}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Cuenta Extra</span>
                <span className="text-xl font-semibold">
                  $ {prices.netflix.cuentaExtra}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Max */}
        {isVisible("streaming") && (
          <div className="cat-streaming flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center mt-7">
              <img className="w-30 mb-12" src={MaxLogo} alt="Logo de Max" />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Básico</span>
                <span className="text-xl font-semibold">
                  $ {prices.max.basico}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Estandar</span>
                <span className="text-xl font-semibold">
                  $ {prices.max.estandar}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Platino</span>
                <span className="text-xl font-semibold">
                  $ {prices.max.platino}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Prime Video */}
        {isVisible("streaming") && (
          <div className="cat-streaming flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img
                className="w-40 mt-3"
                src={PrimeVideoLogo}
                alt="Logo de Prime Video"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Estandar</span>
                <span className="text-xl font-semibold">
                  $ {prices.prime.estandar}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Disney Plus */}
        {isVisible("streaming") && (
          <div className="cat-streaming flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img
                className="w-36 mt-3"
                src={DisneyPlusLogo}
                alt="Logo de Disney Plus"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Estandar</span>
                <span className="text-xl font-semibold">
                  $ {prices.disney.estandar}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Premium</span>
                <span className="text-xl font-semibold">
                  $ {prices.disney.premium}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Apple TV */}
        {isVisible("streaming") && (
          <div className="cat-streaming flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img
                className="w-36 mt-3 mb-3"
                src={AppleTVLogo}
                alt="Logo de Apple TV"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Estandar</span>
                <span className="text-xl font-semibold">
                  USD$ {prices.appleTv.estandar}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Spotify */}
        {isVisible("musica") && (
          <div className="cat-musica flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img
                className="w-36 mt-3"
                src={SpotifyLogo}
                alt="Logo de Spotify"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Individual</span>
                <span className="text-xl font-semibold">
                  $ {prices.spotify.individual}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Duo</span>
                <span className="text-xl font-semibold">
                  $ {prices.spotify.duo}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Familiar</span>
                <span className="text-xl font-semibold">
                  $ {prices.spotify.familiar}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Estudiantes</span>
                <span className="text-xl font-semibold">
                  $ {prices.spotify.estudiantes}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Apple Music */}
        {isVisible("musica") && (
          <div className="cat-musica flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img
                className="w-40"
                src={AppleMusicLogo}
                alt="Logo de Apple Music"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Estudiante</span>
                <span className="text-xl font-semibold">
                  USD$ {prices.appleMusic.estudiante}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Individual</span>
                <span className="text-xl font-semibold">
                  USD$ {prices.appleMusic.individual}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Familiar</span>
                <span className="text-xl font-semibold">
                  USD$ {prices.appleMusic.familiar}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* PS Plus */}
        {isVisible("game") && (
          <div className="cat-game flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img
                className="w-60 mt-6 mb-4"
                src={PSPlusLogo}
                alt="Logo de PS Plus"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Essential</span>
                <span className="text-xl font-semibold">
                  USD$ {prices.psPlus.essential}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Extra</span>
                <span className="text-xl font-semibold">
                  USD$ {prices.psPlus.extra}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Deluxe</span>
                <span className="text-xl font-semibold">
                  USD$ {prices.psPlus.deluxe}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Xbox Game Pass */}
        {isVisible("game") && (
          <div className="cat-game flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img
                className="w-40 mt-3 mb-2"
                src={XboxGamePassLogo}
                alt="Logo de Xbox Game Pass"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Ultimate</span>
                <span className="text-xl font-semibold">
                  $ {prices.gamePass.ultimate}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Standard</span>
                <span className="text-xl font-semibold">
                  $ {prices.gamePass.standard}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">PC Game Pass</span>
                <span className="text-xl font-semibold">
                  $ {prices.gamePass.pc}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Core</span>
                <span className="text-xl font-semibold">
                  $ {prices.gamePass.core}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Youtube Music */}
        {isVisible("musica") && (
          <div className="cat-musica flex flex-col justify-start items-center bg-slate-900/70 border border-slate-800 rounded-2xl p-4 w-72 h-full">
            <div className="flex items-center pb-2">
              <img
                className="w-40 mt-6"
                src={YoutubeMusicLogo}
                alt="Logo de Youtube Music"
              />
            </div>
            <div className="mt-4 w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Estandar</span>
                <span className="text-xl font-semibold">
                  $ {prices.youtubeMusic.estandar}
                </span>
              </div>
              <div className="border-t border-dotted border-slate-700 w-full"></div>
              <div className="flex items-center justify-between w-full py-2">
                <span className="text-base font-medium">Familiar</span>
                <span className="text-xl font-semibold">
                  $ {prices.youtubeMusic.familiar}
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Streaming;
