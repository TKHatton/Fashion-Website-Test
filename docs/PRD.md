# AI FASHION AWARDS LANDING PAGE - UPDATED PRD
## New Requirements: File Upload System, Video Integration, User Authentication

---

## CRITICAL NEW ADDITIONS TO SECTION 4: TECHNICAL REQUIREMENTS

### **4.11 File Upload & Storage System**

**Overview:**
Simplified bulk upload interface for 35+ images per category submission, with post-upload visual organization, validation, and cloud storage.

#### **Storage Backend: Supabase** (Selected Platform)

**Why Supabase:**
- Built-in authentication system
- Direct file storage with validation
- Database integration for tracking uploads
- Real-time progress tracking
- Automatic file organization
- Secure access controls
- Scalable for growth

**Storage Structure:**
```
/users/
  /{user_id}/
    /{category_name}/
      /runway/
        - {username}_{category}_runway_01.jpg through _20.jpg
      /accessories/
        - {username}_{category}_accessory_01.jpg through _05.jpg
      /behind_the_scenes/
        - {username}_{category}_bts_01.jpg through _05.jpg
      /editorial/
        - {username}_{category}_editorial_01.jpg through _03.jpg
      /editorial_logo/
        - {username}_{category}_editorial_logo.jpg
      /moodboard/
        - {username}_{category}_moodboard.jpg
      /videos/ (optional)
        - {username}_{category}_video_01.mp4 through _05.mp4
      /design_statement.txt
```

#### **Upload Interface Requirements:**

**Simplified Single Upload Zone Approach:**

Users upload all files at once, then organize them visually afterward.

**Step 1: Bulk Upload Interface**
- Single large drag-and-drop zone accepting all files simultaneously
- OR file selector for bulk selection (35+ images and videos)
- Bulk upload with overall progress bar for entire batch
- Real-time validation as files are selected (before upload starts)
- Display upload progress for individual files
- Cancel/retry options for failed uploads

**Step 2: Post-Upload Organization Interface**
- Display thumbnail gallery of ALL uploaded files
- Users click each thumbnail to open category assignment dropdown
- Category options in dropdown:
  - Runway Look (need 20 total)
  - Accessory Close-up (need 5 total)
  - Behind the Scenes (need 5 total)
  - Editorial/Advertising (need 3 total)
  - Editorial with She Is AI Logo (need 1 total)
  - Moodboard (need 1 total)
  - Video (optional, max 5 total)
- Drag-and-drop thumbnails to reorder within assigned categories
- Live category counter showing progress (e.g., "Runway: 15/20 assigned")
- Visual indicators showing which categories meet minimum requirements
- Clear visual distinction between categorized and uncategorized files
- Ability to reassign categories if user makes mistake
- "Add More Files" button if user needs additional uploads

**Step 3: Design Statement**
- Text area (200-300 words)
- Character counter with live validation
- Auto-save functionality every 2 minutes

**Submission Validation:**
- Cannot submit until ALL minimum requirements met:
  - 20 Runway Looks
  - 5 Accessory Close-ups
  - 5 Behind the Scenes
  - 3 Editorial/Advertising
  - 1 Editorial with Logo
  - 1 Moodboard
  - Design Statement (200-300 words)
- Visual checklist showing completion status
- Clear error messages if requirements not met
- "Submit Application" button only enabled when complete

#### **File Validation Requirements:**

**Real-time validation before upload accepted:**

**For Images:**
- Format: PNG or JPG only (reject all others)
- Minimum resolution: 1024x1024 pixels
- Maximum file size: 10MB per image
- Color space: RGB
- Display clear error messages if validation fails

**For Videos:**
- Format: MP4 or MOV only
- Maximum duration: 60 seconds (reject longer videos)
- Maximum file size: 100MB per video
- Display remaining duration/size capacity

**For Design Statement:**
- Minimum: 200 words
- Maximum: 300 words
- Character/word counter visible
- Warning when approaching limits

