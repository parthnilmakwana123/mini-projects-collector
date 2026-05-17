// let a = prompt("enter your name");
// alert(`hey, ${a} welcome to our website....`);

document.getElementById("speak-button").addEventListener("click", () => {
    const text = document.getElementById("text-input").value;
    
    if (text.trim() === "") {
      alert("Please type something to speak!");
      return;
    }
    
    // Create a new instance of the SpeechSynthesisUtterance object
    const speech = new SpeechSynthesisUtterance(text);
    
    // Set properties (optional)
    speech.lang = "en-US"; // Language
    speech.rate = 1; // Speed (1 is normal)
    speech.pitch = 3; // Pitch
    
    // Speak the text
    window.speechSynthesis.speak(speech);
  });