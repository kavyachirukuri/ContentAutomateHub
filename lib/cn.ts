type ClassValue = string | number | boolean | undefined | null | { [key: string]: any };

/**
 * Simple utility to merge class names
 * For production, consider installing clsx and tailwind-merge for better handling
 */
export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  
  for (const input of inputs) {
    if (!input) continue;
    
    if (typeof input === "string") {
      classes.push(input);
    } else if (typeof input === "number") {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) classes.push(inner);
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) {
          classes.push(key);
        }
      }
    }
  }
  
  // Remove duplicates and empty strings, then join
  return classes
    .filter((cls) => cls && cls.trim())
    .filter((cls, index, arr) => arr.indexOf(cls) === index)
    .join(" ");
}
