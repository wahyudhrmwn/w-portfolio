"use client";

import { useEffect } from "react";

interface BookCallDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallDrawer({
  isOpen,
  onClose,
}: BookCallDrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = () => {
    alert("Terima kasih! Saya akan segera menghubungi Anda.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Book a Call</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-6">
                  Mari diskusikan proyek Anda! Isi form di bawah untuk
                  menjadwalkan konsultasi gratis.
                </p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="08xxxxxxxxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Perusahaan
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Nama perusahaan Anda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Jenis Proyek *
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Pilih jenis proyek</option>
                    <option value="website">Website Development</option>
                    <option value="webapp">Web Application</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Pilih range budget</option>
                    <option value="under-10m">Di bawah Rp 10 juta</option>
                    <option value="10-25m">Rp 10 - 25 juta</option>
                    <option value="25-50m">Rp 25 - 50 juta</option>
                    <option value="50m-plus">Di atas Rp 50 juta</option>
                    <option value="discuss">Diskusi lebih lanjut</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Timeline Proyek
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="">Pilih timeline</option>
                    <option value="asap">Sesegera mungkin</option>
                    <option value="1-month">1 bulan</option>
                    <option value="2-3months">2-3 bulan</option>
                    <option value="3months-plus">Lebih dari 3 bulan</option>
                    <option value="flexible">Fleksibel</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Deskripsi Proyek *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Ceritakan tentang proyek Anda, fitur yang dibutuhkan, dll..."
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="preferred-time"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Waktu Konsultasi Disukai
                  </label>
                  <input
                    type="text"
                    id="preferred-time"
                    name="preferred-time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Contoh: Senin-Jumat, 09:00-17:00"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                onClick={handleSubmit}
              >
                Kirim Pesan
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Saya akan merespon dalam 24 jam
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
