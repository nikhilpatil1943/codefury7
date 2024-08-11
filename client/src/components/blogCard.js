import React, { useState } from 'react';
import './blogCard.css'

// Sample images (replace with actual image URLs or import your images)
const earthquakeImage = "./eq.jpg";
const floodImage = "./flood.jpg";
const wildfireImage = "./wildfire.jpg";
const hurricaneImage = "./hur.jpg";

const BlogCards = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: "Understanding Earthquake Preparedness",
      description: "Essential steps to prepare for an earthquake, from securing your home to creating an emergency kit.",
      image: earthquakeImage,
      content: "Earthquakes can strike without warning, making preparedness crucial. Start by securing heavy objects in your home to prevent them from falling and causing injury. Create an emergency kit that includes water, food, medications, and a flashlight. Develop a family emergency plan that includes meeting points and communication strategies. During an earthquake, drop to your hands and knees, cover your head and neck, and stay indoors if you're already inside. After the quake, check for injuries, avoid using elevators, and be cautious of potential aftershocks.",
    },
    {
      title: "Managing Flood Risks Effectively",
      description: "Explore strategies for flood prevention and what to do before, during, and after a flood.",
      image: floodImage,
      content: "Flooding can cause extensive damage, so it's essential to be prepared. Assess your flood risk by knowing your area's flood history and flood zone. Implement flood prevention measures such as installing sump pumps, sealing basement walls, and creating barriers. Before a flood, move valuable items to higher ground and stay informed about weather conditions. During a flood, avoid walking or driving through water, and move to higher ground immediately. Afterward, inspect your property for damage, avoid contact with floodwater, and follow local authorities' guidance.",
    },
    {
      title: "Wildfire Prevention and Safety",
      description: "Protect your home and community from wildfires with crucial safety tips.",
      image: wildfireImage,
      content: "Wildfires can spread rapidly, so taking preventive measures is key. Create a defensible space around your home by clearing flammable vegetation and using fire-resistant building materials. Keep your lawn well-watered and maintain a safe distance between trees and structures. During wildfire season, stay informed through local news and alerts, and be ready to evacuate if necessary. If a wildfire threatens your area, follow evacuation orders promptly, and avoid using outdoor equipment that could spark a fire. After the fire, be cautious of hazardous conditions and follow recovery guidelines.",
    },
    {
      title: "Hurricane Preparedness Guide",
      description: "Prepare for a hurricane with evacuation plans and property protection tips.",
      image: hurricaneImage,
      content: "Hurricanes can cause severe damage, so early preparation is crucial. Start by assembling a disaster supply kit with essentials like water, non-perishable food, medications, and important documents. Familiarize yourself with evacuation routes and have a plan for relocating to a safe area. Secure your property by reinforcing windows, securing outdoor objects, and checking your roof and gutters. During the hurricane, stay indoors in a safe location away from windows. After the storm, be cautious of potential hazards like downed power lines and flooding, and follow local authorities' instructions for recovery and safety.",
    }
  ];
  

  const handleReadMore = (index) => {
    setSelectedBlog(blogs[index]);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return (
    <div>
      {selectedBlog ? (
        <div>
          <h2>{selectedBlog.title}</h2>
          <img src={selectedBlog.image} alt={selectedBlog.title} style={{ width: '100%', height: 'auto' }} />
          <p>{selectedBlog.content}</p>
          <button onClick={handleBack}>Back to Blog</button>
        </div>
      ) : (
        <div className="blog-cards">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '200px' }} />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <button onClick={() => handleReadMore(index)}>Read More</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogCards;
