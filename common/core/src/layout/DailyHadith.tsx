import React, { useEffect, useState } from 'react';

export default function DailyAyat() {
  const [ayah, setAyah] = useState('');
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    const fetchRandomAyah = async () => {
      const response = await fetch('https://api.alquran.cloud/v1/ayah/random');
      const data = await response.json();

      const ayahText = `${data.data.text} (${data.data.surah.name}, Ayah ${data.data.numberInSurah})`;
      setAyah(ayahText);

      const translationResponse = await fetch(`https://api.alquran.cloud/v1/ayah/${data.data.surah.number}:${data.data.numberInSurah}/en.asad`);
      const translationData = await translationResponse.json();

      setTranslation(translationData.data.text);
      
    };
    fetchRandomAyah();
    const intervalId = setInterval(fetchRandomAyah, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };

  }, []);

  return (
    <div style={{textAlign: "center", border: "0px solid", borderRadius: '10px', background: '#dedede', backgroundClip: 'padding-box', width: '250px', height: '210px', margin: '0 auto', marginTop: "20px", color: "black"}}>
      <p><strong>Daily Hadith</strong></p>
      <p>{ayah}</p>
      <p style={{ fontSize: '10px' }}><br></br>{translation}</p>
    </div>
  );
}
