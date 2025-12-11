import React, { useState, useEffect } from "react";
import NewsForm from "./components/NewsForm";
import NewsList from "./components/NewsList";
import { api } from "./api";

export default function App() {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const load = async () => {
    try {
      const items = await api.list();
      setNewsItems(items);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="w-full bg-gray-50 p-6">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800">IT News Manager</h1>
        <p className="text-gray-600 mt-1">Manage IT news for employees</p>
      </header>

      {/* Add News Button */}
      <div className="max-w-6xl mx-auto mb-6 flex justify-end">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow"
          onClick={() => setIsModalOpen(true)}
        >
          Add News
        </button>
      </div>

      {/* Add News Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fade-in">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <NewsForm
              onCreated={() => {
                load();
                setIsModalOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* News List */}
      <main className="max-w-6xl mx-auto">
        <NewsList items={newsItems} onDeleted={load} />
      </main>
    </div>
  );
}
