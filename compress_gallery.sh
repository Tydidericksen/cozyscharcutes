#!/bin/bash

# Gallery Image Compression Script
echo "🖼️  Starting gallery image compression..."

# Source and destination directories
SOURCE_DIR="src/assets/gallery"
DEST_DIR="src/assets/gallery_compressed"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Counter for processed images
count=0
total=$(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" \) | wc -l)

echo "📊 Found $total images to compress..."

# Process each image
find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.JPG" -o -iname "*.JPEG" \) | while read -r file; do
    count=$((count + 1))
    filename=$(basename "$file")
    name="${filename%.*}"
    extension="${filename##*.}"
    
    # Convert to lowercase extension
    extension=$(echo "$extension" | tr '[:upper:]' '[:lower:]')
    
    echo "🔄 Processing ($count/$total): $filename"
    
    # Compress the image
    # -s format: Convert to JPEG for better compression
    # -s formatOptions: Set quality to 85% (good balance of quality/size)
    # -Z: Resize if larger than 1200px (maintains aspect ratio)
    sips -s format jpeg -s formatOptions 85 -Z 1200 "$file" --out "$DEST_DIR/${name}.jpg" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        # Get file sizes for comparison
        original_size=$(stat -f%z "$file" 2>/dev/null || echo "0")
        compressed_size=$(stat -f%z "$DEST_DIR/${name}.jpg" 2>/dev/null || echo "0")
        
        if [ "$compressed_size" -gt 0 ]; then
            reduction=$(( (original_size - compressed_size) * 100 / original_size ))
            echo "✅ Compressed: $filename (${reduction}% smaller)"
        else
            echo "❌ Failed to compress: $filename"
        fi
    else
        echo "❌ Failed to process: $filename"
    fi
done

echo ""
echo "🎉 Compression complete!"
echo "📁 Original folder: $SOURCE_DIR"
echo "📁 Compressed folder: $DEST_DIR"

# Calculate total size reduction
original_total=$(du -sh "$SOURCE_DIR" | cut -f1)
compressed_total=$(du -sh "$DEST_DIR" | cut -f1)

echo "📊 Original size: $original_total"
echo "📊 Compressed size: $compressed_total"
echo ""
echo "💡 To use the compressed images:"
echo "   1. Backup original: mv $SOURCE_DIR ${SOURCE_DIR}_backup"
echo "   2. Replace with compressed: mv $DEST_DIR $SOURCE_DIR"
