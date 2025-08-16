# Setup Preline UI dengan Next.js

## ✅ Setup yang Sudah Selesai

### 1. Instalasi Package

- ✅ `preline` package sudah diinstall

### 2. Konfigurasi Tailwind CSS

- ✅ File `tailwind.config.js` dibuat dengan plugin Preline
- ✅ Content path untuk Preline sudah ditambahkan

### 3. Import CSS

- ✅ CSS Preline sudah diimport di `src/app/globals.css`
- ✅ Tailwind CSS sudah dikonfigurasi

### 4. JavaScript Initialization

- ✅ Komponen `PrelineScript` dibuat untuk inisialisasi Preline UI
- ✅ Script sudah ditambahkan ke `layout.tsx`
- ✅ Auto-initialization pada route changes sudah dihandle

### 5. Demo Page

- ✅ Halaman contoh dengan berbagai komponen Preline UI sudah dibuat
- ✅ Termasuk: Tabs, Cards, Forms, Alerts, Buttons

## 🚀 Cara Menjalankan

```bash
npm run dev
```

Buka browser dan akses `http://localhost:4000` untuk melihat demo.

## 📖 Cara Menggunakan Komponen Preline UI

### 1. Tab Navigation

```jsx
<nav className="flex space-x-1 border border-gray-200 rounded-lg p-1 bg-gray-50">
  <button
    type="button"
    className="hs-tab-active:bg-white hs-tab-active:shadow-sm hs-tab-active:text-gray-700 py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none active"
    id="tab-item-1"
    data-hs-tab="#tab-content-1"
    aria-controls="tab-content-1"
    role="tab"
  >
    Tab 1
  </button>
</nav>

<div id="tab-content-1" role="tabpanel" aria-labelledby="tab-item-1">
  Content untuk Tab 1
</div>
```

### 2. Form Elements

```jsx
<input
  type="text"
  className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
  placeholder="Masukkan teks"
/>
```

### 3. Buttons

```jsx
<button
  type="button"
  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
>
  Button Text
</button>
```

### 4. Cards

```jsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm">
  <div className="p-6">
    <h5 className="text-lg font-medium text-gray-900 mb-2">Card Title</h5>
    <p className="text-gray-600 text-sm">Card content</p>
  </div>
</div>
```

### 5. Alerts

```jsx
<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
  <div className="flex">
    <div className="flex-shrink-0">{/* Icon SVG */}</div>
    <div className="ml-3">
      <h3 className="text-sm text-blue-800 font-medium">Alert Title</h3>
      <p className="text-sm text-blue-700 mt-1">Alert message</p>
    </div>
  </div>
</div>
```

## 🔧 Troubleshooting

### Jika komponen tidak berfungsi:

1. Pastikan `PrelineScript` sudah diimport dan ditambahkan di layout
2. Cek browser console untuk error JavaScript
3. Pastikan semua class CSS Preline sudah benar

### Jika styling tidak muncul:

1. Pastikan import CSS Preline di globals.css
2. Cek apakah Tailwind CSS sudah berjalan
3. Rebuild aplikasi: `npm run build && npm run dev`

## 📚 Resources

- [Preline UI Documentation](https://preline.co/docs/index.html)
- [Preline UI Components](https://preline.co/docs/components.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎉 Fitur yang Tersedia

Dengan setup ini, Anda dapat menggunakan semua komponen Preline UI:

- Navigation & Tabs
- Forms & Inputs
- Buttons & Links
- Cards & Panels
- Modals & Overlays
- Alerts & Notifications
- Data Tables
- Charts (ApexCharts)
- Calendar
- File Upload (Dropzone)
- Sliders (noUiSlider)
- Dan banyak lagi!

## 🤝 Tips Penggunaan

1. **Gunakan class `hs-*`** untuk komponen interaktif Preline
2. **Pastikan ID dan data-attributes** sesuai untuk komponen yang membutuhkan JavaScript
3. **Test komponen** setelah ditambahkan untuk memastikan functionality
4. **Gunakan dokumentasi Preline** sebagai referensi untuk class dan struktur HTML yang benar

Happy coding! 🎉
