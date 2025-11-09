# Dynamic Social Presence Website - Complete Implementation Plan

## 🎯 Project Overview

Create a one-page dynamic website similar to guns.lol/krasnov that displays:
- Personal profile information
- Dynamic status updates
- Currently playing Spotify track
- Social media links
- Background video (customizable)
- View counter
- Future API integrations (Discord, GitHub, Steam, etc.)

---

## 🏗️ Architecture Overview

### Frontend
- **Framework**: Next.js 16 (App Router) - Already set up ✅
- **Styling**: Tailwind CSS v4 - Already configured ✅
- **TypeScript**: For type safety
- **Hosting**: Vercel (Free tier) - Perfect for Next.js

### Backend/Data Layer
- **Database**: Multiple free options (see below)
- **API Routes**: Next.js API routes for serverless functions
- **Real-time Updates**: Client-side polling or Server-Sent Events (SSE)

### External Services
- **Spotify API**: Free (requires developer account)
- **Video Hosting**: Free options (see below)
- **Other APIs**: Discord, GitHub, Steam, etc. (all free)

---

## 💾 Data Storage Solutions (All Free)

### Option 1: Supabase (Recommended) ⭐
**Why**: Easiest, most flexible, generous free tier
- **Free Tier**: 
  - 500MB database
  - 2GB file storage
  - 50,000 monthly active users
  - Real-time subscriptions
- **What to Store**:
  - Profile data (name, bio, location)
  - Current status text
  - Video URL
  - Social media links
  - View counter
  - Settings/preferences
- **Setup**: 5 minutes
- **Cost**: $0/month

### Option 2: PlanetScale (MySQL)
**Why**: Serverless MySQL, great for relational data
- **Free Tier**: 
  - 1 database
  - 1GB storage
  - 1 billion row reads/month
- **Cost**: $0/month

### Option 3: Vercel KV (Redis) + Environment Variables
**Why**: Simple key-value storage, no database needed
- **Free Tier**: 
  - 10,000 requests/day
  - 256MB storage
- **Cost**: $0/month
- **Alternative**: Use Vercel environment variables for static data

### Option 4: JSON File + GitHub (Simplest)
**Why**: No database needed, version controlled
- Store data in `data/profile.json`
- Update via GitHub or API route
- **Cost**: $0/month
- **Limitation**: No real-time updates without rebuild

**Recommendation**: Start with **Supabase** for flexibility, or **JSON file** for simplicity.

---

## 🎬 Video Hosting Solutions (All Free)

### Option 1: YouTube (Recommended) ⭐
**Why**: Unlimited storage, reliable, free
- Upload videos as **Unlisted** or **Private**
- Use YouTube embed API
- Change video by updating video ID
- **Cost**: $0/month
- **Setup**: Upload video, get video ID

### Option 2: Vimeo
**Why**: Good quality, no ads
- **Free Tier**: 500MB/week upload
- Embed videos easily
- **Cost**: $0/month

### Option 3: Cloudflare Stream
**Why**: Fast CDN, good performance
- **Free Tier**: 100,000 minutes stored
- **Cost**: $0/month (with usage limits)

### Option 4: Self-hosted on Vercel
**Why**: Full control
- Store videos in `/public/videos/`
- **Limitation**: Vercel has 100MB file size limit
- **Cost**: $0/month

**Recommendation**: Use **YouTube (Unlisted)** for unlimited storage and easy updates.

---

## 🎵 Spotify Integration (Free)

### Setup Steps:
1. **Create Spotify Developer Account**
   - Go to https://developer.spotify.com/dashboard
   - Create app
   - Get Client ID and Client Secret

2. **OAuth Flow** (For "Currently Playing")
   - User authorizes app
   - Get access token
   - Use token to fetch currently playing track
   - Refresh token automatically

3. **API Endpoints Used**:
   - `GET /v1/me/player/currently-playing` - Current track
   - `GET /v1/me` - User profile
   - `GET /v1/me/player` - Playback state

4. **Implementation**:
   - Next.js API route for OAuth callback
   - Store refresh token securely
   - Poll API every 30 seconds
   - Display track name, artist, album art

