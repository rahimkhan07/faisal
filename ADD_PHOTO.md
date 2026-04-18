# Adding Your Profile Photo

1. Save your photo as `profile.jpg`
2. Place it in: `portfolio/faisal/src/assets/profile.jpg`
3. Open `src/components/Hero.jsx`
4. Change line 3 from:
   ```js
   const profileImg = null
   ```
   To:
   ```js
   import profileImg from '../assets/profile.jpg'
   ```
5. Save — the photo will appear instantly in the hero section.
