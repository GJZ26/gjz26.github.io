import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

export default function Router() {
  console.log(
`       ,
       \\\`-._           __
        \\\\  \`-..____,.'  \`.
         :\`.         /    \\\`.
         :  )       :      : \\
          ;'        '   ;  |  :
          )..      .. .:.\`.;  :
         /::...  .:::...   \` ;
         ; _ '    __        /:\\
         \`:o>   /\\o_>      ;:. \`.
        \`-\`.__ ;   __..--- /:.   \\
        === \\_/   ;=====_.':.     ;
         ,/'\`--'...\`--....        ;
              ;                    ;
            .'                      ;
          .'                        ;
        .'     ..     ,      .       ;
       :       ::..  /      ;::.     |
      /      \`.;::.  |       ;:..    ;
     :         |:.   :       ;:.    ;
     :         ::     ;:..   |.    ;
      :       :;      :::....|     |
      /\\     ,/ \\      ;:::::;     ;
    .:. \\:..|    :     ; '.--|     ;
   ::.  :''  \`-.,,;     ;'   ;     ;
.-'. _.'\\      / \`;      \\,__:      \\
\`---'    \`----'   ;      /    \\,.,,,/
                   \`----\`              
Thank you for showing more interest than others.
            ~ Love to you <3 ~`
)
  // No es necesario por ahora, pero posiblemente quiera incorporar una descripción por proyectos, blog, etc!
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
