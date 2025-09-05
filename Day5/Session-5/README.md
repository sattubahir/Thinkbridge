# Session 5 - CSS Polish: Transitions, Transforms, Responsive Images

## Overview

This submission demonstrates practical exercises on polishing CSS skills by implementing:

- **Transitions and transforms** for hover and focus states  
- Micro-interactions through smooth animations on buttons, icons, cards, and links  
- Responsive images using HTML `srcset` and `sizes` attributes with local image files  

---

## Deliverables

### components.css

- Contains CSS classes implementing:
  - Button background color and scale transitions on hover/focus  
  - Icon rotation transform on hover  
  - Card shadow and lift effect on hover  
  - Navigation link color and size transitions  

### index.html

- Demonstrates usage of CSS classes from `components.css`  
- Includes properly configured `<img>` tag for responsive images with:
  - Local images `photo-300.jpg` and `photo-600.jpg` in an `images` folder  
  - Correct `srcset` and `sizes` for browser to load optimized images based on viewport width  

---

## How to Test

1. Place images `photo-300.jpg` and `photo-600.jpg` inside the `images` folder.  
2. Open `index.html` in a modern web browser.  
3. Hover over buttons, icons, cards, and links to see CSS transitions and transforms in action.  
4. Resize the browser window and observe how the responsive image loads differently sized images for optimized performance.

---

## Notes

- All image paths in `index.html` use **relative paths** to ensure local file loading.  
- Transitions use common easing and duration for smooth effect.  
- Responsive images are implemented following best practices for accessibility and performance.

---

This completes the deliverable for Session 5 focused on CSS polish and responsive design fundamentals.

