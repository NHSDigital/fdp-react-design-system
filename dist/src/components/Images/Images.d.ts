import React from 'react';
import './Images.scss';
export interface ImagesProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The source location of the image (required)
     */
    src: string;
    /**
     * The alt text of the image (required for accessibility)
     */
    alt: string;
    /**
     * Optional caption text for the image
     */
    caption?: string;
    /**
     * A list of screen sizes for the browser to load the correct image from the srcset images
     */
    sizes?: string;
    /**
     * A list of image source URLs and their respective sizes. Separate each image with a comma.
     */
    srcset?: string;
    /**
     * Additional CSS classes to apply to the image container
     */
    className?: string;
}
/**
 * Images component for displaying responsive images with optional captions
 *
 * Use this component to display images in a consistent way across the NHS service.
 * The component provides:
 * - Responsive image sizing (2/3 width on desktop, full width on mobile)
 * - Optional captions for describing image content
 * - Support for responsive images with srcset
 * - Consistent NHS styling with borders and spacing
 *
 * @param src - Image source URL (required)
 * @param alt - Alternative text for accessibility (required)
 * @param caption - Optional caption text
 * @param sizes - Optional responsive sizes attribute
 * @param srcset - Optional responsive image sources
 * @param className - Additional CSS classes
 * @param props - Additional HTML attributes
 */
export declare const Images: React.FC<ImagesProps>;
export default Images;
