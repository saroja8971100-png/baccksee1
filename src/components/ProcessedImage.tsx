import { useState, useEffect } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';

interface ProcessedImageProps {
  src: string;
  alt: string;
  className?: string;
  originalImageClass?: string;
}

const ProcessedImage = ({ src, alt, className, originalImageClass }: ProcessedImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      setIsProcessing(true);
      setError(null);
      
      try {
        // Load the original image
        const originalImage = await loadImageFromUrl(src);
        
        // Remove background
        const processedBlob = await removeBackground(originalImage);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup function to revoke URL
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [src]);

  if (error) {
    // Fallback to original image with enhanced styling
    return (
      <div className={className}>
        <img 
          src={src} 
          alt={alt}
          className={`${originalImageClass} opacity-90 hover:opacity-100 transition-opacity duration-300`}
        />
      </div>
    );
  }

  if (isProcessing || !processedImageUrl) {
    // Show original image while processing
    return (
      <div className={className}>
        <div className="relative">
          <img 
            src={src} 
            alt={alt}
            className={`${originalImageClass} opacity-75`}
          />
          {isProcessing && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl">
              <div className="text-sm text-muted-foreground">Processing...</div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Show processed image with enhanced styling for transparent background
  return (
    <div className={className}>
      <div className="relative">
        {/* Subtle shadow/glow behind the subject */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-bright/5 rounded-2xl blur-sm scale-95" />
        
        {/* Main image with transparent background */}
        <img 
          src={processedImageUrl} 
          alt={alt}
          className={`relative z-10 ${originalImageClass} drop-shadow-lg hover:drop-shadow-xl transition-all duration-500`}
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1)) drop-shadow(0 0 20px rgba(255, 105, 180, 0.1))'
          }}
        />
      </div>
    </div>
  );
};

export default ProcessedImage;