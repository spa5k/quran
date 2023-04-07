// eslint-disable-next-line import/default
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

export const DailyAyat = () => {
  const [ayah, setAyah] = useState('');

  useEffect(() => {
    const fetchRandomAyah = async () => {
      const response = await fetch('https://api.quran.com/api/v4/ayah/random');
      const data = await response.json();
      setAyah(`${data.data.text} (${data.data.translations[0].text})`);
    };
    fetchRandomAyah();
  }, []);

  return (
    <div>
      <p>{ayah}</p>
    </div>
  );
}

// eslint-disable-next-line import/no-named-as-default-member
ReactDOM.render(<DailyAyat />, document.getElementById('root'));
