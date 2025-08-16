# Professional Portfolio Layout dengan Preline UI

## 🎨 Layout yang Telah Dibuat

Saya telah berhasil membuat layout portfolio profesional yang serupa dengan design yang Anda tunjukkan. Berikut adalah komponen yang telah diimplementasikan:

### 📋 Komponen Utama:

#### 1. **Header Navigation**

- ✅ Sticky header dengan backdrop blur
- ✅ Logo "preline" dengan icon bulat
- ✅ Navigation links: Home (active), Work, Reviews
- ✅ CTA button "Book a call"
- ✅ Responsive mobile menu

#### 2. **Profile Section**

- ✅ Profile photo dengan border dan shadow
- ✅ Nama: "Eliana Garcia"
- ✅ Subtitle: "Graphic Designer, Web designer/developer"
- ✅ Layout horizontal dengan gambar di kiri

#### 3. **Description Section**

- ✅ Paragraf deskripsi yang detail tentang pengalaman
- ✅ Mencakup informasi tentang 14+ tahun pengalaman
- ✅ Informasi tentang pekerjaan di Notion
- ✅ Typography yang readable dengan spacing yang baik

#### 4. **Contact Information**

- ✅ Email link dengan icon
- ✅ Twitter/X social media link
- ✅ Dribbble profile link
- ✅ Hover effects dan proper styling

#### 5. **Projects Grid**

- ✅ Grid layout responsive (1 kolom mobile, 2 tablet, 3 desktop)
- ✅ 6 project thumbnails dengan hover effects
- ✅ Aspect ratio square untuk konsistensi
- ✅ Scale animation on hover
- ✅ High-quality Unsplash images

## 🎯 Fitur Layout:

### **Design System**

- **Colors**: Clean white background dengan accent colors
- **Typography**: Modern font hierarchy
- **Spacing**: Konsisten menggunakan Tailwind spacing
- **Shadows**: Subtle shadows untuk depth

### **Responsive Design**

```css
/* Mobile First Approach */
grid-cols-1          /* 1 kolom di mobile */
md:grid-cols-2       /* 2 kolom di tablet */
lg:grid-cols-3       /* 3 kolom di desktop */
```

### **Interactive Elements**

- ✅ Hover effects pada navigation
- ✅ Button hover states
- ✅ Project image scale animations
- ✅ Link hover underlines

### **Professional Touch**

- ✅ Sticky navigation dengan backdrop blur
- ✅ Proper semantic HTML structure
- ✅ Accessibility considerations
- ✅ Clean, minimalist design

## 🚀 Teknologi yang Digunakan:

- **Next.js 15** - React framework
- **Tailwind CSS v4** - Utility-first styling
- **Preline UI** - Component library (untuk JavaScript functionality)
- **TypeScript** - Type safety

## 📱 Layout Responsiveness:

### **Mobile (< 768px)**

- Stack layout untuk profile section
- Single column grid untuk projects
- Collapsed navigation menu

### **Tablet (768px - 1024px)**

- Side-by-side profile layout
- 2-column projects grid
- Full navigation visible

### **Desktop (> 1024px)**

- Optimal spacing dan typography
- 3-column projects grid
- Full featured layout

## 🎨 Color Palette:

```css
/* Primary Colors */
Background: #ffffff (white)
Text Primary: #171717 (dark gray)
Text Secondary: #6b7280 (medium gray)
Links: #2563eb (blue)
CTA Button: #111827 (black)
```

## 📁 File Structure:

```
src/
├── app/
│   ├── page.tsx          # Main portfolio layout
│   ├── layout.tsx        # Root layout dengan PrelineScript
│   └── globals.css       # Global styles
├── components/
│   └── PrelineScript.tsx # Preline UI initialization
└── ...
```

## 💡 Customization Tips:

### **Mengganti Gambar Profile:**

```jsx
<img
  src="URL_GAMBAR_ANDA"
  alt="Profile"
  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
/>
```

### **Mengganti Project Images:**

```jsx
<img
  src="URL_PROJECT_ANDA"
  alt="Project Name"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
/>
```

### **Mengubah Contact Links:**

```jsx
<a
  href="mailto:EMAIL_ANDA@domain.com"
  className="text-blue-600 hover:underline"
>
  EMAIL_ANDA@domain.com
</a>
```

### **Menambah Project Baru:**

```jsx
<div className="group cursor-pointer">
  <div className="aspect-square bg-gradient-to-br from-COLOR-400 to-COLOR-600 rounded-lg overflow-hidden">
    <img
      src="PROJECT_IMAGE_URL"
      alt="Project Description"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>
```

## 🔧 Maintenance:

1. **Gambar Projects**: Update URLs di `src/app/page.tsx`
2. **Informasi Personal**: Edit nama, deskripsi, dan links
3. **Styling**: Customize colors dan spacing di Tailwind classes
4. **Content**: Tambah atau hapus project items sesuai kebutuhan

## 🎉 Hasil Akhir:

Layout yang telah dibuat memberikan:

- ✅ **Professional appearance** yang modern dan clean
- ✅ **Responsive design** yang sempurna di semua device
- ✅ **Fast loading** dengan optimized images
- ✅ **SEO friendly** dengan semantic HTML
- ✅ **Accessible** dengan proper ARIA labels
- ✅ **Maintainable** code structure

Layout ini siap untuk digunakan sebagai portfolio profesional dan dapat dengan mudah dikustomisasi sesuai kebutuhan Anda!

---

_Layout dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS_
