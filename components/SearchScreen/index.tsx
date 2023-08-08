import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

interface PixabayImage {
  id: number;
  previewURL: string;
  tags: string;
  webformatWidth: number;
  webformatHeight: number;
}

const SearchScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState<PixabayImage[]>([]);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from submitting and triggering a page reload

    const apiKey = '1895903-ee220861b26dc3426fc747e00';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}`;

    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.hits);
      setImages(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-black"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {images.map((image) => (
          <Link key={image.id} href="/image/[id]" as={`/image/${image.id}`}>
            <Image src={image.previewURL} alt={image.tags} width={image.webformatWidth} height={image.webformatHeight} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
