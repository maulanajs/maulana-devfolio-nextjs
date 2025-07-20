// Script to generate avatar placeholders for testimonials
const fs = require('fs');
const https = require('https');
const path = require('path');

const testimonialsDir = path.join(__dirname, 'public', 'images', 'testimonials');

// Ensure the directory exists
if (!fs.existsSync(testimonialsDir)) {
  fs.mkdirSync(testimonialsDir, { recursive: true });
}

// List of Indonesian names for testimonials
const testimonials = [
  { name: 'Budi-Santoso', gender: 'male', index: 1 },
  { name: 'Siti-Rahayu', gender: 'female', index: 1 },
  { name: 'Ahmad-Fauzi', gender: 'male', index: 2 },
  { name: 'Dewi-Lestari', gender: 'female', index: 2 },
  { name: 'Rudi-Wijaya', gender: 'male', index: 3 },
  { name: 'Anisa-Putri', gender: 'female', index: 3 },
  { name: 'Hendra-Gunawan', gender: 'male', index: 4 },
  { name: 'Maya-Anggraini', gender: 'female', index: 4 },
  { name: 'Doni-Prasetyo', gender: 'male', index: 5 },
  { name: 'Indah-Permata', gender: 'female', index: 5 },
  { name: 'Rizal-Mahendra', gender: 'male', index: 6 },
  { name: 'Lina-Susanti', gender: 'female', index: 6 },
  { name: 'Arif-Wicaksono', gender: 'male', index: 7 },
  { name: 'Ratna-Dewi', gender: 'female', index: 7 },
  { name: 'Taufik-Hidayat', gender: 'male', index: 8 }
];

// Colors that look Indonesian - red, white, and variations
const colors = [
  { background: 'DD0000', foreground: 'FFFFFF' }, // Indonesian flag red
  { background: 'FFFFFF', foreground: 'DD0000' }, // Indonesian flag white
  { background: 'BD4326', foreground: 'FFFFFF' }, // Batik reddish brown
  { background: 'F2C029', foreground: '000000' }, // Batik yellow
  { background: '1C4966', foreground: 'FFFFFF' }, // Batik blue
  { background: '006B3C', foreground: 'FFFFFF' }, // Jungle green
  { background: 'A67D3D', foreground: 'FFFFFF' }  // Batik gold/brown
];

// Generate and download avatars
testimonials.forEach((person) => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[colorIndex];
  const filename = `${person.gender === 'male' ? 'indonesian-male' : 'indonesian-female'}-${person.index}.jpg`;
  const filePath = path.join(testimonialsDir, filename);
  
  const url = `https://ui-avatars.com/api/?name=${person.name}&background=${color.background}&color=${color.foreground}&size=256&bold=true`;
  
  console.log(`Downloading ${filename} from ${url}`);
  
  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}); 