#### **User Experience Features:**

**Progress Tracking:**
- Overall completion percentage showing:
  - Number of files uploaded
  - Number of files categorized
  - Category requirements met (e.g., "5/7 categories complete")
- Visual checklist showing category completion status
- Real-time counter updating as files are assigned
- "Save Progress" button (explicit save option)
- Auto-save every 2 minutes
- "Resume Application" link sent via email

**Error Handling:**
- Clear, specific error messages
- Highlight which files failed validation
- Explain WHY validation failed
- Provide "Fix" button to replace failed uploads
- Don't lose other uploaded files if one fails

**Upload Progress:**
- Loading bar for each file
- Overall upload progress (e.g., "25/35 files uploaded")
- Estimated time remaining
- Cancel upload option
- Retry failed uploads individually

**Save & Return Capability:**
- Users CAN save progress and return later
- Application marked as "In Progress" in database
- Email with "Resume Application" link sent after save
- Link includes secure token to return to exact same state
- All uploaded files preserved
- Text entries preserved
- Category selection preserved

#### **File Organization Guide (Supplementary)**

**Provide downloadable PDF guide for users who want to pre-organize:**

```markdown
# Optional: Pre-Organize Your Files

If you prefer to organize files before uploading, follow this structure:

## Naming Convention:
- Runway: 01_runway.jpg through 20_runway.jpg
- Accessories: 01_accessory.jpg through 05_accessory.jpg
- Behind the Scenes: 01_bts.jpg through 05_bts.jpg
- Editorial: 01_editorial.jpg through 03_editorial.jpg
- Logo Editorial: editorial_logo.jpg
- Moodboard: moodboard.jpg
- Videos: 01_video.mp4 through 05_video.mp4

## Technical Requirements:
- Images: JPG or PNG, minimum 1024x1024px, max 10MB
- Videos: MP4 or MOV, max 60 seconds, max 100MB
- All files must meet technical specs or upload will fail

Note: Our upload system will automatically rename your files for organization. 
You don't need to follow this naming convention, but it may help you stay organized.
```

---

### **4.12 User Authentication & Account Recovery**

**Overview:**
Self-service authentication system so users can save progress, return to applications, and recover access WITHOUT requiring customer service intervention.

#### **Authentication Requirements:**

**Account Creation (During First Visit):**
- Email address (primary identifier)
- Password (minimum 8 characters, must include letter + number)
- Confirm password
- Optional: Name (for personalization)
- Age verification (must be 16+)
- Terms acceptance checkbox
- Privacy policy acceptance checkbox

**Email Verification:**
- Send verification email immediately after signup
- Must verify email before uploading files
- Resend verification option if not received
- Clear instructions in verification email

**Login System:**
- Email + password login
- "Remember me" option (secure session)
- Clear error messages for wrong credentials
- Account lockout after 5 failed attempts (security)
- Unlock via email link

#### **Self-Service Account Recovery:**

**CRITICAL: No customer service required for recovery**

**Forgot Password:**
- "Forgot Password?" link prominently displayed on login
- User enters email address
- System sends password reset link (expires in 24 hours)
- Link goes to secure password reset page
- User creates new password
- Confirmation email sent after reset
- Can immediately log in with new password

**Forgot Email/Username:**
- "Don't remember your email?" link
- User can search by:
  - Name used during signup
  - Payment confirmation number
  - Order number from confirmation email
- System shows masked email (j***@g***.com)
- Option to send full email to that address
- User confirms identity via email link

**Resume Application Without Login:**
- Every time user saves progress, send email with:
  - "Resume Your Application" button
  - Unique secure link (includes token)
  - Link bypasses login, goes straight to saved application
  - Link expires in 30 days
  - Can request new link if expired

**Account Status Dashboard:**
- User can log in to see:
  - Application status (In Progress, Submitted, Under Review)
  - Category completion progress (e.g., "5/7 categories complete")
  - Payment status
  - Submission confirmation
