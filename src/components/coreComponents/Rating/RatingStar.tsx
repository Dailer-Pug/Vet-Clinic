import { useRef } from "react";


type StarProps = {
   set?: () => number,
   onMouseOver?: () => number,
   actual?: number,
   mouseMove?: (event: React.MouseEvent<Element, MouseEvent>, actual: number,
   ) => number,
   onSteps?: number,
}

function generateRandomHash(length = 40) {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let result = '';
   const charactersLength = characters.length;

   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   return result;
}


export const Star = ({ actual, mouseMove, onSteps, onMouseOver, set }: StarProps) => {
   const svgRef = useRef<null | SVGSVGElement>(null)

   let hash = generateRandomHash()

   return (
      <div>
         <svg key={actual} ref={svgRef} onClick={() => set && set()}
            onMouseMove={(event) => mouseMove !== undefined && actual !== undefined &&
               mouseMove(event, actual)} onMouseOver={() => actual !== undefined && onMouseOver && onMouseOver()}
            width="100" height="100" viewBox="0 0 73 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <linearGradient id={hash} x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="yellow" />

                  <stop offset={`${onSteps && onSteps * 100}%`} stopColor="yellow" />

                  <stop offset={`${onSteps && onSteps * 100}.1%`} stopColor="gray" />

                  <stop offset="100%" stopColor="gray" />
               </linearGradient>

               <path id="star" d="M34.6234 2.09176C35.2663 0.347277 37.7337 0.347274 38.3766 2.09176L46.1851
               23.2784C46.465 24.0378 47.175 24.5537
               47.9838 24.5852L70.5464 25.4645C72.4042 25.5369 73.1666 27.8834 71.7062 29.034L53.9695
               43.0073C53.3337 43.5082 53.0625 44.3429
               53.2824 
               45.1218L59.4184 66.8518C59.9237 68.6411 57.9276 70.0913 56.382 69.0579L37.6117
               56.5073C36.9388 56.0574 36.0612 56.0574 35.3883
               56.5073L16.618
               69.0579C15.0724 70.0913 13.0763 68.6411 13.5816 66.8518L19.7176 45.1218C19.9375
               44.3429 19.6663 43.5082 19.0305 43.0073L1.29381
               29.034C-0.166619 27.8834 0.595824 25.5369 2.45361 25.4645L25.0162 24.5852C25.825
               24.5537 26.535 24.0378 26.8149 23.2784L34.6234
               2.09176Z" />
            </defs>

            <use href="#star" fill={`url(#${hash})`} />
         </svg>


      </div>
   )
}
