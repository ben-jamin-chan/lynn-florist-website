import React from 'react';
import { Clock, Heart, MapPin, Flower2, Users2, Award } from 'lucide-react';

function About() {
  const stats = [
    { icon: <Clock size={24} />, value: "5+", label: "Years of Experience" },
    { icon: <Heart size={24} />, value: "10k+", label: "Happy Customers" },
    { icon: <MapPin size={24} />, value: "3", label: "Store Locations" }
  ];

  const team = [
    {
      name: "Bui Khanh Linh (Lynn)",
      role: "Head Florist & Creative Director",
      image: "/owner.jpg",
      bio: "With over 5+ years of experience in floral design, Lynn leads our creative team with passion and innovation."
    },
    // {
    //   name: "Michael Chen",
    //   role: "Creative Director",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    //   bio: "Michael brings his artistic vision and contemporary design approach to create stunning floral installations."
    // },
    // {
    //   name: "Sarah Williams",
    //   role: "Events Specialist",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
    //   bio: "Specializing in weddings and corporate events, Sarah ensures every occasion is perfectly decorated."
    // }
  ];

  const values = [
    {
      icon: <Flower2 size={32} />,
      title: "Fresh Quality",
      description: "We source the finest flowers daily to ensure lasting beauty in every arrangement."
    },
    {
      icon: <Users2 size={32} />,
      title: "Personal Touch",
      description: "Every design is crafted with attention to detail and your specific preferences."
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "Our commitment to quality has earned us recognition in the floral industry."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">Our Story</h1>
            <p className="text-xl text-gray-600 mb-8">
              Crafting beautiful moments with nature's finest blooms since 2023
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[url('https://images.unsplash.com/photo-1558350315-8aa00e8e4590?auto=format&fit=crop&q=80')] bg-cover opacity-20"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-semibold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-16 text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-10 text-gray-800">Meet Our Team</h2>
          <div className="">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-medium mb-2 text-gray-800">{member.name}</h3>
                <p className="text-emerald-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Visit one of our stores or contact us to discuss your floral needs
          </p>
          <button className="px-8 py-3 bg-white text-emerald-700 rounded-md hover:bg-gray-100 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;