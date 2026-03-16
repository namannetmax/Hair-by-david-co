import React from 'react';

interface ImageSectionProps {
  src: string;
  alt?: string;
  className?: string;
  overlayClassName?: string;
  showFades?: boolean;
  saturate?: number;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt = 'Salon Image',
  className = '',
  overlayClassName = '',
  showFades = true,
  saturate = 1,
}) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: saturate !== 1 ? `saturate(${saturate})` : undefined }}
        referrerPolicy="no-referrer"
      />
      
      {overlayClassName && <div className={`absolute inset-0 z-[1] ${overlayClassName}`} />}
      
      {showFades && (
        <>
          <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent z-[2]" />
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[2]" />
        </>
      )}
    </div>
  );
};
