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

interface ConversationContext {
  lastTopic?: string;
  awaitingResponse?: boolean;
  productInquiry?: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm HDA Assistant. How can I help you today?\n\nYou can ask me about:\n• Our products & services\n• Contact information\n• Pricing & quotes\n• Website developer info",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [context, setContext] = useState<ConversationContext>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): { response: string; newContext: ConversationContext } => {
    const message = userMessage.toLowerCase();
    let response = "";
    let newContext: ConversationContext = { ...context };

    // Handle Yes/No responses
    if (message === "yes" || message === "yeah" || message === "sure" || message === "ok" || message === "okay") {
      if (context.lastTopic === "products") {
        response = "Great! Which product would you like to know more about?\n\n1. TRUNKLINE\n2. VIPER BOOSTERS\n3. LP ASSEMBLIES\n4. PGAN\n5. PRIMACORD\n6. INNOPAK\n7. EXPLOGEL V6\n8. SUPERPOWER90\n\nJust type the name or number!";
        newContext.awaitingResponse = true;
        return { response, newContext };
      } else if (context.lastTopic === "contact") {
        response = "Perfect! Here's how to reach us:\n\n📞 WhatsApp: +255753392262\n📧 Email: imanimwaisunga@hda-company.com\n\nClick the phone number to chat with us on WhatsApp!";
        newContext = {};
        return { response, newContext };
      } else if (context.lastTopic === "developer") {
        response = "Excellent! Contact StarLabs AI:\n\n📞 WhatsApp: +255750939217\n👨‍💻 Developer: Alex Mray\n\nThey can help you with web development, AI solutions, and custom software!";
        newContext = {};
        return { response, newContext };
      }
    }

    if (message === "no" || message === "nope" || message === "not now") {
      response = "No problem! Is there anything else I can help you with?\n\nI can provide information about:\n• Products\n• Services\n• Pricing\n• Contact details";
      newContext = {};
      return { response, newContext };
    }

    // Detailed Product Information
    if (message.includes("trunkline") || message === "1") {
      response = "🔸 TRUNKLINE - Shock Tube Detonator\n\n✅ Features:\n• Shock tube with millisecond delay detonator\n• Water resistant design\n• Delay timing options: 17ms, 25ms, 42ms, 67ms\n• Reliable initiation system\n• Suitable for all weather conditions\n\n💡 Best for: Surface blasting, quarrying, and controlled demolition\n\nWould you like pricing information or to place an order?";
      newContext.lastTopic = "contact";
      newContext.productInquiry = "TRUNKLINE";
      return { response, newContext };
    }

    if (message.includes("viper") || message.includes("booster") || message === "2") {
      response = "🔸 VIPER BOOSTERS - High-Strength Explosive\n\n✅ Features:\n• Available weights: 150g, 200g, 300g, 400g\n• Cap well and cord tunnel (no distortion)\n• Velocity of detonation: min 8,000 m/s\n• Cast density: min 1.8 g/cm³\n• Water resistant (sensitive even after immersion at 100 PSI)\n• High-strength explosive charge\n\n💡 Best for: Initiation sequence in mining operations\n\nInterested in ordering? I can connect you with our sales team!";
      newContext.lastTopic = "contact";
      newContext.productInquiry = "VIPER BOOSTERS";
      return { response, newContext };
    }

    if (message.includes("lp") || message.includes("assemblies") || message === "3") {
      response = "🔸 LP ASSEMBLIES - Long Period Delay Detonators\n\n✅ Features:\n• Shock tube with high-strength delay detonator\n• Abrasion-resistant and temperature-resistant\n• 20 different delay periods with no overlap\n• J-hook connector for easy setup\n• Reliable timing accuracy\n\n💡 Best for: Large-scale blasting operations requiring precise timing\n\nWould you like technical specifications or pricing?";
      newContext.lastTopic = "contact";
      newContext.productInquiry = "LP ASSEMBLIES";
      return { response, newContext };
    }

    if (message.includes("pgan") || message === "4") {
      response = "🔸 PGAN - Porous Granular Ammonium Nitrate\n\n✅ Features:\n• Ammonium nitrate content: > 99.5%\n• Bulk density: 0.76 – 0.80 g/cm³\n• Particle size (1mm - 3mm): > 95%\n• Designed for ANFO applications\n• Compatible with heavy ANFO and emulsion\n\n💡 Best for: ANFO mixing, bulk explosive applications\n\nNeed a quote? Let me connect you with our team!";
      newContext.lastTopic = "contact";
      newContext.productInquiry = "PGAN";
      return { response, newContext };
    }

    if (message.includes("primacord") || message === "5") {
      response = "🔸 PRIMACORD - Detonating Cords\n\n✅ Features:\n• Flexible linear explosives with PETN core\n• For trunklines/downlines\n• Velocity of Detonation (VOD): 4,500 - 6,000 m/s\n• Suitable for mining, quarrying, construction\n• Weather resistant\n\n💡 Best for: Connecting multiple blast holes, surface blasting\n\nInterested in this product?";
      newContext.lastTopic = "contact";
      newContext.productInquiry = "PRIMACORD";
      return { response, newContext };
    }

