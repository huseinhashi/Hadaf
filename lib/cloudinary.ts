/**
 * Cloudinary URL helper functions
 * For CDN usage only - no upload functionality
 */

export interface CloudinaryConfig {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
}

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'crop';
  gravity?: 'auto' | 'face' | 'center';
  effect?: string;
}

/**
 * Get Cloudinary configuration from environment variables
 */
export function getCloudinaryConfig(): CloudinaryConfig {
  return {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '',
    apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET || '',
  };
}

/**
 * Generate a Cloudinary URL for an image
 * @param publicId - The public ID of the image in Cloudinary
 * @param options - Transformation options
 * @returns The Cloudinary URL
 */
export function getCloudinaryImageUrl(
  publicId: string,
  options: CloudinaryTransformOptions = {}
): string {
  const config = getCloudinaryConfig();
  if (!config.cloudName) {
    console.warn('Cloudinary cloud name not configured');
    return '';
  }
  const baseUrl = `https://res.cloudinary.com/${config.cloudName}/image/upload`;
  // Build transformation string
  const transformations: string[] = [];
  
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.quality) transformations.push(`q_${options.quality}`);
  if (options.format) transformations.push(`f_${options.format}`);
  if (options.crop) transformations.push(`c_${options.crop}`);
  if (options.gravity) transformations.push(`g_${options.gravity}`);
  if (options.effect) transformations.push(`e_${options.effect}`);
  
  const transformString = transformations.length > 0 ? `${transformations.join(',')}/` : '';
  
  return `${baseUrl}/${transformString}${publicId}`;
}

/**
 * Generate a Cloudinary URL for a video
 * @param publicId - The public ID of the video in Cloudinary
 * @param options - Transformation options
 * @returns The Cloudinary URL
 */
export function getCloudinaryVideoUrl(
  publicId: string,
  options: CloudinaryTransformOptions = {}
): string {
  const config = getCloudinaryConfig();
  
  if (!config.cloudName) {
    console.warn('Cloudinary cloud name not configured');
    return '';
  }

  const baseUrl = `https://res.cloudinary.com/${config.cloudName}/video/upload`;
  
  // Build transformation string
  const transformations: string[] = [];
  
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.quality) transformations.push(`q_${options.quality}`);
  if (options.format) transformations.push(`f_${options.format}`);
  
  const transformString = transformations.length > 0 ? `${transformations.join(',')}/` : '';
  
  return `${baseUrl}/${transformString}${publicId}`;
}

/**
 * Generate a Cloudinary URL for raw files (like PDFs, etc.)
 * @param publicId - The public ID of the file in Cloudinary
 * @returns The Cloudinary URL
 */
export function getCloudinaryRawUrl(publicId: string): string {
  const config = getCloudinaryConfig();
  
  if (!config.cloudName) {
    console.warn('Cloudinary cloud name not configured');
    return '';
  }

  return `https://res.cloudinary.com/${config.cloudName}/raw/upload/${publicId}`;
}

/**
 * Predefined image transformations for common use cases
 */
export const cloudinaryPresets = {
  thumbnail: { width: 150, height: 150, crop: 'fill', quality: 'auto' as const },
  medium: { width: 500, height: 500, crop: 'fit', quality: 'auto' as const },
  large: { width: 1200, height: 800, crop: 'fit', quality: 'auto' as const },
  hero: { width: 1920, height: 1080, crop: 'fill', quality: 'auto' as const },
  avatar: { width: 100, height: 100, crop: 'fill', gravity: 'face' as const },
} as const;