**Cost**: $0/month (Spotify API is free)

---

## 🔌 Future API Integrations (All Free)

### Discord
- **API**: Discord API (free)
- **What to Show**: 
  - Current status (online/offline)
  - Current game/activity
  - Server count
- **Setup**: Discord Bot Token

### GitHub
- **API**: GitHub REST API (free)
- **What to Show**:
  - Recent commits
  - Current repository
  - Contribution graph
  - Stars/Followers
- **Setup**: Personal Access Token

### Steam
- **API**: Steam Web API (free)
- **What to Show**:
  - Currently playing game
  - Game hours
  - Recent achievements
- **Setup**: Steam API Key

### Roblox
- **API**: Roblox API (free)
- **What to Show**:
  - Current game
  - Avatar
  - Friends count
- **Setup**: Roblox API (no auth needed for public data)

### Twitter/X
- **API**: Twitter API v2 (free tier limited)
- **What to Show**:
  - Latest tweet
  - Follower count
- **Setup**: Twitter Developer Account

---

## 📁 Project Structure

```
social_presence/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main landing page
│   ├── api/
│   │   ├── spotify/
│   │   │   ├── auth/route.ts   # Spotify OAuth
│   │   │   ├── callback/route.ts
│   │   │   └── now-playing/route.ts
│   │   ├── discord/route.ts    # Discord status
│   │   ├── github/route.ts     # GitHub activity
│   │   ├── steam/route.ts      # Steam status
│   │   ├── views/route.ts      # View counter
│   │   └── status/route.ts     # Update status
│   └── components/
│       ├── Profile.tsx         # Profile section
│       ├── Status.tsx          # Dynamic status
│       ├── SocialLinks.tsx     # Social media icons
│       ├── SpotifyWidget.tsx   # Currently playing
│       ├── VideoBackground.tsx # Background video
│       ├── ViewCounter.tsx     # View counter
│       └── ActivityFeed.tsx    # Future: Activity feed
├── lib/
│   ├── supabase.ts            # Supabase client
│   ├── spotify.ts             # Spotify API client
│   ├── discord.ts             # Discord API client
│   └── utils.ts               # Utility functions
├── data/
│   └── profile.json           # Static profile data (if not using DB)
├── public/
│   ├── videos/                # Local videos (if self-hosting)
│   └── icons/                 # Social media icons
├── types/
│   └── index.ts               # TypeScript types
└── .env.local                 # Environment variables
```

---

## 🛠️ Technology Stack (All Free)

### Core
- ✅ **Next.js 16** - React framework
- ✅ **TypeScript** - Type safety
- ✅ **Tailwind CSS** - Styling
- ✅ **React 19** - UI library

### Data & APIs
- **Supabase** - Database (free tier)
- **Spotify API** - Music integration (free)
- **Discord API** - Discord status (free)
- **GitHub API** - GitHub activity (free)
- **Steam API** - Gaming status (free)

### Hosting & Deployment
- **Vercel** - Hosting (free tier)
  - Unlimited deployments
  - Serverless functions
  - Global CDN
  - Custom domains

### Additional Libraries (Free)
- `next-themes` - Dark mode support
- `framer-motion` - Animations
- `react-icons` - Icon library
- `date-fns` - Date formatting

---

## 📋 Implementation Steps

### Phase 1: Foundation (Week 1)

#### Step 1.1: Setup Environment
- [ ] Create `.env.local` file
- [ ] Add environment variables template
- [ ] Setup Supabase project (or choose JSON file)
- [ ] Create database schema (if using Supabase)

#### Step 1.2: Basic Layout
- [ ] Create main page layout
- [ ] Add dark theme styling
- [ ] Implement responsive design
- [ ] Add profile section component
- [ ] Add social media icons component

#### Step 1.3: Static Data
- [ ] Create profile data structure
- [ ] Add name, bio, location
- [ ] Add social media links
- [ ] Style profile section

### Phase 2: Dynamic Features (Week 2)

