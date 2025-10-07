import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm HDA Assistant. How can I help you today? You can ask me about our products, services, or contact information.",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Products
    if (message.includes("product") || message.includes("explosive") || message.includes("trunkline") || message.includes("booster") || message.includes("pgan")) {
      return "We offer a wide range of mining explosive products including:\n\n• TRUNKLINE - Shock tube with millisecond delay detonator\n• VIPER BOOSTERS - High-strength explosive charges\n• LP ASSEMBLIES - Long period delay detonators\n• PGAN - Porous Granular Ammonium Nitrate\n• PRIMACORD - Detonating cords\n• INNOPAK - Water-in-oil emulsion cartridges\n\nWould you like more details about any specific product?";
    }

    // Services
    if (message.includes("service") || message.includes("blasting") || message.includes("consultancy")) {
      return "HDA Company Limited provides:\n\n• Professional Blasting Services\n• Explosive Products Supply\n• Technical Consultancy\n• Safety Training\n• Equipment Supply\n• 24/7 Emergency Support\n\nWhich service would you like to know more about?";
    }

    // Contact
    if (message.includes("contact") || message.includes("phone") || message.includes("email") || message.includes("address") || message.includes("location")) {
      return "You can reach us at:\n\n📞 Phone: +255753392262 (WhatsApp available)\n📧 Email: imanimwaisunga@hda-company.com\n📍 Address: P.O. Box 1113, Mbeya\nStreet: Maendeleo, Ward: Iyunga\nJasma Cash & Carry building\n\nWould you like to contact us via WhatsApp?";
    }

    // Pricing
    if (message.includes("price") || message.includes("cost") || message.includes("quote")) {
      return "For pricing information and custom quotes, please contact our sales team:\n\n📞 +255753392262\n📧 imanimwaisunga@hda-company.com\n\nOur team will provide you with competitive pricing based on your specific requirements.";
    }

    // Safety
    if (message.includes("safety") || message.includes("training") || message.includes("certificate")) {
      return "Safety is our top priority! We offer:\n\n• Comprehensive safety training programs\n• Safety equipment supply\n• Compliance consulting\n• Safety certifications\n• On-site safety assessments\n\nAll our products meet international safety standards.";
    }

    // About
    if (message.includes("about") || message.includes("company") || message.includes("who are you")) {
      return "HDA Company Limited is a Tanzanian company (Certificate No. 143611604) headquartered in Mbeya. We specialize in:\n\n• Importing & distributing mining explosives\n• Serving Tanzania & East Africa\n• Supporting small to large-scale miners\n\nOur mission: Enhance availability of the best explosive products suitable for all weather conditions.";
    }

    // Location/Coverage
    if (message.includes("where") || message.includes("location") || message.includes("coverage") || message.includes("area")) {
      return "We are based in Mbeya, Tanzania, and serve clients across:\n\n• Tanzania\n• East Africa region\n• Both small-scale and large-scale mining operations\n\nWe provide delivery and support throughout the region.";
    }

    // Greeting
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! Welcome to HDA Company Limited. I'm here to help you with information about our mining explosive products and services. What would you like to know?";
    }

    // Thanks
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! If you have any other questions about our products or services, feel free to ask. You can also contact us directly at +255753392262.";
    }

    // Default response
    return "I can help you with information about:\n\n• Our Products (explosives, detonators, etc.)\n• Services (blasting, consultancy, training)\n• Contact Information\n• Pricing & Quotes\n• Safety & Certifications\n• Company Information\n\nWhat would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="h-6 w-6 text-slate-900" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 h-[600px] max-h-[80vh]"
          >
            <Card className="h-full flex flex-col bg-slate-800 border-2 border-yellow-400/30 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded-full p-2">
                    <Bot className="h-5 w-5 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">HDA Assistant</h3>
                    <p className="text-xs text-slate-800">Online • Ready to help</p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="text-slate-900 hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                      <div className={`rounded-full p-2 ${message.sender === "user" ? "bg-yellow-500" : "bg-slate-700"}`}>
                        {message.sender === "user" ? (
                          <User className="h-4 w-4 text-slate-900" />
                        ) : (
                          <Bot className="h-4 w-4 text-yellow-400" />
                        )}
                      </div>
                      <div>
                        <div
                          className={`rounded-2xl p-3 ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-yellow-500 to-red-500 text-slate-900"
                              : "bg-slate-700 text-white"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 px-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-slate-800 border-t border-slate-700">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-yellow-400"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-slate-900"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
