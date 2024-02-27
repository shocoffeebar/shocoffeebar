import Image from 'next/image';

interface ImageCardProps {
  image: string;
}

export const ImageCard = ({ image }: ImageCardProps) => {
  return (
    <div className="relative overflow-hidden h-[500px] min-w-[500px] flex justify-center items-center ">
      <Image src={image} alt="image" fill style={{ objectFit: 'cover' }} />
    </div>
  );
};
