import React from "react";
import image from './home_img.png'

const ChatbotMessageAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
          <img alt="chatbot-img" src={image}/>
      </div>
    </div>
  );
};

export default ChatbotMessageAvatar;
