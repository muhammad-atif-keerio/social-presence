# Quick Start Guide - Dynamic Social Presence Website

## 🚀 Get Started in 5 Steps

### Step 1: Choose Your Data Storage (5 minutes)

**Option A: Supabase (Recommended)**
1. Go to https://supabase.com
2. Create free account
3. Create new project
4. Copy your project URL and anon key
5. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   ```

**Option B: JSON File (Simplest)**
- No setup needed! We'll use a JSON file in the project.

### Step 2: Setup Spotify (10 minutes)

1. Go to https://developer.spotify.com/dashboard
2. Click "Create App"
3. Fill in app details:
   - Name: "My Social Presence"
   - Description: "Personal website"
   - Redirect URI: `http://localhost:3000/api/spotify/callback`
4. Copy Client ID and Client Secret
5. Add to `.env.local`:
   ```env
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback
   ```

### Step 3: Setup Video Hosting (5 minutes)

**YouTube (Recommended)**
1. Upload your video to YouTube
2. Set visibility to "Unlisted"
3. Copy the video ID from URL (e.g., `dQw4w9WgXcQ`)
4. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_VIDEO_URL=dQw4w9WgXcQ
   ```

### Step 4: Install Dependencies

```bash
bun add @supabase/supabase-js next-themes framer-motion react-icons date-fns
```

### Step 5: Start Development

```bash
bun run dev
```

Visit http://localhost:3000

---

## 📝 Environment Variables Template

Create `.env.local` file in root:

```env
# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Spotify
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback

# Video
NEXT_PUBLIC_VIDEO_URL=

# Optional: Discord
DISCORD_BOT_TOKEN=
DISCORD_CLIENT_ID=

# Optional: GitHub
GITHUB_TOKEN=
GITHUB_USERNAME=

# Optional: Steam
STEAM_API_KEY=
STEAM_USER_ID=
```

---

## 🎯 Implementation Priority

1. ✅ **Basic Layout** - Profile section, social links
2. ✅ **Video Background** - YouTube embed
3. ✅ **Dynamic Status** - Text that you can update
4. ✅ **View Counter** - Track visitors
5. ✅ **Spotify Integration** - Show currently playing
6. ⏳ **Future APIs** - Discord, GitHub, Steam

---

## 💡 Pro Tips

- Start simple: Use JSON file first, upgrade to Supabase later
- Test locally before deploying
- Use YouTube for videos (unlimited, free)
- Spotify API is free but requires OAuth setup
- Vercel deployment is automatic with GitHub

---

## 🆘 Need Help?

Check `PROJECT_PLAN.md` for detailed documentation.