- "Continue Application" button if not submitted
- "View Submission" option after submitted

#### **Security Considerations:**

- All password reset links expire in 24 hours
- Resume application links expire in 30 days
- Email verification required before file uploads
- Secure token generation for all recovery links
- Rate limiting on password reset requests (max 3 per hour)
- HTTPS required for all authentication pages
- Password hashing (bcrypt or similar)
- Session management (secure cookies)

---

### **4.13 Promo Code & Partner Tracking System**

**Overview:**
System to track which partner platform users came from, apply discounts, and categorize purchases for reporting.

#### **Promo Code Entry:**

**Location in Application Flow:**
- Appears during category selection / pricing calculation
- BEFORE payment step
- Optional field (not required)
- Label: "Have a promo code? Enter it here"
- Placeholder: "Enter code (e.g., PARTNER2025)"

**Validation Process:**
1. User enters code
2. Click "Apply Code" button
3. System validates against database
4. If valid: Show discount applied + new total price
5. If invalid: Show error message "Invalid code. Please check and try again."
6. User can remove code and enter different one

#### **Code Types Supported:**

**Percentage Discounts:**
- Example: "SAVE20" = 20% off total
- Applied to final calculated price
- Display: "Promo code SAVE20 applied: 20% off = $X.XX savings"

**Fixed Amount Discounts:**
- Example: "FASHION10" = $10 off total
- Applied to final calculated price
- Display: "Promo code FASHION10 applied: $10.00 off"

**Category-Specific Codes:**
- Example: "REDCARPET" = only works for Red Carpet category
- Validation checks if user selected applicable category
- Error if wrong category: "This code is only valid for [Category Name]"

**Time-Limited Codes:**
- Automatic expiration checking
- Error if expired: "This code expired on [Date]"
- Admin can set start date and end date

#### **Partner Tracking Database:**

**Promo Code Database Table:**
```
promo_codes:
- code (string, unique): "PLATFORM2025"
- partner_name (string): "Fashion Education Hub"
- discount_type (percentage/fixed)
- discount_value (number): 20 or 10.00
- category_restriction (optional): "Red Carpet"
- start_date (datetime)
- end_date (datetime)
- usage_limit (optional): 100 uses max
- current_usage_count (number): track how many times used
- created_by (admin user)
- active (boolean): can be deactivated without deleting
```

**Application Database Link:**
```
applications:
- user_id
- categories_entered (array)
- promo_code_used (string, nullable)
- original_price (number)
- discount_amount (number)
- final_price_paid (number)
- payment_confirmation
- submission_timestamp
- ... (all other application data)
```

#### **Admin Dashboard for Codes:**

**Code Management Interface:**
- Create new promo codes
- Edit existing codes
- Deactivate/activate codes
- View usage statistics:
  - How many times used
  - By which users
  - Total revenue with code
  - Average discount given
- Export usage reports (CSV)
- Filter by date range, partner, category

**Partner Reporting:**
- Generate reports showing:
  - Number of uses per code
  - User emails (if sharing approved)
  - Categories entered
  - Total revenue generated
  - Conversion rate (codes entered vs. completed applications)

#### **Payment Integration Notes:**

**Pricing Calculation Flow:**
1. User selects categories (1-5 categories at $45 each)
2. System calculates base price (e.g., 2 categories = $90)
3. User enters promo code (optional)
4. System validates code
5. System applies discount if valid
6. Display final price
7. User proceeds to payment
8. **Payment processor (Stripe/PayPal) only sees final price**
9. Your database stores:
   - Original price
   - Promo code used
   - Discount amount
   - Final price paid
   - Payment confirmation

**Important:** Promo code logic happens BEFORE payment processing. Payment system just processes whatever final amount you send it. All the smart tracking happens in YOUR database.

#### **No Customer Service Setup:**

The promo code system is entirely self-service:
- Users enter codes themselves
- System validates automatically
- Errors are shown in real-time
- No manual approval needed
- No contacting support to apply codes

