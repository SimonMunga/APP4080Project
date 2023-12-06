import React from "react";


    
class WebsiteButton extends React.Component {
  openWebsite = (url) => {
    window.open(url, '_blank');
  };

  render() {
    const buttonStyle = {
      background: 'transparent', // Set background to transparent
      border: 'none',            // Remove border
      color: '#FFFS',             // Set text color to white (adjust as needed)
      cursor: 'pointer',         // Add pointer cursor on hover
      fontSize: '16px',          // Adjust font size as needed
      padding: '10px 15px',      // Adjust padding as needed
      margin: '5px',             // Add margin between buttons
      // Add more styles as needed
    };

    return (
      <div
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"    >

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here. Click on the following links below</p>
        </div>
      <div>
        {/* Button elements with inline style */}
        <button style={buttonStyle} onClick={() => this.openWebsite('https://github.com/SimonMunga/EduGuide_App')}>
          EduGuide
        </button>

        <button style={buttonStyle} onClick={() => this.openWebsite('https://github.com/SimonMunga/TravelHelper')}>
           TravelHelper
        </button>

        <button style={buttonStyle} onClick={() => this.openWebsite('https://https://github.com/SimonMunga/Lofi_music.com')}>
          LoFi music palyer
        </button>

        
      </div>
      </div>
      </div>

    );
  }
}

export default WebsiteButton;
