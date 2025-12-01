
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsPage() {
  const allNews = [
    {
      id: 1,
      title: "New AI Breakthrough Announced",
      image: "/Images/DDNews.jpg",
      date: "Nov 25, 2025",
      summary: "Researchers have unveiled a new AI model capable of real-time reasoning…",
      content: "This AI can now perform complex problem-solving in real-time, improving efficiency and reducing errors in multiple industries. Experts believe this could revolutionize healthcare, logistics, and scientific research.",
      gallery: ["/Images/news02.jpg", "/Images/news01.jpeg", "/Images/news02.jpg"],
    },
    {
      id: 2,
      title: "Tech Conference Set for December",
      image: "/Images/news03.jpg",
      date: "Nov 20, 2025",
      summary: "The annual tech conference returns this year with more speakers than ever…",
      content: "The conference will feature keynote speeches, workshops, and networking events covering AI, blockchain, and renewable energy trends. Attendees can join virtually or in-person.",
      gallery: ["/Images/news02.jpg", "/Images/news01.jpeg"],
    },
    {
      id: 3,
      title: "Global Market Sees Positive Growth",
      image: "/Images/news04.png",
      date: "Nov 18, 2025",
      summary: "Financial markets reacted positively as global indexes saw strong gains…",
      content: "Analysts attribute this growth to stable economic policies and increasing investor confidence in emerging markets. Experts recommend diversifying portfolios to maintain stability.",
      gallery: ["/Images/news01.jpeg"],
    },
    // add more items as needed
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  // Smooth scroll to modal
  const openModal = (article) => {
    setSelectedArticle(article);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const closeModal = () => setSelectedArticle(null);

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-white via-gray-100 to-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Latest News
      </h1>

      <div className="max-w-6xl mx-auto px-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {allNews.map((item) => (
          <motion.div
            key={item.id}
            layout
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition border border-gray-200"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <p className="text-sm text-gray-500">{item.date}</p>

              <h2 className="text-xl font-semibold mt-1 text-gray-800">
                {item.title}
              </h2>

              <p className="mt-2 text-gray-600">{item.summary}</p>

              <button
                onClick={() => openModal(item)}
                className="mt-4 text-indigo-600 font-medium hover:underline"
              >
                Read more →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-auto pt-20 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-3xl w-full shadow-2xl p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold text-xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{selectedArticle.date}</p>
              <p className="text-gray-700 mb-4">{selectedArticle.content}</p>

              {/* Image gallery */}
              {selectedArticle.gallery && selectedArticle.gallery.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedArticle.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Gallery ${idx}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
