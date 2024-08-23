import "./App.css";
import Images from "./assets/components/Images";

function App() {
  const imgData = [
    {
      img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww",
      title: "waterfall",
      dec: "The waterfall cascades with a mesmerizing force, each drop shimmering as it dances through the air. Its thunderous roar and misty veil create a breathtaking spectacle of nature's raw beauty and power.",
    },
    {
      img: "https://images.unsplash.com/photo-1724198169550-ba2fde71cfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      title: "galaxy",
      dec: "The galaxy sprawls across the night sky like a cosmic tapestry, studded with countless stars and swirling nebulae. Its vast, shimmering expanse ignites a sense of wonder and infinite possibility.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
      title: "Forest",
      dec: "The forest stands as a timeless sanctuary, its towering trees whispering ancient secrets through rustling leaves. Sunlight filters through the dense canopy, casting a serene glow on the verdant, hidden world below.",
    },
    {
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Mountain",
      dec: "The mountain rises majestically against the horizon, its snow-capped peaks piercing the sky with grandeur. Cloaked in mist and mystery, it commands awe and reverence with its timeless, unyielding presence",
    },
    {
      img: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Snow",
      dec: "Snow blankets the world in a pristine, silent embrace, transforming the landscape into a glistening wonderland. Each flake, delicate and unique, adds to the serene beauty of a winter’s day.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Sea",
      dec: "The sea stretches endlessly to the horizon, its rhythmic waves crashing with a soothing, eternal cadence. Underneath the vast, open sky, its shimmering surface mirrors the boundless expanse of possibility and adventure.",
    },
  ];

  return (
    <div className="container">
      <h1>Image Gallery</h1>
      <Images data={imgData} />
    </div>
  );
}

export default App;