#### Step 2.1: Video Background
- [ ] Setup video hosting (YouTube recommended)
- [ ] Create VideoBackground component
- [ ] Add video controls (play/pause)
- [ ] Make video URL dynamic (from database/env)
- [ ] Add overlay effects

#### Step 2.2: Dynamic Status
- [ ] Create status update API route
- [ ] Add status display component
- [ ] Connect to database/env
- [ ] Add update functionality (admin panel or API)

#### Step 2.3: View Counter
- [ ] Create view counter API route
- [ ] Store views in database
- [ ] Display view count
- [ ] Add increment logic

### Phase 3: Spotify Integration (Week 3)

#### Step 3.1: Spotify Setup
- [ ] Create Spotify Developer account
- [ ] Create Spotify app
- [ ] Get Client ID and Secret
- [ ] Setup OAuth redirect URLs

#### Step 3.2: Spotify API Integration
- [ ] Create OAuth flow API routes
- [ ] Implement token refresh
- [ ] Create "now playing" API route
- [ ] Create SpotifyWidget component
- [ ] Add album art display
- [ ] Add track info display

#### Step 3.3: Auto-refresh
- [ ] Setup client-side polling (every 30s)
- [ ] Handle "not playing" state
- [ ] Add loading states
- [ ] Add error handling

### Phase 4: Additional APIs (Week 4+)

#### Step 4.1: Discord Integration
- [ ] Create Discord bot (optional)
- [ ] Setup Discord API routes
- [ ] Display Discord status
- [ ] Show current activity

#### Step 4.2: GitHub Integration
- [ ] Get GitHub Personal Access Token
- [ ] Create GitHub API route
- [ ] Display recent activity
- [ ] Show contribution stats

#### Step 4.3: Steam Integration
- [ ] Get Steam API key
- [ ] Create Steam API route
- [ ] Display current game
- [ ] Show game hours

### Phase 5: Polish & Optimization (Ongoing)

#### Step 5.1: Performance
- [ ] Optimize images
- [ ] Add loading states
- [ ] Implement caching
- [ ] Add error boundaries

#### Step 5.2: UX Enhancements
- [ ] Add animations
- [ ] Improve mobile responsiveness
- [ ] Add loading skeletons
- [ ] Add error messages

#### Step 5.3: Admin Features (Optional)
- [ ] Create admin panel (password protected)
- [ ] Add status update form
- [ ] Add video URL changer
- [ ] Add settings panel

---

## 🔐 Environment Variables Needed

Create `.env.local` file:

```env
# Spotify
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/spotify/callback

# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Discord (optional)
DISCORD_BOT_TOKEN=your_discord_bot_token
DISCORD_CLIENT_ID=your_discord_client_id

# GitHub (optional)
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_username

# Steam (optional)
STEAM_API_KEY=your_steam_api_key
STEAM_USER_ID=your_steam_user_id

# Video
NEXT_PUBLIC_VIDEO_URL=your_youtube_video_id_or_url

# Admin (optional)
ADMIN_PASSWORD=your_admin_password_hash
```

---

## 💰 Cost Breakdown

| Service | Free Tier | Monthly Cost |
|---------|-----------|--------------|
| **Vercel Hosting** | Unlimited deployments, 100GB bandwidth | $0 |
| **Supabase** | 500MB DB, 2GB storage, 50K users | $0 |
| **Spotify API** | Unlimited requests | $0 |
| **Discord API** | Unlimited requests | $0 |
| **GitHub API** | 5,000 requests/hour | $0 |
| **Steam API** | Unlimited requests | $0 |
| **YouTube** | Unlimited storage | $0 |
| **Domain** | Use Vercel subdomain | $0 |
| **Total** | | **$0/month** |

---

## 🚀 Deployment Steps

### 1. Prepare for Deployment
```bash
# Install dependencies
bun install

# Build locally to test
bun run build

# Test production build
bun run start
```

### 2. Deploy to Vercel
1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### 3. Setup Custom Domain (Optional)
- Buy domain (Namecheap, Google Domains, etc.)
- Add domain in Vercel
- Update DNS records