    if (message.includes("innopak") || message === "6") {
      response = "🔸 INNOPAK - Water-in-Oil Emulsion Cartridge\n\n✅ Features:\n• For hard rock mining, quarrying, construction\n• Packed in tubes: 25mm to 65mm (custom sizes available)\n• VOD: 3,500 – 5,000 m/s\n• Depends on hole and rock characteristics\n• ~2-month lead time for custom sizes\n\n💡 Best for: Hard rock blasting, underground mining\n\nWant to discuss your specific requirements?";
      newContext.lastTopic = "contact";
      newContext.productInquiry = "INNOPAK";
      return { response, newContext };
    }

    if (message.includes("explogel") || message === "7") {
      response = "🔸 EXPLOGEL V6 - Watergel Cartridge\n\n✅ Features:\n• For general mining in hard rock\n• Size range: 25x270mm to 65x550mm (customizable)\n• ~2-month lead time for custom sizes\n• VOD: 3,500 – 5,000 m/s\n• Water-resistant formula\n\n💡 Best for: General mining operations, hard rock applications\n\nShall I provide pricing information?";
      newContext.lastTopic = "contact";
      newContext.productInquiry = "EXPLOGEL V6";
      return { response, newContext };
    }

    if (message.includes("superpower") || message === "8") {
      response = "🔸 SUPERPOWER90 - Mid-Range Energy Product\n\n✅ Features:\n• For mining and quarrying\n• Size range: 25x270mm to 65x550mm (customizable)\n• ~2-month lead time for custom sizes\n• VOD: 3,000 – 4,800 m/s\n• Versatile application\n\n💡 Best for: Medium-scale mining and quarrying operations\n\nWould you like to request a quote?";
      newContext.lastTopic = "contact";
      newContext.productInquiry = "SUPERPOWER90";
      return { response, newContext };
    }

    // General Products inquiry
    if (message.includes("product") || message.includes("explosive") || message.includes("what do you sell")) {
      response = "We offer a comprehensive range of mining explosive products:\n\n1. 🔸 TRUNKLINE - Shock tube detonators\n2. 🔸 VIPER BOOSTERS - High-strength charges\n3. 🔸 LP ASSEMBLIES - Long period delays\n4. 🔸 PGAN - Ammonium Nitrate\n5. 🔸 PRIMACORD - Detonating cords\n6. 🔸 INNOPAK - Emulsion cartridges\n7. 🔸 EXPLOGEL V6 - Watergel cartridges\n8. 🔸 SUPERPOWER90 - Mid-range energy\n\nWould you like detailed information about any specific product?";
      newContext.lastTopic = "products";
      newContext.awaitingResponse = true;
      return { response, newContext };
    }

    // Services
    if (message.includes("service") || message.includes("blasting") || message.includes("consultancy") || message.includes("what do you do")) {
      response = "HDA Company Limited provides:\n\n🔹 Professional Blasting Services\n🔹 Explosive Products Supply\n🔹 Technical Consultancy\n🔹 Safety Training Programs\n🔹 Equipment Supply\n🔹 24/7 Emergency Support\n🔹 Custom Blast Design\n🔹 On-site Technical Support\n\nWhich service interests you?";
      newContext.lastTopic = "services";
      return { response, newContext };
    }

    // Contact
    if (message.includes("contact") || message.includes("phone") || message.includes("email") || message.includes("address") || message.includes("location") || message.includes("reach")) {
      response = "You can reach us at:\n\n📞 Phone: +255753392262 (WhatsApp available)\n📧 Email: imanimwaisunga@hda-company.com\n📍 Address: P.O. Box 1113, Mbeya\nStreet: Maendeleo, Ward: Iyunga\nJasma Cash & Carry building\n\nWould you like to contact us via WhatsApp?";
      newContext.lastTopic = "contact";
      return { response, newContext };
    }

    // Pricing & Quotes
    if (message.includes("price") || message.includes("pricing") || message.includes("cost") || message.includes("quote") || message.includes("how much") || message.includes("rates")) {
      const productMention = context.productInquiry ? `\n\n🔸 Product of Interest: ${context.productInquiry}` : "";
      response = `💰 Get Your Custom Quote${productMention}\n\nOur pricing is competitive and tailored to your needs!\n\n📋 Pricing Factors:\n• Product type and quantity\n• Delivery location\n• Project timeline\n• Technical specifications\n• Volume discounts available\n\n📞 Contact Our Sales Team:\n+255753392262 (WhatsApp - Fast Response!)\n📧 imanimwaisunga@hda-company.com\n\n⚡ Why Choose Us:\n✅ Competitive prices\n✅ Flexible payment terms\n✅ Bulk order discounts\n✅ Free technical consultation\n\nReady to get your quote? Click the phone number above to chat on WhatsApp!`;
      newContext.lastTopic = "contact";
      return { response, newContext };
    }

