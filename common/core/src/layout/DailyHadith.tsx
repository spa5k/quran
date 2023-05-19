import React, { useEffect, useState } from 'react';

export default function DailyAyat() {
  const [hadith, setHadith] = useState('');

  useEffect(() => {
    const fetchRandomHadith= async () => {
      const hadithCollection = await fetch('https://api.sunnah.com/v1/hadiths/random');
      const data = await hadithCollection.json();

      const hadithText = `${hadith[]}`;
      setHadith(hadithText);
    };
    fetchRandomHadith();
    const intervalId = setInterval(fetchRandomHadith, 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
    
  }, []);

  return (
    <div style={{textAlign: "center", border: "0px solid", borderRadius: '10px', background: '#dedede', backgroundClip: 'padding-box', width: '250px', height: '210px', margin: '0 auto', marginTop: "20px", color: "black"}}>
      <p><strong>Daily Hadith</strong></p>
      <p>{hadith}</p>
    </div>
  );
}
