import { Inter, Roboto_Mono, Poppins, DotGothic16, Bebas_Neue, Shadows_Into_Light, Righteous, /* Bodoni_Moda, Whisper, Beau_Rivage */ } from "next/font/google";

const inter = Inter({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const robo_mono = Roboto_Mono({ weight: '700', subsets: ['latin'] });
const dot = DotGothic16({weight: '400', subsets: ['latin']});
const bebas = Bebas_Neue({weight: '400', subsets: ['latin']});
const righteous = Righteous({weight: '400', subsets: ['latin']});
const shadows_into_light = Shadows_Into_Light({weight: '400', subsets: ['latin']});
/* const whisper = Whisper({weight: '400', subsets: ['latin']}); */
/* const bodoni_moda = Bodoni_Moda({weight: '400', subsets: ['latin']});
const beau_rivage = Beau_Rivage({weight: '400', subsets: ['latin']}); */

export { inter, poppins, robo_mono, dot, bebas, shadows_into_light, righteous, /* bodoni_moda, beau_rivage, whisper, */ }
