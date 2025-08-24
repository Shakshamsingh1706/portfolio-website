# Profile Images Directory

This directory contains images used in your portfolio.

## Current Files:
- `profile.svg` - Placeholder profile image (currently displayed)

## How to Add Your Profile Picture:

1. **Prepare Your Image:**
   - Format: JPG, PNG, or WebP
   - Size: At least 400x400 pixels (800x800 recommended)
   - Aspect ratio: Square (1:1) for best results
   - File size: Under 2MB for optimal loading

2. **Add Your Image:**
   - Place your profile photo in this directory
   - Name it `profile.jpg` (or `profile.png`)
   - The portfolio will automatically use it

3. **Update the Data File:**
   - Open `utils/data.js`
   - Change `profile: "/profile.svg"` to `profile: "/profile.jpg"`
   - Save the file

4. **Restart Your Development Server:**
   ```bash
   npm run dev
   ```

## Image Tips:
- Use a professional headshot or business photo
- Ensure good lighting and clear visibility
- Crop to focus on your face and shoulders
- Consider using a neutral or professional background

Your profile image will appear in the Hero section as a circular image with a green border.
