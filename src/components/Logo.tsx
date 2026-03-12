import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const dimensions = {
    sm: { width: 150, height: 50 },
    md: { width: 175, height: 58 },
    lg: { width: 200, height: 67 },
    xl: { width: 200, height: 67 } // Same as lg for exact match
  };

  return (
    <Image 
      src="/logo.png" 
      alt="EMDmeet" 
      width={dimensions[size].width}
      height={dimensions[size].height}
      className="w-auto"
    />
  );
};

export default Logo;