---

## 📊 Database Schema (Supabase)

### `profiles` table
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  username TEXT UNIQUE NOT NULL,
  bio TEXT,
  location TEXT,
  avatar_url TEXT,
  status_text TEXT DEFAULT 'currently doing nothing',
  video_url TEXT,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### `social_links` table
```sql
CREATE TABLE social_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id),
  platform TEXT NOT NULL, -- 'discord', 'github', 'spotify', etc.
  url TEXT NOT NULL,
  icon TEXT, -- Icon name or URL
  display_order INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### `spotify_tokens` table
```sql
CREATE TABLE spotify_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id),
  access_token TEXT NOT NULL,
  refresh_token TEXT NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🎨 Design Specifications

### Color Scheme
- **Background**: Dark (#0a0a0a or similar)
- **Text**: Light (#ededed or white)
- **Accents**: Custom (match your brand)
- **Overlay**: Semi-transparent dark overlay on video

### Typography
- **Font**: Geist Sans (already configured)
- **Headings**: Bold, large
- **Body**: Regular, readable

### Layout
- **Centered profile card**
- **Full-screen video background**
- **Responsive design** (mobile-first)
- **Smooth animations**

---

## 🔄 Update Mechanisms

### For You (Admin):
1. **Status Updates**: 
   - Via API route: `POST /api/status`
   - Or update directly in Supabase dashboard
   - Or create simple admin panel

2. **Video Changes**:
   - Update `video_url` in database
   - Or change environment variable
   - Or use admin panel

3. **Profile Updates**:
   - Update in Supabase dashboard
   - Or via API routes

### For Viewers:
- **Automatic Updates**: 
  - Client-side polling every 30 seconds
  - Fetches latest Spotify track
  - Fetches latest status
  - Updates view counter

---

## 📱 Responsive Design

- **Mobile**: Stacked layout, smaller text
- **Tablet**: Adjusted spacing
- **Desktop**: Full layout with all features
- **Large Screens**: Centered, max-width container

---

## 🔒 Security Considerations

1. **API Keys**: Store in environment variables only
2. **Admin Routes**: Password protect or use API keys
3. **Rate Limiting**: Add to API routes
4. **CORS**: Configure properly
5. **Token Storage**: Secure storage for Spotify tokens

---

## 🧪 Testing Strategy

1. **Local Testing**: Test all features locally
2. **API Testing**: Test all API routes
3. **Responsive Testing**: Test on multiple devices
4. **Performance Testing**: Check load times
5. **Error Handling**: Test error scenarios

---

## 📈 Future Enhancements

### Phase 6: Advanced Features
- [ ] Real-time updates via WebSockets
- [ ] Activity timeline/feed
- [ ] Multiple video support (playlist)
- [ ] Custom themes
- [ ] Analytics dashboard
- [ ] Visitor location tracking
- [ ] Comments/guestbook
- [ ] Music playlist display
- [ ] Gaming stats dashboard
- [ ] Blog integration

---

## 🎯 Success Metrics

- ✅ Page loads in < 2 seconds
- ✅ All APIs respond in < 1 second
- ✅ Mobile responsive
- ✅ Works on all major browsers
- ✅ Zero cost to maintain
- ✅ Easy to update content

---

## 📚 Resources & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Spotify API Docs](https://developer.spotify.com/documentation/web-api)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Discord API Docs](https://discord.com/developers/docs)
- [GitHub API Docs](https://docs.github.com/en/rest)

---

## ✅ Next Steps

1. **Choose your data storage** (Supabase recommended)
2. **Setup Spotify Developer account**
3. **Choose video hosting** (YouTube recommended)
4. **Start with Phase 1 implementation**
5. **Deploy to Vercel when ready**

---

## 🆘 Support & Troubleshooting

### Common Issues:
1. **Spotify token expires**: Implement auto-refresh
2. **API rate limits**: Add caching
3. **Video not loading**: Check CORS settings
4. **Database connection**: Verify Supabase credentials

---

**Ready to start? Let's begin with Phase 1!** 🚀
