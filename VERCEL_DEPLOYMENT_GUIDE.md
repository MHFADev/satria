# Vercel Deployment Guide

## Critical Fixes Made for Vercel Compatibility

### 1. Session Storage (CRITICAL)
**Problem**: MemoryStore doesn't persist across Vercel serverless invocations
**Solution**: Replaced with database-backed sessions using PostgreSQL
- Sessions are now stored in the `session` table
- Table automatically created on first run
- Sessions persist across all requests

### 2. Cookie Security
Cookies are now properly secured:
- Development: `secure: false`
- Production: `secure: true` (HTTPS only)

### 3. File Uploads
Uploads disabled in production (Vercel's ephemeral filesystem):
- Returns 501 error in production
- Pre-upload images before deployment or use cloud storage

## Required Environment Variables

Set these in Vercel dashboard (Settings → Environment Variables):

| Variable | Required | Example |
|----------|----------|---------|
| `DATABASE_URL` | ✅ Yes | `postgresql://user:pass@host/db` |
| `SESSION_SECRET` | ✅ Recommended | `openssl rand -base64 32` |
| `DISCORD_WEBHOOK_URL` | ❌ Optional | `https://discord.com/api/webhooks/...` |
| `GOOGLE_GEMINI_API_KEY` | ❌ Optional | `AIza...` |
| `NODE_ENV` | Auto | `production` |

## Deployment Steps

### 1. Prepare Database
- Create PostgreSQL database (Neon, Supabase, or similar)
- Get DATABASE_URL connection string
- No manual migrations needed - table created automatically

### 2. Push Code to GitHub
```bash
git add .
git commit -m "Fix Vercel deployment - use database sessions"
git push origin main
```

### 3. Connect to Vercel
1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository
4. Vercel auto-detects Node.js project

### 4. Add Environment Variables
In Vercel dashboard → Project Settings → Environment Variables:
- Add `DATABASE_URL` from your PostgreSQL provider
- (Optional) Add other variables for Discord/Gemini

### 5. Deploy
Vercel automatically deploys on push:
- Build: `npm run build`
- Start: `npm start`

## Testing Checklist

After deployment:
- [ ] Visit your Vercel URL - homepage loads
- [ ] Click "Order Form" - form displays correctly
- [ ] Submit test order - succeeds without errors
- [ ] Check admin panel login - redirects properly
- [ ] Login with admin credentials - works without 401 errors
- [ ] Discord notification received (if webhook configured)
- [ ] Projects load in admin dashboard

## Troubleshooting

### "Cannot POST /api/order" (400/500)
- Verify DATABASE_URL environment variable is set
- Check database is accessible from Vercel IP
- Review Vercel function logs for database errors

### "Unauthorized" (401) after login
- Verify DATABASE_URL is set correctly
- Database session table auto-creates - check it exists
- Try logging out and back in
- Clear browser cookies and retry

### Images not displaying
- Upload endpoint disabled on Vercel
- Pre-upload project images to a CDN or cloud storage
- Update image URLs in database to CDN links

### Discord notifications failing
- Verify DISCORD_WEBHOOK_URL is correct
- Check webhook hasn't expired (7-day inactivity limit)
- Review Vercel logs for fetch errors

## Notes

- **SSL**: Vercel provides free HTTPS - no configuration needed
- **Sessions**: Automatically cleanup - no manual cleanup needed
- **Scaling**: Database connections auto-managed by Vercel
- **Monitoring**: Use Vercel Analytics and database provider's monitoring

## Contact & Support

If issues persist:
1. Check Vercel function logs: Deployments → [Recent] → Details
2. Verify DATABASE_URL with your database provider
3. Ensure NODE_ENV=production is set
4. Review application logs for specific errors
