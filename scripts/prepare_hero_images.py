import os
import urllib.request
from PIL import Image, ImageEnhance

HEROES = {
    "services-hero.jpg": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&h=1080&q=85",
    "audit-hero.jpg": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&h=1080&q=85",
    "storytelling-hero.jpg": "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1920&h=1080&q=85",
    "ai-workflows-hero.jpg": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&h=1080&q=85",
    "local-seo-hero.jpg": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1920&h=1080&q=85",
    "governance-hero.jpg": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&h=1080&q=85",
    "our-work-hero.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&h=1080&q=85",
    "contact-hero.jpg": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&h=1080&q=85",
    "faq-hero.jpg": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1920&h=1080&q=85",
    "join-us-hero.jpg": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&h=1080&q=85",
    "privacy-hero.jpg": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1920&h=1080&q=85",
    "brand-hero.jpg": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1920&h=1080&q=85",
    "product-detail-hero.jpg": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=85"
}

DEST_DIRS = [
    "src/assets/images/heroes",
    "public/images/heroes"
]

for d in DEST_DIRS:
    os.makedirs(d, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

for filename, url in HEROES.items():
    print(f"Downloading and processing {filename}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        temp_path = f"/tmp/{filename}"
        with urllib.request.urlopen(req) as resp, open(temp_path, "wb") as f:
            f.write(resp.read())
        
        # Process image with Pillow
        img = Image.open(temp_path).convert("RGB")
        img = img.resize((1920, 1080), Image.Resampling.LANCZOS)
        
        # Color grade: slightly increase contrast for executive depth
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.15)
        
        # Save to both target directories with 88% JPEG quality
        for d in DEST_DIRS:
            target_path = os.path.join(d, filename)
            img.save(target_path, "JPEG", quality=88, optimize=True)
            print(f"  -> Saved {target_path}")
            
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("Hero images preparation complete!")
