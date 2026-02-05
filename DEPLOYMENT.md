# Deployment Guide for titanclean.in

## Pre-Deployment Checklist

### 1. Domain Configuration

- [ ] Point titanclean.in DNS to your hosting provider
- [ ] Configure SSL certificate (Let's Encrypt recommended)
- [ ] Set up redirects if needed (www to non-www or vice versa)

### 2. Environment Variables

Create a `.env.production` file with:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://titanclean.in
```

### 3. Build Configuration

The site is configured for production builds:

```bash
bun run build
```

### 4. Deployment Options

#### Option A: Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add custom domain: `titanclean.in`
3. Vercel will automatically handle SSL and DNS

#### Option B: Self-Hosted

1. Build the application: `bun run build`
2. Start production server: `bun run start`
3. Use a process manager like PM2
4. Configure reverse proxy (Nginx/Apache)

#### Option C: Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN npm install -g bun && bun install
COPY . .
RUN bun run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

### 5. Post-Deployment

- [ ] Test all navigation links
- [ ] Verify SSL certificate
- [ ] Test mobile responsiveness
- [ ] Check page load speed
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics (Google Analytics, etc.)

### 6. SEO Optimization

- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify meta tags are working
- [ ] Test Open Graph tags with Facebook Debugger
- [ ] Test Twitter Card tags

### 7. Monitoring

- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure uptime monitoring
- [ ] Set up performance monitoring

## Notes

- The site uses Next.js standalone output for optimized deployments
- All internal links use relative paths (no hardcoded domains)
- The site is fully responsive and SEO-optimized
