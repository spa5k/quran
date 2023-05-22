import { useEffect, useState } from 'react';

export default function DailyAyat() {
  const [ayah, setAyah] = useState('');
  const [translation, setTranslation] = useState('');
  const [ayahNum, setAyahNum] = useState('');

  useEffect(() => {
    const fetchRandomAyah = async () => {
      const response = await fetch('https://api.alquran.cloud/v1/ayah/random');
      const data = await response.json();

      const ayahText = `${data.data.text}`;
      setAyah(ayahText);

      const translationResponse = await fetch(`https://api.alquran.cloud/v1/ayah/${data.data.surah.number}:${data.data.numberInSurah}/en.asad`);
      const translationData = await translationResponse.json();
      setTranslation(translationData.data.text);

      const ayahNum = `${data.data.surah.name}, Ayah ${data.data.numberInSurah}`;
      setAyahNum(ayahNum);
    };

    fetchRandomAyah();
    const intervalId = setInterval(fetchRandomAyah, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
    
  }, []);

  return (
    <div style={{textAlign: "center", borderRadius: '20px', background: 'white', backgroundClip: 'padding-box', width: '250px', height: '210px', margin: '0 auto', marginTop: "20px", boxShadow: "0px 2px 6px 4px rgba(128, 128, 128, 0.2)"}}>
      <p><strong>Daily Ayah</strong></p>
      <p>{ayah}</p>
      <p style={{ fontSize: '10px' }}><br></br>{translation}</p>
      <p style={{ fontSize: '20px' }}><br></br>{ayahNum}</p>
    </div>
  );
}
