import { useRouter } from 'next/router';
import ImageDetailScreen from '@/components/ImageDetailScreen';

const ImageSingle = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <ImageDetailScreen imageId={id as string} />
    </main>
  );
};

export default ImageSingle;