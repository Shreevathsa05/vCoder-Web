import React from 'react';
import TextPressure from './TextPressure';
import MeetDevelopers from './MeetDevelopers';
import TiltedCards from './Tilted';


function Home() {
  return (
    <div className="min-h-[95vh]" style={{ backgroundImage: 'url(/image.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
      }}>
      {/* Landing Section */}
      <div className="h-auto flex items-center justify-center bg-center bg-cover pt-[7vh]">
        <TextPressure
          text="Vibe-coding only!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#0000000"
          strokeColor="#ff0000"
          minFontSize={12}
        />
      </div>
      
      {/* Tilted Cards */}
      <div className="flex justify-center items-center">
        <div className="mt-16 border-6 border-black rounded-2xl p-8">
        <TiltedCards/>
      </div>
      </div>


      {/* space */}
      

{/* Meet devs */}
<div className="flex justify-center items-center">
<MeetDevelopers/>
</div>
    </div>
  );
}

export default Home;
