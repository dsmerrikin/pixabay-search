import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface ImageDetail {
  user: string;
  tags: string;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
}

interface ImageDetailScreenProps {
  imageId: string;
}

const ImageDetailScreen: React.FC<ImageDetailScreenProps> = ({ imageId }) => {
  const [imageDetails, setImageDetails] = useState<ImageDetail | null>(null);

  useEffect(() => {
    const fetchImageDetails = async () => {
      const apiKey = '1895903-ee220861b26dc3426fc747e00';
      const apiUrl = `https://pixabay.com/api/?key=${apiKey}&id=${imageId}`;

      try {
        const response = await axios.get(apiUrl);
        setImageDetails(response.data.hits[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageDetails();
  }, [imageId]);

  return (
    <div>
      {imageDetails && (
        <div>
          <Image src={imageDetails.largeImageURL} alt={imageDetails.tags} width={imageDetails.imageWidth} height={imageDetails.imageHeight} />
          <p>Posted by: {imageDetails.user}</p>
          <p>Tags: {imageDetails.tags}</p>
        </div>
      )}
    </div>
  );
};

export default ImageDetailScreen;
