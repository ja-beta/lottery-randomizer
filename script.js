let dropdowns = [];
const NUM_DROPDOWNS = 12;
let classList = [
    "100 Days of Making",
    "Big LEDs",
    "Bioart as Biopolitics--Genomic",
    "Biophilic Experiences – acti",
    "CL - Visual Language",
    "Cabinets of Wonder",
    "Code Your Way",
    "Collective Play", 
    "Computational Approaches to Na",
    "Computational Letterforms and",
    "Connected Devices and Networke",
    "Designing for Messy Humans",
    "Designing for Well-Being",
    "Dynamic Web Development",
    "Electronics for Inventors",
    "Energy",
    "Exploring Concepts From Soft R",
    "Future Mapper",
    "Haptics",
    "Intangible Interaction",
    "Interactive Multi-Screen Exper",
    "Intro to Curating New Media Ar",
    "Intro to Fabrication",
    "Introduction to Quantum Techno",
    "Light and Interactivity",
    "Live Web",
    "Live!",
    "Mobile App Development Lab",
    "Modern Artifacts: Interactive",
    "Motion Capture and Live Perfor",
    "Motion Design for User Feedbac",
    "New Portraits",
    "Next-Gen Design: Crafting AI-D",
    "On Permanence: The Lifecycle o",
    "Playful Communication of Serio",
    "Playful Experiences",
    "Project Development Studio",
    "Real Time Social Spaces: Build",
    "Seeing Machines",
    "Surveillance in the Simulation",
    "Synthetic Architectures",
    "Technology, Media and Democrac",
    "The Code of Music",
    "The Nature of Code",
    "The New Arcade",
    "Through the Lens: Modalities o",
    "Topics in ITP - Data Storytell",
    "Topics in ITP: Art as Activism",
    "Topics in ITP: Bioprinting & B",
    "Topics in ITP: Creative Code O",
    "Topics in ITP: Expressive Envi",
    "Topics in ITP: Hand Held: Crea",
    "Topics in ITP: Intro to Progra",
    "Topics in ITP: Investing in Fu",
    "Topics in ITP: Kinetic Sculptu",
    "Topics in ITP: Machine Learnin",
    "Topics in ITP: Reconstructing�",
    "Topics in ITP: Restorative Spa",
    "Topics in ITP: Storytelling fo",
    "Topics in ITP: Telling Stories",
    "Topics in ITP: Whatever Genera",
    "Web Art as Site",
    "Writing Good Code"
]

function init(){
    let randomButton = document.getElementById('random-button');
    randomButton.addEventListener('click', randomizeSelections);
    
    let container = document.getElementById('dropdown-container');
    
    for(let i = 0; i < NUM_DROPDOWNS; i++) {
        let dropdown = document.createElement('select');
        dropdown.disabled = true;
        
        let defaultOption = document.createElement('option');
        defaultOption.text = `Choice ${i + 1}: Select a class`;
        dropdown.add(defaultOption);
        
        container.appendChild(dropdown);
        container.appendChild(document.createElement('br'));
        dropdowns.push(dropdown);
    }
}

function randomizeSelections() {
    let availableClasses = [...classList];
    
    dropdowns.forEach(dropdown => {
        while(dropdown.length > 1) {
            dropdown.remove(1);
        }
        
        if(availableClasses.length > 0) {
            let randomIndex = Math.floor(Math.random() * availableClasses.length);
            let option = document.createElement('option');
            option.text = availableClasses[randomIndex];
            dropdown.add(option);
            dropdown.value = availableClasses[randomIndex];
            availableClasses.splice(randomIndex, 1);
        }
    });
}

document.addEventListener('DOMContentLoaded', init);

