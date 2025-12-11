import React, { useState } from "react";
import { api } from "../api";

interface NewsListProps {
  items: any[];
  onDeleted: () => void;
}

export default function NewsList({ items, onDeleted }: NewsListProps) {
  const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

  if (items.length === 0) {
    return <p className="text-gray-500 text-center mt-10 text-lg">No news available yet.</p>;
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {items.map((n) => (
          <div key={n.id} className="border border-gray-200 rounded-xl p-5 shadow hover:shadow-lg transition bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 truncate">{n.title}</h3>
              <div className="mb-3 text-gray-700 line-clamp-3" dangerouslySetInnerHTML={{ __html: n.content }} />
            </div>

            <div className="flex justify-between items-center mt-3">
              {n.content.length > 200 && (
                <button
                  className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition font-semibold"
                  onClick={() => setModalContent({ title: n.title, content: n.content })}
                >
                  Read More
                </button>
              )}
              <button
                className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition font-semibold"
                onClick={() => api.delete(n.id).then(onDeleted)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Content Modal */}
      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fade-in">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl"
              onClick={() => setModalContent(null)}
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{modalContent.title}</h2>
            <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: modalContent.content }} />
          </div>
        </div>
      )}
    </>
  );
}