Partners receive tracking codes from YOU (admin creates them), then partners share codes with their audiences. Users enter codes. You track usage automatically.

---

### **4.14 Caimera Video Integration**

**Overview:**
Embed partner tutorial videos from Caimera showing AI fashion creation process (sketch to product to runway).

#### **Video Specifications:**

**Content:**
- Video 1: Sketch to Product Image (demonstrates full process)
- Video 2: Product to Runway Video (shows animation/runway presentation)
- Duration: Approximately 3 minutes maximum each
- Format: To be provided by Caimera (likely YouTube or Vimeo embeds)

**Technical Requirements:**
- Lazy loading (don't slow page load times)
- Responsive embed sizing
- Captions/subtitles enabled (accessibility)
- Playback controls visible
- Quality selector available
- Mobile-optimized playback

#### **Primary Placement: Tutorial Section**

**Location:** Add new tab or prominent section in "Learn How to Create AI Fashion"

**Tab/Section Title:** "See AI Fashion in Action"

**Layout:**
```markdown
## See AI Fashion in Action

### Headline:
Watch: From Sketch to Runway in Minutes

### Subheadline:
Our partner Caimera shows you how to transform your fashion sketches 
into professional product images and runway videos using AI.

### Video 1: Sketch to Product Image
[Embedded Video Player]
Duration: ~3 minutes

What you'll learn:
- How to prepare your initial sketch or concept
- Using AI to refine and enhance your designs
- Creating professional-quality product shots
- Tips for achieving the look you envision

[Watch Full Screen Button]

---

### Video 2: Product Image to Runway Video
[Embedded Video Player]
Duration: ~3 minutes

What you'll learn:
- Bringing static designs to life with AI
- Creating runway-style presentations
- Adding movement, models, and context
- Making your designs feel real and tangible

[Watch Full Screen Button]

---

### Partner Credit:
Tutorial videos powered by Caimera
[Caimera Logo]
[Link: "Learn more about Caimera →"]

### CTA Below Videos:
"Ready to create your own AI fashion designs?"
[Button: "Explore AI Tools" → links to Tool Selection tab]
```

#### **Secondary Placement Option: Early Page Hook**

**Location:** After Mission section, before Journey timeline

**Purpose:** Provide immediate visual engagement and proof of concept

**Layout Option A: Side-by-side**
```
Left Side: 
- Video embed (Video 1 - Sketch to Product)
- Autoplay muted preview (30-second loop of highlights)
- "Watch Full Tutorial" button overlays video

Right Side:
- Headline: "See How It Works"
- Subheadline: "From your imagination to the runway. AI makes it possible."
- Brief description (2-3 sentences)
- CTA: "Watch Full Tutorial" (opens modal with full video)
- Secondary CTA: "Start Creating" (scrolls to tool section)
```

**Layout Option B: Full-width with floating text**
```
Background: Video preview (muted, looping)
Overlay: Dark gradient 70% opacity
Text centered:
- Large headline: "This Is What AI Can Do"
- Subheadline
- "Watch Tutorial" button (opens modal)
- Small text: "Tutorial powered by Caimera"
```

#### **Video Embed Implementation:**

**Preferred: YouTube Embed**
```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID?rel=0&cc_load_policy=1" 
  title="Caimera AI Fashion Tutorial"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
  loading="lazy">
</iframe>
```

**Settings to Enable:**
- `cc_load_policy=1` (captions on by default)
- `rel=0` (don't show related videos at end)
- `loading="lazy"` (performance optimization)
- Responsive sizing (width: 100% of container, maintain aspect ratio)

**Alternative: Vimeo Embed** (if Caimera prefers)
```html
<iframe 
  src="https://player.vimeo.com/video/VIDEO_ID?title=0&byline=0&portrait=0" 
  width="640" 
  height="360" 
  frameborder="0" 
  allow="autoplay; fullscreen; picture-in-picture" 
  allowfullscreen
  loading="lazy">
</iframe>
```

#### **Partner Attribution Requirements:**

**Must Include on Every Page Where Video Appears:**

1. **Text Attribution:**
   - "Tutorial powered by Caimera"
   - OR "In partnership with Caimera"
   - OR "Video tutorial by Caimera"

2. **Logo Display:**
   - Caimera logo (get official brand assets from them)
   - Recommended size: 120-150px wide
   - Placement: Below video or in corner
   - Link logo to Caimera website

3. **Link to Caimera:**
   - "Learn more about Caimera →"
   - Links to their official site
   - Opens in new tab
   - Clear, visible link (not tiny footer text)

4. **Approved Language:**
   - **PLACEHOLDER** - Get specific copy requirements from Caimera
   - Example: "She Is AI uses Caimera's platform to demonstrate AI fashion creation workflows"
   - Must review and approve before launch

#### **Content Needed from Caimera:**

**Before Development:**
- [ ] Video embed codes or URLs (2 videos)
- [ ] Approved partner attribution language
- [ ] Logo files (SVG, PNG high-res)
- [ ] Brand color codes (if specific colors required)
- [ ] Link destination (which page on their site)
- [ ] Any specific technical requirements
- [ ] Approval to use their name/brand
- [ ] Permission for specific usage context

**Placeholder Strategy:**
- Build video sections with placeholder videos
- Get exact copy: "SHE IS AI uses Caimera's tools to [specific benefit]"
- Can update language after launch if needed
- Focus on: "showing our company uses their stuff" (as you mentioned)

---

## UPDATED SECTION 5.3: VIDEO CONTENT

### **5.3 Video Content** (REVISED)

#### **Caimera Tutorial Videos (Primary Content):**

**Video 1: Sketch to Product Image**
- Source: Caimera (partner provided)
- Duration: ~3 minutes max
- Purpose: Show complete workflow from concept to refined design
- Placement: Tutorial section + optional hero hook
- Technical: Lazy-loaded embed with captions

**Video 2: Product to Runway Video**
- Source: Caimera (partner provided)
- Duration: ~3 minutes max
- Purpose: Demonstrate animation and runway presentation creation
- Placement: Tutorial section
- Technical: Lazy-loaded embed with captions

**Attribution:**
- "Tutorial powered by Caimera" + logo + link
- Emphasize She Is AI's use of Caimera platform
- Specific copy to be finalized with Caimera partnership team

#### **Optional Supplementary Videos:**

**General AI Fashion Tutorials:**
- Curate beginner-friendly tutorials from YouTube
- Search terms: "Midjourney fashion design tutorial," "AI fashion for beginners"
- Embed with proper captions
- Secondary to Caimera videos (Caimera content is featured/primary)

**Hero Section Background Video (Optional):**
- Short (30-60 second) AI creation process loop
- Muted, autoplaying
- Sets visual tone
- Can be created using stock footage or AI-generated content

---

## UPDATED SECTION 6: USER FLOWS

### **6.1 Primary Flow: Complete Application** (REVISED WITH NEW FEATURES)

**New User Journey:**

1. **Land on page** (various sources: social, email, partner referral link)
2. **Scroll and explore** sections (education phase)
   - Watch Caimera tutorial videos in Tutorial section
   - Interact with tool selection guide
3. **Create account** (or log in if returning)
   - Email + password
   - Email verification sent
4. **Start application:**
   - Click "Start Your Application"
   - Select categories (1-5 at $45 each)
   - Enter promo code if applicable (partner tracking)
   - See calculated price
5. **Create designs offline** (using learned techniques)
6. **Return to site and log in**
7. **Upload files:**
   - Bulk upload 35+ images + optional videos in single drag-and-drop zone
   - Organize files by assigning categories via dropdown
   - Reorder files within categories by dragging
   - Write design statement
   - Real-time validation and progress tracking
   - Save progress multiple times if needed
8. **Review submission:**
   - Preview all uploaded files organized by category
   - Confirm all category requirements met
   - Review final price
9. **Payment:**
   - Proceed to Stripe/PayPal
   - Pay calculated amount (with any promo discount applied)
   - Receive payment confirmation
10. **Confirmation:**
    - Confirmation page
    - Email with submission details
    - Application marked "Submitted"
    - Thank you message + next steps

### **6.2 Returning User Flow: Save & Resume**

**User Journey for Interrupted Application:**

1. **User starts application** but can't finish in one sitting
2. **Clicks "Save Progress"** button (or auto-saved after 2 minutes)
3. **Receives email** with "Resume Your Application" link
4. **Returns days/weeks later**
5. **Clicks link in email** (bypasses login with secure token)
   - OR logs in manually through site
6. **Sees exactly where they left off:**
   - All uploaded files still there
   - All category assignments preserved
   - Text entries preserved
   - Can continue categorizing unassigned files or add more files
7. **Completes remaining category requirements**
8. **Submits and pays**

### **6.3 Account Recovery Flow: Forgot Password**

1. **User can't remember password**
2. **Clicks "Forgot Password?"** on login screen
3. **Enters email address**
4. **Receives password reset email** (within minutes)
5. **Clicks reset link** in email (expires in 24 hours)
6. **Taken to secure password reset page**
7. **Creates new password** (meets requirements)
8. **Confirmation: "Password reset successful"**
9. **Can immediately log in** with new password
10. **Back to their application** (all data preserved)

### **6.4 Account Recovery Flow: Forgot Email**

1. **User can't remember which email they used**
2. **Clicks "Don't remember your email?"** link
3. **Search options:**
   - Enter name used during signup
   - OR enter payment confirmation number
   - OR enter order number from email
4. **System finds account** and shows masked email: `j***@g***.com`
5. **User requests full email** be sent to that address
6. **Email sent** with full address + login link
7. **User confirms identity** via link in email
8. **Can now log in** with remembered email

---

## UPDATED SECTION 8: TESTING REQUIREMENTS

### **8.7 File Upload Testing** (NEW)

**Functionality Testing:**
- Upload valid files (passes validation)
- Upload invalid files (shows proper errors)
- Upload oversized files (rejected with clear message)
- Upload wrong file types (rejected with explanation)
- Bulk upload of 35+ files simultaneously
- Category assignment via dropdown for each file
- Drag-and-drop reordering within categories
- Replace/reassign individual files
- Add more files after initial upload
- Save progress mid-organization
- Resume after save (all files and categories preserved)
- Concurrent uploads (multiple files at once)
- Failed upload retry
- Network interruption recovery

**Validation Testing:**
- Image resolution checking (minimum 1024x1024)
- File size limits (images 10MB max, videos 100MB max)
- Video duration validation (60 seconds max)
- Format validation (only allowed types accepted)
- Design statement word count (200-300 words)

**Storage Testing:**
- Files organized correctly in Supabase
- File naming convention applied correctly
- User can access only their own files
- Admin can access all submissions
- Download functionality works
- Files persist after logout

### **8.8 Authentication & Recovery Testing** (NEW)

**Account Creation:**
- Valid email accepted
- Invalid email rejected
- Password requirements enforced
- Verification email sent immediately
- Verification link works
- Can't upload before verification

**Login:**
- Correct credentials work
- Wrong password shows error
- Wrong email shows error
- Account lockout after 5 failed attempts
- "Remember me" persists session
- Logout works correctly

**Password Recovery:**
- Forgot password link works
- Reset email sent
- Reset link expires after 24 hours
- Can create new password
- New password works immediately
- Old password no longer works

**Email Recovery:**
- Forgot email search works
- Masked email displayed correctly
- Full email sent to correct address
- Confirmation link works

**Save & Resume:**
- Save progress button works
- Auto-save triggers every 2 minutes
- Resume email sent correctly
- Resume link works (bypasses login)
- Link expires after 30 days
- All uploaded files preserved
- All text entries preserved

### **8.9 Promo Code Testing** (NEW)

**Code Validation:**
- Valid code accepted
- Invalid code rejected with error
- Expired code shows expiration message
- Category-specific codes validate category
- Usage limit enforced (if set)
- Discount applied correctly (percentage and fixed)
- Final price calculated correctly

**Code Tracking:**
- Code usage recorded in database
- User linked to code correctly
- Admin dashboard shows usage
- Reports generate correctly
- Multiple users can use same code
- Can't use multiple codes per application

**Payment Integration:**
- Discounted price sent to payment processor
- Original price stored in database
- Discount amount tracked
- Payment confirmation linked to application

### **8.10 Video Integration Testing** (NEW)

**Video Playback:**
- Videos load correctly
- Lazy loading works (doesn't slow page)
- Captions/subtitles available
- Quality selector works
- Fullscreen mode works
- Mobile playback optimized

**Partner Attribution:**
- Caimera logo displays correctly
- Attribution text visible
- Link to Caimera site works
- Opens in new tab
- Visible on all breakpoints

---

## UPDATED SECTION 11: BUDGET CONSIDERATIONS

### **Development Costs (REVISED ESTIMATES)**

**Additional Costs for New Features:**

**File Upload System:**
- Backend development: $2,000-$4,000
- Supabase integration: $1,000-$2,000
- Bulk upload interface with visual organization: $2,000-$3,000
- Validation logic: $1,000-$1,500
- **Subtotal: $6,000-$10,500**

**Authentication System:**
- User registration/login: $1,500-$2,500
- Password recovery: $500-$1,000
- Email recovery: $500-$1,000
- Save/resume functionality: $1,000-$2,000
- Session management: $500-$1,000
- **Subtotal: $4,000-$7,500**

**Promo Code System:**
- Code validation logic: $1,000-$1,500
- Admin dashboard for codes: $2,000-$3,000
- Tracking/reporting: $1,000-$2,000
- Database integration: $500-$1,000
- **Subtotal: $4,500-$7,500**

**Video Integration:**
- Caimera video embeds: $500-$1,000
- Responsive video players: $500-$800
- Partner attribution: $200-$500
- **Subtotal: $1,200-$2,300**

**REVISED TOTAL DEVELOPMENT COST:**
- **Original estimate:** $21,000-$45,000
- **New features:** $15,700-$27,800
- **REVISED TOTAL:** $36,700-$72,800

**Note:** Can reduce costs by:
- Using template-based approach with Webflow/WordPress
- Phasing features (launch with basic upload, add advanced features later)
- Using off-the-shelf authentication (Auth0, Firebase Auth)

### **Ongoing Costs (REVISED)**

**Supabase Storage:**
- Free tier: 1GB storage
- Pro tier: $25/month for 100GB
- Estimate: ~100MB per application × 500 applications = 50GB
- **Cost: $25/month** (Pro tier recommended)

**Email Service (for recovery emails, notifications):**
- SendGrid, Mailgun, or similar
- **Cost: $15-$50/month** depending on volume

**Total Revised Ongoing Costs:**
- **Original:** $500-$1,000/month
- **With new features:** $540-$1,075/month

---

## UPDATED SECTION 14: LAUNCH CHECKLIST

### **Pre-Launch (REVISED WITH NEW ITEMS)**

**Original Checklist Items:** (All previous items still apply)

**NEW ITEMS TO ADD:**

**File Upload System:**
- [ ] Supabase storage configured and tested
- [ ] File validation rules implemented
- [ ] Upload interface tested across browsers/devices
- [ ] Progress saving functionality tested
- [ ] Resume application links work correctly
- [ ] Admin file access dashboard functional
- [ ] File organization guide PDF created

**Authentication System:**
- [ ] User registration tested
- [ ] Email verification working
- [ ] Login system functional
- [ ] Password recovery tested (including expiration)
- [ ] Email recovery tested
- [ ] Account lockout working after 5 failures
- [ ] Session management secure

**Promo Code System:**
- [ ] Promo code database populated
- [ ] Validation logic tested
- [ ] Admin dashboard functional
- [ ] Partner tracking confirmed
- [ ] Test codes created for QA
- [ ] Reporting export working

**Video Integration:**
- [ ] Caimera video embed codes received
- [ ] Videos loading correctly (lazy loading works)
- [ ] Captions enabled
- [ ] Partner attribution visible and correct
- [ ] Caimera logo and link working
- [ ] Mobile video playback optimized
- [ ] Approved partnership language in place

**Data & Security:**
- [ ] All passwords hashed securely
- [ ] HTTPS enforced on all pages
- [ ] File access permissions correct (users see only their files)
- [ ] Admin access secured
- [ ] Database backups configured
- [ ] GDPR compliance checked (if applicable)
- [ ] Privacy policy updated with file storage language

---

## NEW SECTION 15: PARTNERSHIP REQUIREMENTS

### **15.1 Caimera Partnership**

**Content Needed Before Launch:**
1. Two video embed codes or URLs
2. Approved partnership attribution language
3. Caimera logo files (SVG and PNG, high resolution)
4. Brand guidelines (colors, usage rules)
5. Link destination for attribution
6. Permission documentation (email/contract)

**Placeholder Strategy:**
- Build video sections with placeholder content
- Can launch with generic "AI fashion tutorial" videos initially
- Swap in Caimera content when ready
- Update attribution language post-launch if needed

**Ongoing Partnership Management:**
- Track video view counts (if metrics requested)
- Provide usage reports to Caimera (optional)
- Coordinate on any joint marketing
- Update content if Caimera provides new videos

### **15.2 Promo Code Partners**

**Onboarding Process:**
1. Partner requests promo code
2. Admin creates code in dashboard with:
   - Partner name
   - Code string
   - Discount amount/type
   - Expiration date
   - Usage limit (if applicable)
3. Partner receives code and sharing guidelines
4. Partner promotes to their audience
5. Admin provides usage reports as requested

**Partner Communication:**
- Monthly usage reports (if requested)
- CSV export of applications using their code
- Conversion rate data
- Performance comparison

---

## CRITICAL NOTES FOR DEVELOPER

### **User Experience Priorities:**

1. **Self-Service Everything:**
   - Users should NEVER need to contact support for:
     - Password recovery
     - Email recovery
     - Resuming applications
     - Understanding upload requirements
   - Every error message must be actionable and clear

2. **Progressive Disclosure:**
   - Don't overwhelm users with all 35 image requirements at once
   - Allow bulk upload first, then organize afterward
   - Show clear category requirements and progress counters
   - Celebrate completion of each category
   - Make progress visible and encouraging with real-time counters

3. **Save Early, Save Often:**
   - Auto-save every 2 minutes
   - Explicit "Save Progress" button visible
   - Email sent immediately after save
   - Clear messaging: "Your work is saved. You can come back anytime."

4. **Mobile-First for Upload:**
   - Many users will create on desktop but might manage/check on mobile
   - Upload interface must work perfectly on phones
   - Large touch targets
   - Clear progress indicators
   - Mobile-optimized file pickers

5. **Performance Matters:**
   - Large file uploads can't freeze the interface
   - Background processing
   - Can continue working while files upload
   - Clear feedback on upload status

---

## VERSION HISTORY

* **v1.0** - [Original Date] - Initial PRD creation
* **v2.0** - [Current Date] - Major additions:
  - File upload system with Supabase storage
  - User authentication with self-service recovery
  - Promo code and partner tracking system
  - Caimera video integration
  - Expanded testing requirements
  - Updated budget estimates
  - Partnership management section

---

**This PRD now includes all requirements for the complete AI Fashion Awards landing page and application system, including file management, user authentication, partner tracking, and video integration. Ready for developer handoff.**