    // Safety
    if (message.includes("safety") || message.includes("training") || message.includes("certificate")) {
      response = "Safety is our top priority! 🛡️\n\nWe offer:\n• Comprehensive safety training programs\n• Safety equipment supply\n• Compliance consulting\n• Safety certifications\n• On-site safety assessments\n• Emergency response training\n\nAll our products meet international safety standards.\n\nWould you like to schedule a safety training session?";
      newContext.lastTopic = "contact";
      return { response, newContext };
    }

    // About
    if (message.includes("about") || message.includes("company") || message.includes("who are you")) {
      response = "HDA Company Limited 🏢\n\nCertificate No: 143611604\n📍 Headquartered in Mbeya, Tanzania\n\nWe specialize in:\n• Importing & distributing mining explosives\n• Serving Tanzania & East Africa\n• Supporting small to large-scale miners\n\n🎯 Our Mission:\nEnhance availability of the best explosive products suitable for all weather conditions.\n\n🌟 Our Vision:\nTo be one of the best explosives companies in East Africa.\n\nWant to know more about our team or services?";
      newContext.lastTopic = "about";
      return { response, newContext };
    }

    // Location/Coverage
    if (message.includes("where") || message.includes("coverage") || message.includes("area") || message.includes("serve")) {
      response = "📍 HDA Company Limited Coverage:\n\n🏢 Headquarters: Mbeya, Tanzania\nP.O. Box 1113\nStreet: Maendeleo, Ward: Iyunga\n\n🌍 We serve:\n• All regions of Tanzania\n• East Africa region\n• Small-scale to large-scale mining operations\n\n🚚 We provide:\n• Delivery throughout the region\n• On-site technical support\n• 24/7 emergency assistance\n\nNeed delivery to your location?";
      newContext.lastTopic = "contact";
      return { response, newContext };
    }

    // Website Developer / StarLabs AI
    if (message.includes("website") || message.includes("developer") || message.includes("made this") || message.includes("built this") || message.includes("starlabs") || message.includes("star labs") || message.includes("alex") || message.includes("web design")) {
      response = "This website was professionally developed by:\n\n�‍�💻 Alex Mray\n🏢 StarLabs AI\n📞 +255750939217\n\nStarLabs AI specializes in:\n• Web Development\n• AI Solutions\n• Custom Software\n• Digital Transformation\n\nWould you like to contact them for your own project?";
      newContext.lastTopic = "developer";
      return { response, newContext };
    }

    // Thanks
    if (message.includes("thank") || message.includes("thanks") || message.includes("appreciate")) {
      response = "You're very welcome! 😊\n\nIf you have any other questions about our products or services, feel free to ask. You can also contact us directly:\n\n📞 +255753392262\n📧 imanimwaisunga@hda-company.com";
      newContext = {};
      return { response, newContext };
    }

    // Greeting
    if (message.includes("hello") || message.includes("hi") || message.includes("hey") || message.includes("good morning") || message.includes("good afternoon")) {
      response = "Hello! 👋 Welcome to HDA Company Limited.\n\nI'm here to help you with:\n• Product information\n• Services & pricing\n• Contact details\n• Technical support\n\nWhat can I help you with today?";
      newContext = {};
      return { response, newContext };
    }

    // Default response
    response = "I can help you with information about:\n\n• 🔸 Our Products (8 types of explosives)\n• 🔹 Services (blasting, consultancy, training)\n• 📞 Contact Information\n• 💰 Pricing & Quotes\n• 🛡️ Safety & Certifications\n• 🏢 Company Information\n• 💻 Website Developer (StarLabs AI)\n\nWhat would you like to know?";
    newContext = {};
    return { response, newContext };
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
      const { response, newContext } = getBotResponse(inputMessage);
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setContext(newContext);
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
                          className={`rounded-2xl p-3 ${message.sender === "user"
                            ? "bg-gradient-to-r from-yellow-500 to-red-500 text-slate-900"
                            : "bg-slate-700 text-white"
                            }`}
                        >
                          <p 
                            className="text-sm whitespace-pre-line"
                            dangerouslySetInnerHTML={{
                              __html: message.text
                                .replace(/\+255753392262/g, '<a href="https://wa.me/255753392262" target="_blank" rel="noopener noreferrer" class="underline font-bold hover:text-yellow-300 transition-colors">+255753392262</a>')
                                .replace(/\+255750939217/g, '<a href="https://wa.me/255750939217" target="_blank" rel="noopener noreferrer" class="underline font-bold hover:text-yellow-300 transition-colors">+255750939217</a>')
                                .replace(/imanimwaisunga@hda-company\.com/g, '<a href="mailto:imanimwaisunga@hda-company.com" class="underline font-bold hover:text-yellow-300 transition-colors">imanimwaisunga@hda-company.com</a>')
                            }}
                          />
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
