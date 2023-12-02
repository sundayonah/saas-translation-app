import Link from 'next/link';
import React from 'react';
// import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { AspectRatio } from './ui/aspect-ratio';
import SvgLogo from '@logos/svgLogo.svg';
import Image from 'next/image';

const Logo = () => {
   return (
      <Link href="/" prefetch={false} className="overflow-hidden">
         <div className="flex items-center w-72 h-14">
            <AspectRatio
               ratio={16 / 9}
               className="flex items-center justify-center"
            >
               <Image
                  priority
                  src={SvgLogo}
                  alt="Logo"
                  className="dark:filter dark:invert"
               />
            </AspectRatio>
         </div>
      </Link>
   );
};

export default Logo;
