# Royal Treat Hospital Website

## Current State

This is a new project with default Caffeine boilerplate. No custom features or content have been implemented yet.

## Requested Changes (Diff)

### Add

**Complete hospital website with the following sections:**

1. **Header/Navigation**
   - Royal Treat Hospital logo and branding
   - Navigation menu: Home, About Us, Services, Doctors, Facilities, Emergency, Contact
   - Prominent "Call Now" CTA button with phone number

2. **Hero Section**
   - Large hero image showing healthcare professionals or hospital exterior
   - Tagline: "Committed to Compassionate & Advanced Healthcare"
   - Subtitle: "24/7 Emergency & Multi-Specialty Care"
   - Two CTA buttons: "Book Appointment" and "Emergency Call"

3. **About Us Section**
   - Hospital introduction
   - Mission statement
   - Vision statement
   - Commitment to community healthcare in Assam

4. **Services Section**
   - Grid of service cards with icons
   - Services: General Medicine, Surgery, Maternity & Child Care, Emergency & Trauma Care, Diagnostics & Lab, ICU & Critical Care

5. **Facilities Section**
   - Grid showcasing hospital facilities
   - 24/7 Emergency, Modern Operation Theatres, Advanced Diagnostic Equipment, Pharmacy, Ambulance Service

6. **Why Choose Us Section**
   - Highlight key differentiators
   - Points: Experienced Medical Staff, 24/7 Availability, Affordable Treatment, Patient-Centered Care, Modern Infrastructure

7. **Testimonials Section**
   - 3-4 patient testimonial cards with placeholder reviews

8. **Contact Section**
   - Full contact information display
   - Address: North Lakhimpur, Assam – 787031, India
   - Phone: +91 88129 92999
   - Operating hours: Open 24 Hours (All days)
   - Contact form with fields: Name, Phone, Message
   - Embedded Google Maps showing hospital location

9. **Footer**
   - Quick navigation links
   - Emergency contact information
   - Social media icons
   - Copyright notice

**Backend functionality:**
- Contact form submission handler to store inquiries
- Data model for storing contact form submissions (name, phone, message, timestamp)

**Visual assets:**
- Hero image showing hospital/healthcare professionals
- Hospital logo or branding element
- Service and facility icons

### Modify

None (new project).

### Remove

- Default boilerplate content from App.tsx

## Implementation Plan

1. **Backend Development**
   - Generate Motoko backend with contact form submission API
   - Define ContactInquiry data structure (name: Text, phone: Text, message: Text, timestamp: Int)
   - Implement submitContactForm function
   - Implement getContactInquiries function for admin access

2. **Image Generation**
   - Generate hero image: Modern hospital exterior or healthcare team
   - Generate hospital logo with "Royal Treat Hospital" branding

3. **Frontend Development**
   - Create responsive layout with sticky header navigation
   - Implement all 9 sections as specified
   - Use blue and white color scheme (medical/trust theme)
   - Integrate Tailwind CSS with rounded cards, soft shadows, modern spacing
   - Wire contact form to backend API
   - Add smooth scrolling navigation
   - Implement mobile-responsive design (hamburger menu for mobile)
   - Add proper semantic HTML5 structure with meta tags
   - Use Poppins or similar modern sans-serif font

4. **Validation & Testing**
   - TypeScript type checking
   - Build validation
   - Responsive design testing

## UX Notes

- **Trust & Professionalism**: Blue color palette conveys trust, cleanliness, and medical professionalism
- **Accessibility**: 24/7 availability should be prominently featured throughout
- **Call-to-Actions**: Multiple phone contact points for emergency situations
- **Mobile-First**: Many users will access on mobile devices, especially for emergency information
- **Local Context**: Emphasize community healthcare commitment in Assam region
- **Clarity**: Clear service categorization helps patients quickly find relevant departments
- **Credibility**: Testimonials and "Why Choose Us" build trust with prospective patients
- **Emergency Access**: Emergency contact information should be easily accessible from any section
- **Form Simplicity**: Contact form kept minimal (3 fields) to reduce friction
