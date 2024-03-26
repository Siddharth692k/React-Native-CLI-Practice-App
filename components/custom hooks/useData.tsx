import React, {useState} from 'react';

const useData = () => {
  const mockFruits = [
    {
      name: 'orange',
      imageUri:
        'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'apple',
      imageUri:
        'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'jackfruit',
      imageUri:
        'https://images.unsplash.com/photo-1620685581318-91ce6f1b76ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'mango',
      imageUri:
        'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'tomato',
      imageUri:
        'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'potato',
      imageUri:
        'https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'carrot',
      imageUri:
        'https://t4.ftcdn.net/jpg/02/28/90/67/360_F_228906712_r4bb71gSmKvyDHq54JvjXAhKWpQiqWvX.jpg',
    },
  ];

  const mockData = [
    {
      title: 'New Product Release',
      description: 'Discover our latest addition to the product lineup.',
      date: '2024-02-28',
      content:
        "We are thrilled to unveil our newest product! After extensive research and development, we've created a cutting-edge solution that addresses the needs of our customers. This innovative product offers advanced features and unparalleled performance. Whether you're a professional or a hobbyist, this product is designed to enhance your experience and exceed your expectations. Get ready to elevate your game with our latest release!",
    },
    {
      title: 'Exclusive Webinar',
      description: 'Join us for an exclusive webinar session.',
      date: '2024-03-05',
      content:
        "Don't miss out on our upcoming webinar! We'll be diving deep into the latest industry trends and sharing valuable insights to help you stay ahead of the curve. Whether you're a beginner or an expert, this webinar is for you. Join us as we explore new strategies, techniques, and tools to take your skills to the next level. Register now to secure your spot and unlock the secrets to success!",
    },
    {
      title: 'Company Anniversary Celebration',
      description: 'Join us as we celebrate another year of success.',
      date: '2024-03-12',
      content:
        "It's time to celebrate! Join us as we mark another milestone in our journey. This year, we're commemorating [X] years of innovation, growth, and excellence. We owe our success to our loyal customers, dedicated team members, and supportive partners. As we look back on our achievements, we're excited for what the future holds. Come celebrate with us and toast to many more years of success!",
    },
    {
      title: 'Industry Conference',
      description: 'Network with industry leaders at our upcoming conference.',
      date: '2024-03-18',
      content:
        "Get ready for an immersive experience at our industry conference! This event brings together the brightest minds and leading experts from around the world. Join us as we explore the latest trends, technologies, and best practices shaping our industry. Whether you're looking to gain new insights, forge valuable connections, or showcase your innovations, this conference has something for everyone. Don't miss out on this unique opportunity to learn, connect, and grow!",
    },
    {
      title: 'Product Demo Day',
      description: 'Experience our products firsthand at our demo day event.',
      date: '2024-03-25',
      content:
        "Get a firsthand look at our latest products at our demo day event! This is your chance to see our products in action, ask questions, and interact with our team. Whether you're curious about our features, capabilities, or applications, our experts will be on hand to provide demonstrations and insights. Join us for a day of exploration, discovery, and inspiration. RSVP now to secure your spot!",
    },
    {
      title: 'Customer Appreciation Day',
      description: 'Celebrate our customers with special discounts and offers.',
      date: '2024-04-01',
      content:
        "As a token of our appreciation, we're dedicating a day to celebrate our customers! Join us for exclusive discounts, special offers, and giveaways as we say thank you for your continued support. We wouldn't be where we are today without you, and we're grateful for your loyalty and trust. It's our way of giving back and showing our gratitude. Don't miss out on this opportunity to save big and enjoy some extra perks!",
    },
    {
      title: 'Community Outreach Event',
      description: 'Join us as we give back to the community.',
      date: '2024-04-08',
      content:
        "Join us for a day of giving back to the community! We're teaming up with local organizations to make a positive impact in the areas where we live and work. From volunteering and clean-up initiatives to fundraising and donation drives, there are plenty of ways to get involved. Together, we can make a difference and create a brighter future for all. Join us as we come together to serve, support, and uplift those in need.",
    },
  ];

  const [cardData, setCardData] = useState([...mockData]);
  const [fruitsData, setFruitsData] = useState([...mockFruits]);

  return {cardData, fruitsData};
};

export default useData;
